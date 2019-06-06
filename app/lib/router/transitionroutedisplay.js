import {Component} from '../component'

export default class TransitionRouteDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      components: [null, props.router.currentComponent],
      flip: false
    }
  }

  componentWillMount () {
    this.unsubscribe = this.props.router.subscribe(component => {
      this.setState({
        components: [
          this.state.flip ? this.state.components[0] : component,
          this.state.flip ? component : this.state.components[1]
        ],
        flip: !this.state.flip
      })
      setTimeout(() => {
        this.setState({
          components: [
            this.state.flip ? this.state.components[0] : null,
            this.state.flip ? null : this.state.components[1]
          ]
        })
      }, 200)
    })
  }

  componentWillUnmount () {
    super.componentWillUnmount()
    this.unsubscribe()
  }

  template (css, select) {
    return (
      <div className={css('main', 'fill')}>
        <div className={css('fill', {old: !this.state.flip})}>
          {this.state.components[0]}
        </div>
        <div className={css('fill', {old: this.state.flip})}>
          {this.state.components[1]}
        </div>
      </div>
    )
  }

  style () {
    return {
      main: conf => ({
        position: 'relative'
      }),
      fill: conf => ({
        width: '100%',
        height: '100%',
        transform: 'scale(1)',
        opacity: '1',
        transition: 'opacity .2s linear, transform .2s linear'
      }),
      old: conf => ({
        position: 'absolute',
        top: '0',
        left: '0',
        pointerEvents: 'none',
        transform: 'scale(0.95)',
        opacity: '0'
      })
    }
  }
}
