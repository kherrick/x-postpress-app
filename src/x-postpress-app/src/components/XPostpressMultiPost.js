import { LitElement, css, html } from 'lit-element'
import { defineCustomElement } from '../utilities'
import config from '../config'
import { render } from 'lit-html'

import 'x-postpress'
import './XPostpressObserver'

export class XPostpressMultiPost extends LitElement {
  static get styles() {
    return css`
      :host {
        padding: 1rem;
      }

      header {
        font-size: var(
          --x-postpress-content-header-font-size,
          --x-postpress-content-single-post-header-font-size,
          1.5rem
        );

        margin-bottom: 1rem;
        text-align: center;
      }
    `
  }

  _idsToLazyLoad = []

  _getAllIdsByFetch() {
    const fetchUrl = `${config.main.apiHost}/wp-json/wp/v2/posts?_fields=id&per_page=`

    let postIds = []

    const recursiveFetch = (index = 1) => {
      return fetch(`${fetchUrl}${config.main.numberOfPostsPerFetch}&page=${index}`).then(res => {
        const totalPages = res.headers.get('x-wp-totalpages')

        return res.json().then(posts => {
          postIds = [ ...postIds, ...posts ]

          if (index < totalPages) {
            return recursiveFetch(++index)
          } else {
           return postIds
          }
        })
      })
    }

    return recursiveFetch()
  }

  constructor() {
    super()

    let renderedIds = []

    this._getAllIdsByFetch().then(ids => {
      this._idsToLazyLoad = ids.slice(config.main.numberOfInitialPosts)
    })

    this.addEventListener('x-postpress-observer-intersecting', e => {
      const availablePost = this._idsToLazyLoad.shift()

      if (availablePost) {
        renderedIds.push(availablePost)
      }

      render(this._renderArticle(renderedIds), this.shadowRoot.getElementById('lazyArticleTarget'))
    })
  }

  _renderArticle(include) {
    return html`
      ${include.map(({ id }) => html`
        <x-postpress
          ?removeArticleHeaderLinkSubDomain=${true}
          apiHost=${config.main.apiHost}
          articleHeaderLinkSubDomain="content"
          per_page="1"
          include="${id}"
        >
        </x-postpress>
      `)}
    `
  }

  render() {
    return html`
      <x-postpress
        ?removeArticleHeaderLinkSubDomain=${true}
        apiHost=${config.main.apiHost}
        articleHeaderLinkSubDomain="content"
        per_page=${config.main.numberOfInitialPosts}
      >
      </x-postpress>

      <div id="lazyArticleTarget"></div>
      <x-postpress-observer></x-postpress-observer>
    `
  }
}

defineCustomElement('x-postpress-multi-post', XPostpressMultiPost)
