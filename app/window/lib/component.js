import React from 'react'
import {createRenderer} from 'fela'
import {render} from 'fela-dom'

const renderer = createRenderer()

render(renderer)

class Component extends React.Component {
  constructor (props) {
    super(props)

    this.localProperties = {}
    this._styles = this.createStyleSheet()
    this.cssHelper = this.cssHelper.bind(this)
    this.valueHelper = this.valueHelper.bind(this)
    this.content = this.props.content
  }

  updateStyle (props = {}) {
    Object.assign(this.localProperties, props)
    this._styles = this.createStyleSheet()
    this.forceUpdate()
  }

  createStyleSheet () {
    if (!this.style) {
      return {}
    }

    const style = this.style(this.keyframeHelper)

    if (typeof style !== 'object') {
      throw new TypeError("Template method 'styles' returns a non-object")
    }
    if (!this.template) {
      throw new TypeError("Template doesn't define 'template' method")
    }

    const _styles = {}

    for (const _class in style) {
      var className = _class
      if (className.startsWith('.')) {
        renderer.renderStatic(style[_class]({}), className)
      } else {
        className = renderer.renderRule(style[_class], {})
      }
      // Avoid empty className for a rule with no children
      if (className.length > 0) {
        _styles[_class] = className
      }
    }

    return _styles
  }

  keyframeHelper (keyframe) {
    return renderer.renderKeyframe(keyframe, {})
  }

  getClassName (className) {
    if (className.startsWith('.')) {
      return className
    } else if (this._styles[className]) {
      return this._styles[className]
    } else {
      return null
    }
  }

  cssHelper (...args) {
    const classes = args
      .map(_class => {
        if (typeof _class === 'object') {
          return Object.keys(_class).map(_className => {
            if (_class[_className]) return this.getClassName(_className)
          }).join(' ')
        }
        return this.getClassName(_class)
      })
      .filter(v => Boolean(v))
    return classes.length ? classes.join(' ') : null
  }

  async loadContent (...args) {
    const provider = this.props.provider || this.provider
    if (provider !== undefined) {
      const content = await provider(...args)
      if (content !== this.content) {
        this.content = content
        this.forceUpdate()
      }
    }
  }

  componentDidMount () {
    this.loadContent()
  }

  valueHelper (selector, def) {
    if (this.content === undefined) return def
    const value = selector(this.content)
    if (def !== undefined && (value === undefined || value === null)) return def
    return value
  }

  render () {
    return this.template(this.cssHelper, this.valueHelper)
  }
}

function hexToRGBA (hex, opacity) {
  var c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255, opacity].join(',')})`
  }
  throw new Error('Bad Hex')
}

export {Component, hexToRGBA, renderer}
