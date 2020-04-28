<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <span class="navbar-brand h1 mb-0">COVID-19</span>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/news">News</router-link>
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a
          class="nav-link"
          href="https://github.com/kingispeak/tw-covid-19"
          target="_blank"
        >
          <i class="fa fa-github fa-lg" aria-hidden="true"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fa fa-share-alt fa-lg" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
};
</script>

<style scoped lang="scss"></style>
