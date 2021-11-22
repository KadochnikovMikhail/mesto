const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__closeButton');
let nameProfile = profile.querySelector('.profile__name');
let job = profile.querySelector('.profile__description');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
const buttonSave = popup.querySelector('.popup__buttonSave');
const formElement = popup.querySelector('.popup__container');

function openPopup(){
    popup.className = 'popup__opened';
    nameInput.value = nameProfile.textContent;
    jobInput.value = job.textContent;
}

editButton.addEventListener('click', openPopup);
    
function closePopup(){
    nameInput.value = nameProfile.textContent;
    jobInput.value = job.textContent;
    popup.className = 'popup';
}
closeButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    nameProfile.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup()
}

formElement.addEventListener('submit', formSubmitHandler); 