
export default class UserInfo {
    
    constructor({ profileNameSelector, profileJobSelector }) {
      this._name = profileNameSelector;
      console.log(this._name)
      this._job = profileJobSelector;
      console.log(this._job)
    }
 

    getUserInfo() {
      const userData = {
        name: this._name.textContent,
        job: this._job.textContent,
      };
  
      return userData;
    }
  
    setUserInfo(newProfileName, newProfileJob) {
      this._name.textContent = newProfileName;
      console.log(this._name.textContent)
      this._job.textContent = newProfileJob;
      console.log(this._job.textContent)
      
  };
    }
    
  