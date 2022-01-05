
export default class FormValidator {
    constructor(selector, form) {
        this._form = form
        this._inputSelector = selector.inputSelector
        this._submitButtonSelector = selector.submitButtonSelector
        this._inactiveButtonClass = selector.inactiveButtonClass
        this._inputErrorClass = selector.inputErrorClass
        this._errorClass = selector.errorClass
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

    _toggleButtonError () {
        if (this._hasInvalidInput()) {
            this._submitButtonSelector.classList.add(this._inactiveButtonClass)
            this._submitButtonSelector.disabled = true
        }
        else {
            this._submitButtonSelector.classList.remove(this._inactiveButtonClass)
            this._submitButtonSelector.disabled = false
        }
    }


    _checkIfInputValid (input) {
        if (!input.validity.valid) {
            this._showError(input, input.validationMessage)
        }
        else {
            this._hideError(input)
        }
    }




    _setInputListners() {
        
        this._toggleButtonError();
    
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkIfInputValid(inputElement);
                this._toggleButtonError();
            });
        });
    }


    enableValidation () {
        const forms = document.querySelectorAll(this._form)

        forms.forEach((form) => {
            form.addEventListener('submit', (event) => {
                event.preventDefault()
            })

            this._setInputListners()
        })
    }

}

