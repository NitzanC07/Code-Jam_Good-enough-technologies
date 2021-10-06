import {Card} from "./Card.js"

const initalCard = [
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

function generateCard(data, cardTemplate) {
    const card = new Card(data, cardTemplate);
    return card.createCard();
}

initalCard.forEach ((data) => {
    const initCard = generateCard(data, cardTemplate);
    cardsContainer.append(initCard);
})