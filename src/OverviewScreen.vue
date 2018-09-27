<!-- Component of the Overview Screen (first Screen)  -->

<template>

<div class="main">

    <h3 class="bookedRoomsTitle">Your booked rooms:</h3>
    <button> {{bookingsbutton1}}</button>
    <button> {{bookingsbutton2}}</button>
    <router-link to="/main">
        <button id="button" v-on:click="nextScreen=!nextScreen">Book a Room</button>
    </router-link>

</div>

</template>


<script>
export default {
  data: function (){
    return {
      bookingsbutton1: 'Room: Rick 15.09.2018 12:00 - 15:00',
      bookingsbutton2: 'Room: Morty 05.09.2018 12:00 - 15:00',
      buttonText: "Book a Room",

    }
  }
}



</script>



<style>



</style>
