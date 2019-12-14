import { LitElement, css, html } from 'lit-element'
import '@polymer/paper-icon-button'
import '@polymer/iron-icons'

import { XPostpressDrawerToggle } from '../events/events'

const XPostpressHamburger = class extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        color: var(--x-postpress-hamburger-color, #eee);
        width: 1.5rem;
      }

      paper-icon-button {
        pointer-events: all;
        position: relative;
        height: 3rem;
        width: 3rem;
      }

      svg {
        height: 1.5rem;
        pointer-events: none;
        width: 1.5rem;
      }
    `
  }

  _handleHamburgerClick(event) {
    this.shadowRoot.dispatchEvent(XPostpressDrawerToggle(event))
  }

  render() {
    return html`
      <paper-icon-button
        @click="${event => this._handleHamburgerClick(event)}"
        aria-label="Featured Posts"
        icon="menu"
      ></paper-icon-button>
    `
  }
}

if (!customElements.get('x-postpress-hamburger')) {
  customElements.define('x-postpress-hamburger', XPostpressHamburger)
}

export default XPostpressHamburger
