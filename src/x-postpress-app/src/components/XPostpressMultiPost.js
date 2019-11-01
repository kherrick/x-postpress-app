import { LitElement, css, html } from 'lit-element'
import { defineCustomElement } from '../utilities'
import config from '../config'

import 'x-postpress'

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

  render() {
    return html`
      <x-postpress
        ?removeArticleHeaderLinkSubDomain=${true}
        apiHost=${config.main.apiHost}
        articleHeaderLinkSubDomain="content"
      >
      </x-postpress>
    `
  }
}

defineCustomElement('x-postpress-multi-post', XPostpressMultiPost)
