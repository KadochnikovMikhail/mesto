
const showError = (form, input, errorMessageText, errorMessageClass, inputErrorClass) => {
    const errorMessage = form.querySelector(`#${input.id}-error`)
    errorMessage.textContent = errorMessageText
    errorMessage.classList.add(errorMessageClass)
    input.classList.add(inputErrorClass)
}

const hideError = (form, input, errorMessageClass, inputErrorClass) => {
    const errorMessage = form.querySelector(`#${input.id}-error`)
    errorMessage.textContent = ''
    errorMessage.classList.remove(errorMessageClass)
    input.classList.remove(inputErrorClass)
}

const hasInvalidInput = (inputs) => {
    return Array.from(inputs).some((el) => !el.validity.valid)
}

const toggleButtonError = (inputs, button, inactiveButtonClass, inactiveButtonTextClass) => {
    const buttonText = querySelector('.form__buttontext')
    if (hasInvalidInput(inputs)) {
        button.classList.add(inactiveButtonClass)
        buttonText.classList.add(inactiveButtonTextClass)
        button.disabled = true
    }
    else {
        button.classList.remove(inactiveButtonClass)
        buttonText.classList.remove(inactiveButtonTextClass)
        button.disabled = false
    }
}

const checkIfInputValid = (form, input, { inputErrorClass, errorClass }) => {
    if (!input.validity.valid) {
        showError(form, input, input.validationMessage, errorClass, inputErrorClass)
    }
    else {
        hideError(form, input, inputErrorClass, errorClass)
    }
}

const setInputListners = (form, { inputSelector, inactiveButtonClass,inactiveButtonTextClass, submitButtonSelector,...rest }) => {
    const inputs = form.querySelectorAll(inputSelector)
    const submitButton = form.querySelector(submitButtonSelector)

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            checkIfInputValid(form, input, rest)
            toggleButtonError(inputs, submitButton, inactiveButtonClass, inactiveButtonTextClass )
        })
    })
}


const enableValidation = ({formSelector, ...rest}) => {
    const forms = document.querySelectorAll(formSelector)

    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault()
        })

        setInputListners(form, rest)
    })
}

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__data',
    submitButtonSelector: '.form__buttonsave',
    inactiveButtonClass: 'form__buttonsave_disabled',
    inactiveButtonTextClass: 'form__buttontext_disabled',
    inputErrorClass: 'form__data_type_error',
    errorClass: 'popup__error_visible'
});