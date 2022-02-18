import './pages/index.css'
import { FormValidator } from "./scripts/FormValidator";
import { Card } from './scripts/Card.js';
import { Section } from "./scripts/Section.js";
import { Popup } from "./scripts/Popup.js";
import { PopupWithImage } from "./scripts/PopupWithImage.js";
import { PopupWithForm } from "./scripts/PopupWithForm.js";
import { UserInfo } from "./scripts/UserInfo.js";
import { PopupWithConfirmation } from "./scripts/PopupWithConfirmation.js";
import { Api } from './scripts/Api.js';
import { initialCards } from './utils/initialCards.js';


import headerLogo from './images/logo.svg';
import profileImage from './images/avatar.png';
import editBtn from './images/addbutton.svg';
import addBtn from './images/editbutton.svg';
import closeButton from './images/CloseIcon.svg';
import cardsDelete from './images/Trash.svg';
import like from './images/like.svg';
import actLike from './images/activelike.svg';


const popupImage = document.querySelector('.popup_type_bigimage');
const profilePopup = document.querySelector('.popup_type_user-info');
const popupCards = document.querySelector('.popup_type_new-card')
const avatarPopup = document.querySelector('.popup_type_avatar');
const confirmPopup = document.querySelector('.popup_type_confirm')

const titleInput = document.querySelector('#title');
const linkInput = document.querySelector('#link');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');

const profile = document.querySelector('.profile');
const nameProfile = document.querySelector('.profile__name');
const job = document.querySelector('.profile__description');
const avatar = document.querySelector('.profile__image');

const placeForm = document.querySelector('#form-add');
const formEdit = document.querySelector('#form-edit');
const avatarForm = document.querySelector('#form-avatar');


const addButton = profile.querySelector('.profile__addbutton');
const editButton = profile.querySelector('.profile__edit-button');
const avatarButton = document.querySelector('.profile__overlay');

const profileButton = document.querySelector('#profile-button');
const placeButton = document.querySelector('#place-button');
const avatarButtonSave = document.querySelector('#avatar-button');

const cards = document.querySelector('.cards');

const enableValidation = {
    inputSelector: '.form__data',
    submitButtonSelector: '.form__buttonsave',
    inactiveButtonClass: 'form__buttonsave_disabled',
    inputErrorClass: 'form__data_type_error',
    errorClass: 'popup__error_visible'
};

const addCardFormValidator = new FormValidator(enableValidation, placeForm);
const editProfileFormValidator = new FormValidator(enableValidation, formEdit);
const updateAvatarFormValidator = new FormValidator(enableValidation, avatarForm);

addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
updateAvatarFormValidator.enableValidation();

const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-35',
    headers: {
        authorization: '5e183b19-cf6d-4424-b043-3b49b544e6cf',
        'Content-Type': 'application/json'
    }
});

const getServerUserInfo = api.getUserInfo()
    .then((ServerUserInfo) => {

        return ServerUserInfo
    })
    .catch((error) => {
        console.log(`Ошибка загрузки информации о пользователе с сервера ${error}`)
    });

const getServerInitialCards = api.getInitialCards()
    .then((ServerInitialCards) => {
        return ServerInitialCards
    })
    .catch((error) => {
        console.log(`Ошибка загрузки карточек с сервера ${error}`)
    });





const userInfo = new UserInfo({
    profileNameSelector: nameProfile,
    profileJobSelector: job,
    profileAvatarSelector: avatar
});




const handleProfileFormSubmit = (newProfileData) => {
    api.editProfile(newProfileData)
        .then((response) => {
            userInfo.setUserInfo({
                newProfileName: response.name,
                newProfileJob: response.about,
                newProfileAvatar: response.avatar
            });
            
            profileButton.textContent = 'Сохранение...';
            popupWithProfileForm.closePopup();
        })
        .catch((error) => {
            console.log(`Ошибка редактирования профиля ${error}`)
        })
        .finally(() => {
            profileButton.textContent = 'Сохранить';
        });
        
};





