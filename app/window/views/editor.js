
import Editor from 'draft-js-plugins-editor'
import {EditorState} from 'draft-js'
import createRichButtonsPlugin from 'draft-js-richbuttons-plugin'

import {Component, hexToRGBA} from '../lib/component'
import ToolBarButton from '../components/toolbarbutton'
import ToolBarDropdown from '../components/toolbardropdown'

const richButtonsPlugin = createRichButtonsPlugin()

const {ItalicButton, BoldButton} = richButtonsPlugin

export default class LorrenEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {editorState: EditorState.createEmpty()}
    this.onChange = (editorState) => this.setState({editorState})
    this.change = (transform) => {
      this.onChange(transform(this.state.editorState))
    }
    this.mouseDown = (e) => {
      if (e.target === this.container) e.preventDefault()
      this.editor.focus()
    }
    this.plugins = [
      richButtonsPlugin
    ]
  }

  componentDidMount () {
    super.componentDidMount()
    this.editor.focus()
  }

  template (css) {
    return (
      <div className={css('main')}>
        <div className={css('toolbar')}>
          <BoldButton>
            <ToolBarButton iconName='bold' />
          </BoldButton>
          <ItalicButton>
            <ToolBarButton iconName='italic' />
          </ItalicButton>
          <ToolBarDropdown>

          </ToolBarDropdown>
        </div>
        <div ref={ref => (this.container = ref)} className={css('text')} onMouseDown={this.mouseDown}>
          <Editor ref={ref => (this.editor = ref)}
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={this.plugins}
            className={css('editor')} />
        </div>
      </div>
    )
  }

  style () {
    return {
      main: conf => ({
        height: 'calc(100% - 40px)'
      }),
      toolbar: conf => ({
        height: '40px',
        boxSizing: 'border-box',
        padding: '0 5px',
        borderBottom: `1px ${hexToRGBA('#777', 0.1)} solid`
      }),
      text: conf => ({
        height: 'calc(100% - 40px)',
        padding: '5px',
        boxSizing: 'border-box',
        overflowX: 'overlay',
        overflowY: 'scroll',
        cursor: 'text',
        fontSize: '14px'
      }),
      editor: conf => ({
        cursor: 'text'
      }),
      '.public-DraftEditor-content': conf => ({
        minHeight: '100%'
      }),
      control: conf => ({
        verticalAlign: 'top',
        margin: '2px',
        display: 'inline-block',
        height: '35px',
        padding: '0 7px',
        minWidth: '45px',
        lineHeight: '35px',
        borderRadius: '3px',
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        color: '#333',
        transition: 'background-color .2s',
        ':hover': {
          backgroundColor: '#e6e6e6'
        },
        '> i': {
          height: '100%',
          lineHeight: '35px',
          fontSize: '18px'
        }
      })
    }
  }
}
