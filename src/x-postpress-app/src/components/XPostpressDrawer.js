import { LitElement, css, html } from 'lit-element'
import '@polymer/paper-listbox/paper-listbox'
import '@polymer/paper-item/paper-item'

import {
  XPostpressDrawerChange,
  XPostpressDrawer as XPostpressDrawerEvent
} from '../events/events'

import { navigate } from 'lit-redux-router'
import { store } from '../store/configureStore'

import { getBasePathWithTrailingSlash } from '../XPostpressApp'

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
    return [
      {
        apiHost: 'https://content.karlherrick.com',
        content: [
          {
            id: '4875',
            title: 'React, Redux, and using the WordPress REST API',
            path: '2017/09/27',
            slug: 'react-redux-using-wordpress-rest-api'
          },
          {
            id: '4775',
            title: 'Playing around with the GoPiGo',
            path: '2016/12/03',
            slug: 'playing-around-gopigo'
          },
          {
            id: '1928',
            title: 'Pi Motion - Single Page App',
            path: '2015/04/29',
            slug: 'pi-motion'
          },
          {
            id: '1897',
            title: 'HipChat bot on AWS',
            path: '2015/01/04',
            slug: 'hipchat-bot-aws'
          },
          {
            id: '1819',
            title: '2048 on a Touchscreen Raspberry Pi',
            path: '2014/04/28',
            slug: '2048-touch-enabled-raspberry-pi'
          },
          {
            id: '1330',
            title: 'Observations on HTML',
            path: '2013/02/02',
            slug: 'observations-on-html'
          },
          {
            id: '292',
            title: 'Budget Wireless Distribution',
            path: '2011/06/29',
            slug: 'budget-wireless-distribution'
          },
          {
            id: '199',
            title: 'WDS Bridging Experiences',
            path: '2010/01/07',
            slug: 'wds-bridging-experiences'
          },
          {
            id: '88',
            title: 'Woktenna',
            path: '2006/02/10',
            slug: 'woktenna'
          }
        ]
      }
    ]
  }

  get featuredPhotos() {
    return [
      {
        apiHost: 'https://herrickdesign.com',
        content: [
          {
            id: '2793',
            title: 'Fireworks',
            path: '2016/07/04',
            slug: 'detroit-river-fireworks'
          }, {
            id: '2634',
            title: 'Skyline Sunset',
            path: '2016/03/23',
            slug: 'detroit-skyline-sunset'
          }, {
            id: '2627',
            title: 'Icy River',
            path: '2016/01/10',
            slug: 'icy-detroit-river'
          }, {
            id: '2482',
            title: 'Architecture',
            path: '2013/08/22',
            slug: 'architecture-in-detroit'
          }, {
            id: '2331',
            title: 'Walk up Woodward',
            path: '2013/04/22',
            slug: 'walk-up-woodward'
          }
        ]
      }
    ]
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
