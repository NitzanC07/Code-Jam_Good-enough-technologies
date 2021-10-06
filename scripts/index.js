import { Card } from "./Card.js"
import OutgoingMessage from "./OutgoingMessage.js";

const initalCard = [{
    imageSrc: "./images/image.svg",
    imageAlt: "Profile picture",
    title: "User Name",
    subtitle: "Student at Yandex Praktikum",
    contentTag: ["interest", "interest", "interest", "interest"],
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
  },
  {
    imageSrc: "./images/image.svg",
    imageAlt: "Profile picture",
    title: "User Name",
    subtitle: "Student at Yandex Praktikum",
    contentTag: ["interest", "interest", "interest", "interest"],
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
  },
  {
    imageSrc: "./images/image.svg",
    imageAlt: "Profile picture",
    title: "User Name",
    subtitle: "Student at Yandex Praktikum",
    contentTag: ["interest", "interest", "interest", "interest"],
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
  }
]

const cardTemplate = document.querySelector("#card-template").content;
const cardsContainer = document.querySelector(".cards__container");
const profilePopup = document.querySelector('.profile-popup');
const profileSettingsBtn = document.querySelector('.header__settings');
const chatBtn = document.querySelector('.chat-button');
const chatWindow = document.querySelector('.chat-popup');
const chatPopupContainer = document.querySelector('.chat-popup__input-container');
const chatPopupInput = document.querySelector('.chat-popup__message-input');
const messagesContainer = document.querySelector('.chat-popup__messages');
const userImage = "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";


const toggleSettings = () => {
  profilePopup.classList.toggle('opened');
}

const toggleChat = () => {
  chatWindow.classList.toggle('opened');
}

const scrollToBottom = () => {
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

const sendMessage = (evt) => {
  evt.preventDefault();
  const newMessage = new OutgoingMessage({ content: chatPopupInput.value, userImage: userImage }).createMessage();
  messagesContainer.append(newMessage);
  chatPopupInput.value = "";
  scrollToBottom();
}

chatPopupContainer.addEventListener('submit', sendMessage);

profileSettingsBtn.addEventListener('click', toggleSettings);
chatBtn.addEventListener('click', toggleChat)

function generateCard(data, cardTemplate) {
  const card = new Card(data, cardTemplate);
  return card.createCard();
}

initalCard.forEach((data) => {
  const initCard = generateCard(data, cardTemplate);
  cardsContainer.append(initCard);
})
