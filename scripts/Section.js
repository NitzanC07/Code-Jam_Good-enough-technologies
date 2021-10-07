export default class Section {
  constructor({ items, renderer }, container, { parameter }) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._parameter = parameter;
    this._container = document.querySelector(container);
    console.log(this._parameter);
  }

  renderer() {
    this._renderedItems.forEach(cardData => {
      if (cardData.subtitle.includes(this._parameter)) {
        this._renderer(cardData);
      }
    });
  }

  addItem(card) {
    this._container.append(card);
  }
}
