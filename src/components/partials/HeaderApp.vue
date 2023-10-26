<script>
export default {
  name: "HeaderApp",
};
</script>

<template>


<header>

        <div class="my-container nav d-flex justify-content-between">

            <router-link :to="{name: 'HeaderApp' }">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" style="fill:#de9e4f">
                <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                <span style="color:#de9945" class="fw-bolder">Deliverboo</span>
            </router-link>

            <ul class="d-flex align-items-center">
                  <li>
                      <router-link :to="{name: 'restaurantsList' }">
                        <span style="color:#de9945" class="fw-bolder">Home</span>
                      </router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'AboutUs' }">
                      <span style="color:#de9945" class="fw-bolder">Perchè Deliverboo</span>
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
    </header>
</template>

<style scoped>
.nav{
  position:fixed;
  background-color: #d3fde6;
  
}
.my-container{
  padding: 0 2rem;
}
header{
  width:100%;
}
a{
  text-decoration: none;
}

li{
    margin-right:1rem;
    list-style:none;
}

</style>
