<!-- Component of the Overview Screen (first Screen)  -->
<template>

<div class="main">

    <h1 class="bookedRoomsTitle">Your booked rooms:</h1>
    <button class="bookingsRectangle"><b>Rick: 15.10.2018 <br/> 14:00 - 15:00</b></button>
    <button class="bookingsRectangle"><b>Morty: 05.11.2018 <br />12:00 - 13:00</b></button>
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

/* "Book a Room" Button: */
#button {
  position: fixed;
  bottom: 50px;
  width: 70%;
  left: 15%;
  right: 15%;
  padding: 20px;
  background: #1D2022;
  border: 1px solid #979797;
  border-radius: 48.5px;
  /* Book a Room: */
  font-weight: bold;
  font-size: 24px;
  color: #FFFFFF;
  letter-spacing: -0.28px;
}

/*Bookings Rectangle Main Styling*/
.bookingsRectangle {
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
