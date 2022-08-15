import { defineStore } from 'pinia';

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
  }),
  getters: {
    getPost: (state) => {
      return state.posts;
    },
  },
  actions: {
    async getOne(id) {
      let response = await fetch(
        `http://localhost:3000/api/posts/getOne/${id}`
      );
      let data = await response.json();
      return data;
    },
    async getAll() {
      let response = await fetch('http://localhost:3000/api/posts/getAll');
      let data = await response.json();
      this.posts.push(data);
    },
  },
});

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
  }),
  getters: {
    getPost: (state) => {
      return state.users;
    },
  },
  actions: {
    async login(email, password) {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    },
  },
});