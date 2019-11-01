import { LitElement, html, css } from 'lit-element'

import '@polymer/app-layout/app-drawer/app-drawer'
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'

import './components/XPostpressBranding'
import './components/XPostpressCounter'
import './components/XPostpressDrawer'
import './components/XPostpressHamburger'

import './components/XPostpressMultiPost'
import './components/XPostpressSinglePost'

import { getBasePathWithTrailingSlash } from './utilities'

import { X_POSTPRESS_DRAWER_TOGGLE, X_POSTPRESS_DRAWER_POST_SELECT } from './events/events'

import { store } from './store/configureStore'
import { connectRouter, navigate } from 'lit-redux-router'
connectRouter(store)

export class XPostpressApp extends LitElement {
  _path = getBasePathWithTrailingSlash()

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

  _handleDrawerToggle() {
    const appDrawer = this.shadowRoot.querySelector('app-drawer')

    if (appDrawer.getAttribute('opened') === '') {
      appDrawer.removeAttribute('opened')

      return
    }

    appDrawer.setAttribute('opened', '')
  }

  firstUpdated() {
    this.addEventListener(X_POSTPRESS_DRAWER_TOGGLE, event => {
      this._handleDrawerToggle(event)
    })

    this.addEventListener(X_POSTPRESS_DRAWER_POST_SELECT, ({ detail }) => {
      const navurl = `${this._path}${detail.path}/${detail.slug}/`

      store.dispatch(navigate(navurl))
    })
  }

  render() {
    const singlePostPath = `${this._path}:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:article`

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
        <lit-route component="x-postpress-counter" path="${this._path}counter"></lit-route>
        <lit-route component="x-postpress-multi-post" path="${this._path}"></lit-route>
        <lit-route component="x-postpress-single-post" path=${singlePostPath}></lit-route>

        <lit-route><h1>404 Not found</h1></lit-route>
      </div>
    `
  }
}
