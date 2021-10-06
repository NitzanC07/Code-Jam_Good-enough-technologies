class Card {
    constructor(data, cardTemplate) {
        this._data = data;
        this._cardTemplate = cardTemplate;
    }

    _renderCard() {
        // button for opening chat popup.
    }

    createCard() {
        const newCard = this._cardTemplate.querySelector('.cards__card').cloneNode(true);
        const img = newCard.querySelector('.cards__card__image');
        img.setAttribute('src', this._data.imageSrc);
        img.setAttribute('alt', this._data.imageAlt);
      
        const cardTitle = newCard.querySelector('.cards__card__title');
        cardTitle.textContent = this._data.title;

        const cardSubtitle = newCard.querySelector('.cards__card__subtitle');
        cardSubtitle.textContent = this._data.subtitle;

        const cardTag = Array.from(newCard.querySelectorAll('.cards__card__content-tag'));
        for (let i = 0; i < cardTag.length; i++) {
            cardTag[i].textContent = this._data.contentTag[i];
        }
        
        const cardDescription = newCard.querySelector('.cards__card__description');
        cardDescription.textContent = this._data.description;

        this._newCard = newCard;
        this._renderCard();
        return this._newCard;
    };
}

export {Card}