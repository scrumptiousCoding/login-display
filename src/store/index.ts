import { defineStore } from 'pinia'
import DummyItems from '@/types/DummyItems'
import SystemMessages from '@/types/Messages'
import User from '@/types/User'

export const useGeneralStore = defineStore('general', {
  state: () => ({ 
    userObj: {} as User,
    usersList: [
      {username: 'banned@test.com', password: 'Test1234', isBanned: true},
      {username: 'access@test.com', password: 'Test1234', isBanned: false}
    ] as User[],
    systemMessages: [] as SystemMessages[]
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
    registerUser(payload: User){
      this.usersList.push({username: payload.username, password: payload.password, isBanned: payload.isBanned})
    },
    getDummyList() : DummyItems[] {
      return [
        {id: 1, imageUrl: 'https://picsum.photos/400', dummyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
        {id: 2, imageUrl: 'https://picsum.photos/500', dummyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
        {id: 3, imageUrl: 'https://picsum.photos/600', dummyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
      ]
    },
    logoutUser() {
      this.userObj = {username: '', password: '', isBanned: true}
    }
  },
})