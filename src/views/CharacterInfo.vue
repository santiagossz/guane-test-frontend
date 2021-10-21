<template>
  <div class="character-info">
    <div class="central-box">
      <div class="left-side">
        <h3>{{character.name}}</h3>
        <img :src="character.image" alt="">
      </div>
      <h4 class="status" ><button :style="character.status=='Alive'?{ background:'green'}:character.status=='Dead'?
    { background:'red'}:null"></button>{{character.status}}</h4>

      <p>{{character}}</p>


    </div>
    
  </div>
</template>

<script>
import { mapState } from "vuex";


export default {
    name:'CharacterInfo',
    computed: {
    ...mapState(["character"]),
  },

  created() {
    this.$store.state.page=Math.ceil(this.$route.query.id/10)
    this.$store.dispatch(
      "getCharacters",{page:
      this.$store.state.page,id:this.$route.query.id}
    );
  }
}
</script>
