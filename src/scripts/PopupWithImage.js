import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {

  constructor(selector) {

    super(selector)
    this._popupImage = this._selector.querySelector('.popup__bigimage')
    this._popupTitle = this._selector.querySelector('.popup__imagetitle')
  }


  openPopup({ link, name }) {

    this._popupImage.src = link
    this._popupImage.alt = name
    this._popupTitle.textContent = name
    super.openPopup()
  }
}
