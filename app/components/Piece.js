import React from 'react'
import QRCode from 'qrcode.react'
import classNames from 'classnames'
import Button from './helpers/Button'

export default class Piece extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showQR: false
    }
  }

  showQrCode () {
    this.setState({ showQR: !this.state.showQR })
  }

  render () {
    var rowClass = classNames('row')
    var pieceAsStringClass = classNames('columns', 'eight')
    var optionsClass = classNames('one', 'column')
    var pieceAsQrClass = classNames('columns', 'three')
    var qrCode = this.state.showQR ? <QRCode value={ this.props.content } /> : null
    return (
      <div className={ rowClass }>
        <div className={ pieceAsStringClass }>
          <h4>{ this.props.content }</h4>
        </div>
        <div className={ optionsClass }>
          <Button onClick={ this.showQrCode.bind(this) } label="QR Code"/>
        </div>
        <div className={ pieceAsQrClass }>
          { qrCode }
        </div>
      </div>
    )
  }
}
