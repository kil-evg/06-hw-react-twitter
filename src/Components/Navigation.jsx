import React from 'react'
import { Avatar } from './Avatar'

export const Navigation = ({user, changeAvatar}) => {
  return (
    <div className='nav'>
        <Avatar changeAvatar={changeAvatar} user={user} size='small'/>
    </div>
  )
}
