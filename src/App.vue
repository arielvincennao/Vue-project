<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark pt-4 pb-4">
      <router-link to="/">
                  <a class="navbar-brand"><img class="logo" src="https://eleven.finance/static/media/11-logo.a95ba926.png" alt="elevenfinance icon">Eleven.finance</a>
                </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link text-uppercase"><router-link to="/vault">
                  Vault
                </router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-uppercase"><router-link to="/farm">
                  Farm
                </router-link></a>
      </li>
    </ul>
    <button type="button" class="btn btn-outline-primary text-uppercase btn-navbar">Wallet</button>
  </div>
</nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.btn-navbar{
  font-weight: bold;
  font-size: 0.9em;
}

.nav-link{
  font-size: 0.8em;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

a, a:hover{
  font-weight: bol;
  text-decoration: none;
  color: white;
  letter-spacing: 0.5px;
}

.logo {
  height: 1.8em;
}

  h2, h3{
    padding-left: 0.5em;
    color: white;
  }

</style>
