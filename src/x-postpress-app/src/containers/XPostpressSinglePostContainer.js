import { defineCustomElement } from '../utilities'
import { html, css, LitElement } from 'lit-element'

import '../components/XPostpressSinglePost'

export class XPostpressSinglePostContainer extends LitElement {
  static get styles() {
    return css``
  }

  static get properties() {
    return {
      contentPost: {
        reflect: false,
        type: Object
      },
    }
  }

  render() {
    return html`
      <x-postpress-content-single-post
        .contentPost=${this.contentPost}
      ></x-postpress-content-single-post>
    `
  }
}

defineCustomElement('x-postpress-single-post-container', XPostpressSinglePostContainer)
