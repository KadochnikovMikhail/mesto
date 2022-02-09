import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    
    constructor (selector) {
        super(selector);
        this._image = this._selector.querySelector('.popup__bigimage');
        this._name = this._selector.querySelector('.popup__imagetitle');
      }
  
    openPopup = ({ name, link }) => {
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupTitle.textContent = name;
        super.openPopup();
    }
  }
  