import React from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'

import "./App.css";
import config from "./Components/Config";
import MessageParser from "./Components/MessageParser";
import ActionProvider from "./Components/ActionProvider";

function Hello() {
  return (
    <div className="App" style={styles.container}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}
const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
  };

export default Hello;