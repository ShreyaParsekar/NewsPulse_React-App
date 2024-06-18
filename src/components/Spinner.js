import React from 'react'
import spinner from './spinner.gif'

const Spinner = () => {
  
    return (
      <div className='text-center'>
        <img src={spinner} className='my-5' alt="loading"></img>
      </div>
    )
  
}
export default Spinner
