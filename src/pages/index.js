import './index.css'
import { FormValidator } from "../components/FormValidator.js"
import { Card } from '../components/Card.js'
import { Section } from "../components/Section.js"
import { Popup } from "../components/Popup.js"
import { PopupWithImage } from "../components/PopupWithImage.js"
import { PopupWithForm } from "../components/PopupWithForm.js"
import { UserInfo } from "../components/UserInfo.js"
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js"
import { Api } from '../components/Api.js'
import { initialCards } from '../utils/initialCards.js'


import headerLogo from '../images/logo.svg'
import profileImage from '../images/avatar.png'
import editBtn from '../images/addbutton.svg'
import addBtn from '../images/editbutton.svg'
import closeButton from '../images/CloseIcon.svg'
import cardsDelete from '../images/Trash.svg'
import like from '../images/like.svg'
import actLike from '../images/activelike.svg'


import {
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
  } from '../utils/constants.js';

const addCardFormValidator = new FormValidator(enableValidation, placeForm)
const editProfileFormValidator = new FormValidator(enableValidation, formEdit)
const updateAvatarFormValidator = new FormValidator(enableValidation, avatarForm)

addCardFormValidator.enableValidation()
editProfileFormValidator.enableValidation()
updateAvatarFormValidator.enableValidation()


const api = new Api({

    address: 'https://mesto.nomoreparties.co/v1/cohort-35',
    headers: {
        authorization: '5e183b19-cf6d-4424-b043-3b49b544e6cf',
        'Content-Type': 'application/json'
    }
})


const getServerUserInfo = api.getUserInfo()
    .then((ServerUserInfo) => {

        return ServerUserInfo
    })
    .catch((error) => {
        console.log(`???????????? ???????????????? ???????????????????? ?? ????????????????????????   ${error}`)
    })


const getServerInitialCards = api.getInitialCards()
    .then((ServerInitialCards) => {
        return ServerInitialCards
    })
    .catch((error) => {
        console.log(`???????????? ???????????????? ????????????????   ${error}`)
    })


const userInfo = new UserInfo({
    profileNameSelector: nameProfile,
    profileJobSelector: job,
    profileAvatarSelector: avatar
})


const handleProfileFormSubmit = (newProfileData) => {
    profileButton.textContent = '????????????????????...'
    api.editProfile(newProfileData)
        .then((response) => {

            userInfo.setUserInfo({
                newProfileName: response.name,
                newProfileJob: response.about,
                newProfileAvatar: response.avatar
            })
            console.log(profileButton.textContent)
            
            console.log(profileButton.textContent)
            popupWithProfileForm.closePopup()
            
            
        })
        .catch((error) => {
            console.log(`???????????? ???????????????????????????? ?????????????? ${error}`)
        })
        .finally(() => {
            console.log(profileButton.textContent)
            profileButton.textContent = '??????????????????'
            console.log(profileButton.textContent)
        })

}


const handlePlaceFormSubmit = (newCardData) => {
    placeButton.textContent = '????????????????...'
    api.addCard(newCardData)
        .then((response) => {

            const addedCard = renderCard(response)

            

            cardList.addItem(addedCard)

            addCardFormValidator.deactivateButton()
            popupWithPlaceForm.closePopup()
        })
        .catch((error) => {
            console.log(`???????????? ???????????????????? ???????????????? ${error}`)
        })
        .finally(() => {
            placeButton.textContent = '??????????????'
        })
}


const renderCard = (item) => {
    const newCard = new Card({
        data: item,
        selector: '.template',

        handleCardClick: () => {
            popupWithImage.openPopup(item)
        },

        userId: userInfo.getId(),
        handleCardRemove: (item) => {
            removeCardWindow(item)
        },

        handleCardLike: (item) => {
            likeCard(item)
        }
    })
    return newCard.generateCard()
}


const cardList = new Section({

    items: [],
    renderer: renderCard,
},

    cards
)


const handleAvatarFormSubmit = (newAvatar) => {
    avatarButtonSave.textContent = '????????????????????...'
    api.updateAvatar(newAvatar)
        .then((response) => {

            userInfo.setUserInfo({
                newProfileName: response.name,
                newProfileJob: response.about,
                newProfileAvatar: response.avatar
            })

            
            popupWithAvatarForm.closePopup()
        })
        .catch((error) => {
            console.log(`???????????? ???????????????????? ?????????????? ${error}`)
        })
        .finally(() => {
            avatarButtonSave.textContent = '??????????????????'
        })
}


const removeCardWindow = (item) => {

    popupWithConfirmation.openPopup(item)
}


const handleConfirmRemoval = (item) => {
    api.removeCard(item.getCardId())
        .then(() => {
            item.removeCard()
            popupWithConfirmation.closePopup()
        })
        .catch((error) => {
            console.log(`???????????? ???????????????? ???????????????? ${error}`)
        })

}


const popupWithProfileForm = new PopupWithForm(profilePopup, handleProfileFormSubmit)
const popupWithPlaceForm = new PopupWithForm(popupCards, handlePlaceFormSubmit)
const popupWithAvatarForm = new PopupWithForm(avatarPopup, handleAvatarFormSubmit)
const popupWithConfirmation = new PopupWithConfirmation(confirmPopup, handleConfirmRemoval)
const popupWithImage = new PopupWithImage(popupImage)


const likeCard = (card) => {

    if (!card.getIsLike()) {
        api.putLike(card.getCardId())
            .then((response) => {
                card.handleLike(response)
            })
            .catch((error) => {
                console.log(`???????????? ?????????????????????? ?????????? ${error}`)
            })

    } else {
        api.removeLike(card.getCardId())
            .then((response) => {
                card.handleLike(response)
            })
            .catch((error) => {
                console.log(`???????????? ???????????? ?????????? ${error}`)
            })
    }
}

//
editButton.addEventListener('click', () => {

    const updatedUserInfo = userInfo.getUserInfo()
    nameInput.value = updatedUserInfo.name
    jobInput.value = updatedUserInfo.job
    editProfileFormValidator.toggleButtonError()
    popupWithProfileForm.openPopup()
})

popupWithProfileForm.setEventListener()

//
addButton.addEventListener('click', () => {
    popupWithPlaceForm.openPopup()
    addCardFormValidator.toggleButtonError()
})

popupWithPlaceForm.setEventListener()

//
popupWithImage.setEventListener()

//
avatarButton.addEventListener('click', () => {

    updateAvatarFormValidator.toggleButtonError()
    popupWithAvatarForm.openPopup()
})

popupWithAvatarForm.setEventListener()

//
popupWithConfirmation.setEventListener()


Promise.all([getServerUserInfo, getServerInitialCards])
    .then(([ServerUserInfo, ServerInitialCards]) => {

        userInfo.setUserInfo({
            newProfileName: ServerUserInfo.name,
            newProfileJob: ServerUserInfo.about,
            newProfileAvatar: ServerUserInfo.avatar
        })

        userInfo.setId(ServerUserInfo._id)
        cardList.renderItems(ServerInitialCards)
    })
    .catch((error) => {
        console.log(`???????????? ???????????????? ????????????   ${error}`)
    }) 
