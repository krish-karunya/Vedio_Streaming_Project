import React from "react";

const ChatMessage = ({ name, text }) => {
  return (
    <div className='flex items-center shadow-lg rounded-lg my-4  bg-gray-900 text-white'>
      <img
        className='h-8'
        src='https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png'
        alt='user icon'
      />
      <span className='font-bold  '>{name}</span>
      <span className='items-center px-2'>{text}</span>
    </div>
  );
};

export default ChatMessage;
