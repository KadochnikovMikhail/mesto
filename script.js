const profile = document.querySelector('.profile');
const info = profile.querySelector('.profile__info');
const editButton = info.querySelector('.profile__info_header_edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__closeButton');
let nameProfile = document.querySelector('.profile__info_header_name');
let job = document.querySelector('.profile__info_description');
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