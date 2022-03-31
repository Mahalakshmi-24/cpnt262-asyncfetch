import { defineNuxtConfig } from "nuxt3";
 
export default defineNuxtConfig({

  
  components: ["~/components"],
  buildModules: [
    ["@storyblok/nuxt", { accessToken: "o76LGclxGJN6V1DyMwcKLQtt" }],
  ]
});