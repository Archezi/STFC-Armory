<template>
  <div>
    <div></div>
    <mission-item
      class="mission-list-item mb-2"
      v-for="mission in missions"
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
  computed: {
    missions() {
      return this.$store.getters.missions;
    },
  },
};
</script>
<style lang="scss" scoped>
.mission-list-item {
}
</style>
