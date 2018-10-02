

<template>
  <!-- second slider -->
  <div>
    <vue-slider
    :piecewise= true
    :data="['0:00','0:30','1:00','1:30','2:00','2:30']"
     v-model="value" v-on:callback="printDuration" >
    </vue-slider>
  </div>
</template>


<script>

export let duration ="1:00"



export default {

  data: function () {
  return {
    value:'1:00h'
    }
  },
  methods: {
    printDuration: function (){
      console.log("You want to book the room for:" + this.value)
      duration=this.value
      console.log(duration)
    }
  }

}
</script>


<style>


</style>
