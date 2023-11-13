import Chats from "./Chats";
import React from "react";

export default function ChatContent({ data }) {
  return (
    <div className='chat-content'>
      <div className='chat-date-month-year'>
        <hr color='#b7b7b7' size='1' />
        <p>12 JAN, 2023</p>
      </div>
      <div className='chat-conversations'>
        <ul className='received-chats'>
          {data &&
            data.chats.map((chat) => {
              return <Chats key={chat.id} data={chat} />;
            })}
        </ul>
      </div>
    </div>
  );
}
