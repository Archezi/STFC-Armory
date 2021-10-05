<template>
  <v-container>
    <mission-list></mission-list>
  </v-container>
</template>
<script>
import MissionList from "./missions/MissionList.vue";

export default {
  components: { MissionList },

  computed: {
    filteredMissions() {
      return this.$store.getters.missions;
    },
  },
};
</script>
