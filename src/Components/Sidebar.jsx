import React from 'react'
import { Stats } from './Stats'

export const Sidebar = ({user, stats, changeAvatar}) => {
  return (
    <div className='sidebar'>
        <Stats user={user} stats={stats} changeAvatar={changeAvatar}/>
    </div>
  )
}
