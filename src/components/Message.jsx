import React from 'react'
import { auth } from '../firebase';
import getUserColor from '../utils/getUserColor';

const Message = ({data}) => {

    
    if(data.author.id === auth.currentUser.uid){
        return <div className="giden-mesaj max-w-[90%] p-2 bg-blue-100 text-black font-normal text-sm rounded-[7px_7px_0_7px] self-end message">{data.text}</div>
    }
    
  return (
    <div className='flex gap-1 items-start'>
        <img src={data.author.photo} className='size-[30px] rounded-full' />
        <div className='flex flex-col gap-1 w-full '>
            <span className='font-bold whitespace-nowrap text-custom text-sm' style={{
            color: getUserColor(data.author),
          }}>{data.author.name}</span>
            <div className='text-black font-normal text-sm bg-gray-100 p-2 rounded-[0_7px_7px_7px] max-w-[90%] message '>{data.text}</div>
        </div>
    </div>
  )
}

export default Message