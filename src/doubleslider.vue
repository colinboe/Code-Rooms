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
  data: () => ({
           value: [
      "10-07",
      "10-14"
    ],
    width: "100%",
    height: 4,
    dotSize: 14,
    interval: 3,
    disabled: false,
    show: true,
    tooltip: "always",
    piecewise: true,
    data: [
      "10-01",
      "10-02",
      "10-03",
      "10-04",
      "10-05",
      "10-06",
      "10-07",
      "10-08",
      "10-09",
      "10-10",
      "10-11",
      "10-12",
      "10-13",
      "10-14",
      "10-15",
      "10-16",
      "10-17",
      "10-18",
      "10-19",
      "10-20"
    ]
  })
  }



</script>


<style>


</style>
