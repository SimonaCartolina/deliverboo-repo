
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
<section>



    <div class="mycontainer col-lg-12 col-md-4 col-sm-10  py-5 restaurants d-flex flex-wrap">

        <div class="col-12 d-flex align-items-center pt-2 mt-3">
            <div class="input-group search-bar">
                <input pattern=".*\S.*" required v-model="searchBar" @keyup.enter="newSearch(searchBar)" id="searchBar" type="search" class="form-control px-2 py-2" placeholder="Cerca un ristorante per categoria" style="background-color: #F5F5F5; color: #CCCDCD" />
            </div>
        </div>


    <div v-for="restaurant in restaurantsList" :key="restaurant.id" class=" mx-4 my-5 align-items-center">


        <div style="width: 250px; border:0.50px solid rgb(221, 218, 218); border-radius:25px; align-items: center;" class="singlecard pb-2">

            <img v-if="restaurant.image.startsWith('http')" :src="restaurant.image" alt="immagine" style="border-radius:25px 25px 0 0;">
            <img v-else :src="'http://127.0.0.1:8000/storage/' + restaurant.image" alt="immagine" style="border-radius:25px 25px 0 0;">

        <div class="card-body flex-column mx-4 mb-2 mt-2">
            <h6 style="color:#262c2cf7" class="fw-bolder"> {{ restaurant.name }} </h6>
            <p class="card-text mb-1" style="color:#4d7c1be2;">{{ restaurant.address }}</p>
            <span class="card-text" style="color:rgba(119, 136, 153, 0.793);">{{ restaurant.opening_time }}</span>
            <p class="card-text" style="color:rgba(11, 12, 12, 0.722);">{{ restaurant.category }}</p>
        </div>



        <router-link :to="{ name: 'SingleRestaurant' , params: { id: restaurant.id }}" style="color:black; text-decoration:none;"
                class="px-2"> 
                <button type="button" style="color:#00C2B3; border:1px solid #00C2B3" class="btn mx-3">see more</button>
        </router-link>
        </div>
    </div>
    </div>
</section>
</template>

    <style scoped>

.search-bar input,
.search-btn, 
.search-btn:before, 
.search-btn:after {
	transition: all 0.25s ease-out;
}
.search-bar input,
.search-btn {
	width: 3em;
	height: 3em;
}
.search-bar input:invalid:not(:focus),
.search-btn {
	cursor: pointer;
}
.search-bar,
.search-bar input:focus,
.search-bar input:valid  {
	width: 100%;
}
.search-bar input:focus,
.search-bar input:not(:focus) + .search-btn:focus {
	outline: transparent;
}
.search-bar {
	margin: auto;
	padding: 1.5em;
	justify-content: center;
	max-width: 30em;
}
.search-bar input {
	background: transparent;
	border-radius: 1.5em;
	box-shadow: 0 0 0 0.4em #171717 inset;
	padding: 0.75em;
	transform: translate(0.5em,0.5em) scale(0.5);
	transform-origin: 100% 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
.search-bar input::-webkit-search-decoration {
	-webkit-appearance: none;
}
.search-bar input:focus,
.search-bar input:valid {
	background: #fff;
	border-radius: 0.375em 0 0 0.375em;
	box-shadow: 0 0 0 0.1em #d9d9d9 inset;
	transform: scale(1);
}
.search-btn {
	background: #171717;
	border-radius: 0 0.75em 0.75em 0 / 0 1.5em 1.5em 0;
	padding: 0.75em;
	position: relative;
	transform: translate(0.25em,0.25em) rotate(45deg) scale(0.25,0.125);
	transform-origin: 0 50%;
}
.search-btn:before, 
.search-btn:after {
	content: "";
	display: block;
	opacity: 0;
	position: absolute;
}
.search-btn:before {
	border-radius: 50%;
	box-shadow: 0 0 0 0.2em #f1f1f1 inset;
	top: 0.75em;
	left: 0.75em;
	width: 1.2em;
	height: 1.2em;
}
.search-btn:after {
	background: #f1f1f1;
	border-radius: 0 0.25em 0.25em 0;
	top: 51%;
	left: 51%;
	width: 0.75em;
	height: 0.25em;
	transform: translate(0.2em,0) rotate(45deg);
	transform-origin: 0 50%;
}
.search-btn span {
	display: inline-block;
	overflow: hidden;
	width: 1px;
	height: 1px;
}

/* Active state */
.search-bar input:focus + .search-btn,
.search-bar input:valid + .search-btn {
	background: #2762f3;
	border-radius: 0 0.375em 0.375em 0;
	transform: scale(1);
}
.search-bar input:focus + .search-btn:before, 
.search-bar input:focus + .search-btn:after,
.search-bar input:valid + .search-btn:before, 
.search-bar input:valid + .search-btn:after {
	opacity: 1;
}
.search-bar input:focus + .search-btn:hover,
.search-bar input:valid + .search-btn:hover,
.search-bar input:valid:not(:focus) + .search-btn:focus {
	background: #0c48db;
}
.search-bar input:focus + .search-btn:active,
.search-bar input:valid + .search-btn:active {
	transform: translateY(1px);
}

search-btn, input {
	font: 1em Hind, sans-serif;
	line-height: 1.5em;
}
input {
	color: #171717;
}
.search-bar {
	display: flex;
}

@media screen and (prefers-color-scheme: dark) {
	body, input {
		color: #f1f1f1;
	}
	body {
		background: #171717;
	}
	.search-bar input {
		box-shadow: 0 0 0 0.4em #f1f1f1 inset;
	}
	.search-bar input:focus,
	.search-bar input:valid {
		background: #3d3d3d;
		box-shadow: 0 0 0 0.1em #3d3d3d inset;
	}
	.search-btn {
		background: #f1f1f1;
	}
}

    button:hover{
        background-color: #9fd7d3;

    }
	.singlecard{
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	}
    
    .singlecard:hover {
        transform: scale(1.1);
        transition: 1s ease-in-out;
    }


    li{
        list-style:none;
    }
    </style>