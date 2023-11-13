export default function Chats({ data }) {
  return (
    <li className='recieved-chat'>
      <img src={data.sender.image} alt='Sender Image' />
      <div className='chat-message'>
        <p>{data.message}</p>
      </div>
    </li>
  );
}
