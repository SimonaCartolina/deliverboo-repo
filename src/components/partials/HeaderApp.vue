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
    <div class="logo col-lg-10 col-md-3 col-sm-3">
      <a href="http://127.0.0.1:8000/admin/home">
        <img
        src="https://logos-world.net/wp-content/uploads/2021/02/Deliveroo-Logo-2016-present.jpg"
        alt="logo"
      />
      </a>
      
    </div>

    <!--second component: the INPUT search-->

    
    

    <!--third component:three buttons (carrello,accedi o registrati, account)-->

    <div
      class="d-flex col-lg-2 col-md-6 col-sm-9 order-lg-2 order-md-2 order-sm-1 my-3"
    >
      <div class="nav-buttons py-2 px-3 d-lg-inline-block">
        <a href="" class="d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="0.90em"
            viewBox="0 0 576 512"
            style="fill: #14d0c1"
          >
            <path
              d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"
            />
          </svg>
          <span>3,00 €</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  @media screen and (max-width: 480px){
  div.nav-buttons{
    margin-left: 2rem;
  }
  }
</style>
