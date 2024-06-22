import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessages } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);

  //API Polling :
  useEffect(() => {
    const i = setInterval(() => {
      // console.log("API Polling");
      dispatch(
        addChatMessage({
          name: generateRandomName(),
          text: makeRandomMessages(20),
        })
      );
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <form
      className=' bg-gray-900 text-white'
      onSubmit={(e) => {
        e.preventDefault();
        // console.log("ON FORM SUBMIT ", liveMessage);
        dispatch(
          addChatMessage({
            name: "Krishna",
            text: liveMessage,
          })
        );
        setLiveMessage("");
      }}>
      <div className='h-[600px] w-full p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((msg, index) => {
          return <ChatMessage name={msg.name} text={msg.text} key={index} />;
        })}
      </div>
      <div className='m-2 p-2 rounded-md w-full border border-black flex'>
        <input
          type='text'
          className='border border-black w-72 rounded-lg px-2'
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className='bg-slate-500  p-2 rounded-md ml-1'>◀️Send</button>
      </div>
    </form>
  );
};

export default LiveChat;
