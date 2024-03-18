class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("hello")) {
            this.actionProvider.greet();
        } 
        else if (lowerCaseMessage.includes("hi")){
            this.actionProvider.greet();
        }
        else if (lowerCaseMessage.includes("bye")){
            this.actionProvider.bye();
        }
        else {
            this.actionProvider.unknown();
        }
    }
}

export default MessageParser;