    
    
    <template>
        <div class="col-lg-6 col-md-3 col-sm-11 order-lg-1 order-md-1 order-sm-2 my-sm-2">
        <div class="input-group">
            <input v-model="searchBar" @keyup.enter="newSearch(searchBar)" id="searchBar" type="search" class="form-control px-2 py-2" placeholder="Ristoranti, spesa, piatti" style="width: 620px; background-color: #f5f5f5; color: #cccdcd" />
            <button @click="newSearch(searchBar)"> search </button>


        </div>
        </div>
        <div class="mycontainer py-5 restaurants d-flex flex-wrap">
        <div v-for="restaurant in restaurantsList" :key="restaurant.id" class="row mx-4 my-4">

            <div class="card col-4" style="width: 18rem;">
            <img :src="restaurant.image" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{ restaurant.name }} </h5>
                <p class="card-text">{{ restaurant.address }}</p>
                <p class="card-text">{{ restaurant.opening_time }}</p>
            </div>
            
                <router-link :to="{ name: 'SingleRestaurant' }">Vedi</router-link>

            </div>
        </div>
        </div>
    </template>
    
    <script>
    import axios from "axios";
    export default {
        name: "restaurantsList",
        data() {
        return {

                    links: [
                                {
                                route: "SingleRestaurant",
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
    

    <style scoped>

    h2{
        color:red;
    }
    </style>