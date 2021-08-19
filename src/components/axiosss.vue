<template>
<div>
    <button style="position: absolute; top:50%" @click="load"> call api</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    methods: {
    load(){
        axios.get('http://localhost:5000/weatherforecast')
          .then(function( response ){
                console.log(response)
            });
            
    },

}
}

</script>