<template>
  <div>
   <h1>{{props.blok.headline}}</h1>
  </div>


</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
  },
});

console.log(`teaser${props.blok}`)
</script>