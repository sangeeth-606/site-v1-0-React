import React from 'react'
import Header from '../other/Header'
import Tasklistnumbers from '../other/Tasklistnumbers'
import Tasklist from '../TaskList/Tasklist'

const EmployeDashboard = () => {
  return (
    <div className='p-10 bg-[icicic] h-screen '  >
        <Header />
        <Tasklistnumbers />
        <Tasklist />
    </div>
  )
}

export default EmployeDashboard