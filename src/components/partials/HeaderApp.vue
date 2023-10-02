<script>
export default {
  name: "HeaderApp",
};
</script>

<template>
  <!--navbar with three main components-->
  <nav
    class="d-flex justify-content-between align-items-center py-3 py-md-1 px-3 px-md-1 px-sm-0"
  >
    <!--first component:deliveroo logo with class logo-->
    <div class="logo col-lg-10 col-md-3 col-sm-3 py-4">
      <a href="http://127.0.0.1:8000/admin/home">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" style="fill:#de9e4f">
          <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
          <span style="color:#de9945" class="fw-bolder">Deliverboo</span>
      </a>
      
    </div>

    <!--second component: the INPUT search-->

    
    

    <!--third component:three buttons (carrello,accedi o registrati, account)-->

    <div
      class="d-flex col-lg-1 col-md-1 col-sm-1"
    >
      <div class="nav-buttons py-2 px-3 d-lg-inline-block">
        <router-link :to="{name: 'restaurantsList' }">
          <a href="" class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" style="fill:#E7A85C;">
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
          </a>
        
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  
</style>
