export class Card {
  constructor(cardData, { handleContactOpen, handleClick }) {
    this._cardData = cardData;
    this._handleContactOpen = handleContactOpen;
    this._handleClick = handleClick;
  }

  _setEventListeners() {
    this._contactBtn.addEventListener('click', () => {
      this._handleContactOpen(this._cardData);
    });
    this._card.addEventListener('click', this._handleClick);
  }

  _getCardTemplate() {
    return document.querySelector('#card-template')
      .content
      .querySelector('.card')
      .cloneNode(true);
  }

  _getTagTemplate() {
    return document.querySelector('#tag-template')
      .content
      .querySelector('.card__tag')
      .cloneNode(true);
  }

  _setCardElements() {
    this._card = this._getCardTemplate();
    this._cardImg = this._card.querySelector('.card__image');
    this._cardTitle = this._card.querySelector('.card__title');
    this._cardSubtitle = this._card.querySelector('.card__subtitle');
    this._cardDescription = this._card.querySelector('.card__description');
    this._cardTagsContainer = this._card.querySelector('.card__tags');
    this._contactBtn = this._card.querySelector('.card__contact-button');
  }

  createCard() {
    this._setCardElements();
    this._cardImg.src = this._cardData.imageSrc;
    this._cardImg.alt = this._cardData.imageAlt;
    this._cardTitle.textContent = this._cardData.title;
    this._cardSubtitle.textContent = this._cardData.subtitle;
    this._cardDescription.textContent = this._cardData.description;

    this._cardData.contentTag.forEach(tag => {
      const newInterest = this._getTagTemplate();
      newInterest.textContent = tag;
      this._cardTagsContainer.append(newInterest);
    });

    this._setEventListeners();
    return this._card;
  };
}
