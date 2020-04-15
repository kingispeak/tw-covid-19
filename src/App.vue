<template>
  <div id="app">
    <Nav />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Nav, Footer },
};
</script>

<style lang="scss">
@import './assets/styles/app';
</style>
