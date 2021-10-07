export default class OutgoingMessage {
  constructor({ content, userImage, time }) {
    this._content = content;
    this._userImage = userImage;
    this._time = time;
  }

  _getTemplate() {
    return document.querySelector('#outgoing-message-template')
      .content
      .querySelector('.outgoing-message')
      .cloneNode(true);
  }

  _setMessageElements() {
    this._message = this._getTemplate();
    this._messageImg = this._message.querySelector('.outgoing-message__img');
    this._messageText = this._message.querySelector('.outgoing-message__text');
    this._messageTime = this._message.querySelector('.outgoing-message__time');
  }

  createMessage() {
    this._setMessageElements();
    this._messageImg.src = this._userImage;
    this._messageText.textContent = this._content;
    this._messageTime.textContent = this._time;
    return this._message;
  }

}
