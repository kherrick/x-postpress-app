import { LitElement, css, html } from 'lit-element'

import 'x-postpress'

const XPostpressContent = class extends LitElement {
  static get styles() {
    return css`
      :host {
        padding: 1rem;
      }

      header {
        font-size: var(--x-postpress-content-forecast-header-font-size, 1.5rem);
        margin-bottom: 1rem;
        text-align: center;
      }
    `
  }

  static get properties() {
    return {
      apiHost: {
        type: String,
        reflect: true
      },
      featuredPost: {
        reflect: false,
        type: Object
      },
    }
  }
  constructor() {
    super()

    this.featuredPost = { title: '', id: '' }
  }


  render() {
    return html`
      <x-postpress
        apiHost="${this.apiHost}"
        removeArticleHeaderLinkSubDomain="true"
        articleHeaderLinkSubDomain="content"
        include="${this.featuredPost.id}"
      >
      </x-postpress>
    `
  }
}

if (!customElements.get('x-postpress-content')) {
  customElements.define('x-postpress-content', XPostpressContent)
}

export default XPostpressContent
