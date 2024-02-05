import { useState, useEffect } from "react";

import React from "react";

function Notification({ message, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-0 right-0 m-4 p-4 bg-green-500 text-white rounded-md shadow-md  ${
        isVisible ? "overlay" : "hidden"
      }`}
    >
      {message}
    </div>
  );
}

export default Notification;
