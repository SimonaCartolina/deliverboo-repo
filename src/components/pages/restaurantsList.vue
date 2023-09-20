<script>

import axios from "axios";
export default {
    name: "restaurantsList",

    data() {
    return {
        searchBar: '',
        restaurantsList: [],
        apiUrl: "http://localhost:8000/api/restaurants",
        };
    },

    

    methods: {
        getRestaurants() {
        axios
            .get(`${this.apiUrl}`)
            .then((response) => {
            console.log(response.data);
            this.restaurantsList = response.data;
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            });
        },

        newSearch(searchTerm){
            // console.log(titleToSearch);
            this.getRestaurants(this.apiUrl, searchTerm);
        }
    },

    created() {
        this.getRestaurants(this.apiUrl);

    },
    
};
</script>

<template>
    <h2>
        RESTAURANTS:
    </h2>

    <div class="mycontainer py-5 restaurants">
      <div v-for="restaurant in restaurantsList" class="singleRestaurant">
        <div class="card">
          <h3>{{ restaurant.name }}</h3>
          <h5>{{ restaurant.address }} </h5>
          <p>
            {{ restaurant.opening_time }}
          </p>
          <p>
            {{ restaurant.P_IVA }}
          </p>
        </div>
      </div>
    </div>
</template>

<style scoped>

h2{
    color:red;
}
</style>