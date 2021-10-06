import { timeStamp } from "console";

class IncomingMessage {
  constructor(content, time) {
    this._content = content;
    this._time = time;
  }

  _getTemplate() {
    return document.querySelector('.incoming-message-template')
      .content
      .querySelector('.incoming-message')
      .cloneNode(true);
  }
}

_setMesageElements() {
  this._message = this._getTemplate();
  this._messageImg = this._message.querySelector('.incoming-message__img');
  this._messageText = this._message.querySelector('.incoming-message__text');
}

createMessage() {
  this._setMesageElements();
  this._messageImg.src = "";
}
