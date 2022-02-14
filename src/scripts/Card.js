export default class Card {
    constructor({ data, selector, handleCard }) {
        this._selector = selector;
        this._name = data.name;
        this._link = data.link;
        this._handleCard = handleCard;

    }

    _getItem() {
        return document
            .querySelector(this._selector)
            .content
            .querySelector('.cards__item')
            .cloneNode(true);
    }
    _deleteCard = () => { 
        this._element.remove();
    }

    _likeBt = () => {
        this._like.classList.toggle('cards__like_active')
    }

    getView() {
        this._element = this._getItem();
        this._like = this._element.querySelector('.cards__like');
        this._cardImage = this._element.querySelector('.cards__image');
        this._element.querySelector('.cards__title').textContent = this._name; 
        this._cardImage.src = this._link; 
        this._cardImage.alt = this._name; 
        this._setEventListeners();

        return this._element
    };

    _setEventListeners() {
    
        this._element.querySelector('.cards__delete').addEventListener('click', this._deleteCard);

       
        this._like.addEventListener('click', this._likeBt);

        
        this._cardImage.addEventListener('click', () => {
            this._handleCard()
        });
    }
}