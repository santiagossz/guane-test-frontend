<template>

<transition name="tr" mode="out-in">
  <div v-if="show" class="intro">
    <router-link  to="/characters"> <h3 class="findToggle" @click="show=!show;$store.state.page=1">Find Us</h3></router-link>
  </div>
</transition>
</template>

<script lang="ts">
import '../assets/sass/home/home.scss'

export default({
  data(){
    return{show:true}

  },
  
})
</script>
