<template>
<div>
  <section>

    <h1>Content from Storyblok</h1>
     <h2>{{pageContent.name}}</h2>
     <p>{{pageContent.created_at}}</p>

       <div>
      <pre> {{pageContent}}</pre>
      </div>
  </section>

  <section>
     <h2>components</h2>
     <Teaser :blok = "components[0]" />

   </section>
  
 </div>
</template>

<script setup>
const storyapi = useStoryApi();
const { data : home } = await storyapi.get("cdn/stories/home",
 { version: "draft" });

const state = reactive({ story: home.story });
const pageContent =state.story;

const components = state.story.content.body;

console.log(components);


</script>