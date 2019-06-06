import {Component} from '../lib/component'

export default class ToolBarDropdown extends Component {
  template (css) {
    return (
      <div className={css('main')}>
        <div className={css('options')}>
          {this.props.children}
        </div>
      </div>
    )
  }

  style () {
    return {
      main: conf => ({
        position: 'relative',
        verticalAlign: 'top',
        margin: '2px',
        display: 'inline-block',
        height: '35px',
        width: '100px',
        boxSizing: 'border-box',
        lineHeight: '35px',
        borderRadius: '3px',
        textAlign: 'center',
        color: '#333',
        transition: 'border .2s',
        border: '1px #e5e5e5 solid',
        cursor: 'pointer',
        ':hover': {
          borderColor: '#eee'
        }
      })
    }
  }
}
