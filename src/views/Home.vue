<template>

<transition name="tr" mode="out-in">
  <div v-if="show" class="intro">
    <h3 class="findToggle" @click="show=!show">Find Us</h3>
  </div>

  <CharactersGrid v-else-if="!show" class="grid"/>
</transition>
 <h3 class="findToggle" @click="show=!show">Find Us</h3>
</template>

<script lang="ts">
import CharactersGrid from '../components/CharactersGrid.vue'
import '../assets/sass/home/home.scss'

export default({
  components: {
  
    CharactersGrid 
  },

  data(){
    return{show:true}

  }


})
</script>
