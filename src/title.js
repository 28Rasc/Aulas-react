'use strict'

import React from 'react'

const Title = React.createClass({
  render: function () {
    return (
      <div> olá {this.props.name}! </div>
    )
  }
})

export default Title
