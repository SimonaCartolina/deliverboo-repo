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
    <div class="logo col-lg-2 col-md-3 col-sm-3">
      <img
        src="https://logos-world.net/wp-content/uploads/2021/02/Deliveroo-Logo-2016-present.jpg"
        alt=""
      />
    </div>

    <!--second component: the INPUT search-->
    <div
      class="col-lg-6 col-md-3 col-sm-11 order-lg-1 order-md-1 order-sm-2 my-sm-2"
    >
      <div class="input-group">
        <input v-model="searchBar"  @keyup.enter="newSearch(searchTerm)" id="searchBar"
          type="search"
          class="form-control px-2 py-2"
          placeholder="Ristoranti,spesa,piatti"
          style="width: 620px; background-color: #f5f5f5; color: #cccdcd"
        />
        <button @click="newSearch(searchTerm)">search</button>
      </div>
    </div>

    <!--third component:three buttons (carrello,accedi o registrati, account)-->

    <div
      class="d-flex col-lg-4 col-md-6 col-sm-9 order-lg-2 order-md-2 order-sm-1 my-3"
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

      <div class="nav-buttons py-2 px-3">
        <a href="" class="d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="0.90em"
            viewBox="0 0 576 512"
            style="fill: #14d0c1"
          >
            <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            />
          </svg>
          <span> Registrati o accedi </span>
        </a>
      </div>

      <div class="nav-buttons py-2 px-3">
        <a href="" class="d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="0.90em"
            viewBox="0 0 448 512"
            style="fill: #14d0c1"
          >
            <path
              d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
            />
          </svg>
          <span>Account</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
