import React from 'react'

const ErrorMessage = ({message}: {message: string}) => {
  return (
    <span className='text-sm text-red-500 dark:text-red-400'>{message}</span>
  )
}

export default ErrorMessage