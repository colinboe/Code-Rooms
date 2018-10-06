<template>
  <div id="app">
    <header class="header">
      <div>
        <img src="./assets/headerLogo.png" class="logo">
      </div>
    </header>

    <router-view></router-view>

  </div>
</template>



<style>
  body {
    font-family: 'Source Sans Pro', sans-serif;
    color: #1D2022;
  }

  .header {
    background-color: #1D2022;
    position: absolute;
    height: 10%;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  /*Basic positioning*/
  .main {
    position: absolute;
    top: 10%;
    height: 90%;
    left: 0;
    right: 0;
    text-align: center;
  }

  .logo {
    /* margin-top: calc(5% - 13px); */
    margin: auto;
  }



</style>
