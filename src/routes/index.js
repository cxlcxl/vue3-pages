export default {
    data: () => ({
        currentRoute: window.location.pathname
      }),

      computed: {
        CurrentComponent() {
          return routes[this.currentRoute] || NotFoundComponent
        }
      },

      render() {
        return Vue.h(this.CurrentComponent)
      }
}