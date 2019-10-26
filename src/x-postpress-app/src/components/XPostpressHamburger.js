import { LitElement, css, html } from 'lit-element'
import '@polymer/paper-icon-button'
import '@polymer/iron-icons'

const XPostpressHamburger = class extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;

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

  _handleDrawerChange(event) {
    this.shadowRoot.dispatchEvent(
      new CustomEvent('x-postpress-drawer-change', {
        bubbles: true,
        composed: true,
        detail: event
      })
    )
  }

  render() {
    return html`
      <paper-icon-button
        @click="${event => this._handleDrawerChange(event)}"
        aria-label="Featured Cities"
        icon="menu"
      ></paper-icon-button>
    `
  }
}

if (!customElements.get('x-postpress-hamburger')) {
  customElements.define('x-postpress-hamburger', XPostpressHamburger)
}

export default XPostpressHamburger
