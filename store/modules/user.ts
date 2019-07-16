import Vue from 'vue'
import { VuexModule, Module, action, getter, mutation } from 'vuex-class-component'
import { UserInfo } from '~/types/types';

@Module({ namespacedPath: 'modules/user/', target: 'nuxt' })
export class UserStore extends VuexModule {
  @getter userinfo?: UserInfo

  @mutation
  SET_USER(userInfo: UserInfo) {
    Vue.set(this, 'userinfo', userInfo)
  }

  @action()
  async sayhi(user: UserInfo) {
    this.SET_USER(user)
  }
}

export default UserStore.ExtractVuexModule(UserStore)
