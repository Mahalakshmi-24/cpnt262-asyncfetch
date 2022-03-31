<template>
  <div>
  <h1>{{props.blok.sub_tittle}}</h1>  
  <p>{{props.blok.para}}</p>
  <img :src= "props.blok.image" class="contentimage"> 
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
.contentimage {
  max-height: 200px;
  max-width: 200px;
}
</style>
