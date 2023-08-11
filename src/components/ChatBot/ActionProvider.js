class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const message = this.createChatBotMessage('Hello there!');
    this.setChatbotState(message);
  }
  getAi(){
    const message = this.createChatBotMessage(
      "To access the Ai chatBot navigate to chatPage on the Navbar."
    );
    this.setChatbotState(message);

  }

  uploadDocuments() {
    const message = this.createChatBotMessage(
      "To upload documents, go to the 'Upload' section and follow the instructions there."
    );
    this.setChatbotState(message);
  }

  downloadDocuments() {
    const message = this.createChatBotMessage(
      "To download documents, click on the download button next to the document you want to download."
    );
    this.setChatbotState(message);
  }

  seekHelp() {
    const message = this.createChatBotMessage(
      "To seek help, you can contact our support team at support@schoolpages.com or call our helpline at +254789000393."
    );
    this.setChatbotState(message);
  }

  setChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
  displayOptions(){
    const message = this.createChatBotMessage('How can I assist you today?', {
      widget: 'options', 
    });

    this.setChatbotState(message);
  }
}

export default ActionProvider;
