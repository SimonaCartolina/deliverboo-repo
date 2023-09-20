<script>
import HomePageHeader from "./components/partials/HomePageHeader.vue";



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
