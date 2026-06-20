import { useState } from "react";
import { Send, Paperclip } from "lucide-react";

function ChatInput({ onSendMessage }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
      <div className="flex gap-3">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask anything about your research..."
          rows={3}
          className="flex-1 bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none"
        />

        <div className="flex flex-col gap-2">
          <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-white rounded-lg border border-slate-200 transition-all">
            <Paperclip size={20} />
          </button>

          <button
            onClick={handleSend}
            className="p-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
