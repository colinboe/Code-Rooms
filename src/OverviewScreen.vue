<!-- Component of the Overview Screen (first Screen)  -->
<template>

<div class="main">

    <h1 class="bookedRoomsTitle">Your booked rooms:</h1>
    <button>Room: Rick 15.09.2018 12:00 - 15:00</button>
    <button>Room: Morty 05.09.2018 12:00 - 15:00</button>
    <router-link to="/main">
        <button id="button">Book a Room</button>
    </router-link>

</div>

</template>


<script>
export default {
  data: function (){
    return {
      bookingsbutton1: 'Room: Rick 15.09.2018 12:00 - 15:00',
      bookingsbutton2: 'Room: Morty 05.09.2018 12:00 - 15:00',


    }
  }
}



</script>



<style>

body {
  font-family: 'Source Sans Pro', sans-serif;
  color: #1D2022;
}


</style>
