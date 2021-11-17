<template >
  <v-app id="app">
    <topbar></topbar>
    
  </v-app>
</template>

<script>
import topbar from "./components/UI/Topbar.vue";

export default {
  components: {  topbar },
  data: () => ({

  }),
  props: {
    source: String,
  },
  created() {
      // eslint-disable-next-line no-unused-vars
  },
  mounted() {

  },
  methods: {
   
  },
  computed: {
    
  },
};
</script>


<style scoped>
v-menu__content theme--light v-menu__content--fixed {
  z-index: 99;
}
</style>