
    <script>
    import axios from "axios";
    export default {
        name: "restaurantsList",
        data() {
        return {
                    links: [
                                {
                                route: "/SingleRestaurant",
                                name: "SingleRestaurant",
                                }
                            ],
            searchBar: '',
            restaurantsList: [],
            apiUrl: "http://localhost:8000/api/restaurants",
        };
        },
            methods: {
            getRestaurants(apiUrl=this.apiUrl, nameQuery=false){
                const params= {}
                if(nameQuery){
                    params.search=nameQuery;
                }
                axios.get(apiUrl, {params}).then((response) => {
                    console.log(response.data);
                    this.restaurantsList = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            },

            newSearch(searchBar) {
                this.getRestaurants(this.apiUrl, searchBar);
                //  = `http://localhost:8000/api/restaurants?search=${searchBar}`;
                console.log('Api URL:', this.restaurantsList);
                // this.getRestaurants();
                // this.restaurantsList = [];
},
    },
    created() {
        this.getRestaurants(this.apiUrl);
        
        },
    };
    </script>
    
    
<template>
<section style="background-color: #BEE4CF;">



    <div class="mycontainer col-lg-8 col-md-4 col-sm-10  py-5 restaurants d-flex flex-wrap" style="margin-left:20%;">

        <div class="col-12 d-flex align-items-center pt-2 mt-3">
            <div class="input-group">
                <input v-model="searchBar" @keyup.enter="newSearch(searchBar)" id="searchBar" type="search" class="form-control px-2 py-2" placeholder="Cerca un ristorante per categoria" style="background-color: #F5F5F5; color: #CCCDCD" />
            </div>
            <button @click="newSearch(searchBar)" class="py-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
            </button>
        </div>


    <div v-for="restaurant in restaurantsList" :key="restaurant.id" class=" mx-4 my-5">


        <div style="width: 250px; border:0.50px solid rgb(221, 218, 218)" class="pb-2">

            <img v-if="restaurant.image.startsWith('http')" :src="restaurant.image" alt="immagine">
            <img v-else :src="'http://127.0.0.1:8000/storage/' + restaurant.image" alt="immagine">

        <div class="card-body flex-column px-2 mb-2">
            <h6 style="color:#262c2cf7" class="fw-bolder"> {{ restaurant.name }} </h6>
            <p class="card-text mb-1" style="color:#4d7c1be2;">{{ restaurant.address }}</p>
            <p class="card-text" style="color:rgba(119, 136, 153, 0.793);">{{ restaurant.opening_time }}</p>
            <p class="card-text" style="color:rgba(11, 12, 12, 0.722);">{{ restaurant.category }}</p>
        </div>



        <router-link :to="{ name: 'SingleRestaurant' , params: { id: restaurant.id }}" style="color:black; text-decoration:none;"
                class="px-2"> 
                <button type="button" style="color:#d7923d; border:1px solid #d58b31" class="btn">Vedi dettagli</button>
        </router-link>
        </div>
    </div>
    </div>
</section>
</template>

    <style scoped>

    button:hover{
        background-color: #e5c6a1;

    }


    li{
        list-style:none;
    }
    </style>