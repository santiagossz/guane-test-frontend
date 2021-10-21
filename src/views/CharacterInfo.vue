<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{tenCharacters.slice($route.query.id%10-1)}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";


export default {
    name:'CharacterInfo',
    computed: {
    ...mapState(["tenCharacters"]),
  },
  created() {
    this.$store.state.page=Math.ceil(this.$route.query.id/10)
    this.$store.dispatch(
      "getTenCharacters",
      this.$store.state.page
    );
  }
}
</script>
