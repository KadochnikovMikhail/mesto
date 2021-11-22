let profile = document.querySelector('.profile');
let info = profile.querySelector('.profile__info');
let editButton = info.querySelector('.profile__info_header_edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__closeButton');
let name = document.querySelector('.profile__info_header_name');
let job = document.querySelector('.profile__info_description');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
let buttonSave = popup.querySelector('.popup__buttonSave');
let formElement = popup.querySelector('.popup__conteiner');

function openPopup(){
    popup.className = 'popup__opened';
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
}

editButton.addEventListener('click', openPopup);
    
function closePopup(){
    popup.className = 'popup';
}
closeButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    let name = document.querySelector('.profile__info_header_name');
    let job = document.querySelector('.profile__info_description');

    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup()
}

formElement.addEventListener('submit', formSubmitHandler); 