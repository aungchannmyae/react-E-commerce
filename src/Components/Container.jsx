import React from 'react'

const Container = ({children}) => {
  return (
    <div className=' max-md:w-screen md:w-[700px] lg:w-[900px] xl:w-[1200px] mx-auto'>{children}</div>
  )
}

export default Container