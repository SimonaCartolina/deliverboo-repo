<script>
export default {
    name: 'ShoppingBag',
    data() {
        return {
            quantity: 1,
        }
    },
    methods: {
        increment() {
            this.quantity++;
        },
        decrement() {
            if(this.quantity >0){
               this.quantity--; 
            }

            
        }
    },
}
</script>

<template lang="">
    <div class="background">
        <div class="container">
            <div class="row d-flex">
                <h2 class="p-0 mb-3">Shooping Cart</h2>
                <div class="left-size col-8">
                    <article class="product-card">
                        <div class="product-img me-4">
                            <img src="https://www.kfc-suisse.ch/fileadmin/media/images/img_mood_bucket_start_v3.jpg" alt="">
                        </div>
                        <div class="description">
                            <h3>Product</h3>
                            <p class="price">Price</p>      
                            <p class="available fsz">Disponibilità immediata</p>                     
                            <p class="fsz">Idoneo alla <strong>Spedizione GRATUITA</strong>.</p>                     
                            <p><strong>Colore</strong>: Nero</p>
                            <div class="count d-flex align-items-center">
                                <div class="me-3">
                                    <span>Quantità:</span>
                                </div>

                                <div>
                                    <select class="num form-select" aria-label="Default select example">                              
                                  <option selected value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10">10</option>                    
                                    </select>
                            </div>
                                
                                <!-- <button @click="decrement" class="minus">-</button> -->
                                <!-- <span>Count: {{ quantity }}</span> -->
                                <!-- <input type="number" class="num" :value="quantity"> -->
                                
                                <!-- <button @click="increment" class="plus">+</button> -->
                            </div>
                     
                        </div>
                    </article>
                    
                                         
                    
                </div>
                <div class="right-size col-4">
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
                                    <li>Extimated Tax</li>
                                    <li>Order Total</li>
                                </ul>
                            </div>
                            <div class="fw-bold">
                                <ul>
                                    <li>to be calculated</li>
                                    <li>to be calculated</li>
                                    <li>to be calculated</li>
                                    <li>to be calculated</li>
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
                                        to be calculated
                                    </li>
                                </ul>                           
                            </div>
                        </div>
                        <button class="btn btn-success py-2 fs-4 mt-3">
                            Checkout Now
                        </button>
                        <button class="btn btn-light py-2 fs-4 mt-3">Back to Shipping</button>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss">
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
            border-top: 1px solid #00CCBC;
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
            .count{
                .num{
                    width: 100%;
                }
                .minus{
                    margin-right: .6rem;                  
                }
                .plus{
                    margin-left: 0.6rem;
                }

            }
        }
        
    }
    .right-size{  
           
        padding-left: 2rem;
        .order-summary{
            border: 1px solid #00CCBC;
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
            background-color: #00CCBC;
            border: 2px solid #00CCBC;
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
}
</style>