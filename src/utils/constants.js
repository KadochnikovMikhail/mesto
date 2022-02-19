const popupImage = document.querySelector('.popup_type_bigimage')
const profilePopup = document.querySelector('.popup_type_user-info')
const popupCards = document.querySelector('.popup_type_new-card')
const avatarPopup = document.querySelector('.popup_type_avatar')
const confirmPopup = document.querySelector('.popup_type_confirm')

const titleInput = document.querySelector('#title')
const linkInput = document.querySelector('#link')
const nameInput = document.querySelector('#name')
const jobInput = document.querySelector('#job')

const profile = document.querySelector('.profile')
const nameProfile = document.querySelector('.profile__name')
const job = document.querySelector('.profile__description')
const avatar = document.querySelector('.profile__image')

const placeForm = document.querySelector('#form-add')
const formEdit = document.querySelector('#form-edit')
const avatarForm = document.querySelector('#form-avatar')


const addButton = profile.querySelector('.profile__addbutton')
const editButton = profile.querySelector('.profile__edit-button')
const avatarButton = document.querySelector('.profile__overlay')

const profileButton = document.querySelector('.form__buttonsave_type_save')
const placeButton = document.querySelector('#place-button')
const avatarButtonSave = document.querySelector('#avatar-button')

const cards = document.querySelector('.cards')

const enableValidation = {
    inputSelector: '.form__data',
    submitButtonSelector: '.form__buttonsave',
    inactiveButtonClass: 'form__buttonsave_disabled',
    inputErrorClass: 'form__data_type_error',
    errorClass: 'popup__error_visible'
}


export {
    popupImage,
    profilePopup,
    popupCards,
    avatarPopup,
    confirmPopup,
    titleInput,
    linkInput,
    nameInput,
    jobInput,
    profile,
    nameProfile,
    job,
    avatar,
    placeForm,
    formEdit,
    avatarForm,
    addButton,
    editButton,
    avatarButton,
    profileButton,
    placeButton,
    avatarButtonSave,
    cards,
    enableValidation
}