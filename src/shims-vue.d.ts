/* eslint-disable */
import { Store } from 'vuex'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // declare your own store states
  interface State {
    count: number
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
  const component: DefineComponent<{}, {}, any>
  export default component
}
