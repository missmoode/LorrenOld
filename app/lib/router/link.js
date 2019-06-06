import {Component} from '../component'

export default class TransitionRouteDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      components: [null, props.router.currentComponent],
      flip: false
    }

    if (this.props.router === undefined) throw new Error('Didn\'t specify `to` prop on <Link>')
    if (this.props.to === undefined) throw new Error('Didn\'t specify `router` prop on <Link>')

    this.onClick = this.onClick.bind(this)
  }

  isActive () {
    return this.props.router.currentPath === this.props.to
  }

  onClick () {
    this.props.router.goTo(this.props.to)
    this.forceUpdate()
  }

  componentDidMount () {
    this.unsubscribe = this.props.router.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  template (css, select) {
    var props = Object.assign({}, this.props)
    delete props['className']
    delete props['router']
    delete props['to']
    return (
      <span {...props}
        className={this.props.className + ' ' + css('link', {'.active': this.isActive()})}
        onClick={this.onClick}>
        {this.props.children}
      </span>
    )
  }

  style () {
    return {
      link: conf => ({
        cursor: 'pointer'
      })
    }
  }
}
