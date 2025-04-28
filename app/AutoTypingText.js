import React, { useState, useEffect } from "react";
import "../app/page.css";

const AutoTypingText = ({ messages, typingSpeed = 100, pauseTime = 2000 }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && currentText.length < messages[currentIndex].length) {

      timer = setTimeout(() => {
        setCurrentText((prevText) => messages[currentIndex].substring(0, prevText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && currentText.length > 0) {

      timer = setTimeout(() => {
        setCurrentText((prevText) => messages[currentIndex].substring(0, prevText.length - 1));
      }, typingSpeed);
    } else if (!isDeleting && currentText.length === messages[currentIndex].length) {

      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && currentText.length === 0) {

      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, messages, currentIndex, typingSpeed, pauseTime]);

  return <div className="banner-span-down">{currentText}</div>;
};

export default AutoTypingText;
