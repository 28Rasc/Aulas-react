'use strict'

import React from 'react'

const Title = ({ name, lastName }) => ( // short handle notacion in props
  <h1>Olá, {`${name} ${lastName}`}</h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastName: 'semSobrenome'
}

export default Title
