import React, { useEffect, useState } from 'react'
import LoginPage from './pages/LoginPage'
import RoomPage from './pages/RoomPage'
import ChatPage from './pages/ChatPage'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Loader from './components/Loader'


const App = () => {
const [user, setUser] = useState(undefined)
const [room, setRoom] = useState(null)

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })
return () => unsub()
  },[])

  if(user===undefined) return <Loader/>

  if(!user){
    return <LoginPage />
  }

  if(room){
    return <ChatPage room={room} setRoom={setRoom}/>
  }
  return <RoomPage setRoom={setRoom}/>
}

export default App