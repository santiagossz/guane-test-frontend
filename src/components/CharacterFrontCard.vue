<template>
    <!-- <img :src='character.image' alt=""> -->
    <Fragment> 
    <h4 class="front-name">{{character.status}}</h4>
    </Fragment>

  
</template>

<script>

export default {
    name:'FrontCard',
    props:['character']

}
</script>
