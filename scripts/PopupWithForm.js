import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor (selector, submitForm) {
      super(selector);
      this._submit = submitForm;
      this._form = this._selector.querySelector('.form');
    }
  
    _getInputValues() {
      this._inputList = Array.from(this._form.querySelectorAll('.form__data'));
      this._formValues = {};
      this._inputList.forEach ((input) => {
        this._formValues[input.name] = input.value;
      });
      return this._formValues;
    }
  
    setEventListener() {
      super.setEventListener();
      this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._submit(this._getInputValues());
        this.closePopup();
      });
    }
  
    removeEventListener() {
      super.removeEventListener();
      this._form.removeEventListener('submit', (evt) => {
        evt.preventDefault();
        this._submit(this._getInputValues());
        this.closePopup();
      });
    }
  
    closePopup() {
      this._form.reset();
      super.closePopup();
    }
  };
  