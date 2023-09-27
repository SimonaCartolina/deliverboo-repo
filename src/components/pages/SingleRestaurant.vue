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
                <img :src="singleRestaurant.restaurant.image" :alt="singleRestaurant.restaurant.id">

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

  <div class="menu">

    <div v-for="plates in plates">
      <div class="immagine-profile my-4 col-6">
                  <img :src="singleRestaurant.restaurant.image" :alt="singleRestaurant.restaurant.id">
  
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

    </div>



</template>


<style scoped></style>
