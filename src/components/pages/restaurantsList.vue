    
    
    <template>
        <div class="col-lg-6 col-md-3 col-sm-4 order-lg-1 order-md-1 order-sm-2 my-sm-2 d-flex align-items-center pt-2" style="margin-left:25%;">
            <div class="input-group">
                <input v-model="searchBar" @keyup.enter="newSearch(searchBar)" id="searchBar" type="search" class="form-control px-2 py-2" placeholder="Ristoranti, spesa, piatti" style="width: 620px; background-color: #F5F5F5; color: #CCCDCD" />
            </div>
            <button @click="newSearch(searchBar)" class="py-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
            </button>
        </div>
        <div class="mycontainer col-lg-8 col-md-4 col-sm-1  py-5 restaurants d-flex flex-wrap" style="margin-left:21%;">
            <div v-for="restaurant in restaurantsList" :key="restaurant.id" class=" mx-4 my-4">
                <div style="width: 250px; border:0.50px solid rgb(221, 218, 218)" class="pb-2">
                    <img :src="restaurant.image"  alt="restaurant.image">
                    <div class="card-body flex-column px-2">
                        <h7 style="color:#262c2cf7" class="fw-bolder"> {{ restaurant.name }} </h7>
                        <p class="card-text mb-1" style="color:#4d7c1be2;">{{ restaurant.address }}</p>
                        <p class="card-text" style="color:rgba(119, 136, 153, 0.793);">{{ restaurant.opening_time }}</p>
                    </div>
                    <router-link :to="{ name: 'SingleRestaurant' }" style="color:black; text-decoration:none;"
                    class="px-2"> <button type="button" class="btn btn-outline-info">Vedi dettagli</button></router-link>
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