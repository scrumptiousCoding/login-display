<template>
    <v-row justify="center" class="full-vh" align="center">
        <v-col cols="3">
            <v-card flat class="pa-2 text-center">
                <v-form ref="loginForm" v-model="isLoginFormValid" class="mb-3" @submit.prevent="createAccount()">
                    <h4>Register</h4>
                    <p>To register please enter the fields below</p>
                    <v-text-field
                        v-model="username"
                        label="Email"
                        :rules="emailRules"
                        required>
                    </v-text-field>
                    <v-text-field
                        v-model="password"
                        label="Password"
                        type="password"
                        :rules="passwordRules"
                        required>
                    </v-text-field>
                    <p class="text-tiny text-left mb-2">
                      Please ensure that the password contains the following:
                      <ul>
                        <li><v-icon icon="mdi-information-outline" style="color: black"></v-icon> Minimum of 6 characters</li>
                        <li><v-icon icon="mdi-information-outline" style="color: black"></v-icon> Numbers</li>
                        <li><v-icon icon="mdi-information-outline" style="color: black"></v-icon> Capital Letters</li>
                      </ul>
                    </p>
                    <v-btn :disabled="!isLoginFormValid" type="submit" block color="primary">Create Account</v-btn>
                </v-form>
                
                <a @click="gotoLogin()">Have an account? Log in here</a>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts">
  import router from '@/router'
import { useGeneralStore } from '@/store/index'
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Home', 
    setup () {
        // variables
        const store = useGeneralStore();
        let username = ref<string>('');
        let password = ref<string>('');
        let isLoginFormValid = ref<boolean>(false);
        let emailRules: any = [
            (v: string) => {
                //standard check for email validation. at the very least one letter before the @. one after and two letters after the .
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
                    return true
                } else {
                    return 'Please enter a valid email'
                }
            }
        ];
        let passwordRules: any = [
            (v : string)=> {
                if (v !== null && v !== '' && v !== undefined) {
                    return true
                } else {
                    return 'Please enter a password'
                }
            },
            (v: string) => {
                //check password value for capitals, and a minimum length of 6 characters
              if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(v)) {
                return true
              } else {
                return 'Please enter a password that follows the rules given.'
              }
            }
        ];    
        
        function gotoLogin(){
            router.push('/')
        }

        function createAccount() {
            let user = {username: username.value, password: password.value, isBanned: false}
            store.registerUser(user)
            alert('Done! Please log in');
            gotoLogin();
        }
        
        return {username, password, isLoginFormValid, emailRules, passwordRules,
            gotoLogin, createAccount}
    }  
  })
</script>


<style>
  .text-tiny{
    font-size: small;
  }
</style>