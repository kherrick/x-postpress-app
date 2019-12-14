import { LitElement, css, html } from 'lit-element'
import { defineCustomElement, lookupSlugFromConfig } from '../utilities'
import config from '../config'

import { contentPost } from './XPostpressContent'

import 'x-postpress'

export class XPostpressSinglePost extends LitElement {
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

  static get properties() {
    return {
      contentPost: {
        reflect: false,
        type: Object
      }
    }
  }

  constructor() {
    super()

    this.contentPost = contentPost
  }

  firstUpdated() {
    const match = window.location.pathname.match(/\/([a-z0-9_-]*[\/]?)$/)
    const replace = match ? match[0].replace(/\//g, '') : ''
    const { apiHost, content } = lookupSlugFromConfig(replace, config)[0]

    this.contentPost = { apiHost, id: content.id, title: content.title }
  }

  render() {
    return Object.entries(this.contentPost).length > 0
      ? html`
          <x-postpress
            ?removeArticleHeaderLinkSubDomain=${true}
            apiHost=${this.contentPost.apiHost}
            articleHeaderLinkSubDomain="content"
            include="${this.contentPost.id}"
          >
          </x-postpress>
        `
      : ''
  }
}

defineCustomElement('x-postpress-single-post', XPostpressSinglePost)
