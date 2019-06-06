export default class StateListener {
  constructor (store) {
    if (!this.select) {
      throw new Error(`State Listener \`${this.constructor.name}\` is missing \`select\` method`)
    }
    if (!this.renderState) {
      throw new Error(`State Listener \`${this.constructor.name}\` is missing \`renderState\` method`)
    }

    this.store = store
    this.unsubscribeFromStore = null

    this.handleStateUpdate = this.handleStateUpdate.bind(this)
  }

  subscribe () {
    this.unsubscribeFromStore = this.store.subscribe(this.handleStateUpdate)
    this.handleStateUpdate() // Call for initial state
  }

  unsubscribe () {
    if (this.unsubscribeFromStore !== null) {
      this.unsubscribeFromStore()
      this.unsubscribeFromStore = null
    } else {
      throw new Error(`State Listener \`${this.constructor.name}\` was not subscribed`)
    }
  }

  handleStateUpdate () {
    let previousValue = this.currentValue
    this.currentValue = this.select(this.store.getState())

    if (previousValue !== this.currentValue) {
      this.renderState(this.currentValue, previousValue)
    }
  }
}

export class CallbackStateListener extends StateListener {
  constructor (store, select = state => state, renderCallback) {
    super(store)
    this.select = select
    this.render = renderCallback
  }
}
