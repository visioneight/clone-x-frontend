import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: {
      id: 1,
      name: 'Nana',
    },
  }),

  getters: {
    getUserName: (state) => state.user.name,
  },
})