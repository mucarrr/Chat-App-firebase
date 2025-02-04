import React from 'react'
import { auth } from '../firebase'

const Header = ({room, setRoom}) => {
  return (
    <header className='flex justify-between items-center gap-4 p-5 text border-2 shadow-lg md:rounded-md'>

          <p>{auth.currentUser.displayName}</p>
          <p>{room}</p>
          <button onClick={()=>setRoom(null)} className="flex gap-4 items-center border p-2 rounded-md px-4 shadow-lg bg-custom text-white hover:shadow-2xl transition cursor-pointer">Rooms</button>
        </header>
  )
}

export default Header