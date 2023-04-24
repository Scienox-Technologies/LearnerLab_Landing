import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='learner-lab-layout w-100 flex flex-col justify-center  gap-y-28 md:gap-y-64 flex-grow-1 '>
        {children}
    </div>
  )
}

export default Layout