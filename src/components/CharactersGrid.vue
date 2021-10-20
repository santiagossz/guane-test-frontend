<template>
  <Fragment>
    <div class="characters">
      <div
        v-for="c in tenCharacters.tenCharacters"
        :key="c.id"
        class="front-card"
        :style="{
          backgroundImage:
            ' linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(' +
            c.image +
            ')',
        }"
        @mouseenter="toggleCard(c)"
        @mouseleave="toggleCard(c)"
      >
        <transition name="flip">
          <div :key="c.front">
            <FrontCard :character="c" v-if="c.front" />
            <h4 v-if="!c.front" class="know-more">Know me More!!</h4>
          </div>
        </transition>
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
    Pag,
    FrontCard,
  },

  methods: {
    handleClick(e) {
      console.log(e.target);
    },
    toggleCard(c) {
      c.front = !c.front;
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
