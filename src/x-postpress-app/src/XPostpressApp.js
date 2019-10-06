import { LitElement, html, css } from 'lit-element'

import '@polymer/app-layout/app-drawer/app-drawer'
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'

import './components/XPostpressHamburger'
import './components/XPostpressBranding'
import './components/XPostpressContent'
import './components/XPostpressDrawerChildren'

export class XPostpressApp extends LitElement {
  static get styles() {
    return css`
      app-header {
        background-color: #000;
        color: #fff;

        --app-header-background-front-layer: {
          background-color: #000;
        }

        --app-header-background-rear-layer: {
          background-color: #000;
        }
      }

      app-toolbar {
        background-color: #000;
        font-size: 1.5rem;
      }

      app-drawer {
        --app-drawer-scrim-background: rgba(0, 0, 0, 0.8);
      }

      x-postpress-hamburger {
        pointer-events: unset;
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
      siteTitle: {
        reflect: false,
        type: String
      },
      siteUrl: {
        reflect: false,
        type: String
      }
    }
  }

  constructor() {
    super()

    this.featuredPost = { title: '', id: '' }
  }

  _handleDrawerChange(event) {
    const appDrawer = this.shadowRoot.querySelector('app-drawer')

    if (appDrawer.getAttribute('opened') === '') {
      appDrawer.removeAttribute('opened')

      return
    }

    appDrawer.setAttribute('opened', '')
  }

  firstUpdated() {
    this.addEventListener('x-postpress-drawer-change', event => {
      this._handleDrawerChange(event)
    })

    this.addEventListener('x-postpress-drawer-children', ({ detail }) => {
      this.featuredPost = detail
    })
  }

  render() {
    return html`
      <app-header reveals>
        <app-toolbar>
          <x-postpress-hamburger>Menu</x-postpress-hamburger>
          <x-postpress-branding siteTitle="${this.siteTitle}" siteUrl="${this.siteUrl}"></x-postpress-branding>
        </app-toolbar>
      </app-header>

      <app-drawer swipe-open>
        <x-postpress-drawer-children></x-postpress-drawer-children>
      </app-drawer>

      <x-postpress-content
        apiHost="${this.apiHost}"
        featuredPost="${JSON.stringify(this.featuredPost)}"
      ></x-postpress-content>
    `
  }
}
