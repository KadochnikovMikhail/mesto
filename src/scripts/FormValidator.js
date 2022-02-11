
export default class FormValidator {
    constructor(selector, form) {
        this._form = form
        this._inputSelector = selector.inputSelector
        this._submitButtonSelector = selector.submitButtonSelector
        this._inactiveButtonClass = selector.inactiveButtonClass
        this._inputErrorClass = selector.inputErrorClass
        this._errorClass = selector.errorClass
        this._buttonElement = this._form.querySelector(this._submitButtonSelector);
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    }
    _showError(input, errorMessageText) {
        const errorMessage = this._form.querySelector(`#${input.id}-error`)
        input.classList.add(this._inputErrorClass)
        errorMessage.textContent = errorMessageText
        errorMessage.classList.add(this._errorClass)
    }
    _hideError(input) {
        const errorMessage = this._form.querySelector(`#${input.id}-error`)
        input.classList.remove(this._inputErrorClass)
        errorMessage.textContent = ''
        errorMessage.classList.remove(this._errorClass)
    }

    _hasInvalidInput () {
        return this._inputList.some((inputElement) => {
            
            return !inputElement.validity.valid;
          }); 
    }

    toggleButtonError () {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._inactiveButtonClass)
            this._buttonElement.disabled = true
        }
        else {
            this._buttonElement.classList.remove(this._inactiveButtonClass)
            this._buttonElement.disabled = false
        }
    }


    _checkIfInputValid (input) {
        if (!input.validity.valid) {
            this._showError(input, input.validationMessage)
            this._buttonElement.classList.add(this._inactiveButtonClass)
        }
        else {
            this._hideError(input)
        }
    }




    _setInputListners() {
        
        this.toggleButtonError();
    
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkIfInputValid(input);
                this.toggleButtonError();
            });
        });
    }

  
  
    
    enableValidation() {
        this._form.addEventListener('submit', function (evt) {
          
          evt.preventDefault();
        });
        this._setInputListners();
      }

}

