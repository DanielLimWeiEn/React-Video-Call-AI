import React, { useState } from 'react';
import Message from './Message';

interface MessageType {
  id: number;
  title: string;
  text: string;
}

interface ChatBoxProps {
  initialMessage: string;
  messages: MessageType[];
  onStart: () => void; // Function to handle start event
  onStop: () => void; // Function to handle stop event
  startClicked: boolean; // Boolean to track if start button has been clicked
  className?: string; // Add className prop for additional styling
}

const ChatBox: React.FC<ChatBoxProps> = ({ initialMessage, messages, onStart, onStop, startClicked, className }) => {
  const [expandedMessageIds, setExpandedMessageIds] = useState<number[]>([]);

  const handleButtonClick = () => {
    if (!startClicked) {
      onStart(); // Call the onStart function passed from App component
    } else {
      onStop(); // Call the onStop function passed from App component
      setExpandedMessageIds([]); // Clear expanded messages when stopping
    }
  };

  const handleCardClick = (id: number) => {
    if (expandedMessageIds.includes(id)) {
      setExpandedMessageIds(expandedMessageIds.filter((itemId) => itemId !== id)); // Collapse the clicked card
    } else {
      setExpandedMessageIds([...expandedMessageIds, id]); // Expand the clicked card
    }
  };

  return (
    <div className={`ChatBox bg-blue-50 rounded-lg shadow-lg p-3 flex h-full w-full flex-col ${className}`}>
      <div className="flex-1 overflow-y-auto mb-4">
        {initialMessage && (
          <div className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md transition-all duration-300 ease-in-out">
            {initialMessage}
          </div>
        )}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-4 mb-4 bg-white rounded-lg shadow-md cursor-pointer ${
              expandedMessageIds.includes(message.id) ? 'h-auto' : 'h-16'
            }`}
            onClick={() => handleCardClick(message.id)}
            style={{
              transition: 'height 0.3s ease-in-out', // CSS transition for height change
              overflow: 'hidden', // Hide overflow content when collapsed
            }}
          >
            <h2 className="font-bold">{message.title}</h2>
            {expandedMessageIds.includes(message.id) && <p>{message.text}</p>}
          </div>
        ))}
      </div>
      <div className="mt-auto border-t-2 border-gray-300 pt-1 flex justify-center">
        <button
          onClick={handleButtonClick}
          className={`${startClicked ? 'bg-red-500' : 'bg-green-500'} hover:${startClicked ? 'bg-red-700' : 'bg-green-700'} text-white font-bold py-2 px-16 rounded-full shadow-lg transition-all duration-300 ease-in-out`}
        >
          {startClicked ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
