'use strict'

import React from 'react'

const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Desconhecido',
      lastName: 'Sem Sobrenome'

    }
  },
  render: function () {
    return (
      <div> olá, {this.props.name} {this.props.lastName}! </div>
    )
  }
})

export default Title
