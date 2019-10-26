export const X_POSTPRESS_DRAWER_CHANGE = 'x-postpress-drawer-change'
export const X_POSTPRESS_DRAWER_CHILDREN = 'x-postpress-drawer-children'

export const XPostpressDrawerChange = event =>
  new CustomEvent(X_POSTPRESS_DRAWER_CHANGE, {
    bubbles: true,
    composed: true,
    detail: event
  })

export const XPostpressDrawerChildren = contentPost =>
  new CustomEvent(X_POSTPRESS_DRAWER_CHILDREN, {
    bubbles: true,
    composed: true,
    detail: contentPost
  })
