import React, { useState } from 'react';
import ChatBox from './components/ChatBox';
import { RxCross1 } from "react-icons/rx";

// Define MessageType
interface MessageType {
  id: number;
  title: string;
  text: string;
}

const App: React.FC = () => {
  const initialInsights = [
    { id: 1, title: "Insight 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 2, title: "Insight 2", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." },
    { id: 3, title: "Insight 3", text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." },
    // Add more static insights as needed
  ];

  const [messages, setMessages] = useState<MessageType[]>([]);
  const [startClicked, setStartClicked] = useState(false);
  const [initialMessage, setInitialMessage] = useState<string>("");

  const handleStart = () => {
    if (!startClicked) {
      // Logic to send initial message
      setInitialMessage("Hello! I am your bot.");
      setMessages(initialInsights);
      setStartClicked(true); // Set start clicked to true
    }
  };

  const handleStop = () => {
    // Logic to stop chat or handle stop event
    setStartClicked(false); // Set start clicked to false
    //setMessages([]); // Optionally clear messages when stopped
    //setInitialMessage("");
  };

  const handleDeleteMessage = (id: number) => {
    const updatedMessages = messages.filter(message => message.id !== id);
    setMessages(updatedMessages);
  };

  const handleInitialMessageDelete = () => {
    setInitialMessage(""); // Clear initial message
  };

  return (
    <div className="App h-screen bg-black flex flex-col justify-center items-center">
      <div className="grid grid-cols-4 w-full h-full">
        <div className="col-span-3 bg-blue-100 flex justify-center items-center">
          <div className="w-full h-full flex items-center justify-center">
            Video Cam
          </div>
        </div>
        <div className="col-span-1 bg-white p-2 flex flex-col items-center shadow-lg h-full">
          <h1 className="text-3xl font-bold mb-2 border-b-2">Bot Insights</h1>
          <ChatBox initialMessage={initialMessage} messages={messages} onStart={handleStart} onStop={handleStop} startClicked={startClicked} onDelete={handleDeleteMessage}  onInitialMessageDelete={handleInitialMessageDelete}/>
        </div>
      </div>
    </div>
  );
};

export default App
