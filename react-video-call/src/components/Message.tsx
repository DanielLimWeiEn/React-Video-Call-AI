import React from 'react';

interface MessageProps {
  text: string;
  id: number;
}

const Message: React.FC<MessageProps> = ({ text, id }) => {
  return (
    <div className="Message bg-gray-200 rounded-lg p-3 mb-2">
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default Message;
