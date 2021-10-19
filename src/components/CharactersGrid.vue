<template>
  <Fragment>
    <div class="characters">
      <div
        class="front-card"
        v-for="c in tenCharacters.tenCharacters"
        :key="c.id"
      >
        <FrontCard :character="c" />
      </div>
    </div>

    <Pag />

  </Fragment>
</template>

<script>

import { mapState } from "vuex";
import Pag from "./Pagination/Pagination.vue";
import FrontCard from "./CharacterFrontCard.vue";
import "../assets/sass/characters/grid.scss";

export default {
  name: "CharactersGrid",
  components: {
    FrontCard,
    Pag,
  },

  methods: {
    handleClick(e) {
      this.$store.dispatch("getTenCharacters", e.target.innerHTML);
    },
  },
  data() {
    return {
    };
  },

  computed: {
    ...mapState(["tenCharacters", "info"]),
  },
  created() {
    this.$store.dispatch("getTenCharacters", "1");
  },
};
</script>
