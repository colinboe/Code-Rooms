<template>
  <!-- first Slider -->
  <div>
    <vue-slider v-model="value"></vue-slider>
  </div>
</template>


<script>

export default {

  data: function () {
  return {
    value:[10,60],
    }

  }
}



</script>


<style>


</style>
