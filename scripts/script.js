const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__closebutton');
let nameProfile = profile.querySelector('.profile__name');
let job = profile.querySelector('.profile__description');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
const buttonSave = popup.querySelector('.popup__buttonsave');
const formElement = popup.querySelector('.popup__container');

function openPopup(){
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = job.textContent;
}

editButton.addEventListener('click', openPopup);
    
function closePopup(){
    popup.classList.remove('popup_opened') ;
}
closeButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    nameProfile.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup()
}

formElement.addEventListener('submit', formSubmitHandler); 


const popupCards = document.querySelector('.popup-cards');
const cards = document.querySelector('.cards');
const addButton = profile.querySelector('.profile__addbutton');
let titleInput = document.querySelector('#title');
let linkInput = document.querySelector('#link');
let cadrdTitle = cards.querySelector('.cards__title');
const closeCardButton = popupCards.querySelector('.popup-cards__closebutton');

function openCardPopup(){
    popupCards.classList.add('popup-cards_opened');
    //titleInput.value = cadrdTitle.textContent;
    //linkInput.value = job.textContent;
}

addButton.addEventListener('click', openCardPopup);

function closeCardPopup(){
    popupCards.classList.remove('popup-cards_opened') ;
}
closeCardButton.addEventListener('click', closeCardPopup);