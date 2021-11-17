<template lang="pug">
  v-app(id="app")
    topbar
    documents


    
  </v-app>
</template>

<script>
import topbar from "./components/UI/Topbar.vue";
import documents from "./components/UI/Document/documents.vue";

export default {
  components: {  topbar,documents },
  data: () => ({

  }),
  props: {
    source: String,
  },
  created() {

  },
  mounted() {

  },
  methods: {
   
  },
  computed: {
    
  },
};
</script>


<style lang="scss" scoped>
//width should be a multiple of 16+1



</style>