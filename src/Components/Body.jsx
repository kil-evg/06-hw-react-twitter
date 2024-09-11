import React from 'react'
import { Sidebar } from './Sidebar'
import { Content } from './Content'

export const Body = ({user, stats, changeAvatar}) => {
  return (
    <div className='body'> 
        <Sidebar changeAvatar={changeAvatar} user={user} stats={stats}/>
        <Content />
    </div>
  )
}
