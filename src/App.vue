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
<style>
@import "./scss/one/variable.scss";
@import "./scss/one/mixins.scss";
@import "./scss/one/base.scss";
.main-content {
  background: #161c25;
}
</style>
