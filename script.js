let profile = document.querySelector('.profile');
let info = profile.querySelector('.profile__info');
let editButton = info.querySelector('.profile__info_header_edit-button');

let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__closeButton');

function openPopup(){
    popup.className = 'popup__opened';
}
editButton.addEventListener('click', openPopup);
    
function closePopup(){
    popup.className = 'popup';
}
closeButton.addEventListener('click', closePopup);

let buttonSave = popup.querySelector('.popup__buttonSave');

buttonSave.addEventListener('submit', function () {
    evt.preventDefault();
    
});