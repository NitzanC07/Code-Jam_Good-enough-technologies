import { Card } from "./Card.js"
import OutgoingMessage from "./OutgoingMessage.js";
import Section from "./Section.js";
import { initialCards } from "./initialCards.js";

const profilePopup = document.querySelector('.profile-popup');
const profileSettingsBtn = document.querySelector('.header__settings');
const chatBtn = document.querySelector('.chat-button');
const chatWindow = document.querySelector('.chat-popup');
const chatPopupContainer = document.querySelector('.chat-popup__input-container');
const chatPopupInput = document.querySelector('.chat-popup__message-input');
const messagesContainer = document.querySelector('.chat-popup__messages');
const userImage = document.querySelector('.profile-popup__img').src;
const chatTime = document.querySelector('.chat-popup__time');
const chatBtnIcon = document.querySelector('.chat-button__icon');
const settingIcon = document.querySelector('.header__settings-icon');
const currentTime = new Date();
const popupWrapper = document.querySelector('.card-popup-wrapper');
chatTime.textContent = `TODAY AT ${currentTime.getHours()}:${currentTime.getMinutes()}`

const createMessage = (content, image) => {
  return new OutgoingMessage({ content: content, userImage: image, time: currentTime }).createMessage();
}

const createCard = (cardData) => {
  return new Card(cardData, {
    handleContactOpen: openChat
  }).createCard();
}

const toggleSettings = () => {
  profilePopup.classList.toggle('opened');
  settingIcon.classList.toggle('rotate');

}

const toggleChat = () => {
  chatWindow.classList.toggle('opened');
  chatBtnIcon.classList.toggle('rotate');
}

const openChat = () => {
  chatWindow.classList.add('opened');
  chatBtnIcon.classList.add('rotate');
}

const scrollToBottom = () => {
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

const sendMessage = (evt) => {
  evt.preventDefault();
  messagesContainer.append(createMessage(chatPopupInput.value, userImage));
  chatPopupInput.value = "";
  scrollToBottom();
}

chatPopupContainer.addEventListener('submit', sendMessage);

profileSettingsBtn.addEventListener('click', toggleSettings);
chatBtn.addEventListener('click', toggleChat);

const cardList = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const newCard = createCard(cardData);
    cardList.addItem(newCard);
  }
}, ".cards__container");

cardList.renderer();
