<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-menu" to="/">Home</router-link>|
      <router-link class="nav-menu" to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #nav {
    font-size: 40px;
  }

  .nav-menu {
    font-size: 40px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust: none;
    margin: 0;
    padding: 0;
    background-color: #F8F8F9;
  }

  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, figure, menu, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, select, th, td {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif, "微软雅黑", DIN Alternate;
    font-size: 24px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  body {
    font-size: .24rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  input,
  textarea {
    -webkit-appearance: none;
    border: none;
    background-color: transparent;
  }

  input:focus,
  input:active,
  textarea:focus,
  textarea:active {
    outline: 0;
  }
</style>
