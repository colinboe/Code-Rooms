<!-- Component of the Overview Screen (first Screen)  -->
<template>

<div class="main">

  <router-link to="/main" class="backButton">
    <svg width="16px" height="26px" viewBox="0 0 16 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch -->
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
        <g id="iPhone-8-Copy" transform="translate(-12.000000, -78.000000)" fill-rule="nonzero" stroke="#FFF" stroke-width="4">
          <path d="M15.9465465,90.9670946 L24.6883718,99.7089199 L24.9234696,99.9440178 L24.4532739,100.414214 L24.218176,100.179116 L15.4763507,91.4372904 L15.4701958,91.4434453 L15,90.9732495 L15.0061549,90.9670946 L15,90.9609397 L15.4701958,90.4907439 L15.4763507,90.4968988 L24.218176,81.7550736 L24.4532739,81.5199757 L24.9234696,81.9901715 L24.6883718,82.2252694 L15.9465465,90.9670946 Z"
            id="Combined-Shape"></path>
        </g>
      </g>
    </svg>
  </router-link>

  <div class="confirmationRectangle">

    <h1>Booking details:</h1>
    <p class="confirmationParagraph"><b>Location:  </b> {{Room}}</p>
    <p class="confirmationParagraph"><b>Date:  </b> {{Datum}}</p>
    <p class="confirmationParagraph"><b>Time:  </b> {{Time}}</p>

  </div>



  <router-link to="/">
      <button class="confirmButton">Confirm</button>
  </router-link>


</div>

</template>


<script>


export default {
  data: function (){
    return {
      Room: 'Morty',
      Datum:'10.10.18',
      Time:'14:30 - 16:00'
    }
  }
}


</script>



<style>

body {
  font-family: 'Source Sans Pro', sans-serif;
  color: #1D2022;
}


.confirmationRectangle {
  /* Rectangle 4: */
  margin: 40px 40px;
  padding: 15px;
  border: 3px solid #1D2022;
  border-radius: 16px;
  background-color: white;
  color: #1D2022;
}

.confirmationParagraph {
  font-size: 20px
}

.confirmButton {
  position: fixed;
  bottom: 80px;
  width: 70%;
  left: 15%;
  right: 15%;
  text-align: center;
  padding: 20px;
  background: #57D882;
  border-color: #57D882;
  border-radius: 48.5px;
  /* Book a Room: */
  font-weight: bold;
  font-size: 24px;
  color: #1E2022;
  letter-spacing: -0.28px;
}



</style>
