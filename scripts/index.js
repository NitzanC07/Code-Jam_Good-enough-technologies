import { Card } from "./Card.js"
import OutgoingMessage from "./OutgoingMessage.js";
import Section from "./Section.js";
import { initialCards } from "./initialCards.js";
import Chat from "./Chat.js";
import CardPopup from "./CardPopup.js";

const cardsContainer = document.querySelector('.cards__container');
const profilePopup = document.querySelector('.profile-popup');
const profileSettingsBtn = document.querySelector('.header__settings');
const chatBtn = document.querySelector('.chat-button');
export const userImage = document.querySelector('.profile-popup__img').src;
const settingIcon = document.querySelector('.header__settings-icon');
const pageBody = document.querySelector('.page');
const sortButton = document.querySelector('.sorting-form__submit-button');
const studyDropdownValue = document.querySelector('#field-of-study');
const genderDropdownValue = document.querySelector('#user-gender');
const dropDownForm = document.querySelector('.sorting-form');
export const currentTime = () => { return new Date(); }

export const hourFix = () => {
  if (currentTime().getHours() < 10) {
    return `0${currentTime().getHours()}`
  } else return currentTime().getHours();
}

export const minuteFix = () => {
  if (currentTime().getMinutes() < 10) {
    return `0${currentTime().getMinutes()}`
  } else return currentTime().getMinutes();
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

const createSection = (container, parameterStudy, parameterGender) => {
  return new Section({
    items: initialCards,
    renderer: (cardData) => {
      cardList.addItem(createCard(cardData));
    }
  }, container, { parameterStudy: parameterStudy, parameterGender: parameterGender });
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

const createChat = (data) => {
  const newChat = new Chat(data);
  pageBody.append(newChat.createChat(data));
  newChat.open();
}

function chatExists(chatArray, cardData) {
  return chatArray.some(chat => {
    if (chat.querySelector('.chat-popup__name').textContent === cardData.title) {
      return true;
    } else return false;
  });
}

const openChat = (cardData) => {
  const chatArray = Array.from(document.querySelectorAll('.chat-popup'));
  if (chatArray.length === 0) {
    createChat(cardData);
  } else if (chatArray.length > 0) {
    if (!chatExists(chatArray, cardData)) {
      closeAll(chatArray);
      createChat(cardData);
    } else if (chatExists(chatArray, cardData)) {
      closeAll(chatArray);
      chatArray.forEach(chat => {
        if (chat.querySelector('.chat-popup__name').textContent === cardData.title) {
          chat.classList.add('opened');
          document.querySelector('.chat-button__icon').classList.add('rotate');
        }
      });
    }
  }
}

profileSettingsBtn.addEventListener('click', toggleSettings);

let lastClosed = '';

const closeAll = (chatArray) => {
  chatArray.forEach(chat => {
    if (chat.classList.contains('opened')) {
      chat.classList.remove('opened');
      lastClosed = chat;
      document.querySelector('.chat-button__icon').classList.remove('rotate');
    }
  });
}

const cardList = createSection(".cards__container", '', '');
cardList.renderer();

const chatLogic = () => {
  const chatArray = Array.from(document.querySelectorAll('.chat-popup'));
  if (!checkOpened(chatArray) && chatArray.length > 0) {
    lastClosed.classList.add('opened');
    document.querySelector('.chat-button__icon').classList.add('rotate');
  } else if (checkOpened(chatArray)) {
    closeAll(chatArray);
  }
}

const checkOpened = (chatArray) => {
  return chatArray.some(chat => {
    if (chat.classList.contains('opened')) {
      return true;
    } else return false;
  });
}

chatBtn.addEventListener('click', chatLogic);
sortButton.addEventListener('click', sortList);

function sortList(evt) {
  evt.preventDefault();
  cardsContainer.innerHTML = "";
  const sortedList = createSection(".cards__container", studyDropdownValue.value, genderDropdownValue.value);
  sortedList.renderer();
  dropDownForm.reset();
}
