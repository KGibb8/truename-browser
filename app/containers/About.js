import React from 'react'
import classNames from 'classnames'

export default class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var rowClass = classNames("row", {
      "bg-white": true,
      "bg-semi-transparent": true,
      "space-below": true
    })
    var fullWidthClass = classNames("twelve", "columns", "padded")
    return (
      <div className={ rowClass }>
        <div className={ fullWidthClass }>
          <p>
            Split your super secret True Name into multiple pieces and send them to your friends.
          </p>
          <p>
            These pieces can be combined to recover your True Name at any point in time. Set the number
            of friends consent required to recover the secret and reveal its hidden powers.
          </p>
          <p>
            This tool is a simple free and open source offline wrapper for secret sharing.
          </p>
        </div>
      </div>
    )
  }
}
