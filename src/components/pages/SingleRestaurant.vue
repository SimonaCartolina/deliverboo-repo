<script>

import axios from "axios";
export default {
    name: "SingleRestaurant",
    data(){
    return{

        singleRestaurant: [],
        cart: [], 
        restaurantMenu: [],
        apiUrl:"",
        tip: 0,
    }
    },

    computed: {
    totalPrice() {
        return this.cart.reduce((total, item) => {
        return total + item.plate.price * item.quantity;
        }, 0);
    },

    deliveryFee() {
      return this.totalPrice * 0.02;
    },
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

    addToCart(plate) {
    const existingItem = this.cart.find((item) => item.plate.id === plate.id)

    ;
    if (existingItem) {
            existingItem.quantity++;
              console.log(existingItem); // Aumenta la quantità se il piatto è già nel carrello
    } else {
            this.cart.push({ plate, quantity: 1 });
              console.log(plate) // Aggiungi il piatto al carrello
    }
    },
                        
        removeFromCart(plate) {
        const index = this.cart.findIndex(item => item.plate.id === plate.plate.id);

        if (index !== -1) {
          this.cart.splice(index, 1); // Remove the plate from the cart
        }
        },



        increaseQuantity(plate) {
            plate.quantity++;
        },

        decreaseQuantity(plate) {
            if (plate.quantity > 1) {
                plate.quantity--;
            }
            },
            
        },
        
        created() {
            this.getSingleRestaurant();
        }

};


</script>

<template>

    <div class="SingleRestaurant d-flex flex-wrap m-5">



                <div class="immagine-profile col-lg-6 col-md-6 col-sm-12">

                <img v-if="singleRestaurant.restaurant.image.startsWith('http')" :src="singleRestaurant.restaurant.image" alt="immagine">
                    <img v-else :src="'http://127.0.0.1:8000/storage/' + singleRestaurant.restaurant.image" alt="immagine">
                    <!-- <img :src="singleRestaurant.restaurant.image" :alt="singleRestaurant.restaurant.id"> -->

                </div>


                <div class="container-profile col-lg-3 col-md-3 col-sm-12 py-5">
                    <h2 class="card-title fw-bolder" style="color: #de9e4f">{{ singleRestaurant.restaurant.name  }}</h2>

                    <p class="card-text fw-bold mt-3" style="color:rgba(0, 0, 0, 0.749)"> {{ singleRestaurant.restaurant.address  }}</p>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item fw-bold" style="color:rgba(0, 0, 0, 0.749)">{{ singleRestaurant.restaurant.opening_time  }}</li>
                        <li class="list-group-item fw-bold" style="color:rgba(0, 0, 0, 0.749)">{{ singleRestaurant.restaurant.category }}</li>
                    </ul>
                </div>
    </div>

    <h1 class="fw-bolder text-center" style="color:#de9e4f">
        OUR MENU:
    </h1>
    <div class="menu d-flex flex-wrap col-12">

    <div v-for="plate in singleRestaurant.restaurant.plates" class=" mx-4 my-4">
<<<<<<< HEAD

                <div v-if="plate.visible == 1">

                    <div style="width: 250px; border:1px solid rgba(221, 218, 218, 0.753)" class="plate-card">

                    <img v-if="plate.image.startsWith('http')" :src="plate.image" alt="immagine">
                    <img v-else :src="'http://127.0.0.1:8000/storage/' + plate.image" alt="immagine">
                            
                    </div>


                    <div class="card-body flex-column px-2">
                      <h6 style="color:#262c2cf7" class="fw-bolder">{{ plate['name']  }}</h6>

                      <p class="card-text mb-1" style="color:#4d7c1be2;"> {{ plate.description }}</p>
                      <p class="card-text" style="color:rgba(119, 136, 153, 0.793);"> € {{ plate.price  }}</p>
                      
                    </div>
                    <button @click="addToCart(plate)" style="background-color:#00CCBC; border-radius:25px;" class="px-3 py-1">
                      Acquista
                    </button>
                </div>
                <div v-else>
                  <div class="filter">
                    <span>No disponibile</span>
                      <div style="width: 250px; border:1px solid rgba(221, 218, 218, 0.753)" class="plate-card">

                        <img v-if="plate.image.startsWith('http')" :src="plate.image" alt="immagine">
                        <img v-else :src="'http://127.0.0.1:8000/storage/' + plate.image" alt="immagine">
                                
                      </div>
                      <div class="card-body flex-column px-2">
                          <h6 style="color:#262c2cf7" class="fw-bolder">{{ plate['name']  }}</h6>

                          <p class="card-text mb-1" style="color:#4d7c1be2;"> {{ plate.description }}</p>
                          <p class="card-text" style="color:rgba(119, 136, 153, 0.793);"> € {{ plate.price  }}</p>
                          
                      </div>
                      
                  </div>
                </div>
