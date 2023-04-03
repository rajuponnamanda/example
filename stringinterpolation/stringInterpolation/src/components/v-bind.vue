<template>
    <div class="container">
        <div class="row">
            <h1>Post Data</h1>
            <hr/>
            <div>
            <h2> {{ Name }} </h2>
            <a v-bind:href="link">Click Here To know</a>     
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default{ 
    data(){
        return{
            Name:'Raju Ponnamanda',
            link:'https://www.pexels.com/photo/green-string-lights-586744/'
        }

    }
}
</script>
