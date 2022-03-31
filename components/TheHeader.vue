<template>
  <div>
  <h1>{{props.blok.tittle}}</h1>  
  <p>{{props.blok.description}}</p>
  <img :src= "props.blok.image" class="headerimage">
  </div>


</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
  },
});

console.log(`The Header${props.blok}`)
</script>

<style scoped>
.headerimage {
  max-height: 200px;
  max-width: 200px;
}
</style>
