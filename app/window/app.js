import {Component} from './lib/component'
import Selector from './views/selector'
import TitleBar from './views/titlebar'
import Title from './components/title'
import Editor from './views/editor'

export default class App extends Component {
  template (css) {
    return (
      <div className={css('main')}>
        <div className={css('sidebar')}>
          <Selector />
        </div>
        <div className={css('content')}>
          <TitleBar>
            <Title />
          </TitleBar>
          <Editor />
          <div className={css('attachments')}>
          </div>
        </div>
      </div>
    )
  }

  style () {
    return {
      main: conf => ({
        height: '100%',
        fontFamily: 'Faustina',
        display: 'flex'
      }),
      sidebar: conf => ({
        width: '210px',
        height: '100%',
        verticalAlign: 'top',
        display: 'inline-block',
        backgroundColor: '#eee'
      }),
      content: conf => ({
        position: 'relative',
        flex: '1',
        height: '100%',
        verticalAlign: 'top',
        display: 'inline-block',
        backgroundColor: '#fff'
      }),
      attachments: conf => ({
        position: 'absolute',
        right: '10px',
        top: '90px',
        width: '200px',
        height: 'calc(100vh - 100px)',
        backgroundColor: '#fff',
        border: '1px #ccc solid',
        borderRadius: '3px'
      })
    }
  }
}
