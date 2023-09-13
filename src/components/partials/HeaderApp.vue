<script>
export default {
  name: "HeaderApp",
};
</script>

<template>
  <!--navbar with three main components-->
  <nav class="d-flex justify-content-between align-items-center py-3 px-4">
    <!--first component:deliveroo logo with class logo-->
    <div class="logo">
      <img
        src="https://logos-world.net/wp-content/uploads/2021/02/Deliveroo-Logo-2016-present.jpg"
        alt=""
      />
    </div>

    <!--second component: the input search-->
    <div>
      <div class="input-group">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
        >
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </button>

        <input
          type="text"
          style="width: 620px; background-color: #f5f5f5"
          class="form-control py-3 px-2"
          placeholder="Ristoranti,spesa,piatti"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>
    </div>

    <!--third component:three buttons (carrello,accedi o registrati, account)-->

    <div class="d-flex">
      <div class="nav-buttons py-2 px-3">
        <a href="">3,00 €</a>
      </div>

      <div class="nav-buttons py-2 px-3">
        <a href="">Registrati o accedi</a>
      </div>

      <div class="nav-buttons py-2 px-3">
        <a href="">Account</a>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
