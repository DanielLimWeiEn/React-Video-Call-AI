import React, { useState } from 'react';
import ChatBox from './components/ChatBox';

// Define MessageType
interface MessageType {
  id: number;
  title: string;
  text: string;
}

const App: React.FC = () => {
  const initialInsights = [
    { id: 1, title: "Insight 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 2, title: "Insight 2", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
    { id: 3, title: "Insight 3", text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." },
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
          <ChatBox initialMessage={initialMessage} messages={messages} onStart={handleStart} onStop={handleStop} startClicked={startClicked} />
        </div>
      </div>
    </div>
  );
};

export default App
