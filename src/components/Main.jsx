import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import Message from "./Message";

const Main = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const [isAtBottom, setIsAtBottom] = useState(true)
  const lastMsgRef = useRef()
  const containerRef= useRef()

  useEffect(() => {
    const collectionRef = collection(db, "messages");

    const q = query(
      collectionRef,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    const unsub = onSnapshot(q, (data) => {
      const temp = [];
      data.docs.forEach((doc) => {
        temp.push(doc.data());
      });
      setMessages(temp);
    });
    return () => unsub();
  }, []);


  

  useEffect(()=>{
    if(messages.length > 0){
      const lastMsg = messages[messages.length - 1]
      if(lastMsg.author.id === auth.currentUser.uid){
        scrollToBottom()
      }else if(isAtBottom ){
        scrollToBottom()
      }
     
    }
   
  },[messages])

  const scrollToBottom = () => {
    lastMsgRef.current.scrollIntoView()
  }
  const handleScroll = () => {
    if(containerRef.current){
      const {scrollTop, scrollHeight, clientHeight} = containerRef.current;
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 200)
    }
  }

  return (
    <main onScroll={handleScroll} ref={containerRef} className="flex-1 p-3 text border-2 shadow-lg md:rounded-md overflow-y-auto overflow-x-hidden relative">
      {messages?.length < 1 ? (
        <div className="grid place-items-center text-zinc-400 h-full">
          <p>Send your first message now!</p>
        </div>
      ) : (
        <div className="flex  flex-col gap-3 p-3">
          {messages.map((i, key) => (
            <Message key={key} data={i} />
          ))}
        </div>
      )}
      <div ref={lastMsgRef}/>
      {!isAtBottom && <button onClick={scrollToBottom} className="sticky bottom-0 ml-auto flex justify-end bg-gray-200 rounded-lg p-1 hover:bg-gray-300 transition">
        <img src="/arrow.png" className="w-6 " /></button>}
    </main>
  );
};

export default Main;
