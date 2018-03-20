import React from 'react'
import classNames from 'classnames'

export default class ErrorMessage extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    var errorClass = classNames('red', 'bold', 'padded')
    return <span className={ errorClass }>{ this.props.message }</span>
  }
}
