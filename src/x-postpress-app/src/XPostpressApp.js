import { LitElement, html, css } from 'lit-element'

import '@polymer/app-layout/app-drawer/app-drawer'
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'

import './components/XPostpressBranding'
import './components/XPostpressCounter'
import './components/XPostpressDrawer'
import './components/XPostpressHamburger'

import { contentPost } from './components/XPostpressContent'
import './components/XPostpressContent'
import './components/XPostpressSinglePost'

import { X_POSTPRESS_DRAWER_TOGGLE, X_POSTPRESS_DRAWER_POST_SELECT } from './events/events'

import { store } from './store/configureStore'
import { connectRouter, navigate } from 'lit-redux-router'
connectRouter(store)

export const getBasePathWithTrailingSlash = () => `${new URL(document.querySelector('base').href).pathname}/`.replace(/\/+\//g, '/')

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
        reflect: true,
        type: String,
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

  _handleDrawerToggle(event) {
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

    this.addEventListener(X_POSTPRESS_DRAWER_TOGGLE, event => {
      this._handleDrawerToggle(event)
    })

    this.addEventListener(X_POSTPRESS_DRAWER_POST_SELECT, ({ detail }) => {
      const navurl = `${getBasePathWithTrailingSlash()}${detail.path}/${detail.slug}/`

      store.dispatch(navigate(navurl))

      this.apiHost = detail.apiHost
      this.featuredPost = detail
    })
  }

  render() {
    const basePathWithTrailingSlash = getBasePathWithTrailingSlash()

    return html`
      <app-header reveals>
        <app-toolbar>
          <x-postpress-hamburger>Menu</x-postpress-hamburger>
          <x-postpress-branding siteTitle="${this.siteTitle}" siteUrl="${this.siteUrl}"></x-postpress-branding>
        </app-toolbar>
      </app-header>

      <app-drawer swipe-open>
        <x-postpress-drawer></x-postpress-drawer>
      </app-drawer>

      <div class="app-content">
        <lit-route
          path="${basePathWithTrailingSlash}counter"
          component="x-postpress-counter"
        ></lit-route>
        <lit-route path="${basePathWithTrailingSlash}">
          <x-postpress-content
            contentPost="${JSON.stringify(this.featuredPost)}"
          ></x-postpress-content>
        </lit-route>
        <lit-route
          path="${basePathWithTrailingSlash}:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:article"
        >
          <x-postpress-content-single-post
            contentPost="${JSON.stringify(this.featuredPost)}"
          ></x-postpress-content-single-post>
        </lit-route>

        <lit-route><h1>404 Not found</h1></lit-route>
      </div>
    `
  }
}