const handlePlaceFormSubmit = (newCardData) => {

    api.addCard(newCardData)
        .then((response) => {

            const addedCard = renderCard(response);

            placeButton.textContent = 'Создание...';

            cardList.addItem(addedCard);

            addCardFormValidator.deactivateButton();
            popupWithPlaceForm.closePopup();
        })
        .catch((error) => {
            console.log(`Ошибка добавления новой карточки ${error}`);
        })
        .finally(() => {
            placeButton.textContent = 'Создать';
        });
};

const renderCard = (item) => {
    const newCard = new Card({
        data: item,
        selector: '.template',
        handleCardClick: () => {
            popupWithImage.openPopup(item);
        },
        userId: userInfo.getId(),
        handleCardRemove: (item) => {
            removeCardWindow(item);
        },
        handleCardLike: (item) => {
            likeCard(item);
        }
    });
    return newCard.generateCard();
};


const cardList = new Section({
    items: [],
    renderer: renderCard,
},
    cards
);

const handleAvatarFormSubmit = (newAvatar) => {
    api.updateAvatar(newAvatar)
        .then((response) => {
            userInfo.setUserInfo({
                newProfileName: response.name,
                newProfileJob: response.about,
                newProfileAvatar: response.avatar
            });

            avatarButtonSave.textContent = 'Сохранение...';
            popupWithAvatarForm.closePopup();
        })
        .catch((error) => {
            console.log(`Ошибка обновления аватара ${error}`);
        })
        .finally(() => {
            avatarButtonSave.textContent = 'Сохранить';
        });
};

const handleConfirmRemoval = (item) => {
    api.removeCard(item.getCardId())
        .then(() => {
            item.removeCard();
            popupWithConfirmation.closePopup();
        })
        .catch((error) => {
            console.log(`Ошибка удаления карточки ${error}`);
        })
};

const popupWithImage = new PopupWithImage(popupImage);
const popupWithProfileForm = new PopupWithForm(profilePopup, handleProfileFormSubmit);
const popupWithPlaceForm = new PopupWithForm(popupCards, handlePlaceFormSubmit);
const popupWithAvatarForm = new PopupWithForm(avatarPopup, handleAvatarFormSubmit);
const popupWithConfirmation = new PopupWithConfirmation(confirmPopup, handleConfirmRemoval);


const likeCard = (card) => {
    if (!card.getIsLike()) {
        api.putLike(card.getCardId())
            .then((response) => {
                card.handleLike(response);
            })
            .catch((error) => {
                console.log(`Ошибка выставления лайка ${error}`);
            });
    } else {
        api.removeLike(card.getCardId())
            .then((response) => {
                card.handleLike(response);
            })
            .catch((error) => {
                console.log(`Ошибка снятия лайка ${error}`);
            });
    }
};

const removeCardWindow = (item) => {
    popupWithConfirmation.openPopup(item);
};

editButton.addEventListener('click', () => {
    const updatedUserInfo = userInfo.getUserInfo();
    
    nameInput.value = updatedUserInfo.name;
    jobInput.value = updatedUserInfo.job;
    editProfileFormValidator.toggleButtonError();
    popupWithProfileForm.openPopup();
});


popupWithProfileForm.setEventListener();

addButton.addEventListener('click', () => {
    popupWithPlaceForm.openPopup();
    addCardFormValidator.toggleButtonError();
});

popupWithPlaceForm.setEventListener();

popupWithImage.setEventListener();

avatarButton.addEventListener('click', () => {
    updateAvatarFormValidator.toggleButtonError();
    popupWithAvatarForm.openPopup();
});

popupWithAvatarForm.setEventListener();

Promise.all([getServerUserInfo, getServerInitialCards])
    .then(([ServerUserInfo, ServerInitialCards]) => {
        userInfo.setUserInfo({
            newProfileName: ServerUserInfo.name,
            newProfileJob: ServerUserInfo.about,
            newProfileAvatar: ServerUserInfo.avatar
        });
        userInfo.setId(ServerUserInfo._id);
        cardList.renderItems(ServerInitialCards);
    })
    .catch((error) => {
        console.log(`Ошибка загрузки данных с сервера ${error}`);
    });
