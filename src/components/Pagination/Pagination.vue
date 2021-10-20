<template>
  <div>
    <pagination
      v-model="page"
      :records="$store.state.tenCharacters.info.count"
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
      page: 1,
      template: CustomTemplate,
    };
  },
  methods: {
    changePage(e) {
      this.$store.dispatch("getTenCharacters", e);
    },
  },
};
</script>
