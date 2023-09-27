<script>

import axios from "axios";
export default {
  name: "SingleRestaurant",
  data(){
    return{
      singleRestaurant: [],
            apiUrl:"",
    }
  },

  methods: {
    getSingleRestaurant() {

      const id = this.$route.params.id;

      // Construct the apiUrl with the 'id'
      this.apiUrl = `http://localhost:8000/api/restaurants/restaurant/${id}`;
      axios
        .get(this.apiUrl)
        .then((response) => {
          console.log(response.data);
          this.singleRestaurant = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getSingleRestaurant();
  },
};
</script>

<template>

  <div class="SingleRestaurant d-flex m-5">

            <div class="immagine-profile my-4 col-6">

              <img v-if="singleRestaurant.restaurant.image.startsWith('http')" :src="singleRestaurant.restaurant.image" alt="immagine">
                <img v-else :src="'http://127.0.0.1:8000/storage/' + singleRestaurant.restaurant.image" alt="immagine">
                <!-- <img :src="singleRestaurant.restaurant.image" :alt="singleRestaurant.restaurant.id"> -->

            </div>


            <div class="container-profile col-4 py-4">
                <h5 class="card-title fw-bolder" style="color: #262c2cf7">{{ singleRestaurant.restaurant.name  }}</h5>

                <p class="card-text fw-bold mt-3" style="color:#618B35"> {{ singleRestaurant.restaurant.address  }}</p>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item fw-bold" style="color:#618B35">{{ singleRestaurant.restaurant.opening_time  }}</li>
                    <li class="list-group-item fw-bold" style="color:#618B35">{{ singleRestaurant.restaurant.category }}</li>
                </ul>
              </div>
  </div>

  <h5 class="fw-bolder text-center">
    OUR MENU:
  </h5>
  <div class="menu d-flex">

    <div v-for="plate in singleRestaurant.restaurant.plates" class=" mx-4 my-4">
      <div style="width: 250px; border:1px solid rgba(221, 218, 218, 0.753)" class="plate-card">

        <img v-if="plate.image.startsWith('http')" :src="plate.image" alt="immagine">
        <img v-else :src="'http://127.0.0.1:8000/storage/' + plate.image" alt="immagine">
                  <!-- <img :src="plate.image" :alt="plate.id"> -->
      </div>
  
  
              <div class="card-body flex-column px-2">
                  <h7 style="color:#262c2cf7" class="fw-bolder">{{ plate['name']  }}</h7>
  
                  <p class="card-text mb-1" style="color:#4d7c1be2;"> {{ plate.description }}</p>
                  <p class="card-text" style="color:rgba(119, 136, 153, 0.793);"> € {{ plate.price  }}</p>
                </div>
                <button style="background-color:#00CCBC; border-radius:25px;" class="px-3 py-1">
                  Acquista
                </button>
  
  
    </div>

    </div>



</template>


<style scoped></style>
