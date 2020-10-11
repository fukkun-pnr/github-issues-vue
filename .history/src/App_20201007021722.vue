<template>
  <div id="app">
    <div id="nav">
      <router-link to="/issues">issues</router-link>
    </div>
    <router-view class="page" />
  </div>
</template>

<style lang="scss">
@import '~reset.css';


li {
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex: 1;
  flex-direction: column;

  h1, h2, h3, h4 {
    font-weight: bold;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    line-height: 120%;
  }
}

#nav {
  margin-top: 1rem;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

a:link, a:visited {
  color: #42b983;
}

.page {
  text-align: left;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 1rem 2rem 2rem;
}
</style>