import React from 'react'

export default class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="input">
        <label htmlFor={ this.props.name }>{ this.props.label }</label>
        <input id={ this.props.id } disabled={ this.props.disabled } name={ this.props.name } type={ this.props.type } onChange={ this.props.onChange }/>
      </div>
    )
  }
}
