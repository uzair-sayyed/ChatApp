import backImage from "../../assets/Back.png";
import editImage from "../../assets/edit.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import chatPerson1Image from "../../assets/chatPerson1.png";
import chatPerson2Image from "../../assets/chatPerson2.png";
import chatPerson3mage from "../../assets/chatPerson3.png";
import chatPerson4Image from "../../assets/chatPerson4.png";
import { useState } from "react";
import callImage from "../../assets/Call.png";
import personIconImage from "../../assets/person.png";
import reportMessageImage from "../../assets/ReportMessage.png";

export default function ChatHeader() {
  const [chatSeetingOpen, setChatSettingOpen] = useState(false);

  function handleOpenChatHeaderSetting() {
    setChatSettingOpen((prevState) => !prevState);
  }

  return (
    <div className='chat-header'>
      <div className='chat-group'>
        <img src={backImage} alt='Back Button' />
        <h2 className='chat-group-title'>Trip 1</h2>
        <img src={editImage} alt='Edit Button' />
      </div>
      <div className='chat-persons'>
        <div className='chat-persons-image-group'>
          <img src={chatPerson1Image} alt='' />
          <img src={chatPerson2Image} alt='' />
          <img src={chatPerson3mage} alt='' />
          <img src={chatPerson4Image} alt='' />
        </div>
        <div className='chat-from-to'>
          <p>
            <span>From</span> IGI Airpot, T3
          </p>
          <p>
            <span>To</span> Sector 28
          </p>
        </div>
        <div className='chat-persons-action-button'>
          <button
            className='chat-persons-actions-button-icon'
            onClick={handleOpenChatHeaderSetting}
          >
            <BsThreeDotsVertical className='chat-persons-action-button-logo' />
          </button>
          {chatSeetingOpen && (
            <div className='chat-setting-modal'>
              <button className='chat-persons-modal-button'>
                <img src={personIconImage} alt='Person' />
                <a href='#'>Members</a>
              </button>
              <button className='chat-persons-modal-button'>
                <img src={callImage} alt='Share Number' />
                <a href='#'>Share Number</a>
              </button>
              <button className='chat-persons-modal-button'>
                <img src={reportMessageImage} alt='Report Message' />
                <a href='#'>Report</a>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