=======
                <div style="width: 250px; border:1px solid rgba(221, 218, 218, 0.753)" class="plate-card">
                    <img v-if="plate.image.startsWith('http')" :src="plate.image" alt="immagine">
                    <img v-else :src="'http://127.0.0.1:8000/storage/' + plate.image" alt="immagine">
                </div>

                <div class="card-body flex-column px-2">
                    <h6 style="color:#262c2cf7" class="fw-bolder">{{ plate['name']  }}</h6>
                    <p class="card-text mb-1" style="color:#4d7c1be2;"> {{ plate.description }}</p>
                    <p class="card-text" style="color:rgba(119, 136, 153, 0.793);"> € {{ plate.price  }}</p>
                    <p v-if="plate.visible == 1">Visibile</p>
                    <p v-else>Non visibile</p>
                </div>
                <button @click="addToCart(plate)" style="background-color:#de9e4f; border-radius:25px;" class="px-3 py-1">
                    Acquista
                </button>
    </div>

    </div>


    <div class="carrello my-5 py-5">
        <div class="background">
        <div class="container-fluid">
            <div class="row d-flex">
                <h2 class="p-0 mb-3 fw-bolder">Shooping Cart</h2>
                
                <div class="left-size col-md-8 col-12">

                    <div v-for="plate in cart" :key="plate" class="d-flex justify-content-between align-items-center">
                    
                        <article class="product-card">
                            <div class="product-img me-4">
                                <img v-if="plate.plate.image.startsWith('http')" :src="plate.plate.image" alt="immagine">
                                <img v-else :src="'http://127.0.0.1:8000/storage/' + plate.plate.image" alt="immagine">
                            </div>
                            
                                <div class="description">
                                    <h3>{{ plate.plate.name }}</h3>
                                    <p class="price"> € {{ plate.plate.price }}</p>      
                                    <p class="available fsz">Disponibilità immediata</p>                     
                                    <p class="fsz">Idoneo alla <strong>Spedizione GRATUITA</strong></p>  

                                    <div class="count d-flex align-items-center">
                                        <div class="me-3">
                                            <span>Quantità:{{ plate.quantity }}</span>
                                        </div>
                                    </div>
                                </div>
                        </article>

                        <div>
                            <button @click="increaseQuantity(plate)" class="mx-2 my-1 bracco">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style="fill:green">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                            </button>
                            <button @click="decreaseQuantity(plate)" class="mx-2 my-1 bracco">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style="fill:yellow">
                                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                            
                            </button>
                            <button @click="removeFromCart(plate)" class="mx-2 my-1 bracco">
                                <svg xmlns="http://www.w3.org/2000/svg" style="fill:red" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                            </button>

                        </div>
                        

                    </div>
                </div>


                <div class="right-size col-md-4 col-12">
                    <div class="order-summary">
                        <div class="pb-3 fs-3">Order Summary</div>
                        <div class="pb-2 fs-5">Promo Code</div>
                        <div class="promo-code-button">
                            <input class="left-promo-input px-2 py-1 fs-4 mb-4" placeholder="Enter your promo code">
                            <button class="right-promo-button px-2 py-1 fs-4 mb-4">Applica</button>
                        </div>
                        <hr>
                        <div class="subtotal d-flex justify-content-between">
                            <div>
                                <ul>
                                    <li>Subtotal</li>
                                    <li>Extimated Shipping</li>
                                    
                                    <li>Order Total</li>

                                    <label for="tip"> Mancia Rider</label>
                                    <input type="number" id="tip" v-model="tip" placeholder="Inserisci mancia per il rider" />
                                </ul> 
                            </div>
                            <div class="fw-bold">
                                <ul>
                                    <li>{{ totalPrice }} €</li>
                                    <li>{{ deliveryFee }} €</li>
                                    <li>{{ totalPrice + deliveryFee }} €</li>
                                </ul>
                            </div>
                        </div>
                        <hr>        
                                
                        <div class="amount-due d-flex justify-content-between">
                            <div>
                                <ul>
                                    <li class="fs-3">
                                        Amount due
                                    </li>
                                </ul>
                            </div>
                            <div class="fw-bold">

                                <ul>
                                    <li class="fs-3">
                                    {{ totalPrice + deliveryFee + tip }} €
                                    </li>
                                </ul>

                            </div>
                        </div>
                                <button class="btn btn-success py-2 fs-4 mt-3">
                                    Checkout Now
                                </button>
                        </div>
                        </div>
            </div>
        </div>
