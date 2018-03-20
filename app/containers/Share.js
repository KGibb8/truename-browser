import React from 'react'
import classNames from 'classnames'

import {
  isNumber,
  splitTrueName
} from '../actions/truename'

import Piece from '../components/Piece'
import ShareForm from '../components/forms/ShareForm'
import ErrorMessage from '../components/helpers/ErrorMessage'

export default class Share extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pieces: [],
      frozen: false,
      errors: []
    }
  }

  showPieces(pieces) {
    this.setState({
      errors: [],
      pieces: pieces
    })
  }

  showErrors(errors) {
    this.setState({
      errors: errors
    })
  }

  handleFreeze(event) {
    event.preventDefault()
    this.setState({
      frozen: !this.state.frozen
    })
  }

  handleClear(event) {
    event.preventDefault()
    this.setState({
      pieces: []
    })
  }

  render() {
    var hasPieces = this.state.pieces.length > 0
    var hasErrors = this.state.errors.length > 0

    var pieces = hasPieces ? this.state.pieces.map((piece, i) => {
      return <Piece key={ i } content={ piece } number={ i + 1 }/>
    }) : null

    var errors = hasErrors ? this.state.errors.map((error, i) => {
      return <ErrorMessage key={ i } header={ error.key } message={ error.message } />
    }) : null

    var rowClass = classNames("row", {
      "bg-white": true,
      "bg-semi-transparent": true,
      "space-below": true
    })
    var piecesClass = classNames("pieces", {
      "padded": hasPieces
    })
    var fullWidthClass = classNames("twelve", "columns")
    return (
      <div>
        <div className={ rowClass }>
          <div className={ fullWidthClass }>
            <h2>Split your True Name into pieces</h2>
          </div>
        </div>
        <div className={ rowClass }>
          <ShareForm
            showPieces={ this.showPieces.bind(this) }
            showErrors={ this.showErrors.bind(this) }
            frozen={ this.state.frozen }
            handleFreeze={ this.handleFreeze.bind(this) }
            handleClear={ this.handleClear.bind(this) }
          />
        </div>
        <div className={ rowClass }>
          <div className={ fullWidthClass }>
            { hasErrors ? errors : pieces }
          </div>
        </div>
      </div>
    )
  }
}
