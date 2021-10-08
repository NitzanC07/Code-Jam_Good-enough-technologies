export default class CardPopup {
  constructor({ handleEscClose, handleClickClose }) {
    this._popupWrapper = document.querySelector('.card-popup-wrapper');
    this._popupWrapperContainer = document.querySelector('.card-popup-wrapper__container');
    this._popupBtn = this._popupWrapperContainer.querySelector('.card__contact-button');
    this._handleEscClose = handleEscClose;
    this._handleClickClose = handleClickClose;
  }

  close() {
    this._popupWrapper.classList.remove('opened');
    this._popupWrapperContainer.innerHTML = '';
  }

  open() {
    this._popupWrapper.classList.add('opened');
  }

  _setEventListeners() {
    this._setPopupElements();
    document.addEventListener('keydown', this._handleEscClose);
    this._popupWrapper.addEventListener('click', this._handleClickClose);
    this._popupBtn.addEventListener('click', this._handleClickClose);
  }

  _setPopupElements() {
    this._popupBtn = this._popupWrapperContainer.querySelector('.card__contact-button');
  }

  _removeEventListers() {

  }

  createPopup(evt) {
    this._setPopupElements();
    const cardPopup = evt.target.closest('.card').cloneNode(true);
    this._popupWrapperContainer.append(cardPopup);
    this._popupWrapperContainer.querySelector('.card__description-container').classList.add('extended');
    this._setEventListeners();
  }

}
