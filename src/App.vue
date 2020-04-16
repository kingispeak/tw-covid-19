<template>
  <div id="app">
    <Nav />
    <main v-if="loaded">
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
  data() {
    return {
      loaded: false
    };
  },
  created() {
    this.$store
      .dispatch('fetchReport')
      .then(() => {
        this.loaded = true;
      })
      .catch(() => {});
  }
};
</script>
