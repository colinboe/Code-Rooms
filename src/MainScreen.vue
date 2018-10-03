<!-- Component of the Main Screen (second Screen)  -->
<template>

  <div class="main">

    <router-link to="/" class="backButton">
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

    <div class="calendar">
      <draggable-cal accentColor="#1D2022"	></draggable-cal>
    </div>

    <!-- first Slider -->
    <div class="slider">
      <h2>Select the amount of time you need:</h2>
      <single-slider v-on:getDuration="setDuration($event)"></single-slider>
    </div>

    <!--  second slier-->
    <div class="slider">
      <h2>Select your timewindow:</h2>
      <double-slider></double-slider>
    </div>

    <div class="roomsMap">


      <svg width="311px" height="217px" viewBox="0 0 311 217" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch -->
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="iPhone-8" transform="translate(-32.000000, -428.000000)" stroke="#1E2022" stroke-width="3">
                <g id="4TH-floor-MAP" transform="translate(34.000000, 429.000000)">
                    <path d="M3.36196587e-14,122.104651 L-8.8817842e-16,210 C-6.17636919e-16,212.209139 1.790861,214 4,214 L303,214 C305.209139,214 307,212.209139 307,210 L307,4.82386384 C307,2.61472484 305.209139,0.823863838 303,0.823863838 L187.275774,0.823863838 C185.066635,0.823863838 183.275774,2.61472484 183.275774,4.82386384 L183.275774,114.104651 C183.275774,116.31379 181.484913,118.104651 179.275774,118.104651 L4,118.104651 C1.790861,118.104651 2.81511679e-14,119.895512 2.84217094e-14,122.104651 Z" id="outline"></path>
                    <rect id="Scissors" x="118.5" y="170.5" width="63" height="33" rx="4"></rect>
                    <rect id="RoomyMcRoomface" x="196.5" y="12.5" width="47" height="45" rx="4"></rect>
                    <rect style="fill: #57D882" id="Morty" x="196.5" y="67.5" width="47" height="20" rx="4"></rect>
                    <rect id="Rick" x="196.5" y="97.5" width="47" height="20" rx="4"></rect>
                    <rect id="Spock" x="12.5" y="130.5" width="93" height="29" rx="4"></rect>
                    <rect id="Rock" x="12.5" y="170.5" width="38" height="33" rx="4"></rect>
                    <rect id="Paper" x="60.5" y="170.5" width="45" height="33" rx="4"></rect>
                    <rect id="Lizzard" x="197.5" y="170.5" width="47" height="33" rx="4"></rect>
                </g>
            </g>
        </g>
      </svg>

    </div>



  </div>

</template>



<script>

let duration=''

export default {
  data: function(){
    return {

    }

  },
  methods: {
    setDuration: function (updatedDuration){
      duration=updatedDuration
      console.log('This console log comes from the MainScreen and prints the value of duration-->' + duration)
    }
  }
}




</script>

<style>

h2{
  margin-bottom: 30px;
  font-size: 22px;
}

.backButton {
  position: fixed;
  left: 5%;
  top: calc(5% - 13px);
}


.calendar {
  color: #1D2022;
}

.slider {
  padding-left: 15px;
  padding-right: 15px;


}

.roomsMap {
  margin-top: 30px;
}

/* #Lizzard {
  fill: #57D882;

}

#Spock {
  fill: #57D882;

} */



</style>
