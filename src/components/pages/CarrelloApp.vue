<script>


export default{
    name: 'CarrelloApp',

    data(){
        cart: []

    },
    
    props: {
    cart: Array,
        },
    methods: {

        increaseQuantity(plate) {
        plate.quantity++;
        },
        decreaseQuantity(plate) {
        if (plate.quantity > 1) {
            plate.quantity--;
        }
        },
        removeFromCart(plate) {
        const index = this.cart.findIndex((cartItem) => cartItem.plate.id === plate.id);
        if (index !== -1) {
            this.cart.splice(index, 1);
        }



    }
}
}

</script>

<template>

    <div>
        <h1>Carrello</h1>
        <div></div>
            <ul v-for="plate in cart" :key="plate.id">
                <li>
                    {{ plate.name }}
                </li>
            </ul>
            <button @click="increaseQuantity(plate)">Aumenta</button>
            <button @click="decreaseQuantity(plate)">Diminuisci</button>
            <button @click="removeFromCart(plate)">Rimuovi</button>
    </div>
</template>

<style scoped></style>