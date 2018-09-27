<!-- This is an Example file for components and local component registration for nestet components -->

<template>
  <div>
    <h1>This is an example component!</h1>
    <app-input></app-input>
  </div>
</template>

<!-- example for local component registsration of the Input component  -->
<script>
  import Input from './input.vue';
  export default {
    components: {
      'app-input': Input
    }

  }

</script>
