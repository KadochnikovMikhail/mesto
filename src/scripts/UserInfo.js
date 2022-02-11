
export default class UserInfo {
    
    constructor({ profileNameSelector, profileJobSelector }) {
      this._name = profileNameSelector;

      this._job = profileJobSelector;
  
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
    
      this._job.textContent = newProfileJob;
    
      
  };
    }
    
  