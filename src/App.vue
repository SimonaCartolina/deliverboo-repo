<script>
import HeaderApp from "./components/partials/HeaderApp.vue";
import FooterApp from "./components/partials/FooterApp.vue";
import restaurantsList from "./components/pages/restaurantsList.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
    FooterApp,
    restaurantsList,
  },
};
</script>

<template>
  <HeaderApp />
  <restaurantsList />
  <FooterApp />
</template>

<style lang="scss">
@import "./assets/styles/style.scss";
@import "bootstrap";
</style>
