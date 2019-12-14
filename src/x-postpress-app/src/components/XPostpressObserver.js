import { css, html, LitElement } from 'lit-element'
import { defineCustomElement } from '../utilities'

export class XPostpressObserver extends LitElement {
  static get styles() {
    return css`
      #target {
        height: var(--x-postpress-observer-height);
      }
    `
  }

  firstUpdated() {
    const target = this.shadowRoot.querySelector('#target')

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const eventType = 'x-postpress-observer-intersecting'

          target.dispatchEvent(new Event(eventType, { bubbles: true, composed: true }))
        }
      })
    }, options)

    observer.observe(target)
  }

  render() {
    return html`
      <div id="target"><slot></slot></div>
    `
  }
}

defineCustomElement('x-postpress-observer', XPostpressObserver)
