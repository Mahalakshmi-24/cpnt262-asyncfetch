import { defineNuxtConfig } from "nuxt3";
 
export default defineNuxtConfig({

  
  components: ["~/components"],
  buildModules: [
    ["@storyblok/nuxt", { accessToken: "HdPe8scvyg1Q8xhQ5ZkkQQtt" }],
  ]
});