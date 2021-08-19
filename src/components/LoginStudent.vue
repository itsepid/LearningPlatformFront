
<template>

  <div>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script type="application/javascript" src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script type="application/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script type="application/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
 <header>
 
</header>
<div class="container">
	<div class="d-flex  justify-content-center h-100">
		<div class="card">
		<div class="card-header" >
	
      <h3>Sign In</h3>
				
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group" >
            <input value="username" name="username" type="text" class="form-control" style="text-align:right" placeholder="نام کاربری">
						<div class="input-group-prepend" >
							<span class="input-group-text" ><i class="fas fa-user"></i></span>
						</div>
						
						
					</div>
					<div class="input-group form-group">
            <input name="password" type="password" class="form-control" style="text-align:right" placeholder="کلمه عبور">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						
					</div>
          <div class="form-group">
				<input type="submit" value="ورود" class="btn float-left login_btn" style="margin-top:10%" @click="routeCourses">
					</div>
				
					
			
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					<a href="#">ثبت نام</a>
          حساب کاربری ندارید ؟
				</div>
				<div class="d-flex justify-content-center">
					<a href="#">رمز عبورم را فراموش کرده ام</a>
				</div>
			</div>
		</div>
	</div>
</div>

 </div>
  

</template>

<script>
export default {
  methods : {
    routeCourses: function() {
      this.$router.push({name:'courses'})
    },
	handleData: function() {
		
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.body{
  background-attachment: fixed;
}

/* Made with love by Mutiullah Samim*/

@import url('https://fonts.googleapis.com/css?family=Numans');



.container{
height: 100%;
align-content: center;

}

.card{
height: 70%;
margin-top:150px;
width: 400px;
background-color: rgba(0,0,0,0.5) !important;
}

.social_icon span{
font-size: 60px;
margin-left: 10px;
color: #0f0f0f;
}

.social_icon span:hover{
color: white;
cursor: pointer;
}

.card-header h3{
color: white;
}

.social_icon{
position: absolute;
right: 20px;
top: -45px;
}

.input-group-prepend span{
width: 50px;
background-color: #FFC312;
color: black;
border:0 !important;
}

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;

}

.remember{
color: white;
}

.remember input
{
width: 20px;
height: 20px;
margin-left: 15px;
margin-right: 5px;
}

.login_btn{
color: black;
background-color: #FFC312;
width: 100px;
}

.login_btn:hover{
color: black;
background-color: white;
}

.links{
color: white;
}

.links a{
margin-left: 4px;
}




  .header {
    position: relative;
    z-index: 10000;

}
</style>
