<template>
  <!-- first Slider -->
  <div>
    <vue-slider v-model="value"></vue-slider>
  </div>
</template>


<script>

import vueSlider from 'vue-slider-component'
export default {
  components: {
    'vue-slider': vueSlider
  },
  data: function () {
  return {
    value:[10,50],
    }
  }
}



</script>


<style>


</style>
