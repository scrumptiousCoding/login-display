<template> 
  <v-row justify="center" class="full-vh" align="center">
        <v-col cols="3">
            <v-card flat class="pa-2 text-center">
                <v-form ref="loginForm" v-model="isLoginFormValid" class="mb-3" @submit.prevent="gotoLogin()">
                    <h4>Login</h4>
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
                    <v-btn :disabled="!isLoginFormValid" type="submit" block color="primary" :loading="isLoading">
                      Login
                      <template v-slot:loader>
                        <v-progress-linear indeterminate></v-progress-linear>
                      </template>
                    </v-btn>
                </v-form>
                
                <a @click="gotoRegister()">Register</a>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import router from '@/router';
import { useGeneralStore } from '@/store/index'
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomeView',
  setup () {
    const store = useGeneralStore();
    let username: any = ref('');
    let password: any = ref('');
    let isLoginFormValid: any = ref(false);
    let emailRules: any = [
          (v: string) => {
              if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
                  return true;
              } else {
                  return 'Please enter a valid email';
              }
          }
      ];
    let passwordRules: any = [
          (v : string)=> {
              if (v !== null && v !== '' && v !== undefined) {
                  return true;
              } else {
                  return 'Please enter a password';
              }
          }
      ];
    let isLoading: any = ref(false);
    
    function gotoLogin(){
      let user = {username: username.value, password: password.value };
      isLoading.value = true;
      
      setTimeout(() => {
        let allowUser = store.loginUser(user)
        if (allowUser === true) {
          router.push('/home');
        }
        else {
          isLoading.value = false;
          alert('Access denied.');
        }
      }, 10000)
    };

    function gotoRegister(){
        router.push('/register');
    };
    
    return {username, password, isLoginFormValid, emailRules, passwordRules, isLoading,
        gotoLogin, gotoRegister}
  }
});
</script>

<style>
    .full-vh{
        height: 100vh;
    }
    .full-w{
        width: 100%;
    }
</style>