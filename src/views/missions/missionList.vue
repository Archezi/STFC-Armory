<template>
  <div>
    <input
      type="text"
      class="search-bar d-flex align-center mb-5 pa-2"
      placeholder="Search"
      v-model="search"
    />
    <mission-item
      class="mission-list-item mb-2"
      v-for="mission in filteredMissionList"
      :key="mission.id"
      :title="mission.missionName"
      :rarity="mission.rarity"
      :key-stat="mission.keyStat"
      :primary-reward="mission.primaryReward"
      :critical-reward="mission.criticalReward"
      :traits="mission.traits"
    ></mission-item>
  </div>
</template>
<script>
import MissionItem from "../../components/missions/MissionItem.vue";
export default {
  components: { MissionItem },
  data() {
    return {
      missionList: null,
      search: "",
    };
  },
  computed: {
    missions() {
      return this.$store.getters.missions;
    },
    filteredMissionList() {
      return this.missionList.filter((mission) =>
        mission.missionName.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  created() {
    this.missionList = this.$store.getters.missions;
    console.log(this.misisonList);
  },
};
</script>
<style lang="scss" scoped>
.search-bar {
  font-size: 24px !important;
  width: 100%;
  border: 1px solid #3263b8;
  border-radius: 0.4rem;
  color: white;
}
</style>
