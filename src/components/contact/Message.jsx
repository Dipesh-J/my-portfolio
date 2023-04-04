import React from "react";
import "./Message.css";

const Message = ({ type, message, onClose }) => {
  const classNames = `message message--${type}`;

  return (
    <div className={classNames}>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Message;
