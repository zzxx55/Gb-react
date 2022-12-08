import React from "react";
import styles from "./message.module.css";
console.log(styles);

function Message(props) {
  return <div className={styles.div}>{props.text}</div>;
}

export default Message;
