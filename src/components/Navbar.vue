<template>
  <nav>
    <v-toolbar dense class="blue-grey darken-4">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="grey--text text--lighten-5"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="grey--text"
        ><span class="text--lighten-5 font-weight-light">STFC</span
        ><span class="font-weight-bold"> Armory</span></v-toolbar-title
      >
    </v-toolbar>

    <v-navigation-drawer
      temporary
      v-model="drawer"
      app
      class="blue-grey lighten-2 pt-15"
    >
      <v-list v-for="link in links" :key="link.text" nav dense>
        <v-list-item link :to="link.route">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-folder", text: "Home", route: "/" },
        { icon: "mdi-account-multiple", text: "Ships", route: "/ships" },
        { icon: "mdi-star", text: "another", route: "/details" },
      ],
    };
  },
};
</script>
