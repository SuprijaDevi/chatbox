class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet() {
      const message = this.createChatBotMessage("Hello, how can I assist you?");
      this.updateChatbotState(message);
    }
    bye() {
      const message = this.createChatBotMessage("Bye! Happy to help you.");
      this.updateChatbotState(message);
    }
  
    unknown() {
      const message = this.createChatBotMessage("I'm sorry, I didn't understand that. Could you please rephrase?");
      this.updateChatbotState(message);
    }
  
    updateChatbotState(message) {
      this.setState(prevState => ({
        ...prevState,
        messages: [...prevState.messages, message]
      }));
    }
  }
  
  export default ActionProvider;