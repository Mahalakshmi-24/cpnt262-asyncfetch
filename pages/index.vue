<template>
<div>
  <section>

    <h1>Content from Storyblok</h1>
     <h2>{{pageContent.name}}</h2>
     <p>Created_at: {{pageContent.created_at}}</p>

     <!--  <div>
      <pre> {{pageContent}}</pre>
      </div>
     --> 
  </section>

 <section>
     <h2>Components</h2>
     <TheHeader :blok = "components[0]" />  
   </section>

   <section>
   <TheContent :blok = "components[1]" />
  </section>
 </div>
</template>

<script setup>
const storyapi = useStoryApi();
const { data : home } = await storyapi.get("cdn/stories/home",
 { version: "draft" });

const state = reactive({ story: home.story });
const pageContent =state.story;

const components = state.story.content.Navigation;

//This loops prints components inside Navigation

//components.forEach((x) => {

//console.log(x.component);
//});


</script>