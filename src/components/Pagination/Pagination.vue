<template>
  <div>
    <pagination
      v-model="$store.state.page"
      :records="$store.state.info.count"
      :per-page="10"
      :options="{
        template: template,
        texts: { count: 'Characters {from} - {to} of <{count}>' },
      }"
      @paginate="changePage"
    />
  </div>
</template>

<script>
import Pagination from "v-pagination-3";
import CustomTemplate from "./CustomTemplate";

export default {
  name: "Pag",
  components: {
    Pagination,
  },

  data() {
    return {
      template: CustomTemplate,
    };
  },
  methods: {
    changePage(e) {
      this.$store.dispatch("getCharacters", {page:e,id:0});
      this.$store.state.page=e;
    },
  },
};
</script>
