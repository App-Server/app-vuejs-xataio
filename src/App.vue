<template>
  <main>
    <Navigation v-if="!$route.meta.hideNavbar" />
    <router-view></router-view>
  </main>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navigation from './components/Navigation.vue';

export default {
  components: {
    Navigation
  },
  setup() {
    const route = useRoute();
    const showNavigation = computed(() => !route.meta.hideNavbar);
    return { showNavigation };
  }
}
</script>

<style>
/* Add your styles here */
</style>
