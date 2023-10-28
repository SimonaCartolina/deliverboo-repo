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
                <div class="image-container col-2">
                </div>
                <div class="image-content col-6 fw-bold">
    
                    <p>Ever get lost and feel overwhelmed by the diverse cuisine options? <span style="color:white;">Don't worry!</span></p>
                    
                        <p>
                        <span class="logo">DELIVERBOO</span> Food Web App is here to help you navigate through the maze of international cuisine in Milan.
                        </p>
                    <p class="pt-4" style="text-align:center; color:white;">
                    STRAIGHT TO THE BOTTOM
                    
                    </p>
                    <p style="text-align:center; cursor:pointer">
                    <svg @click="scrollDown()" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512" style="fill:#00C2B3; margin:0 auto;">
                        <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 
                        0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273
                        393c-9.4 9.4-24.6 9.4-33.9 0L127 281z"/>
                    </svg>
                    </p>
                </div>
            </div>

</template>

<style scoped>

.head-content{
  padding-top:13vh;
  padding-bottom:3rem;
  height:100vh;
  width:1200px;
  margin:0 auto;
}
.image-content{

  color:#00C2B3;
  line-height: 2rem;
  padding-right:5rem;
  margin-top:10%;


}
.logo{
  font-family:'Agbalumo';
  font-size:1.2rem;
}
</style>