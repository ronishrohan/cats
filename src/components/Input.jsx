import React from 'react'

function Input({...others}) {
  return (
    <input className='w-full p-4 bg-card-100 rounded-xl placeholder-card-900 text-primary-900 border-2 border-transparent transition-colors focus:border-primary-300 focus:outline-none ' {...others}></input>
  )
}

export default Input