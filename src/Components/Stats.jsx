import React, { useContext } from 'react'
import { Avatar } from './Avatar'
import { TwitterContext } from '../utils/context'
import { useDispatch, useSelector } from 'react-redux';
import { changeStats } from '../actions/statsAction';

export const Stats = () => {
    const {followers, following} = useSelector(state => state.stats);
    const name = useSelector(state => state.user.name);
    const dispatch = useDispatch();

    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {name}
            </div>
            <div className='stats'>
                <div
                    onClick={() => dispatch(changeStats('followers', 1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats('followers', -1));
                    }}
                >Followers: {followers}</div>
                <div
                    onClick={() => dispatch(changeStats('following', 1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats('following', -1));
                    }}
                >Following: {following}</div>
            </div>
        </div>
    )
}
