import React from 'react'

type propsType = {
    name?: string
}
const HelloName = (props:propsType) => {
  return (
    <>
    <div>Hello {props.name}</div>

    </>
  )
}

export default HelloName