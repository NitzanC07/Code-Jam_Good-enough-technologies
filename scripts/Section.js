export default class Section {
  constructor({ items, renderer }, container, { parameterStudy, parameterGender }) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._parameterStudy = parameterStudy;
    this._parameterGender = parameterGender;
    this._container = document.querySelector(container);
  }

  renderer() {
    this._renderedItems.forEach(cardData => {
      if (cardData.subtitle.includes(this._parameterStudy) && cardData.gender.includes(this._parameterGender)) {
        this._renderer(cardData);
      }
    });
  }

  addItem(card) {
    this._container.append(card);
  }
}
