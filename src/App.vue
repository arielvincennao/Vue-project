<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand"
          ><router-link to="/">
            <img
              src="https://eleven.finance/static/media/11-logo.a95ba926.png"
              alt=""
              class="logo"
            />
            <a>Eleven.finance</a>
          </router-link></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link"
                ><router-link to="/vault">
                  <a>Vault</a>
                </router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link"
                ><router-link to="/farm">
                  <a>Farm</a>
                </router-link></a
              >
            </li>
          </ul>
          <form class="d-flex">
            <button class="btn btn-outline-light">Wallet</button>
          </form>
        </div>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: black;
}

a{
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: none;
}

.logo {
  height: 2em;
}
</style>
