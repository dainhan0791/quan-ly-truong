import React from 'react'

const Title = ({title}: {title: string}) => {
  return (
    <h1 className={`text-lg font-medium`}>
        {title ?? null}
    </h1>
  )
}

export default Title