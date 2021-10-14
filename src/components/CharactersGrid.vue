<template>

<div class="grid">

    <button v-on:click="handleClick" class="rm">4</button>
    <button @click="handleClick" class="rm">3</button>



      {{tenCharacters.tenCharacters}}
      <!-- {{character}} -->
</div>

</template>

<script >

import { mapActions,mapState } from 'vuex';
import '../assets/sass/grid.scss'

export default {
    name:'CharactersGrid',
    methods:{handleClick (e){this.$store.dispatch('getTenCharacters',e.target.innerHTML)}},

    computed: {
        ...mapState(['tenCharacters']),
        
    },
    created(){
        this.$store.dispatch('getTenCharacters','1')
    }
}
</script>

