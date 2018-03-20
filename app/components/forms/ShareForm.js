import React from 'react'
import { range } from 'lodash'
import classNames from 'classnames'

import {
  isNumber,
  splitTrueName
} from '../../actions/truename'

import Piece from '../Piece'
import Select from '../helpers/Select'
import Form from '../helpers/Form'
import Input from '../helpers/Input'
import Button from '../helpers/Button'

import ErrorMessage from '../helpers/ErrorMessage'

export default class ShareForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pieceQuantity: 1,
      quorum: 1,
      trueName: ''
    }
  }

  validateForm(state) {
    var errors = []
    if (!(isNumber(state.pieceQuantity) && state.pieceQuantity > 1)) {
      errors.push({ key: "pieceQuantity", message: "Pieces must be over 1", className: 'alert'})
    }
    if (!(isNumber(state.quorum) && state.quorum > 1)) {
      errors.push({ key: "quorum", message: "Quorum must be over 1", className: 'alert' })
    }
    if (!(state.pieceQuantity >= state.quorum)) {
      errors.push({ key: "piecesToQuorum", message: "Pieces must be greater than quorum", className: 'alert' })
    }
    if (!(state.trueName.length > 0)) {
      errors.push({ key: "trueName", message: "Enter your true name", className: 'alert' })
    }
    return errors
  }

  splitTrueName(state) {
    var errors = this.validateForm(state)
    if (errors.length == 0) {
      var pieces = splitTrueName(state.trueName, state.pieceQuantity, state.quorum)
      this.props.showPieces(pieces)
    } else {
      this.props.showErrors(errors)
    }
  }

  handleChange(event) {
    var nextState = this.state
    var key = event.target.name
    nextState[key] = event.target.value
    this.setState(nextState)
    this.splitTrueName(nextState)
  }

  render () {
    var frozen = this.props.frozen
    var isFrozen = classNames("nine", "columns", { "frozen": frozen })
    var btnClass = classNames("button", {
      "bg-red": frozen,
      "white": frozen,
      "button-primary": !frozen
    })
    return (
      <Form>
        <div className={ isFrozen }>
          <div className="row">
            <div className="two columns">
              <Select
                disabled={ frozen }
                name="pieceQuantity"
                range={ range(1, 10) }
                onChange={ this.handleChange.bind(this) }
                label="Pieces"
              />
            </div>

            <div className="two columns">
              <Select
                disabled={ frozen }
                name="quorum"
                range={ range(1, 10) }
                onChange={ this.handleChange.bind(this) }
                label="Quorum"
              />
            </div>

            <div className="eight columns">
              <Input
                disabled={ frozen }
                name="trueName"
                type="text"
                onChange={ this.handleChange.bind(this) }
                label="True Name"
              />
            </div>
          </div>
        </div>

        <div className="three columns">
          <a href="#" title="Freeze">
            <i className={ classNames('fa', 'fa-stop', 'fa-lg', 'grey', 'padded') } onClick={ this.props.handleFreeze }></i>
          </a>
          <a href="#" title="Clear">
            <i className={ classNames('fa', 'fa-step-backward', 'fa-lg', 'grey', 'padded') } onClick={ this.props.handleClear }></i>
          </a>
        </div>
      </Form>
    )
  }
}
