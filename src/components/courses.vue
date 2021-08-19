<template>

  <div>
  <div class="container">

<div class="row">
<div class="column">
<div class="card" style="width: 18rem;">
	<div class="boximage">
  <img class="card-img-top image" style="padding:5%" src="../assets/element.jpg"  alt="Card image cap">
 <div class="middle">
    <div class="btn text" style="border:1px solid yellow">ورود به کلاس</div>
  </div>
  </div>
  <hr style="background-color:yellow">
  <div class="card-body">
    <h5 class="card-title" style="text-align:right">مهندسی اینترنت</h5>
	<p class="card-text" style="text-align:right;font" >استاد زمانیان</p>
  </div>
   </div>
   </div>
   <div class="column">
   <div class="card" style="width: 18rem;">
	<div class="boximage">
  <img class="card-img-top image" style="padding:5%" src="../assets/element.jpg"  alt="Card image cap">
  <div class="middle">
    <div class="btn text" style="border:1px solid yellow">ورود به کلاس</div>
  </div>
  </div>
  <hr style="background-color:yellow">
  <div class="card-body">
	
     <h5 class="card-title" style="text-align:right">شبکه های کامپیوتری</h5>
	<p class="card-text" style="text-align:right;font" >استاد قاسمی</p>
  </div>
  </div>
   </div>
     <div class="column">
   <div class="card" style="width: 18rem;">
	<div class="boximage">
  <img class="card-img-top image" style="padding:5%" src="../assets/element.jpg"  alt="Card image cap">
  <div class="middle">
    <div class="btn text" style="border:1px solid yellow">ورود به کلاس</div>
  </div>
  </div>
  <hr style="background-color:yellow">
  <div class="card-body">
	<h5 class="card-title" style="text-align:right">برنامه نویسی پیشرفته</h5>
	<p class="card-text" style="text-align:right;font" >استاد اثنی عشری</p>
  </div>
  </div>
   </div>
</div>
</div>
</div>

</template>
<style scoped>
.card{
	background-color: none;
	display:block;
	color:black;
	margin-top:10%;
	margin-bottom:10%;
	margin-left:auto;
	margin-right:auto;
	border:1px solid yellow;
	border-radius:5%
	
}



* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 500px) {
  .column {
    width: 100%;
  }
}
.container{
   
	margin-top:10%;
	margin-right: auto;
	margin-left: auto;
	position: relative;
	display: block;
	
}

.boximage {
  position: relative;
  
}

.image {
  
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%)
}

.boximage:hover .image {
  opacity: 0.3;
}

.boximage:hover .middle {
  opacity: 1;
}

.text {
  background-color:yellow;
  color: black;
  font-size: 12px;
  padding: 16px 32px;
}
</style>