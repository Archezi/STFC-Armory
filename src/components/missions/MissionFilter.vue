<template>
  <div>
    <v-card>
      <input type="text" v-model="search" placeholder="Search missions" />
    </v-card>
    <div class="trait-list">
      <div
        class="traitsTile d-flex justify-center align-center"
        v-for="trait in traits"
        :key="trait"
        @click="() => filteredTraits(trait)"
      >
        <span>{{ trait }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["filteredTraits"],
  data() {
    return {
      search: "",
      filters: null,
      traits: [
        "Ambitious",
        "Adaptable",
        "Admiral",
        "Advisor",
        "Analytical",
        "Android",
        "Astronomer",
        "Assimilated",
        "Archaeologist",
        "Augment",
        "Calculated",
        "Captain",
        "Cautious",
        "Chancellor",
        "Charismatic",
        "Criminal",
        "Cybernetic",
        "Deceptive",
        "Dedicated",
        "Diplomat",
        "Doctor",
        "Empathic",
        "Engineer",
        "Escape Artist",
        "Explorer",
        "Fluffy",
        "Focused",
        "Genius",
        "Inventor",
        "Impulsive",
        "Intimidating",
        "Leader",
        "Manipulative",
        "Mastermind",
        "Miner",
        "Relentless",
        "Reliable",
        "Rogue",
        "Ruthless",
        "Patriotic",
        "Perceptive",
        "Physicist",
        "Psionic",
        "Resourceful",
        "Spy",
        "Scientist",
        "Security",
        "Specialist",
        "Surveyor",
        "Thief",
        "Tactical",
        "Pilot",
        "Uncompromising",
        "Warrior",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.traitsTile {
  font-size: 1.4rem;
  padding: 0.3rem;
  background: #2d323a;
}
.trait-list {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(10, 2rem);
  gap: 0.5rem;
}
</style>
