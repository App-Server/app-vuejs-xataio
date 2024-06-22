import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Login from './views/Login.vue';
import Create from './views/Create.vue';

const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/', component: Login, meta: { hideNavbar: true } },
    { path: '/create', component: Create },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');