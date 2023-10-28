<script>

export default{
    name:'AppPagamenti',
    data(){
        
    }
}


</script>

<template>
    <div class="order-container">
        <button class="px-3 py-2">
            ORDINE EFFETTUATO CON SUCCESSO!
        </button>
    </div>



</template>

<style scoped>
template{
    background-color:bisque;

}

.order-container{
    height:60vh;
    width:100%;
    position:relative;
}
button{
    border: 2px solid #00BAAB;
    border-radius:25px;
    margin:0 auto;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);



    }
</style>