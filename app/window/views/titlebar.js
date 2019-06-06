import {Component, hexToRGBA} from '../lib/component'

export default class TitleBar extends Component {
  template (css) {
    return (
      <div className={css('main')}>
        {this.props.children}
      </div>
    )
  }

  style () {
    return {
      main: conf => ({
        width: '100%',
        height: '40px',
        '-webkit-app-region': 'drag',
        borderBottom: `1px ${hexToRGBA('#777', 0.1)} solid`,
        boxSizing: 'border-box'
      })
    }
  }
}
