'use strict'

import React, { Component } from 'react'
import Title from './title'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Title lastName='Cavalcanti' />
      </div>
    )
  }
}
// const App = React.createClass({
//   render: function () {
//     return (
//       <div data-id='1'>
//         <Title lastName='Cavalcanti' />
//       </div>
//     )
//   }
// })

export default App
