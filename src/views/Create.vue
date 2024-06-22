<template>
    <div class="container">
        <h3>Register</h3>
        <form @submit.prevent="registerUser">
        <div>
            <label for="name">Name:</label>
            <input type="text" v-model="form.name" required>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" v-model="form.email" required>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" v-model="form.password" required>
        </div>
        <button type="submit">Register</button>
        </form>
        <router-link to="/home">Home</router-link>
    </div>
</template>

<script>
import About from './About.vue';
import { registerUser } from '@/service/xataService';

export default {
  components: { About },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async registerUser() {
      try {
        await registerUser(this.form);
        alert('Registration successful!');
        // Clear the form or redirect as needed
      } catch (error) {
        console.error('Error during registration:', error);
        alert('Registration failed. Please try again.');
      }
    }
  }
};

</script>

