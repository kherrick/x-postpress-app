import { LitElement, css, html } from 'lit-element'
import { defineCustomElement } from '../utilities'
import { render } from 'lit-html'

import 'x-postpress'
import './XPostpressObserver'

export class XPostpressInfiniteScroll extends LitElement {
  static get properties() {
    return {
      apihost: {
        reflect: false,
        type: String
      },
      ids: {
        reflect: false,
        type: Array
      }
    }
  }

  firstUpdated() {
    let renderedIds = []

    this.addEventListener('x-postpress-observer-intersecting', e => {
      const availablePost = this.ids.shift()

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
          apiHost=${this.apihost}
          per_page="1"
          include="${id}"
        >
        </x-postpress>
      `)}
    `
  }

  render() {
    return html`
      <slot></slot>
      <div id="lazyArticleTarget"></div>
      <x-postpress-observer></x-postpress-observer>
    `
  }
}

defineCustomElement('x-postpress-infinite-scroll', XPostpressInfiniteScroll)
