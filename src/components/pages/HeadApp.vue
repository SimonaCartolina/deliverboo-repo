<script>
export default {
    name: "HeadApp",

    methods:{
      scrollDown() {
        window.scrollTo(0, document.body.scrollHeight);
      }
    }
};
</script>


<template>

<div class="head-content d-flex justify-content-between">
                <div class="image-container col-7">
                    <img src="../pages/img/deliveroo.jpg" alt="">
                </div>
                <div class="image-content col-5 fw-bold">
    
                    <p>Ever get lost and feel overwhelmed by the diverse cuisine options? <span style="color:black;">Don't worry!</span></p>
                    
                        <p>
                        <span class="logo">DELIVERBOO</span> Food Web App is here to help you navigate through the maze of international cuisine in Milan.
                        </p>
                    <p class="pt-4" style="text-align:center; color:black;">
                    STRAIGHT TO THE BOTTOM
                    
                    </p>
                    <p style="text-align:center; cursor:pointer">
                    <svg @click="scrollDown()" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512" style="fill:#de9945; margin:0 auto;">
                        <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 
                        0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273
                        393c-9.4 9.4-24.6 9.4-33.9 0L127 281z"/>
                    </svg>
                    </p>
                </div>
            </div>
            <div class="wavy">
              
            </div>

</template>

<style scoped>

.wavy{
    width: 100vw;
    height: 80px;
    background-image: url('./img/wave.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    filter: opacity(0.10);
}
.image-container{
  width:500px;
  height:500px;
  img{
    width:100%;
    height:100%;
    object-fit: cover;

  }
}
.head-content{
  padding-top:13vh;
  padding-bottom:3rem;
  height:90vh;
  width:1200px;
  margin:0 auto;
}
.image-content{

  color:#DE9945;
  line-height: 2rem;
  padding-right:5rem;
  margin-top:10%;


}
.logo{
  font-family:'Agbalumo';
  font-size:1.2rem;
}
</style>