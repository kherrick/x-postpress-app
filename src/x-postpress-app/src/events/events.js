export const X_POSTPRESS_DRAWER_TOGGLE = 'x-postpress-drawer-change'
export const X_POSTPRESS_DRAWER_POST_SELECT = 'x-postpress-drawer-post-select'

export const XPostpressDrawerChange = event =>
  new CustomEvent(X_POSTPRESS_DRAWER_TOGGLE, {
    bubbles: true,
    composed: true,
    detail: event
  })

export const XPostpressDrawer = contentPost =>
  new CustomEvent(X_POSTPRESS_DRAWER_POST_SELECT, {
    bubbles: true,
    composed: true,
    detail: contentPost
  })
