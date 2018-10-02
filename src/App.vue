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
    margin: 15px;
  }

  /* "Book a Room" Button: */
  #button {
    position: relative;
    top: 280px;
    padding: 20px;
    background: #1D2022;
    border: 1px solid #979797;
    border-radius: 48.5px;
    width: 75%;
    /* Book a Room: */
    font-family: OpenSans-Bold;
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: -0.28px;
  }

  /*Bookings Button Main Styling*/
  .main button {
    /* Rectangle 4: */
    position: relative;
    top: 60px;
    width: 300px;
    border: 2px solid #1D2022;
    border-radius: 9px;
    padding: 15px;
    margin: 10px;
    background-color: white;
    font-family: OpenSans-Regular;
    font-size: 15px;
    color: #1D2022;
    letter-spacing: -0.28px;
  }


</style>
