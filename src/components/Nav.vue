<template>
  <nav id="nav" class="nav">
    <router-link class="nav-item-home" to="/">Home</router-link>|
    <router-link class="nav-item-about" to="/about">About</router-link>
  </nav>
</template>

<style scoped lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
