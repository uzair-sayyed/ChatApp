import ChatHeader from "./ChatHeader";
import ChatContent from "./ChatContent";
import ChatActions from "./ChatActions";

export default function ChatApp({ data }) {
  return (
    <>
      <ChatHeader />
      <ChatContent data={data} />
      <ChatActions />
    </>
  );
}
