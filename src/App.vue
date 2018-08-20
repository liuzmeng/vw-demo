<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .logo {
    width: 400px;
    height: 400px;
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
