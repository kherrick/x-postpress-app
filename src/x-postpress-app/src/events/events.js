export const X_POSTPRESS_DRAWER_TOGGLE = 'x-postpress-drawer-toggle'
export const X_POSTPRESS_DRAWER_POST_SELECT = 'x-postpress-drawer-post-select'

export const XPostpressDrawerToggle = (close = false) =>
  new CustomEvent(X_POSTPRESS_DRAWER_TOGGLE, {
    bubbles: true,
    composed: true,
    detail: close
  })

export const XPostpressDrawerPostSelect = contentPost =>
  new CustomEvent(X_POSTPRESS_DRAWER_POST_SELECT, {
    bubbles: true,
    composed: true,
    detail: contentPost
  })
