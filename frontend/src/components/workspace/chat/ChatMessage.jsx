import { useState } from "react";

function ChatMessage({ message }) {
  const isAssistant = message.role === "assistant";

  const [expanded, setExpanded] = useState(false);

  const isLongMessage =
    message.content.length > 280;

  if (isAssistant) {
    return (
      <div className="w-full">
        <div className="flex gap-4">

          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0">
            <span className="text-blue-700 font-bold text-sm">
              AI
            </span>
          </div>

          <div className="flex-1">

            <div
              className={`
                text-slate-700
                text-sm
                leading-8
                overflow-hidden
                transition-all
                duration-300
                ${
                  expanded
                    ? "max-h-[2000px]"
                    : "max-h-[180px]"
                }
              `}
            >
              {message.content}
            </div>

            {isLongMessage && (
              <button
                onClick={() =>
                  setExpanded(!expanded)
                }
                className="
                  mt-2
                  text-xs
                  text-blue-600
                  hover:text-blue-700
                "
              >
                {expanded
                  ? "Show Less"
                  : "Show More"}
              </button>
            )}

          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-end">

      <div
        className="
          max-w-[75%]
          px-5
          py-3
          rounded-2xl
          text-sm
          leading-7
          bg-blue-600
          text-white
          shadow-sm
        "
      >
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            ${
              expanded
                ? "max-h-[1000px]"
                : "max-h-[140px]"
            }
          `}
        >
          {message.content}
        </div>

        {isLongMessage && (
          <button
            onClick={() =>
              setExpanded(!expanded)
            }
            className="
              mt-2
              text-xs
              text-blue-100
              hover:text-white
            "
          >
            {expanded
              ? "Show Less"
              : "Show More"}
          </button>
        )}

      </div>

    </div>
  );
}

export default ChatMessage;