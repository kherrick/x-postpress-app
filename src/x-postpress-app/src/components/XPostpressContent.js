import { LitElement, css, html } from 'lit-element'
import 'x-postpress'

export const contentPost = { apiHost: '', title: '', id: '' }

const XPostpressContent = class extends LitElement {
  static get styles() {
    return css`
      :host {
        padding: 1rem;
      }

      header {
        font-size: var(--x-postpress-content-header-font-size, 1.5rem);
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
      },
    }
  }

  constructor() {
    super()

    this.contentPost = contentPost
  }

  render() {
    return html`
      <x-postpress
        ?removeArticleHeaderLinkSubDomain=${true}
        apiHost=${this.contentPost.apiHost}
        articleHeaderLinkSubDomain="content"
        include="${this.contentPost.id}"
      >
      </x-postpress>
    `
  }
}

if (!customElements.get('x-postpress-content')) {
  customElements.define('x-postpress-content', XPostpressContent)
}

export default XPostpressContent
