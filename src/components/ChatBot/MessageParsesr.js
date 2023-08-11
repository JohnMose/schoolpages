// MessageParser.js
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercaseMessage = message.toLowerCase();

    if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
      this.actionProvider.greet();
      return;
    }

    if (lowercaseMessage.includes('how to upload documents')) {
      this.actionProvider.uploadDocuments();
      return;
    }

    if (lowercaseMessage.includes('how to download documents')) {
      this.actionProvider.downloadDocuments();
      return;
    }

    if (lowercaseMessage.includes('how to seek help')) {
      this.actionProvider.seekHelp();
      return;
    }

    if (lowercaseMessage.includes('how to get exam papers')) {
      this.actionProvider.getExamPapers();
      return;
    }
    if (lowercaseMessage.includes('ai search tool')) {
      this.actionProvider.getAi();
      return;
    }

    if (lowercaseMessage.includes('how to get notes')) {
      this.actionProvider.getNotes();
      return;
    }

    if (lowercaseMessage.includes('how to signup')) {
      this.actionProvider.signup();
      return;
    }

    if (lowercaseMessage.includes('how to signout')) {
      this.actionProvider.signout();
      return;
    }

    if (lowercaseMessage.includes('how to subscribe')) {
      this.actionProvider.subscribe();
      return;
    }

    if (lowercaseMessage.includes('how to contact us')) {
      this.actionProvider.contactUs();
      return;
    }
    this.actionProvider.displayOptions();

  }
}

export default MessageParser;
