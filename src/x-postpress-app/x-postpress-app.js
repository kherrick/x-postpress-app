import { XPostpressApp } from './src/XPostpressApp.js'

if (!customElements.get('x-postpress-app')) {
  customElements.define('x-postpress-app', XPostpressApp)
}
