import React from 'react'
import QRCode from 'qrcode.react'
import classNames from 'classnames'

export default class Piece extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panelMaxHeight: null
    }
  }

  toggleAccordion(e) {
    e.preventDefault()
    var panel = e.currentTarget.nextElementSibling
    var maxHeight = this.state.panelMaxHeight !== null ? null : `${panel.scrollHeight}px`
    this.setState({
      panelMaxHeight: maxHeight
    })
  }

  copyToClipboard(e) {
    e.preventDefault()
    var toolTip = e.currentTarget.nextElementSibling
    var input = e.currentTarget.parentElement.previousElementSibling
    input.focus()
    input.select()
    document.execCommand('copy')
    toolTip.innerHTML = 'Copied'
    setTimeout(() => {
      toolTip.innerHTML = 'Copy to clipboard'
    }, 1000)
  }

  render () {
    var rowClass = classNames('row')
    var qrCode = <QRCode value={ this.props.content } size={ 384 } />
    var active = this.state.panelMaxHeight === null ? false : true
    var panelStyles = { maxHeight: this.state.panelMaxHeight }
    return (
      <div className={ rowClass }>
        <div className={ classNames('twelve', 'columns') }>

          <div className={ classNames("row", "accordion") } onClick={ this.toggleAccordion.bind(this) }>
            <div className={ classNames('ten', 'columns') }>
              <h4>{ this.props.number }</h4>
            </div>
            <div className={ classNames('two', 'columns') }>
              <i className={ classNames('arrow', 'grey') }>&darr;</i>
            </div>
          </div>

          <div className={ classNames("row", "panel", { active: active }) } style={ panelStyles }>
            <div className="triplepadded">
              <div className={ classNames("four", "columns") }>
                { qrCode }
              </div>
              <div className={ classNames("offset-by-one", "seven", "columns") }>
                <strong>Piece: </strong>
                <input className="spaced" type="text" value={ this.props.content } readOnly />
                <div className="tooltip">
                  <a href="#" title="Copy" onClick={ this.copyToClipboard.bind(this) } className="dedecorate">
                    <i className={ classNames('grey', 'bold') }>C</i>
                  </a>
                  <span className="tooltiptext" id="myTooltip">Copy to clipboard</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
