export default class Popup {
    constructor(selector) {
      this._selector = selector;
    }
  
    openPopup() {
      this._selector.classList.add('popup_opened');
      this.setEventListener();
    }
  
    closePopup() {
      this._selector.classList.remove('popup_opened');
      this.removeEventListener();
    }
  
    _handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        this.closePopup();
      }
    }
  
    setEventListener() {
      document.addEventListener('keydown', this._handleEscClose);
    }
  
    removeEventListener() {
      document.removeEventListener('keydown', this._handleEscClose);
    }
  };
  