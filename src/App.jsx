import './App.css'
import { Navigation } from './Components/Navigation'
import { Body } from './Components/Body'
import { useState } from 'react'
import { TwitterContext } from './utils/context'

function App() {
  const [user, setUser] = useState({
    name: 'Monster',
    avatar: 'https://gravatar.com/avatar/000?d=monsterid'
  })

  const [stats, setStats] = useState({
    followers: 0,
    following: 0
  })

  const changeAvatar = url => {
    setUser(prevState => ({ ...prevState, avatar: url || prevState.avatar }))
  }

  const changeName = name => {
    setUser(prevState => ({ ...prevState, name: name || prevState.name }))
  }

  const changeFollowers = count => {
    setStats(prevState => {
      return (prevState.followers + count < 0 ? prevState : { ...prevState, followers: prevState.followers + count });
    })
  }

  const changeFollowing = count => {
    setStats(prevState => {
      return (prevState.following + count < 0 ? prevState : { ...prevState, following: prevState.following + count });
    })
  }

  return (
    <div className='app'>
      <TwitterContext.Provider value={{
        user, stats, changeAvatar, changeName, changeFollowers, changeFollowing
      }}>
        <Navigation />
        <Body />
      </TwitterContext.Provider>
    </div>
  )
}

export default App
