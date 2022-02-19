import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {

  constructor(selector, submitForm) {

    super(selector)
    this._submit = submitForm
    this._form = this._selector.querySelector('.form')
    this._inputList = Array.from(this._form.querySelectorAll('.form__data'))
  }


  _getInputValues() {

    this._formValues = {}
    this._inputList.forEach((input) => {

      this._formValues[input.name] = input.value
    })

    return this._formValues
  }


  handleSubmit = (evt) => {

    evt.preventDefault()
    this._submit(this._getInputValues())
    this.closePopup()
  }


  setEventListener() {

    super.setEventListener()
    this._form.addEventListener('submit', this.handleSubmit)
  }

  closePopup() {
    
    this._form.reset()
    super.closePopup()
  }
}


