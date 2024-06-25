import React, { useState } from 'react';
import ChatBox from './components/ChatBox';

// Define MessageType
interface MessageType {
  text: string;
  id: number;
}

const App: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [startClicked, setStartClicked] = useState(false);

  const handleStart = () => {
    if (!startClicked) {
      // Logic to send initial message
      const initialMessage: MessageType = { id: Date.now(), text: "Hello! I am your bot." };
      setMessages([initialMessage]);
      setStartClicked(true); // Set start clicked to true
    }
  };

  const handleStop = () => {
    // Logic to stop chat or handle stop event
    setStartClicked(false); // Set start clicked to false
    //setMessages([]); // Optionally clear messages when stopped
  };

  return (
    <div className="App h-screen bg-black flex flex-col justify-center items-center">
      <div className="grid grid-cols-4 w-full h-full">
        <div className="col-span-3 bg-blue-100 flex justify-center items-center">
          <div className="w-full h-full flex items-center justify-center">
            Video Cam
          </div>
        </div>
        <div className="col-span-1 bg-white p-2 flex flex-col items-center shadow-lg h-full ">
          <h1 className="text-3xl font-bold mb-2 border-b-2 ">Bot Insights</h1>
          <ChatBox messages={messages} onStart={handleStart} onStop={handleStop} startClicked={startClicked} />
        </div>
      </div>
    </div>
  );
};

export default App;
