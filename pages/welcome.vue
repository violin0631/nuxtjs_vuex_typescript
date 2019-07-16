<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex xs12 sm8 md6>
      <v-card>
        Welcome {{user.username}}!!
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserInfo } from '~/types/types';
@Component({
  components: {
    
  },
})

export default class welcome extends Vue{

    // Get userinfo from store
    private user: UserInfo =this.$store.getters['modules/user/userinfo'];
    
}
</script>
