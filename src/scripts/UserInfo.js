
export  class UserInfo {

  constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector}) {
    this._name = profileNameSelector;
    this._job = profileJobSelector;
    this._avatar = profileAvatarSelector;
    this._id = 0;

  }


  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      job: this._job.textContent,
    };

    return userData;
  }

  setUserInfo({newProfileName, newProfileJob,newProfileAvatar}) {
    this._name.textContent = newProfileName;
    this._job.textContent = newProfileJob;
    this._avatar.src = newProfileAvatar;
  }
  getId() {
    return this._id;
  }

  setId(id) {
    this._id = id;
  }

}

