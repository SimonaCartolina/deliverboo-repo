<script>
export default {
  name: "HeaderApp",
};
</script>

<template>
  <nav class="d-flex justify-content-between">
    <div class="logo">
      <img
        src="https://logos-world.net/wp-content/uploads/2021/02/Deliveroo-Logo-2016-present.jpg"
        alt=""
      />
    </div>
    <div>
      <div class="input-group mb-3">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
        >
          <font-awesome-icon
            :icon="['fas', 'magnifying-glass']"
            style="color: #808080"
          />
        </button>
        <input
          type="text"
          class="form-control"
          placeholder="Ristoranti,spesa,piatti"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>
    </div>

    <div class="d-flex">
      <div class="nav-buttons">
        <a href="">3,00 €</a>
      </div>
      <div class="nav-buttons">
        <a href="">Registrati o accedi</a>
      </div>
      <div class="nav-buttons">
        <a href="">Account</a>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
