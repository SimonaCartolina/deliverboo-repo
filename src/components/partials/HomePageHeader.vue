<script>
export default {
  name: "HomePageHeader",
};
</script>

<template>
    <header>
      <section class="my_first_section d-flex">
         <div>
            <img class="logo"
                src="https://logos-world.net/wp-content/uploads/2021/02/Deliveroo-Logo-2016-present.jpg"
                alt=""
            />
         </div>
         <div class="p-2">
            <span class="button my_button">
                Collabora con Noi
            </span>
            <span class="button my_button">
                Registrati o Accedi
            </span>
            <span class="button my_button">
                Account
            </span>
         </div>
      </section>
      <section class="my_second_section">
      </section>
    </header>
</template>

<style>
.logo{
    width:120px;
    height:65px;
}

.my_button{
    background-color: #ffffff;
    border: lightgray 2px solid;
    color: black;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.my_buttons_container{
    width: 50%;
}

.my_logo_container{
    width: 50%;
}

.my_first_section{
    width: 100%;
    height: 80px;
    background-color: red;
    border: 1px solid black;
}

.my_second_section{
    width: 100%;
    height: 450px;
    background-color: blue;
    border: solid black 1px;
}
</style>