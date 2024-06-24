import React, { useState } from 'react';
import Message from './Message';

interface MessageType {
  text: string;
  id: number;
}

interface ChatBoxProps {
  messages: MessageType[];
  onStart: () => void; // Function to handle start event
  onStop: () => void; // Function to handle stop event
  startClicked: boolean; // Boolean to track if start button has been clicked
  className?: string; // Add className prop for additional styling
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages, onStart, onStop, startClicked, className }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    if (!startClicked) {
      onStart(); // Call the onStart function passed from App component
      setShowMessage(true); // Optionally show additional message or handle other actions
    } else {
      onStop(); // Call the onStop function passed from App component
      setShowMessage(false); // Optionally hide additional message or handle other actions
    }
  };
  
  return (
    <div className={`ChatBox bg-white rounded-lg shadow-lg p-3 flex h-screen w-full flex-col ${className}`}>
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((message) => (
          <Message key={message.id} text={message.text} />
        ))}
      </div>
      <div className="mt-auto border-t-2 border-gray-300 pt-1 flex justify-center">
      <button
          onClick={handleButtonClick}
          className={`${startClicked ? 'bg-red-500' : 'bg-green-500'} hover:${startClicked ? 'bg-red-700' : 'bg-green-700'} text-white font-bold py-2 px-16 rounded-full shadow-lg`}
        >
          {startClicked ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
