import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({ 
    userObj: {username: '', password: '', isBanned: true},
    usersList: [
      {username: 'banned@test.com', password: 'Test1234', isBanned: true},
      {username: 'access@test.com', password: 'Test1234', isBanned: false}
    ],
    dummyDisplay: [{}]
  }),
  actions: {
    loginUser(payload: any) : boolean{
      let userSearch = this.usersList.find((user: any) => {return user.username === payload.username})
      
      if (userSearch !== undefined) {
        if (userSearch.isBanned === true) {
          return false;
        } else {
          if (userSearch.password === payload.password) {
            this.userObj = {username: userSearch.username, password: userSearch.password, isBanned: userSearch.isBanned}
            return true;
          } else {
            return false;
          }
        }
      } else {
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