import { useRef, useState } from "react";
import {
  Send,
  Paperclip,
} from "lucide-react";

function ChatInput({
  onSendMessage,
}) {
  const [input, setInput] =
    useState("");

  const textareaRef = useRef(null);

  const handleInput = (e) => {
    setInput(e.target.value);

    const textarea =
      textareaRef.current;

    textarea.style.height = "auto";

    textarea.style.height =
      Math.min(
        textarea.scrollHeight,
        180
      ) + "px";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    onSendMessage(input);

    setInput("");

    textareaRef.current.style.height =
      "auto";
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();

      handleSend();
    }
  };

  return (
    <div>

      <div
        className="
          flex
          items-end
          gap-3
          rounded-3xl
          border
          border-slate-200
          bg-white
          px-4
          py-3
          shadow-sm
        "
      >

        <textarea
          ref={textareaRef}
          rows={1}
          value={input}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about your research..."
          className="
            flex-1
            resize-none
            bg-transparent
            outline-none
            text-sm
            leading-7
            text-slate-700
            max-h-[180px]
            overflow-y-auto
          "
        />

        <button
          className="
            p-2.5
            rounded-xl
            text-slate-500
            hover:bg-slate-100
            transition
          "
        >
          <Paperclip size={18} />
        </button>

        <button
          onClick={handleSend}
          className="
            p-2.5
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            text-white
            transition
          "
        >
          <Send size={18} />
        </button>

      </div>

    </div>
  );
}

export default ChatInput;