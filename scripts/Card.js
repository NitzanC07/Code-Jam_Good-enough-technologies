//const cardContactBtn = document.querySelector('.cards__card__contact-button');

export class Card {
  constructor(cardData, handleContactOpen) {
    this._cardData = cardData;
    this._cardTemplate = document.querySelector('#card-template').content;
  }

  _setEventListeners() {
    //cardContactBtn.addEventListener('click', handleContactOpen);
  }

  _getTemplate() {
    return document.querySelector('#card-template')
      .content
      .querySelector('.cards__card')
      .cloneNode(true);
  }

  _setCardElements() {
    this._card = this._getTemplate();
    this._cardImg = this._card.querySelector('.cards__card__image');
    this._cardTitle = this._card.querySelector('.cards__card__title');
    this._cardSubtitle = this._card.querySelector('.cards__card__subtitle');
    this._cardDescription = this._card.querySelector('.cards__card__description');
    this._tagArray = Array.from(this._card.querySelectorAll('.cards__card__content-tag'));
  }

  createCard() {
    this._setCardElements();
    this._cardImg.src = this._cardData.imageSrc;
    this._cardImg.alt = this._cardData.imageAlt;
    this._cardTitle.textContent = this._cardData.title;
    this._cardSubtitle.textContent = this._cardData.subtitle;
    this._cardDescription.textContent = this._cardData.description;

    for (let i = 0; i < this._tagArray.length; i++) {
      this._tagArray[i].textContent = this._cardData.contentTag[i];
    }

    this._setEventListeners();
    return this._card;
  };
}
