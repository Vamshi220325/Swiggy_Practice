import { useRouteError } from 'react-router-dom'
import React from 'react'

const Error = () => {
  const err=useRouteError();
  console.log(err);
  return (
    <div>Error</div>
  )
}

export default Error