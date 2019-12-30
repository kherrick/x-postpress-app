import { LitElement, css, html } from 'lit-element'
import { defineCustomElement } from '../utilities'
import config from '../config'
import { render } from 'lit-html'
import cloneDeep from 'lodash-es/cloneDeep'

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

  _ids = []

  constructor() {
    super()

    let renderedIds = this._ids

    this._ids = cloneDeep(config.main.ids)

    this.addEventListener('x-postpress-observer-intersecting', e => {
      const availablePost = this._ids.shift()

      if (availablePost) {
        renderedIds.push(availablePost)
      }

      render(this._renderArticle(renderedIds), this.shadowRoot.getElementById('lazyArticleTarget'))
    })
  }

  _renderArticle(include) {
    return html`
      ${include.map(id => html`
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
        per_page="3"
        include="5545,5479,5446"
      >
      </x-postpress>

      <div id="lazyArticleTarget"></div>
      <x-postpress-observer></x-postpress-observer>
    `
  }
}

defineCustomElement('x-postpress-multi-post', XPostpressMultiPost)
