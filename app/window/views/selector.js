import {Component, hexToRGBA} from '../lib/component'
import Category from '../components/category'
import TitleBar from './titlebar'

export default class Selector extends Component {
  template (css) {
    return (
      <div className={css('main')}>
        <TitleBar />
        <div className={css('categories')}>
          <Category />
        </div>
        <div className={css('categoryMenu')}>
        </div>
      </div>
    )
  }

  style () {
    return {
      main: conf => ({
        width: '100%',
        height: '100%',
        '-webkit-app-region': 'drag',
        boxSizing: 'border-box',
        '> *': {
          cursor: 'default'
        }
      }),
      categories: conf => ({
        height: 'calc(100% - 69px)',
        '-webkit-app-region': 'no-drag',
        overflowY: 'overlay',
        color: '#222'
      }),
      categoryMenu: conf => ({
        height: "calc(28px)",
        '-webkit-app-region': 'no-drag',
        borderTop: `1px ${hexToRGBA('#777', 0.1)} solid`,
      })
    }
  }
}
