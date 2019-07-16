<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title primary-title>
          <v-flex row>
            <h2>Login form</h2>
            <v-text-field label="Username" v-model="username"></v-text-field>
            <v-text-field label="Password" v-model="password"></v-text-field>
          </v-flex>
        </v-card-title>
      <v-btn color="success" @click="login">Login</v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {UserInfo} from '~/types/types';
@Component({
  components: {
    
  },
})

export default class index extends Vue{
  private username="";
  private password="";
  
  private login(){
    var user: UserInfo = {
      username: this.username,
      password: this.password
    };

    // update value in store
    this.$store.dispatch('modules/user/sayhi', user);

    // redirect welcomepage
    this.$router.push({name:'welcome'})
  }
}
</script>
