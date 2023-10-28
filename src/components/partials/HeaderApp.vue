<script>
import HeadApp from '../pages/HeadApp.vue';
export default {
  name: "HeaderApp",
  components:{
    HeadApp,
  },
};
</script>

<template>


<header>

        <div class="my-container nav d-flex justify-content-between">
          

          <ul class="left d-flex">
            <li class="logo" style="cursor:pointer">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" style="fill:#00C2B3">
                  <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                  <span style="color:#00C2B3" class="fw-bold mx-1">DELIVERBOO</span>
            </li>
            
          </ul>

          
          <ul class="d-flex align-items-center">
              <li>
                  <router-link :to="{name: 'restaurantsList' }">
                    <span style="color:#00C2B3" class="fw-bolder">Home</span>
                  </router-link>
              </li>
              <li>
                <router-link :to="{name: 'AboutUs' }">
                  <span style="color:#00C2B3" class="fw-bolder">About Us</span>
                </router-link>
              </li>
                    <li>
                      <a href="http://127.0.0.1:8000/login">
                          <span style="color:#00C2B3" class="fw-bolder">Login</span>
                      </a>
                    </li>
                    <li>
                      <a href="http://127.0.0.1:8000/register">
                          <span style="color:#00C2B3" class="fw-bolder">Registrati</span>
                      </a>
                    </li>
                </ul>  

          </div>

          <HeadApp />
          

    </header>
</template>

<style scoped>
.nav{
  position:fixed;
  z-index:1;
}
.logo{
  font-family:'Agbalumo';
  font-size:1.8rem;
}
.logo:hover{
background-color: black;
}
.my-container{
  padding: 0.50rem 1rem;
}
header{
  width:100%;
  background-repeat: no-repeat;
  background-size: cover;

  background-image: url('https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_640.jpg');
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
    background-color: rgb(50, 50, 50);
  }
</style>
