<script>
export default {
  name: "HeaderApp",
};
</script>

<template>


<header>

        <div class="my-container nav d-flex justify-content-between">

          <ul class="left d-flex">
            <li class="logo">
              <router-link :to="{name: 'HeaderApp' }">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" style="fill:#de9e4f">
                  <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                  <span style="color:#de9945" class="fw-bold mx-1">DELIVERBOO</span>
              </router-link>
            </li>
            
          </ul>

          
          <ul class="d-flex align-items-center">
              <li>
                  <router-link :to="{name: 'restaurantsList' }">
                    <span style="color:#de9945" class="fw-bolder">Home</span>
                  </router-link>
              </li>
              <li>
                <router-link :to="{name: 'AboutUs' }">
                  <span style="color:#de9945" class="fw-bolder">About Us</span>
                </router-link>
              </li>
                    <li>
                      <a href="http://127.0.0.1:8000/login">
                          <span style="color:#de9945" class="fw-bolder">Login</span>
                      </a>
                    </li>
                    <li>
                      <a href="http://127.0.0.1:8000/register">
                          <span style="color:#de9945" class="fw-bolder">Registrati</span>
                      </a>
                    </li>
                </ul>  

          </div>

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
                  STRAIGHT TO YOUR HOME
                  
                </p>
                <p style="text-align:center;">
                  <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512" style="fill:#de9945; margin:0 auto;">
                    <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z"/>
                  </svg>
                </p>
              </div>
          </div>
    </header>
</template>

<style scoped>

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
  padding-bottom:5rem;
  width:1200px;
  margin:0 auto;
}
.image-content{

  color:#DE9945;
  line-height: 2rem;
  padding-right:5rem;


}
.logo{
  font-family:'Agbalumo';
  font-size:1.8rem;
}
.nav{
  position:fixed;
  background-color: #d3fde6;
  
}
.my-container{
  padding: 0.50rem 1rem;
}
header{
  width:100%;
  background-color: #d3fde6;
}
a{
  text-decoration: none;
}

li{
    padding:0.50rem;
    list-style:none;
    margin-right:0.50rem;
  }
  
  li:hover{
    border-radius:15px;
    background-color: #ace9c8ea;
  }
</style>
