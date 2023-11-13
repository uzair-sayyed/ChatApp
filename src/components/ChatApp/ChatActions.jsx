import { LuPaperclip } from "react-icons/lu";
import { BiSend } from "react-icons/bi";
import { useState } from "react";
import cameraImage from "../../assets/camera.png";
import videoImage from "../../assets/video.png";
import documentImage from "../../assets/document.png";
import cornerImage from "../../assets/Corner.png";

export default function ChatActions() {
  const [documentOpen, setDocumentOpen] = useState(false);

  function handleOpenPaperClickModal() {
    setDocumentOpen((prevState) => !prevState);
  }

  return (
    <>
      <div className='chat-actions'>
        <div className='chat-actions-group'>
          <span>|</span>
          <input type='text' placeholder='Reply to @Rohit Yadav' />
          <div className='chat-actions-button'>
            <LuPaperclip
              className='action-button'
              onClick={handleOpenPaperClickModal}
            />
            <BiSend className='action-button' />

            {documentOpen && (
              <div className='send-document-modal'>
                <img src={cameraImage} />
                <img src={videoImage} />
                <img src={documentImage} />
                <div className='corner-image'>
                  <img src={cornerImage} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='home-button'>
        <hr />
      </div>
    </>
  );
}
