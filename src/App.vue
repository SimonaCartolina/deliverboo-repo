<script>
import HeaderApp from "./components/partials/HeaderApp.vue";
import FooterApp from "./components/partials/FooterApp.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
    FooterApp,
  },
};
</script>

<template>
  <HeaderApp />
  <main></main>
  <FooterApp />
</template>

<style lang="scss">
@import "./assets/styles/style.scss";
@import "bootstrap";
</style>
