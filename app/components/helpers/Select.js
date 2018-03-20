import React from 'react'

export default class Select extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    var options = this.props.range.map((item, i) => {
      return <option key={ i } value={item}>{ item }</option>
    })
    var label = this.props.label ? <label htmlFor={ this.props.name }>{ this.props.label }</label> : null
    return (
      <div>
        { label }
        <select disabled={ this.props.disabled } name={ this.props.name } onChange={ this.props.onChange } defaultValue={ this.props.reset ? "-----" : null } >
          <option>{"-----"}</option>
          { options }
        </select>
      </div>
    )
  }
}
