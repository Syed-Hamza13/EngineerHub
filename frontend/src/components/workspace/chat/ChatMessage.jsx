function ChatMessage({ message }) {
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={`flex ${isAssistant ? "justify-start" : "justify-end"} mb-4`}
    >
      <div
        className={`max-w-xs px-4 py-3 rounded-lg ${
          isAssistant
            ? "bg-slate-100 text-slate-900"
            : "bg-blue-600 text-white"
        }`}
      >
        <p className="text-sm">{message.content}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
