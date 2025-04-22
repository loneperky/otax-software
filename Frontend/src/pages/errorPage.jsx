import React from 'react'
import { useEffect } from 'react'

const ErrorPage = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);

  return (
    <>
      <div className="error">
        <h1>404</h1>
        <p>Error, Page Not Found</p>
      </div>
    </>
  )
}

export default ErrorPage