import {Component} from '../lib/component'

export default class ToolBarButton extends Component {
  template (css) {
    return (
      <div className={css('main', {'active': this.props.isActive})} onClick={this.props.toggleInlineStyle} onMouseDown={this.props.onMouseDown}>
        <i className={`fa fa-${this.props.iconName}`} />
      </div>
    )
  }

  style () {
    return {
      main: conf => ({
        verticalAlign: 'top',
        margin: '2px',
        display: 'inline-block',
        height: '35px',
        padding: '0 7px',
        minWidth: '45px',
        boxSizing: 'border-box',
        lineHeight: '35px',
        borderRadius: '3px',
        textAlign: 'center',
        color: '#333',
        border: '1px #e5e5e5 solid',
        transition: 'background-color .1s, border .1s, color .1s',
        cursor: 'pointer',
        '> i': {
          height: '100%',
          lineHeight: '35px',
          fontSize: '18px',
          cursor: 'inherit'
        }
      }),
      active: conf => ({
        backgroundColor: '#777',
        borderColor: 'transparent',
        '> i': {
          color: '#fff'
        }
      })
    }
  }
}
