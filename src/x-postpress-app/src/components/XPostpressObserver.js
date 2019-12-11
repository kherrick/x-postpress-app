import { LitElement, html } from 'lit-element'
import { defineCustomElement } from '../utilities'

export class XPostpressObserver extends LitElement {
  firstUpdated() {
    let target = null

    if (this.shadowRoot) {
      target = this.shadowRoot.querySelector('#target')
    }

    const options = {
      //root,
      rootMargin: '0px',
      threshold: 1.0
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const eventType = 'x-postpress-observer-intersecting'

          if (target) {
            target.dispatchEvent(new Event(eventType, { bubbles: true, composed: true }))
          }
        }
      })
    }, options)

    if (target) {
      observer.observe(target)
    }
  }

  render() {
    return html`
      <div id="target"></div>
    `
  }
}

defineCustomElement('x-postpress-observer', XPostpressObserver)
