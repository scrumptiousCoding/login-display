import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({ 
    userObj: {username: '', password: '', isBanned: true},
    usersList: [
      {username: 'banned@test.com', password: 'Test1234', isBanned: true},
      {username: 'a@t.co', password: '123', isBanned: false},
      {username: 'access@test.com', password: 'Test1234', isBanned: false}
    ],
    dummyDisplay: [{}],
    systemMessages: [{}]
  }),
  actions: {
    emptyMessages() {
      this.systemMessages.splice(0);
    },
    loginUser(payload: any) : boolean{
      let userSearch = this.usersList.find((user: any) => {return user.username === payload.username})
      
      if (userSearch !== undefined) {
        if (userSearch.isBanned === true) {
          this.systemMessages.push({message: 'User has been banned - please contact system administrator.', type: 'warning'})
          return false;
        } else {
          if (userSearch.password === payload.password) {
            this.userObj = {username: userSearch.username, password: userSearch.password, isBanned: userSearch.isBanned}
            return true;
          } else {
            this.systemMessages.push({message: 'Incorrect password and username.', type: 'error'})
            return false;
          }
        }
      } else {
        this.systemMessages.push({message: 'User not found', type: 'error'})
        return false
      }
    },
    registerUser(payload: any){
      this.usersList.push({username: payload.username, password: payload.password, isBanned: false})
    },
    setDummyList() {
      this.dummyDisplay = [
        {imageUrl: 'https://picsum.photos/400', dummyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
        {imageUrl: 'https://picsum.photos/500', dummyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
        {imageUrl: 'https://picsum.photos/600', dummyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
      ]
    },
    logoutUser() {
      this.userObj = {username: '', password: '', isBanned: true}
    }
  },
})