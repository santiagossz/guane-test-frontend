<template>
  <div class="character-info">
    <div class="central-box">
      <h4 class="status">
        <button
          :style="
            character.status == 'Alive'
              ? { background: 'green' }
              : character.status == 'Dead'
              ? { background: 'red' }
              : null
          "
        ></button
        >{{ character.status }}
      </h4>
      <div class="left-side">
        <h3>{{ character.name }}</h3>
        <img :src="character.image" alt="" />
      </div>
      <div class="right-side">
        <img
          class="location-img"
          src="https://img.icons8.com/color/48/000000/galaxy.png"
        />

        Location
        <p class="location">{{ character.location.name }}</p>
        <img src="https://img.icons8.com/color/48/000000/alligator.png" />
        Specie
        <p class="species">
          {{ character.species }} <fa :icon="species" class="species-icon" />
        </p>

        <img src="https://img.icons8.com/dusk/40/000000/gender.png" />

        Gender
        <p>{{character.gender}}</p>
        <img src="https://img.icons8.com/office/36/000000/plus-1year.png"/>
        Created Year
        <p>{{character.created.split('-')[0]}}</p>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CharacterInfo",
  computed: {
    ...mapState(["character", "species"]),
  },
  created() {
    this.$store.state.page = Math.ceil(this.$route.query.id / 10);
    this.$store.dispatch("getCharacters", {
      page: this.$store.state.page,
      id: this.$route.query.id,
    });
  },
};
</script>
