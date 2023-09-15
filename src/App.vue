<script>
import HeaderApp from "./components/partials/HeaderApp.vue";
import FooterApp from "./components/partials/FooterApp.vue";
import ShoppingBag from "./components/ShoppingBag.vue";

export default {
  name: "App",
  components: {
    
    HeaderApp,
    FooterApp,
    ShoppingBag
},
};
</script>

<template>
  <HeaderApp />
  <main>
    <ShoppingBag />
  </main>
  <FooterApp />
</template>

<style lang="scss">
@import "./assets/styles/style.scss";
</style>
