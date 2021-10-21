<template>
  <div class="grid">
    <div class="characters">
      <div
        v-for="c in tenCharacters"
        :key="c.id"
        class="front-card"
        :style="{
          backgroundImage:
            ' linear-gradient(rgba(50, 50, 50, 0.2), rgba(100, 100, 100, 0.2)),url(' +
            c.image +
            ')',
        }"
        @mouseover="c.front = false"
        @mouseleave="c.front = true"
        @click="$router.push({ path: ':/character', query: { id: c.id } })">

            <p v-if="c.front" class="front-name">
              {{ c.name }}
              <button
                :style="c.status == 'Alive'? { background: 'green' }
                    : c.status == 'Dead'? { background: 'red' }
                    : null"/>
            </p>
            <h4 v-if="!c.front" class="know-more">Know me More!!</h4>

      </div>
    </div>

    <Pag />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Pag from "./Pagination/Pagination.vue";
import "../assets/sass/characters/grid.scss";

export default {
  name: "CharactersGrid",
  components: {
    Pag,
  },

  computed: {
    ...mapState(["tenCharacters", "info"]),
  },
  created() {
    this.$store.dispatch("getCharacters", {page:this.$store.state.page,id:0});
  },
};
</script>
