import EmojiPicker from "emoji-picker-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase";

const Form = ({room}) => {
  const [text, setText] = useState("");
  const [picker, setPicker] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim() === "") return;

    const collectionRef = collection(db, "messages")
    addDoc(collectionRef, {
      text,
      room,
      author:{
        id: auth.currentUser.uid,
        name:auth.currentUser.displayName,
        photo:auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp()
    })
    setText(""); // inputu temizle
    setPicker(false);
  };
  return (
    <form
      className="p-5 text border-2 shadow-lg md:rounded-md flex justify-center items-center px-6 gap-3"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Please text the message.."
        className="border p-2 rounded-md px-4 shadow-lg outline-none w-full text-black font-normal text-sm"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      
      <div className="relative">
      <div className={`absolute top-[-470px] right-[-60px]  ${picker ? "block" : "hidden"}`}>
        <EmojiPicker onEmojiClick={(e)=>setText(prev => prev  + e.emoji)}/>
      </div>
      <button type="button" className="flex gap-4 items-center border p-2 rounded-md px-4 shadow-lg bg-greenn text-white hover:shadow-2xl transition cursor-pointer" onClick={()=>setPicker(!picker)}>
        <span className="">😊</span>
      </button>
      </div>
      <button
        type="submit"
        className="flex gap-4 items-center border p-2 rounded-md px-4 shadow-lg bg-greenn text-white hover:shadow-2xl transition cursor-pointer"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
