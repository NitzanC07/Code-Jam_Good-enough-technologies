export default class Section {
  constructor({ items, renderer }, container) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }

  renderer() {
    this._renderedItems.forEach(cardData => {
      this._renderer(cardData);
    });
  }

  addItem(card) {
    this._container.append(card);
  }
}
