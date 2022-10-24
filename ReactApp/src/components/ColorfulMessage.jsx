import React from 'react'

const ColorfulMessage = (props) => {
  console.log('カラフル')
  const { color, children } = props
  const constentStyle = {
    color,
    fontSize: '18px'
  }

  return <p style={constentStyle}>{children}</p>
}

export default ColorfulMessage
