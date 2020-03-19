<template>
<div id="app">
  <div id="header">
    <router-link to="/" id="logo">
      <img src="/images/zoobasketball.png">
    </router-link>
    <div id="menu-options">
      <router-link to="/">
        <p>Home</p>
      </router-link>
      <router-link to="/roster">
        <p>Create Roster</p>
      </router-link>
      <router-link to="/game">
        <p>View Game Results</p>
      </router-link>
    </div>
  </div>
  <router-view />
  <hr>
  <div class="footer">
    <a href="https://github.com/jwilkerson128/creative-project-3">Github Repository</a>
  </div>
</div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

.footer {
  background-color: #DCE997;
  padding: 10px;
  text-align: left;
}

.wrapper {
  width: 100%;
  margin-bottom: 20px;
}

a {
  padding: 5px;
  padding-right: 10px;
  padding-left: 10px;
  text-decoration: none
}

#menu-options {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

#header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "logo menu-options";
  padding: 5px;
  background-color: #DCE997;
  width: 100%
}

@media only screen and (min-width: 961px) {
  #header {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "none logo menu-options";
  }

  #menu-options {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
}

#logo {
  grid-area: logo;
}

#menu-options {
  grid-area: menu-options;
}

#header img {
  width: 200px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

p {
  text-align: left;
  padding: 5px;
}
</style>
