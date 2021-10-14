<template>

<transition name="tr" mode="out-in">
  <div v-if="show" class="intro" @click="show=!show"/>
  <CharactersGrid v-else-if="!show" class="characters"/>
</transition>

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
