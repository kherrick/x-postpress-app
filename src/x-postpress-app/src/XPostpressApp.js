import { LitElement, html, css } from 'lit-element'

import '@polymer/app-layout/app-drawer/app-drawer'
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'

import './components/XPostpressBranding'
import './components/XPostpressCounter'
import './components/XPostpressDrawerChildren'
import './components/XPostpressHamburger'

import { contentPost } from './components/XPostpressContent'
import './components/XPostpressContent'

import { X_POSTPRESS_DRAWER_CHANGE, X_POSTPRESS_DRAWER_CHILDREN } from './events/events'

import { store } from './store/configureStore'
import { connectRouter, navigate } from 'lit-redux-router'
connectRouter(store)

export class XPostpressApp extends LitElement {
  static get styles() {
    return css`
      app-header {
        background-color: var(--primary-background-color, #000);
        color: var(--primary-foreground-color, #fff);

        --app-header-background-front-layer: {
          background-color: var(--primary-background-color, #000);
        }

        --app-header-background-rear-layer: {
          background-color: var(--primary-background-color, #000);
        }
      }

      app-toolbar {
        background-color: var(--primary-background-color, #000);
        font-size: 1.5rem;
      }

      app-drawer {
        --app-drawer-scrim-background: var(--drawer-scrim-background, rgba(0, 0, 0, 0.8));
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

    this.featuredPost = contentPost
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
    this.featuredPost = {
      apiHost: this.apiHost
    }

    this.addEventListener(X_POSTPRESS_DRAWER_CHANGE, event => {
      this._handleDrawerChange(event)
    })

    this.addEventListener(X_POSTPRESS_DRAWER_CHILDREN, ({ detail }) => {
      this.apiHost = detail.apiHost
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

      <div class="app-content">
        <lit-route
          path="*/counter"
          component="x-postpress-counter"
        ></lit-route>

        <lit-route path="^\/$|^\/dev$|^\/dev\/$|^\/x-postpress-app\/$">
          <x-postpress-content
            contentPost="${JSON.stringify(this.featuredPost)}"
          ></x-postpress-content>

          <button @click=${() => store.dispatch(navigate(`${window.location.pathname}/counter`))}>load counter</button>
        </lit-route>

        <lit-route><h1>404 Not found</h1></lit-route>
      </div>
    `
  }
}
