import React from 'react'
import logo from './logo.svg'
import './App.css'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div id="headings">
          <h1>Editor</h1>
          <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        </div>
        <div id="headings">
          <h1>Preview</h1>
          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    )
  }
}

const Editor = (props) => {
  return (
    <textarea id="editor" value={props.markdown} onChange={props.onChange} type="text" />
  )
}

const Preview = (props) => {
  return (
    <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.markdown)}} />
  )
}

const placeholder =
  `# Header - React Markdown Previewer!

  ## Sub Header - Something...

  This is a [link]("http://www.freecodecamp.org/staog")

  Code sample \`<span></span>\`

  \`\`\`
  // Code block:

  for (let a; b < c; d++) {
    console.log("Buhuhaha")
  }

  \`\`\`

  1. this
  2. is
  3. numbered
  4. list

  > Block quote!

  ![React Logo w/ Text](https://goo.gl/Umyytc)

  **Some bolded text**

  `

export default App;