>>>>>>> 661a2d8e4d63cccfe80dd41c695549a10094bb51
    </div>

  </div>
</template>


<style scoped>
.carrello{

<<<<<<< HEAD
.filter{
  z-index: 1;
  opacity: 0.2;
  color: black;
  position: relative;
  & span{
    font-size: 1.2rem;
    position: absolute;
    font-weight: bolder;
    z-index: 2;
    left: 30%;

  }
}

=======
    .background{
    font-family: "Metrophobic, Sans Serif";
    background-color: #eee;
    padding: 3rem 5rem;

    .row>*{
        margin: 0;
        padding: 0;
    }
    
    .left-size{
        height: 680px;
        overflow-y: scroll;
        
        .product-card{
            display: flex;     
            padding: .8rem 0;           
            border-top: 1px solid #de9e4f;
            .product-img{

                width: 20%;
                
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 15px;
                }
            }
            .description>*{
                margin: 0;
                padding: 0;
            }
            .available{
                color: green;
            }
            .price{
                font-weight: bolder;
                font-size: 1.2rem;
            }  
            .fsz{
                font-size: 0.8rem;
            }    
            }
        }
        
    }
    .right-size{ 
        .order-summary{
            border: 1px solid #de9e4f;
            background-color: #fff;
            padding: 2rem 1.5rem;
        }
        .promo-code-button{
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
        .left-promo-input{
            color: black;
            background-color: #fff;
            width: 50%;
        }
        .right-promo-button{
            background-color: #de9e4f;
            border: 2px solid #de9e4f;
            color: #fff;
            width: 47%;
            &:hover{
                border: 2px solid black;
            }
        }
        
    }
    hr {
        margin-bottom: 1.3rem;
        border: 1px dashed #00CCBC;
    }
    .subtotal,
    .amount-due{
        font-size: 1.25rem;
        div ul {
            padding: 0;
            li{
            list-style-type: none;
            margin-bottom: 0.8rem;
        } 
        }      
    }
    .btn-success{
        width: 100%;
        color: #fff;
    }
    .btn-light{
        width: 100%;
        border: 1px solid black;
    }
    .minus,
    .plus{
        cursor: pointer;
        color: #de9e4f;
        font-size: 1.2rem;
        font-weight: bolder;
        padding: 2px 10px;
        border: 3px solid #00CCBC;
        margin: 0 2px;                 
    }


@media (max-width: 768px) {
    .background {
        padding: 1rem 1rem;
        .left-size .product-card{
        .product-img{
        width: 50%;
        }
    }  
    }
} 
@media (max-width: 576px) {
    .background .left-size .product-card{
        display: block;
        .product-img{
        width: 100%;
        }
    } 

}
}
>>>>>>> 661a2d8e4d63cccfe80dd41c695549a10094bb51

</style>
