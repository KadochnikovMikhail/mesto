export class Api {
    constructor({ address, headers }) {

        this._address = address
        this._headers = headers
    }


    _handleResponse = (res) => {

        if (res.ok) {

            return res.json()
        }

        return Promise.reject(`Ошибка: ${res.status}`)
    }


    getInitialCards() {

        return fetch(`${this._address}/cards`, {

            headers: this._headers
        })
            .then((response) => this._handleResponse(response))
    }


    getUserInfo() {
        return fetch(`${this._address}/users/me`, {

            headers: this._headers
        })
            .then((response) => this._handleResponse(response))
    }

    editProfile(userData) {

        return fetch(`${this._address}/users/me`, {

            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({

                name: userData.name,
                about: userData.description,
            })
        })
            .then((response) => this._handleResponse(response))
    }


    addCard(cardObject) {

        return fetch(`${this._address}/cards`, {

            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({

                name: cardObject.name,
                link: cardObject.description
            })
        })
            .then((response) => this._handleResponse(response))
    }


    removeCard(id) {

        return fetch(`${this._address}/cards/${id}`, {

            method: 'DELETE',
            headers: this._headers
        }).
            then((response) => this._handleResponse(response))
    }


    putLike(id) {

        return fetch(`${this._address}/cards/${id}/likes`, {

            method: 'PUT',
            headers: this._headers
        })
            .then((response) => this._handleResponse(response))
    }


    removeLike(id) {

        return fetch(`${this._address}/cards/${id}/likes`, {

            method: 'DELETE',
            headers: this._headers
        })
            .then((response) => this._handleResponse(response))
    }


    updateAvatar(userData) {

        return fetch(`${this._address}/users/me/avatar`, {

            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({

                avatar: userData.avatar
            })
        })
            .then((response) => this._handleResponse(response))
    }
}