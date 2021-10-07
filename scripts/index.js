import { Card } from "./Card.js"
import OutgoingMessage from "./OutgoingMessage.js";
import Section from "./Section.js";
import { initialCards } from "./initialCards.js";
import Chat from "./Chat.js";
import CardPopup from "./cardPopup.js";

const cardsContainer = document.querySelector('.cards__container');
const profilePopup = document.querySelector('.profile-popup');
const profileSettingsBtn = document.querySelector('.header__settings');
const chatBtn = document.querySelector('.chat-button');
const userImage = document.querySelector('.profile-popup__img').src;
const settingIcon = document.querySelector('.header__settings-icon');
const pageBody = document.querySelector('.page');
const sortButton = document.querySelector('.sorting-form__submit-button');
const studyDropdownValue = document.querySelector('#field-of-study');
const dropDownForm = document.querySelector('.sorting-form');
export const currentTime = new Date();

export const hourFix = (currentTime) => {
  if (currentTime.getHours() < 10) {
    return `0${currentTime.getHours()}`
  } else return currentTime.getHours();
}

export const minuteFix = (currentTime) => {
  if (currentTime.getMinutes() < 10) {
    return `0${currentTime.getMinutes()}`
  } else return currentTime.getMinutes();
}

const cardPopup = new CardPopup({
  handleEscClose: (evt) => {
    if (evt.key === 'Escape') {
      cardPopup.close();
    }
  },
  handleClickClose: (evt) => {
    if (evt.target === document.querySelector('.card-popup-wrapper')) {
      cardPopup.close();
    }
  }

});

export const createMessage = (content, image, time) => {
  return new OutgoingMessage({ content: content, userImage: image, time: time }).createMessage();
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
    handleContactOpen: (cardData) => {
      openChat(cardData);
    },
    handleClick: (evt) => {
      if (!evt.target.classList.contains('card__contact-button')) {
        cardPopup.createPopup(evt);
        cardPopup.open();
      }
    }
  }).createCard();
}

const toggleSettings = () => {
  profilePopup.classList.toggle('opened');
  settingIcon.classList.toggle('rotate');

}

const openChat = (cardData) => {

  const newChat = new Chat(cardData);
  pageBody.append(newChat.createChat(cardData));
  newChat.open();
}

const sendMessage = (evt) => {
  evt.preventDefault();
  messagesContainer.append(createMessage(chatPopupInput.value, userImage));
  chatPopupInput.value = "";
  scrollToBottom();
}

profileSettingsBtn.addEventListener('click', toggleSettings);

const cardList = createSection(".cards__container", '');
cardList.renderer();

const toggleChat = () => {
  document.querySelector('.chat-popup').classList.toggle('opened');
}

chatBtn.addEventListener('click', toggleChat);

sortButton.addEventListener('click', sortList);

function sortList(evt) {
  evt.preventDefault();
  cardsContainer.innerHTML = "";
  const sortedList = createSection(".cards__container", studyDropdownValue.value);
  sortedList.renderer();
  dropDownForm.reset();
}
