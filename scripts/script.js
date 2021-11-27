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