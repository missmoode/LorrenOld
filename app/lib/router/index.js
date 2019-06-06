import uniqid from 'uniqid'

export default class Router {
  constructor (routes, _default) {
    this.routes = routes
    this._default = routes[_default]
    this.currentPath = _default

    this.subscribers = {}
  }

  subscribe (callback) {
    const id = uniqid()
    this.subscribers[id] = callback
    return () => {
      delete this.subscribers[id]
    }
  }

  goTo (path) {
    Object.values(this.subscribers).forEach(subscription => subscription(this.routes[path] || this._default))
    this.currentPath = path
  }

  get currentComponent () {
    return this.routes[this.currentPath] || this._default
  }
}
