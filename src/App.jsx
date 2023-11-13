import "./App.css";
import ChatApp from "./components/ChatApp/ChatApp";
import ScreenHeader from "./components/ScreenHeader";
import { useEffect, useCallback, useState } from "react";
import React from "react";
// import "ldrs/lineSpinner";
// import { Bars } from "react-loading-icons";
import { ThreeDots } from "react-loading-icons";

function App() {
  const [data, setData] = useState(null);

  const handleFetchData = useCallback(async function handleFetchData() {
    const response = await fetch(
      "https://qa.corider.in/assignment/chat?page=0"
    );

    const data = await response.json();

    setData(data);
  }, []);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  return (
    <div className='chat-app'>
      <ScreenHeader />
      <ChatApp data={data} />
    </div>
  );
}

export default App;
