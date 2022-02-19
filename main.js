(()=>{"use strict";var e={139:(e,t,n)=>{e.exports=n.p+"2ceb783afbab75916ddc.svg"},373:(e,t,n)=>{e.exports=n.p+"823b0cf1b0b7e9cb7cad.svg"},688:(e,t,n)=>{e.exports=n.p+"fe17a515669479b1e649.svg"},299:(e,t,n)=>{e.exports=n.p+"d86bb2edc2f6eadb96b7.svg"},425:(e,t,n)=>{e.exports=n.p+"bf9fcdb5e7b8151134f0.png"},652:(e,t,n)=>{e.exports=n.p+"8667ac4a523e8fc42e59.svg"},552:(e,t,n)=>{e.exports=n.p+"87ed371465c7a6a1cd01.svg"},937:(e,t,n)=>{e.exports=n.p+"03b78ada3425e9132ff3.svg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.p="",(()=>{function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=n,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._buttonElement=this._form.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector))}var n,r;return n=t,(r=[{key:"_showError",value:function(e,t){var n=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonError",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_checkIfInputValid",value:function(e){e.validity.valid?this._hideError(e):(this._showError(e,e.validationMessage),this._buttonElement.classList.add(this._inactiveButtonClass))}},{key:"_setInputListners",value:function(){var e=this;this.toggleButtonError(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkIfInputValid(t),e.toggleButtonError()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setInputListners()}},{key:"deactivateButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t){var n=this,r=t.data,o=t.selector,i=t.handleCardClick,a=t.userId,c=t.handleCardRemove,u=t.handleCardLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._cardId=r._id,this._userId=a,this._ownId=r.owner._id,this._selector=o,this._element=this._getTemplate(),this._image=this._element.querySelector(".cards__image"),this._like=this._element.querySelector(".cards__like-btn"),this._likeCounter=this._element.querySelector(".cards__like-counter"),this._delCard=this._element.querySelector(".cards__delete"),this._handleCardClick=i,this._handleCardRemove=c,this._handleCardLike=u,this._likes=r.likes.length,this._isLike=r.likes.some((function(e){return e._id==n._userId}))}var t,n;return t=e,(n=[{key:"handleLike",value:function(e){this._likeCounter.textContent=e.likes.length,this._isLike=!this._isLike,this._isLike?this._like.classList.add("cards__like_active"):this._like.classList.remove("cards__like_active")}},{key:"_addEventListeners",value:function(){var e=this;this._like.addEventListener("click",(function(){e._handleCardLike(e)})),this._delCard.addEventListener("click",(function(){e._handleCardRemove(e)})),this._image.addEventListener("click",(function(){e._handleCardClick()}))}},{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".cards__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._image.src=this._link,this._image.alt=this._name,this._element.querySelector(".cards__title").textContent=this._name,this._likeCounter.textContent=this._likes,this._ownId!=this._userId&&this._delCard.classList.add("cards__delete_hidden"),this._isLike&&this._like.classList.add("cards__like_active"),this._addEventListeners(),this._element}},{key:"removeCard",value:function(){this._element.remove()}},{key:"getCardId",value:function(){return this._cardId}},{key:"getIsLike",value:function(){return this._isLike}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._selector=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t.addItem(t._renderer(e))}))}},{key:"addItem",value:function(e){this._selector.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.closePopup()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._selector=t}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._selector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._selector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListener",value:function(){var e=this;this._selector.addEventListener("click",(function(t){t.target.classList.contains("popup__overlay")&&e.closePopup(),t.target.classList.contains("popup__closebutton-image")&&e.closePopup()}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._selector.querySelector(".popup__bigimage"),t._popupTitle=t._selector.querySelector(".popup__imagetitle"),t}return t=a,(n=[{key:"openPopup",value:function(e){var t=e.link,n=e.name;this._popupImage.src=t,this._popupImage.alt=n,this._popupTitle.textContent=n,f(y(a.prototype),"openPopup",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function w(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e,t){var n,r,o,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),c=function(e){e.preventDefault(),n._submit(n._getInputValues()),n.closePopup()},(o="handleSubmit")in(r=C(n=i.call(this,e)))?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,n._submit=t,n._form=n._selector.querySelector(".form"),n._inputList=Array.from(n._form.querySelectorAll(".form__data")),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListener",value:function(){m(P(a.prototype),"setEventListener",this).call(this),this._form.addEventListener("submit",this.handleSubmit)}},{key:"closePopup",value:function(){this._form.reset(),m(P(a.prototype),"closePopup",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.profileNameSelector,r=t.profileJobSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._job=r,this._avatar=o,this._id=0}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){var t=e.newProfileName,n=e.newProfileJob,r=e.newProfileAvatar;this._name.textContent=t,this._job.textContent=n,this._avatar.src=r}},{key:"getId",value:function(){return this._id}},{key:"setId",value:function(e){this._id=e}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function x(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._button=document.querySelector(".form__buttonsave_type_confirm"),n}return t=a,(n=[{key:"openPopup",value:function(e){I(T(a.prototype),"openPopup",this).call(this),this._element=e}},{key:"setEventListener",value:function(){var e=this;I(T(a.prototype),"setEventListener",this).call(this),this._button.addEventListener("click",(function(t){t.preventDefault(),e._handleSubmit(e._element)}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n,r,o=t.address,i=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},(n="_handleResponse")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._address=o,this._headers=i}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._address,"/cards"),{headers:this._headers}).then((function(t){return e._handleResponse(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._address,"/users/me"),{headers:this._headers}).then((function(t){return e._handleResponse(t)}))}},{key:"editProfile",value:function(e){var t=this;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.description})}).then((function(e){return t._handleResponse(e)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.description})}).then((function(e){return t._handleResponse(e)}))}},{key:"removeCard",value:function(e){var t=this;return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleResponse(e)}))}},{key:"putLike",value:function(e){var t=this;return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._handleResponse(e)}))}},{key:"removeLike",value:function(e){var t=this;return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleResponse(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._handleResponse(e)}))}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),V=(n(937),n(425),n(299),n(652),n(139),n(373),n(552),n(688),document.querySelector(".popup_type_bigimage")),N=document.querySelector(".popup_type_user-info"),U=document.querySelector(".popup_type_new-card"),J=document.querySelector(".popup_type_avatar"),H=document.querySelector(".popup_type_confirm"),M=(document.querySelector("#title"),document.querySelector("#link"),document.querySelector("#name")),z=document.querySelector("#job"),$=document.querySelector(".profile"),F=document.querySelector(".profile__name"),G=document.querySelector(".profile__description"),K=document.querySelector(".profile__image"),Q=document.querySelector("#form-add"),W=document.querySelector("#form-edit"),X=document.querySelector("#form-avatar"),Y=$.querySelector(".profile__addbutton"),Z=$.querySelector(".profile__edit-button"),ee=document.querySelector(".profile__overlay"),te=document.querySelector(".form__buttonsave_type_save"),ne=document.querySelector("#place-button"),re=document.querySelector("#avatar-button"),oe=document.querySelector(".cards"),ie={inputSelector:".form__data",submitButtonSelector:".form__buttonsave",inactiveButtonClass:"form__buttonsave_disabled",inputErrorClass:"form__data_type_error",errorClass:"popup__error_visible"};function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ce=new t(ie,Q),ue=new t(ie,W),se=new t(ie,X);ce.enableValidation(),ue.enableValidation(),se.enableValidation();var le=new D({address:"https://mesto.nomoreparties.co/v1/cohort-35",headers:{authorization:"5e183b19-cf6d-4424-b043-3b49b544e6cf","Content-Type":"application/json"}}),fe=le.getUserInfo().then((function(e){return e})).catch((function(e){console.log("Ошибка загрузки информации о пользователе   ".concat(e))})),pe=le.getInitialCards().then((function(e){return e})).catch((function(e){console.log("Ошибка загрузки карточек   ".concat(e))})),de=new O({profileNameSelector:F,profileJobSelector:G,profileAvatarSelector:K}),he=function(e){var t=new o({data:e,selector:".template",handleCardClick:function(){ke.openPopup(e)},userId:de.getId(),handleCardRemove:function(e){_e(e)},handleCardLike:function(e){we(e)}});return t.generateCard()},ye=new a({items:[],renderer:he},oe),_e=function(e){ge.openPopup(e)},ve=new S(N,(function(e){te.textContent="Сохранение...",le.editProfile(e).then((function(e){de.setUserInfo({newProfileName:e.name,newProfileJob:e.about,newProfileAvatar:e.avatar}),console.log(te.textContent),console.log(te.textContent),ve.closePopup()})).catch((function(e){console.log("Ошибка редактирования профиля ".concat(e))})).finally((function(){console.log(te.textContent),te.textContent="Сохранить",console.log(te.textContent)}))})),be=new S(U,(function(e){ne.textContent="Создание...",le.addCard(e).then((function(e){var t=he(e);ye.addItem(t),ce.deactivateButton(),be.closePopup()})).catch((function(e){console.log("Ошибка добавления карточки ".concat(e))})).finally((function(){ne.textContent="Создать"}))})),me=new S(J,(function(e){re.textContent="Сохранение...",le.updateAvatar(e).then((function(e){de.setUserInfo({newProfileName:e.name,newProfileJob:e.about,newProfileAvatar:e.avatar}),me.closePopup()})).catch((function(e){console.log("Ошибка обновления аватара ".concat(e))})).finally((function(){re.textContent="Сохранить"}))})),ge=new B(H,(function(e){le.removeCard(e.getCardId()).then((function(){e.removeCard(),ge.closePopup()})).catch((function(e){console.log("Ошибка удаления карточки ".concat(e))}))})),ke=new _(V),we=function(e){e.getIsLike()?le.removeLike(e.getCardId()).then((function(t){e.handleLike(t)})).catch((function(e){console.log("Ошибка снятия лайка ".concat(e))})):le.putLike(e.getCardId()).then((function(t){e.handleLike(t)})).catch((function(e){console.log("Ошибка выставления лайка ".concat(e))}))};Z.addEventListener("click",(function(){var e=de.getUserInfo();M.value=e.name,z.value=e.job,ue.toggleButtonError(),ve.openPopup()})),ve.setEventListener(),Y.addEventListener("click",(function(){be.openPopup(),ce.toggleButtonError()})),be.setEventListener(),ke.setEventListener(),ee.addEventListener("click",(function(){se.toggleButtonError(),me.openPopup()})),me.setEventListener(),ge.setEventListener(),Promise.all([fe,pe]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];de.setUserInfo({newProfileName:o.name,newProfileJob:o.about,newProfileAvatar:o.avatar}),de.setId(o._id),ye.renderItems(i)})).catch((function(e){console.log("Ошибка загрузки данных   ".concat(e))}))})()})();