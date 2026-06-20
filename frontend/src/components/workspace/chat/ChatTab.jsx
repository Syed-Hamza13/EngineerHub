import { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

function ChatTab() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! How can I help with your research?",
    },
  ]);

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
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <div className="grid grid-cols-12 gap-6 p-6 min-h-[600px]">
        {/* Chat Area */}
        <div className="col-span-8 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-6 pr-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
          </div>

          {/* Input */}
          <ChatInput onSendMessage={handleSendMessage} />
        </div>

        {/* Quick Actions */}
        <div className="col-span-4">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">
            Quick Actions
          </h3>
          <div className="space-y-2">
            {[
              "Analyze Documents",
              "Generate Summary",
              "Find Research Gaps",
              "Generate PPT",
              "Literature Review",
              "Generate Report",
            ].map((action, index) => (
              <button
                key={index}
                className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all border border-slate-200 hover:border-blue-200"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatTab;
