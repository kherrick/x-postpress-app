import { html, LitElement } from 'lit-element'

import { defineCustomElement } from '../utilities'

import '../components/DecrementButton'
import '../components/IncrementButton'
import '../containers/XPostpressStore'

export class XPostpressCounter extends LitElement {
  render() {
    return html`
      <div buttons>
        <decrement-button>
          decrement
        </decrement-button>
        <increment-button>
          increment
        </increment-button>
      </div>
      <div count>
        <x-postpress-store>
          The count:
        </x-postpress-store>
      </div>
    `
  }
}

defineCustomElement('x-postpress-counter', XPostpressCounter)
