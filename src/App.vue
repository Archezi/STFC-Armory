<template>
  <v-app>
    <navbar />
    <v-main class="main-content pa-0">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },

  data() {
    return {};
  },
};
</script>
<style scoped>
.main-content {
  background: #0d212d;
}
</style>
