<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
    OKEBUGWU CHINONSO TONY
  </a>
  <router-link to="/">Home</router-link> |
      <router-link to="/about">Personal Info</router-link> |
      <router-link to="/Dogs">Experience</router-link> |
      <router-link to="/Cats">Skills</router-link> |
      <router-link to="/Pets">Pets</router-link> |
</nav>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #a8d3bb;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
