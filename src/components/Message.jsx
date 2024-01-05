import { UserAuth } from "../context/AuthContext";
import { format } from "date-fns";

/* eslint-disable react/prop-types */
export default function Message({ message }) {
  const { currentUser } = UserAuth();
  const nameParts = message.name.split(" ");

  // Estrai solo il primo elemento (il nome)
  const firstName = nameParts[0];

  const formattedTime =
    message.createdAt && format(message.createdAt.toDate(), "HH:mm");

  const getRandomColor = (userId) => {
    const colors = ["#FF4500", "#1E90FF", "#32CD32", "#FFD700", "#9932CC"];
    const hashCode = userId
      .split("")
      .reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    const colorIndex = Math.abs(hashCode) % colors.length;
    return colors[colorIndex];
  };

  const userColor = getRandomColor(currentUser.uid);

  return (
    <div className=" px-4">
      <div
        className={`chat ${
          message.uid === currentUser.uid ? "chat-end" : "chat-start"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={message.avatar}
            />
          </div>
        </div>

        <div className="chat-bubble">
          <div className={`chat-header font-bold`} style={{ color: userColor }}>
            {firstName}
          </div>
          {message.text}
        </div>
        <div className="flex items-center gap-1 chat-footer opacity-50">
          Delivered
          <time className="text-xs text-white opacity-50">
            {formattedTime || "Invalid Time"}
          </time>
        </div>
      </div>
    </div>
  );
}
