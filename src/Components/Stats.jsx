import React, { useContext } from 'react'
import { Avatar } from './Avatar'
import { TwitterContext } from '../utils/context'

export const Stats = () => {
    const { user, stats, changeFollowers, changeFollowing } = useContext(TwitterContext);

    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {user.name}
            </div>
            <div className='stats'>
                <div
                    onClick={() => {
                        changeFollowers(1);
                    }}
                    onContextMenu={e => {
                        e.preventDefault();
                        changeFollowers(-1);
                    }}>
                    Followers: {stats.followers}
                </div>

                <div
                onClick={() => {
                    changeFollowing(1);
                }}
                onContextMenu={e => {
                    e.preventDefault();
                    changeFollowing(-1);
                }}
                >
                    Following: {stats.following}
                </div>
            </div>
        </div>
    )
}
