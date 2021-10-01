<template>
  <v-container>
    <!-- <mission-list></mission-list> -->
    <!-- <mission-item></mission-item> -->
    <!-- <mission-item-test
      v-for="mission in filteredMissions"
      :key="mission.missionName"
      :title="mission.missionName"
    ></mission-item-test> -->
  </v-container>
</template>
<script>
// import MissionList from "./missions/MissionList.vue";
// import MissionItemTest from "../components/missions/MissionItemTest.vue";

// import MissionItem from "../components/missions/MissionItem.vue";
export default {
  components: {
    // MissionList,
    // MissionItemTest,
  },
  computed: {
    filteredMissions() {
      return this.$store.getters.missions;
    },
  },
};
</script>
