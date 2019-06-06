import {Component, hexToRGBA} from '../lib/component'

export default class Category extends Component {
  template (css) {
    return (
      <div className={css('category')}>
        <span className={css('info')}>
          <span className={css('title')}>
            Natural Computation
          </span>
          <span className={css('controls')}>
            <i className={`fa fa-plus-square`} />
          </span>
        </span>
        <ul className={css('list')}>
          <li className={css('item')}>
            <span className={css('name')}>
              Lecture 3
            </span>
            <span className={css('date')}>
              <i className={`fa fa-file-text`} /> &middot; 21/04/09 14:34
            </span>
          </li>
          <li className={css('item')}>
            <span className={css('name')}>
              Lecture 4
            </span>
            <span className={css('date')}>
              <i className={`fa fa-file-text`} /> &middot; 21/04/09 14:34
            </span>
          </li>
        </ul>
      </div>
    )
  }

  style () {
    return {
      category: conf => ({
        marginTop: '3px'
      }),
      info: conf => ({
        display: 'block',
        height: '20px'
      }),
      title: conf => ({
        display: 'inline-block',
        width: 'calc(100% - 20px)',
        lineHeight: '20px',
        fontWeight: '600',
        fontSize: '16px',
        padding: '0 5px',
        boxSizing: 'border-box'
      }),
      controls: conf => ({
        display: 'inline-block',
        width: '20px'
      }),
      list: conf => ({
        listStyleType: 'none',
        padding: '0',
        margin: '0'
      }),
      item: conf => ({
        height: '40px',
        paddingLeft: '8px',
        paddingRight: '5px',
        fontSize: '13px',
        ':hover': {
          backgroundColor: hexToRGBA('#fff', 0.2)
        }
      }),
      name: conf => ({
        display: 'block',
        lineHeight: '20px',
        fontWeight: '500'
      }),
      date: conf => ({
        display: 'block',
        lineHeight: '20px',
        opacity: '.8',
        fontWeight: '300'
      })
    }
  }
}
