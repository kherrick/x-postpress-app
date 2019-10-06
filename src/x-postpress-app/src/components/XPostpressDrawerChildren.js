import { LitElement, css, html } from 'lit-element'
import '@material/mwc-button'

const XPostpressDrawerChildren = class extends LitElement {
  static get styles() {
    return css`
      div {
        background-color: #111111;
        color: #cccccc;
        height: 100%;
        overflow: auto;
      }

      [featuredPost] {
        --mdc-theme-on-primary: #111111;
        --mdc-theme-primary: #cccccc;

        margin-top: 1rem;
        width: 100%;
      }

      [featuredPost]:hover {
        text-decoration: underline;
      }

      h1 {
        font-size: 1.5rem;
        color: #ddd;
      }

      ul {
        list-style-type: none;
        padding: 0 1rem 0 1rem;
      }

      ul > li ul > li {
        list-style-type: none;
        margin-left: -0.5rem;
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

  _handleMenuFeaturedPostChange(featuredPost) {
    return event => {
      this.shadowRoot.dispatchEvent(
        new CustomEvent('x-postpress-drawer-children', {
          bubbles: true,
          composed: true,
          detail: featuredPost
        })
      )

      this._handleDrawerChange(event)
    }
  }

  get featuredPosts() {
    return [
      {
        title: 'Post 1',
        id: '4875',
      }
    ]
  }

  render() {
    return html`
      <div>
        <ul>
          <li>
            <h1>Featured Posts</h1>
            <div>
              <ul>
                ${this.featuredPosts.map(
                  featuredPost => html`
                    <li>
                      <mwc-button
                        @click="${this._handleMenuFeaturedPostChange(featuredPost)}"
                        label=${featuredPost.title}
                        featuredPost
                      ></mwc-button>
                    </li>
                  `
                )}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    `
  }
}

if (!customElements.get('x-postpress-drawer-children')) {
  customElements.define('x-postpress-drawer-children', XPostpressDrawerChildren)
}

export default XPostpressDrawerChildren
