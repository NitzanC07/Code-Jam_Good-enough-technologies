export class Card {
  constructor(cardData, { handleContactOpen }) {
    this._cardData = cardData;
    this._handleContactOpen = handleContactOpen;

  }

  _setEventListeners() {
    this._contactBtn.addEventListener('click', this._handleContactOpen);
  }

  _getTemplate() {
    return document.querySelector('#card-template')
      .content
      .querySelector('.card')
      .cloneNode(true);
  }

  _setCardElements() {
    this._card = this._getTemplate();
    this._cardImg = this._card.querySelector('.card__image');
    this._cardTitle = this._card.querySelector('.card__title');
    this._cardSubtitle = this._card.querySelector('.card__subtitle');
    this._cardDescription = this._card.querySelector('.card__description');
    this._cardTagsContaienr = this._card.querySelector('.card__tag');
    this._tagArray = Array.from(this._card.querySelectorAll('.card__content-tag'));
    this._contactBtn = this._card.querySelector('.card__contact-button');
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
