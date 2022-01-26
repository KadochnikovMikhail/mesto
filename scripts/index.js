import FormValidator from "../scripts/FormValidator.js";
import Card from '../scripts/Card.js';
const popupImage = document.querySelector('.popup_type_bigimage');
const profilePopup = document.querySelector('.popup_type_user-info');
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const nameProfile = profile.querySelector('.profile__name');
const job = profile.querySelector('.profile__description');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const buttonSave = document.querySelector('.form__buttonsave_type_save');
const profileForm = document.querySelector('.popup__container');
const cards = document.querySelector('.cards');
const addButton = profile.querySelector('.profile__addbutton');
const popupCards = document.querySelector('.popup_type_new-card')
const cardFormElement = popupCards.querySelector('.form');
const titleInput = document.querySelector('#title');
const linkInput = document.querySelector('#link');
const buttonCreateCard = document.querySelector('.form__buttonsave_type_create')
const titleImage = popupImage.querySelector('.popup__imagetitle')
const imageEL = popupImage.querySelector('.popup__bigimage')
const popups = document.querySelectorAll('.popup')
const formEdit = document.querySelector('#form-edit');  
const formAdd = document.querySelector('#form-add'); 
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
const addCardFormValidator = new FormValidator (enableValidation , formAdd);
const editProfileFormValidator = new FormValidator (enableValidation , formEdit);

addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();

function createCard(item) { 
    const card = new Card('.template', item.name, item.link, item.alt, handleCard);
    const cardEl = card.getView();
    return cardEl;

};

function handleCard(name, link, alt) {
    openPopup(popupImage);
    imageEL.src = link;
    titleImage.textContent = name;    
    imageEL.alt = alt;
};

function handleSubmitUserInfo(evt) {
    evt.preventDefault();

    nameProfile.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup(profilePopup)
}

profileForm.addEventListener('submit', handleSubmitUserInfo);

function render() {
    const html = initialCards
        .map((item) => {
            return createCard(item)
        })



    cards.append(...html)

}



function handleAdd(evt) {
    evt.preventDefault();

    const listItem = {
        name: titleInput.value,
        link: linkInput.value
    };
    cards.prepend(createCard(listItem));
    titleInput.value = '';
    linkInput.value = '';

    closePopup(popupCards)
}

cardFormElement.addEventListener('submit', handleAdd)

render()


function openPopup(popup) {
    popup.classList.add('popup_opened');
    
    document.addEventListener('keydown', closeEsc);
    
}

function getInfo(popup){
    nameInput.value = nameProfile.textContent;
    jobInput.value = job.textContent;
    openPopup(popup)
}


function closeEsc(evt) {
    if(evt.key === "Escape") {
        const popup = document.querySelector(".popup_opened"); 
        closePopup(popup);
                                              
    }
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');

    document.removeEventListener('keydown', closeEsc);
}
popups.forEach((popup) => {
    const closeButton = popup.querySelector('.popup__closebutton');
    closeButton.addEventListener('click', () => closePopup(popup))
    
})


editButton.addEventListener('click', () => getInfo(profilePopup));

addButton.addEventListener('click', () => {
    openPopup(popupCards)
    addCardFormValidator.toggleButtonError ()
});


overlayCard.addEventListener('click', () => closePopup(popupCards));
overlayProfile.addEventListener('click', () => closePopup(profilePopup));
overlayImg.addEventListener('click', () => closePopup(popupImage));

     