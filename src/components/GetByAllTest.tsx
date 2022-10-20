import React from 'react'

type propsType = {
  users: string[];
}

const GetByAllTest = (props :propsType) => {
  // const filterList = props.users.slice(0, 1);
  return (
    <>
    <h1>List of users</h1>
    <ul>
    {props.users.map((user) => {
      return <li>List - {user}</li>
    })}
    </ul>
    </>
  )
}

export default GetByAllTest