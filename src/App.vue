<script>
import HeaderApp from "./components/partials/HeaderApp.vue";
import FooterApp from "./components/partials/FooterApp.vue";
import restaurantsList from "./components/pages/restaurantsList.vue";
import ShoppingBag from "./components/ShoppingBag.vue";


export default {
  name: "App",
  components: {
    HeaderApp,
    FooterApp,
    restaurantsList,
    ShoppingBag
  },

}

</script>

<template>
  <HeaderApp />


  <main>
    <restaurantsList />
    <ShoppingBag />
  </main>

  <FooterApp />
</template>

<style lang="scss">
@import "./assets/styles/style.scss";
@import "bootstrap";
</style>
