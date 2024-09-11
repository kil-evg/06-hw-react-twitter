import React from 'react'

export const Avatar = ({ user, size, changeAvatar }) => {
  return (
    <div>
      <img
        onClick={() => {
          const url = prompt('Enter new avatar url');
          changeAvatar(url);
        }}
        className={`user-avatar ${size ?? ''}`}
        src={user.avatar}
        alt={user.name}
      />
    </div>
  )
}
