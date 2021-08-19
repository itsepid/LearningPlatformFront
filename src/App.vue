<template>
  <div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script type="application/javascript" src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script type="application/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script type="application/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark na1">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse"  id="navbarSupportedContent">
    <ul class="nav navbar-nav ml-auto"  >
      <li class="nav-item active" >
        <a class="nav-link" @click="routeLogin" href="#">ورود</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">صفحه اصلی <span class="sr-only">(current)</span></a>
      </li>

     </ul>
   
      
    </div>
 
</nav>
   <div>
    <router-view></router-view>
    <axiosss/>
   </div>
  </div>
</template>

<script>
import axiosss from "./components/axiosss"
export default {
  components:{
    axiosss
  },
  methods : {
    routeLogin: function() {
      this.$router.push({name:'LoginStudent'})
    }
  }
}
</script>

<style>
body{
  background-image:url('~@/assets/pencils.jpg');
  background-attachment: fixed;
}
.na1{
  background-color:black;
  position:absolute
}
.na1 a{
  color: #ddd;
}
</style>
