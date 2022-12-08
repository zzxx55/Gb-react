import React, { useState, useEffect, useRef } from "react";
import styles from "./FuncDialogue.module.css";
import { FuncMessageList } from "./components/FuncMessageList/FuncMessageList";
import { Input } from "./components/Input/Input";

export const FuncDialogue = () => {
  const [messages, setMessages] = useState([
    { text: "Initialization...", author: "Admin" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [botMessageCounter, setBotMessageCounter] = useState(0);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (inputValue) {
      setMessages([...messages, { text: inputValue, author: "You" }]);
      setInputValue("");
      setBotMessageCounter(botMessageCounter + 1);
    }
    event.preventDefault();
  };

  const botMessageCounterRef = useRef(botMessageCounter);
  useEffect(() => {
    if (
      messages[messages.length - 1].author !== "BOT" &&
      botMessageCounterRef.current !== botMessageCounter
    ) {
      const timeout = setTimeout(() => {
        setMessages([...messages, { text: "Welcome=)", author: "BOT" }]);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [botMessageCounter, messages]);

  return (
    <section className={styles.dialogue}>
      <FuncMessageList messages={messages} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input value={inputValue} change={handleChange} />
        <button className={styles.form__button} type="submit">
          Send
        </button>
      </form>
    </section>
  );
};
