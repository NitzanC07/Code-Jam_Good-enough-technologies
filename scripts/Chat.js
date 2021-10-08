import { hourFix, minuteFix } from "./index.js";
import { createMessage } from "./index.js";
import { currentTime } from "./index.js";
import { userImage } from "./index.js";
export default class Chat {
  constructor(userData) {
    this._userData = userData;
  }

  _scrollToBottom() {
    this._messagesContainer.scrollTop = this._messagesContainer.scrollHeight;
  }

  _setEventListeners() {
    this._chatInputForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._messagesContainer.append(createMessage(this._chatInput.value, userImage, `${hourFix(currentTime)}:${minuteFix(currentTime)}`));
      this._chatInput.value = "";
      this._scrollToBottom();
    });
  }

  _setChatTime() {
    this._chatTime.textContent = `TODAY AT ${hourFix(currentTime)}:${minuteFix(currentTime)}`
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
    this._chatTime = this._chat.querySelector('.chat-popup__time');
    this._chatBtnIcon = document.querySelector('.chat-button__icon');
    this._chatInputForm = this._chat.querySelector('.chat-popup__input-container');
    this._messagesContainer = this._chat.querySelector('.chat-popup__messages');
    this._chatInput = this._chat.querySelector('.chat-popup__message-input');
  }

  createChat() {
    this._setChatElements();
    this._chatName.textContent = this._userData.title;
    this._chatDescription.textContent = this._userData.subtitle;
    this._chatImg.src = this._userData.imageSrc;
    this._setChatTime();
    this._setEventListeners();
    return this._chat;
  }

  open() {
    this._chat.classList.add('opened');
    this._chatBtnIcon.classList.add('rotate');
  }

  close() {

  }
}
