import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const RoomPage = ({setRoom}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
   const room = e.target[0].value.toLowerCase()
   setRoom(room)
  }
  const handleLogout = () => {
    signOut(auth)
  }
  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit} className="containerr">
      <h1 className="text-4xl font-bold">CHAT ROOM</h1>
      <p className="text-custom font-semibold">Which room do you want to join?</p>
      <input type="text" placeholder='ex: classmates' required className='border p-2 rounded-md px-4 shadow-lg  hover:shadow-2xl transition outline-none w-[310px]'/>
      <div className='flex gap-4'>
      <button className="flex gap-4 items-center border p-2 rounded-md px-4 shadow-lg  hover:shadow-2xl transition cursor-pointer font-semibold bg-green-400 text-white w-[150px]" type="submit">Join the room</button>
      <button className="flex gap-4 items-center border p-2 rounded-md px-4 shadow-lg bg-red-500 text-white hover:shadow-2xl transition cursor-pointer font-semibold w-[150px] justify-center" type="button" onClick={handleLogout}>Log out</button>
      </div>
      </form>
    </div>
  )
}

export default RoomPage