'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return (
      <div data-id='1'>
        <Title lastName='Cavalcanti' />
      </div>
    )
  }
})

export default App
