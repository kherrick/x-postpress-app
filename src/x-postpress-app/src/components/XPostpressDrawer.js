import { LitElement, css, html } from 'lit-element'
import '@polymer/paper-listbox/paper-listbox'
import '@polymer/paper-item/paper-item'

import {
  XPostpressDrawerChange,
  XPostpressDrawer as XPostpressDrawerEvent
} from '../events/events'

import { navigate } from 'lit-redux-router'
import { store } from '../store/configureStore'

import { getBasePathWithTrailingSlash } from '../utilities'

import config from '../config'

const XPostpressDrawer = class extends LitElement {
  static get styles() {
    return css`
      .drawer-container {
        --paper-listbox-color: var(--primary-foreground-color, #fff);

        background-color: var(--primary-background-color, #000);
        color: var(--primary-foreground-color, #fff);
        height: 100%;

        /* scroll without scrollbars */
        overflow: auto;
        -ms-overflow-style: none; /* IE 10+ */
        scrollbar-width: none;    /* Firefox */
      }

      /* scroll without scrollbars */
      .drawer-container::-webkit-scrollbar {
        display: none;            /* Safari and Chrome */
      }

      .drawer-header {
        font-size: 1.5rem;
        padding: 1rem;
      }

      paper-list-item {
        margin-bottom: 1rem;
      }

      .sidebar-link {
        margin-bottom: 0.5rem;
      }

      .sidebar-link:hover {
        cursor: pointer;
      }
    `
  }

  _handleMenuFeaturedPostChange({ contentPost }) {
    return event => {
      this.shadowRoot.dispatchEvent(
        XPostpressDrawerEvent(contentPost)
      )

      this.shadowRoot.dispatchEvent(
        XPostpressDrawerChange(contentPost)
      )
    }
  }

  get featuredPostsGroup() {
    return [ config.sites[0] ]
  }

  get featuredPhotos() {
    return [ config.sites[1] ]
  }

  getPostsGroupSidebarSection(postsGroup) {
    return html`
      <paper-listbox>
        ${postsGroup.map(posts =>
          posts.content.map(content =>
            html`
              <div
                class="sidebar-link"
                @click="${this._handleMenuFeaturedPostChange({ contentPost: { apiHost: posts.apiHost, ...content }})}"
              >
                <paper-item>${content.title}</paper-item>
              </div>
            `)
          )
        }
      </paper-listbox>
    `
  }

  render() {
    return html`
      <div class="drawer-container">
        <div class="drawer-header">Featured Posts</div>
        ${this.getPostsGroupSidebarSection(this.featuredPostsGroup)}

        <div class="drawer-header">Featured Photos</div>
        ${this.getPostsGroupSidebarSection(this.featuredPhotos)}

        <div class="drawer-header">Testing</div>
        <div class="sidebar-link">
          <paper-item
            @click=${() => store.dispatch(navigate(`${getBasePathWithTrailingSlash()}counter`))}
          >
            Counter
          </paper-item>
        </div>
      </div>
    `
  }
}

if (!customElements.get('x-postpress-drawer')) {
  customElements.define('x-postpress-drawer', XPostpressDrawer)
}

export default XPostpressDrawer
