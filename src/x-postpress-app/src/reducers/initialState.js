export default {
  count: { value: 5 },
  router: {
    activeRoute: "/",
    routes: {
      "^/$|^/dev$": {
        "active": true, "params": {}
      }
    }
  }
}
