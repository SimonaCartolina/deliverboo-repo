<script>
import HelloWorld from "./components/HelloWorld.vue";
import HeaderApp from "./components/partials/HeaderApp.vue";
import FooterApp from "./components/partials/FooterApp.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HeaderApp,
    FooterApp,
  },
};
</script>

<template>
  <HeaderApp />
  <main>
    <HelloWorld />
  </main>
  <FooterApp />
</template>

<style lang="scss">
@import "./assets/styles/style.scss";
</style>
