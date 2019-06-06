import {Component} from '../lib/component'

export default class Title extends Component {
  template (css) {
    return (
      <span className={css('title')}>
        Natural Computation - Lecture 3
      </span>
    )
  }

  style () {
    return {
      title: conf => ({
        display: 'block',
        height: '40px',
        lineHeight: '40px',
        fontWeight: '600',
        fontSize: '15px',
        textAlign: 'center',
        color: '#333'
      })
    }
  }
}
