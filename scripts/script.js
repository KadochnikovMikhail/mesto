const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup_type_user-info');
const closeButton = popup.querySelector('.popup__closebutton');
let nameProfile = profile.querySelector('.profile__name');
let job = profile.querySelector('.profile__description');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
const buttonSave = popup.querySelector('.popup__buttonsave');
const formElement = popup.querySelector('.popup__container');
const cards = document.querySelector('.cards');
const addButton = profile.querySelector('.profile__addbutton');
const popupImage = document.querySelector('.popup-image');
const closeImageButton = popupImage.querySelector('.popup-image__closebutton');
const popupCards = document.querySelector('.popup_type_new-card')
const templateEL = document.querySelector('.template')
const cardFormElement = popupCards.querySelector('.form');
let titleInput = document.querySelector('#title');
let linkInput = document.querySelector('#link');
const buttonCreateCard = document.querySelector('.form__buttonsave')
const titleImage = popupImage.querySelector('.popup-image__imagetitle')
const imageEL = popupImage.querySelector('.popup-image__bigimage')
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
function formSubmitHandler(evt) {
    evt.preventDefault();

    nameProfile.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup()
}

formElement.addEventListener('submit', formSubmitHandler);

function render() {
    const html = initialCards
        .map((item) => {
            return getItem(item)
        })



    cards.append(...html)

}

function getItem(item) {
    const newItem = templateEL.content.cloneNode(true)
    const headerEl = newItem.querySelector('.cards__title')
    const linkEl = newItem.querySelector('.cards__image')
    linkEl.src = item.link
    headerEl.textContent = item.name

    const removeBtn = newItem.querySelector('.cards__delete')
    removeBtn.addEventListener('click', hendleDelete)

    const likeBtn = newItem.querySelector('.cards__like')
    likeBtn.addEventListener('click', like)

    linkEl.addEventListener('click', () => {
        openImagePopup();
        imageEL.src =  item.link;
        titleImage.textContent = item.name;
    
    });
    
    return newItem
    
}

function hendleAdd(evt) {
    evt.preventDefault();
    const inputTitleText = titleInput.value

    const inputLinkText = linkInput.value
    const listItem = getItem({ name: inputTitleText, link: inputLinkText })


    cards.prepend(listItem)
   
    closeCardPopup()

    titleInput.value = ''
    linkInput.value = ''

    
}

function hendleDelete(event){
    const targetEl = event.target
    const listItem = targetEl.closest('.cards__item')
    listItem.remove()
}



function like(evt) {
    
     
    evt.target.classList.toggle('cards__like_active');
}


cardFormElement.addEventListener('submit', hendleAdd)

render()


function openPopup() {
    popup.classList.add('popup_opened');
    popupCards.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = job.textContent;
}


function closePopup() {
    popup.classList.remove('popup_opened');
    popupCards.classList.remove('popup_opened');
    
}
editButton.addEventListener('click', openPopup(popup));

closeButton.addEventListener('click', closePopup(popup));

addButton.addEventListener('click', openPopup(popupCards));

closeButton.addEventListener('click', closePopup(popupCards));

function openImagePopup() {
    popupImage.classList.add('popup-image_opened');
}


function closeImagePopup() {
    popupImage.classList.remove('popup-image_opened');
}
closeImageButton.addEventListener('click', closeImagePopup);