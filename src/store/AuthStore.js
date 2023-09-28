import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => state.user !== null,
  },
  actions: {
    registration(user) {
        this.user = user;
    },
    login(user) {
      if(this.user && this.user.email == user.email && this.user.password == user.password) {
        return true;
      } else {
        return false;
      }
    },
    logout() {
      this.user = null;
    },
  },
});