import React from 'react'

const Layout = ({children}) => {
  return (
    <div className=' flex flex-col gap-y-64 flex-grow-1 px-4'>
        {children}
    </div>
  )
}

export default Layout