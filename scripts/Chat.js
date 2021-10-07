export default class Chat {
  constructor(userData) {
    this._userData = userData;
  }

  _getChatTemplate() {
    return document.querySelector('#chat-template')
      .content
      .querySelector('.chat-popup')
      .cloneNode(true);
  }

  _setChatElements() {
    this._chat = this._getChatTemplate();
    this._chatName = this._chat.querySelector('.chat-popup__name');
    this._chatDescription = this._chat.querySelector('.chat-popup__description');
    this._chatImg = this._chat.querySelector('.chat-popup__img');
  }

  createChat() {
    this._setChatElements();
    this._chatName.textContent = this._userData.title;
    this._chatDescription.textContent = this._userData.description;
    this._chatImg.src = this._userData.imageSrc;
    return this._chat;
  }
}
