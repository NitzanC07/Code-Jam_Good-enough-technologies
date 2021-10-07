import { Card } from "./Card.js"
import OutgoingMessage from "./OutgoingMessage.js";
import Section from "./Section.js";
import { initialCards } from "./initialCards.js";
import Chat from "./Chat.js";

const cardsContainer = document.querySelector('.cards__container');
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
const pageBody = document.querySelector('.page');
const popupWrapper = document.querySelector('.card-popup-wrapper');
const popupWrapperContainer = document.querySelector('.card-popup-wrapper__container');
chatTime.textContent = `TODAY AT ${currentTime.getHours()}:${currentTime.getMinutes()}`
const sortButton = document.querySelector('.sorting-form__submit-button');
const studyDropdownValue = document.querySelector('#field-of-study');
const dropDownForm = document.querySelector('.sorting-form');
const createMessage = (content, image) => {
  return new OutgoingMessage({ content: content, userImage: image, time: currentTime }).createMessage();
}

const createSection = (container, parameter) => {
  return new Section({
    items: initialCards,
    renderer: (cardData) => {
      cardList.addItem(createCard(cardData));
    }
  }, container, { parameter: parameter });
}

const createCard = (cardData) => {
  return new Card(cardData, {
    handleContactOpen: openChat,
    handleClick: (evt) => {
      const cardPopup = evt.target.closest('.card').cloneNode(true);
      popupWrapperContainer.append(cardPopup);
      popupWrapperContainer.querySelector('.card__description-container').classList.add('extended');
      popupWrapper.classList.add('opened');
    }
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

const openChat = (cardData) => {
  const newChat = new Chat(cardData);
  pageBody.append(newChat.createChat());
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

const cardList = createSection(".cards__container", '');
cardList.renderer();

sortButton.addEventListener('click', sortList);

function sortList(evt) {
  evt.preventDefault();
  cardsContainer.innerHTML = "";
  const sortedList = createSection(".cards__container", studyDropdownValue.value);
  sortedList.renderer();
  dropDownForm.reset();
}
