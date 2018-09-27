<!-- This is an example file for an an nestet component:
The Input component (<app-input></app-input>) is used inside the Message.vue component -->

<template>
  <div>
    <input type="text" v-model='message'/>
    <p>{{message}}</p>
  </div>
</template>


<script>
  export default {
    data: function (){
      return {
        message: ''
      }
    }
  }


</script>
