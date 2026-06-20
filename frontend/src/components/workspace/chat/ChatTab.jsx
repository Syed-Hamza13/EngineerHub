import { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

function ChatTab() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! How can I help with your research?",
    },
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSendMessage = (content) => {
    const userMessage = {
      role: "user",
      content,
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        role: "assistant",
        content: "I'm analyzing your request. This is a placeholder response.",
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div
      className="
  bg-white
  border
  border-slate-200
  rounded-2xl
  overflow-hidden
  flex
  flex-col
  h-full
"
    >
      {/* Chat Area */}
      <div className="h-full flex flex-col">
        {/* Messages */}
        <div
          className="
            flex-1
            overflow-y-auto
            px-6
            py-6
          "
        >
          <div className="max-w-4xl mx-auto space-y-8">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            <div ref={bottomRef}></div>
          </div>
        </div>

        {/* Input */}
        <div
          className="
            border-t
            border-slate-200
            bg-white
            px-6
            py-4
          "
        >
          <div className="max-w-4xl mx-auto">
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatTab;
