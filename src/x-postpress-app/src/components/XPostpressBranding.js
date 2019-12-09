import { LitElement, css, html } from 'lit-element'

const XPostpressBranding = class extends LitElement {
  static get styles() {
    return css`
      :host {
        margin-left: var(--x-postpress-branding-margin-left, -1rem);
        text-align: var(--x-postpress-branding-text-align, center);
        width: 100%;
      }

      a {
        text-decoration: none;
        color: var(--x-postpress-branding-text-color, #000);
      }
    `
  }

  static get properties() {
    return {
      siteTitle: {
        reflect: true,
        type: String
      },
      siteUrl: {
        reflect: true,
        type: String
      }
    }
  }

  render() {
    return html`
      <div><a href=${this.siteUrl}>${this.siteTitle}</a></div>
    `
  }
}

if (!customElements.get('x-postpress-branding')) {
  customElements.define('x-postpress-branding', XPostpressBranding)
}

export default XPostpressBranding
