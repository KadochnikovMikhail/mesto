export class Popup {
  constructor(selector) {
    this._selector = selector;
  }


  openPopup() {
    this._selector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  closePopup() {
    this._selector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  }

  setEventListener() {
    this._selector.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__overlay')) {
        this.closePopup();
      }
      if (evt.target.classList.contains('popup__closebutton-image')) {
        this.closePopup();
      }
    });
  }
};
