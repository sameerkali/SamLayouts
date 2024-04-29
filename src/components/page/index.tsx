import React from 'react'
import {PageProps} from './types'
const Page: React.FC<PageProps> = ({title, children}) => {
  return (
    <>
    <h1>{title}</h1>
    {children}
    </>
  )
}

export default Page