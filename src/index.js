import '../pages/index.css';
import FormValidator from "../scripts/FormValidator.js";
import Card from '../scripts/Card.js';
import Section from "../scripts/Section.js";
import Popup from "../scripts/Popup.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import UserInfo from "../scripts/UserInfo.js";


import headerLogo from '../images/logo.svg';
import profileImage from '../images/avatar.png';
import editBtn from '../images/addbutton.svg';
import addBtn from '../images/editbutton.svg';
import closeButton from '../images/CloseIcon.svg';
import cardsDelete from '../images/Trash.svg';
import like from '../images/like.svg';
import actLike from '../images/activelike.svg';


const popupImage = document.querySelector('.popup_type_bigimage');
const profilePopup = document.querySelector('.popup_type_user-info');
const popupCards = document.querySelector('.popup_type_new-card')

const titleInput = document.querySelector('#title');
const linkInput = document.querySelector('#link');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');

const profile = document.querySelector('.profile');
const nameProfile = document.querySelector('.profile__name');
const job = document.querySelector('.profile__description');

const placeForm = document.querySelector('#form-add');
const formEdit = document.querySelector('#form-edit');

const addButton = profile.querySelector('.profile__addbutton');
const editButton = profile.querySelector('.profile__edit-button');
const profileCloseBtn = document.querySelector('#profile-close');
const placeCloseBtn = document.querySelector('#mesto-close');
const imageCloseBtn = document.querySelector('#img-close');


const cards = document.querySelector('.cards');

const overlayProfile = document.getElementById('overlay__profile');
const overlayCard = document.getElementById('overlay__card');
const overlayImg = document.getElementById('overlay__img');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const enableValidation = {
    inputSelector: '.form__data',
    submitButtonSelector: '.form__buttonsave',
    inactiveButtonClass: 'form__buttonsave_disabled',
    inputErrorClass: 'form__data_type_error',
    errorClass: 'popup__error_visible'
};
const addCardFormValidator = new FormValidator(enableValidation, placeForm);
const editProfileFormValidator = new FormValidator(enableValidation, formEdit);

addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();

const userInfo = new UserInfo({
    profileNameSelector: nameProfile,
    profileJobSelector: job
});



const handleProfileFormSubmit = (formFields) => {
    
    console.log(formFields)

    userInfo.setUserInfo(formFields.name, formFields.description);

    popupWithProfileForm.closePopup();
     
};

const popupWithImage = new PopupWithImage(popupImage);
const popupWithProfileForm = new PopupWithForm(profilePopup, handleProfileFormSubmit);
const popupWithPlaceForm = new PopupWithForm(popupCards, handlePlaceFormSubmit);


const handlePlaceFormSubmit = () => {
    const newPlace = titleInput.value;
    const newImage = linkInput.value;

    const addedCard = new Section({
        items: [{
            name: newPlace,
            link: newImage
        }],
        renderer: renderCard,
    },
        cards
    );

    addedCard.renderItems();
    popupWithPlaceForm.closePopup();
    popupWithPlaceForm.removeEventListener();
};

const renderCard = (item) => {
    const newCard = new Card({
        data: item,
        selector: '.template',
        handleCard: () => popupWithImage.openPopup(item)
    });
    const initializeCard = newCard.getView();
    cardList.addItem(initializeCard);
    return initializeCard;
    
   
};

const cardList = new Section({
    items: initialCards.reverse(),
    renderer: renderCard,
},
    cards
);

cardList.renderItems();



editButton.addEventListener('click', () => {
    nameInput.value = nameProfile.textContent;
    jobInput.value = job.textContent;
    popupWithProfileForm.openPopup();
  });

 
  profileCloseBtn.addEventListener('click', () => popupWithProfileForm.closePopup());
  overlayProfile.addEventListener('click', () => popupWithProfileForm.closePopup());

  addButton.addEventListener('click', () => {
    popupWithPlaceForm.openPopup();
  });
  
 
  placeCloseBtn.addEventListener('click', () => popupWithPlaceForm.closePopup());
  overlayCard.addEventListener('click', () => popupWithPlaceForm.closePopup());
  

  imageCloseBtn.addEventListener('click', () => popupWithImage.closePopup());
  overlayImg.addEventListener('click', () => popupWithImage.closePopup());