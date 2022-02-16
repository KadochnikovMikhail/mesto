export  class Card {
    constructor({ data, selector, handleCardClick, userId, handleCardRemove, handleCardLike }) {
        this._name = data.name;
        this._link = data.link;
    
        this._cardId = data._id;
        this._userId = userId;
        this._ownerId = data.owner._id;
    
        this._likes = data.likes.length;
        this._isLike = data.likes.some(item => item._id == this._userId);
    
        this._selector = selector;
        this._handleCardClick = handleCardClick;
        this._handleCardRemove = handleCardRemove;
        this._handleCardLike = handleCardLike;
    
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.cards__image');
        this._like = this._element.querySelector('.cards__like-btn');
        this._likeCounter = this._element.querySelector('.cards__like-counter');
        this._trash = this._element.querySelector('.cards__delete');
      }
    
      _getTemplate() {
        return document
            .querySelector(this._selector)
            .content
            .querySelector('.cards__item')
            .cloneNode(true);
      }
    
      _addEventListeners() {
        this._like.addEventListener('click', () => {
          this._handleCardLike(this);
        });
        this._trash.addEventListener('click', () => {
          this._handleCardRemove(this);
        });
        this._image.addEventListener('click', () => {
          this._handleCardClick();
        });
      }
    
      generate() {
        this._image.src = this._link;
        this._image.alt = this._name;
        this._element.querySelector('.cards__title').textContent = this._name;
        this._likeCounter.textContent = this._likes;
        if (this._ownerId != this._userId) {
          this._trash.classList.add('cards__delete_hidden');
        };
        if (this._isLike) {
          this._like.classList.add('cards__like_active');
        }
    
        this._addEventListeners();
    
        return this._element;
      }
    
      removeCard() {
        this._element.remove();
      }
    
      getCardId() {
        return this._cardId;
      }
    
      getIsLike() {
        return this._isLike;
      }
    
      handleLike(item) {
        this._likeCounter.textContent = item.likes.length;
        this._isLike = !this._isLike
        if (this._isLike) {
          this._like.classList.add('cards__like_active');
        } else {
          this._like.classList.remove('cards__like_active');
        }
      }

}