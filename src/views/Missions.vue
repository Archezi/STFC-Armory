<template>
  <v-container>
    <!-- <mission-filter
      :filteredTraits="filteredTraits"
      class="filter mb-10"
    ></mission-filter> -->
    <mission-list></mission-list>
  </v-container>
</template>
<script>
import MissionList from "./missions/MissionList.vue";
// import MissionFilter from "../components/missions/MissionFilter.vue";

export default {
  components: {
    MissionList,
    //  MissionFilter
  },

  computed: {
    filteredMissions() {
      return this.$store.getters.missions;
    },
    searchList() {
      return this.filteredMissions;
    },
  },
  methods: {
    filteredTraits(filterName) {
      this.filteredMissions = this.filteredMissions.filter(
        (filteredMissions) => {
          return filteredMissions.traits.traitName === filterName;
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.filter {
  // margin-bottom: 2rem;
}
</style>
