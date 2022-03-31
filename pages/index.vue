<template>
  <div>
    <h1>Index page in Page directory</h1>

    <pre> {{pageContent}}</pre>
     </div>
</template>

<script setup>
const storyapi = useStoryApi();
const { data : home } = await storyapi.get("cdn/stories/home",
 { version: "draft" });

const state = reactive({ story: home.story });
const pageContent =state.story;

</script>