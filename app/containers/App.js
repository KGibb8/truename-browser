import React from 'react'
import Routes from '../routes'
import classNames from 'classnames'
import extend from 'xtend'

import Back from '../components/Back'
import ErrorMessage from '../components/helpers/ErrorMessage'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      previous: [],
      errors: []
    }
  }

  setPrevious(path) {
    this.setState({
      previous: this.state.previous + path
    })
  }

  render() {
    var hasErrors = this.state.errors.length > 0
    var errorClass = classNames('flash', 'errors', {
      visible: hasErrors
    })

    var errors = hasErrors ? this.state.errors.map((error, i) => {
      return <ErrorMessage key={ i } header={ error.key } message={ error.message } />
    }) : null

    return (
      <div>
        <div className={ errorClass }>
          { errors }
        </div>
        <Back previous={ this.state.previous } />
        <div className="main">
          <div className="container">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}
