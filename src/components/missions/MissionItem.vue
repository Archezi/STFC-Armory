<template>
  <v-card outlined min-height="100px" class="pa-5 mission-item">
    <div class="mission-data mb-5">
      <div class="mission-name d-flex flex-column align-start justify-center">
        <p class="ma-0">Mission name</p>
        <h2>{{ title }}</h2>
      </div>
      <div class="mission-rarity d-flex flex-column align-start justify-center">
        <p class="ma-0">Rarity</p>
        <h4 :class="rarity.toLowerCase()">{{ rarity }}</h4>
      </div>
      <div
        class="mission-main-stat d-flex flex-column align-start justify-center"
      >
        <p class="ma-0">Main Statistic</p>
        <h4>{{ keyStat }}</h4>
      </div>
      <div class="mission-rewards">
        <div class="mission-reward d-flex flex-row align-center justify-center">
          <img
            v-for="image in primaryReward"
            :key="image.index"
            class=""
            :src="require(`@/assets/icons/${image}.png`)"
          />
          <!-- <img class="" :src="require(`@/assets/icons/${missionRewards}`)" /> -->
        </div>
        <div
          class="
            mission-reward-critical
            d-flex
            flex-row
            align-center
            justify-center
          "
        >
          <img :src="require(`@/assets/icons/${criticalReward}.png`)" />
        </div>
      </div>
    </div>
    <v-card class="trait-bar transparent" rounded="5">
      <div
        class="trait-item d-flex align-center justify-center"
        v-for="trait in traits"
        :key="trait.index"
      >
        <div class="d-flex align-center justify-center">
          <span class="mr-2 trait-name"> {{ trait.traitName }} </span>
        </div>
        <div class="d-flex align-center justify-center">
          <span>{{ trait.traitLvl }}</span>
        </div>
      </div>
    </v-card>
  </v-card>
</template>

<script>
export default {
  props: [
    "title",
    "rarity",
    "keyStat",
    "primaryReward",
    "criticalReward",
    "traits",
  ],
  data() {
    return {
      missionRewards: "latinium.png",
      missionHeader: null,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/scss/one/variable.scss";
@import "@/scss/one/mixins.scss";

.mission-data {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  grid-template-areas: "missionName  rarity mainStat  rewards";
  @include respond(phone) {
    grid-template-columns: repeat(4, auto);
    grid-template-areas:
      "missionName missionName rewards rewards"
      " rarity mainStat . .";
  }
}
.mission-name {
  grid-area: missionName;
  p {
    font-size: 1.2rem;
  }
  h2 {
    font-size: 1.6rem;
  }
  @include respond(phone) {
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 1.6rem;
    }
  }
}
.mission-rarity {
  grid-area: rarity;
  p {
    font-size: 1.2rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  @include respond(phone) {
    p {
      font-size: 1rem;
      display: none;
    }
  }
}
.mission-main-stat {
  grid-area: mainStat;
  p {
    font-size: 1.2rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  @include respond(phone) {
    p {
      font-size: 1rem;
      display: none;
    }
    h4 {
      font-size: 1.2rem;
    }
  }
}
.mission-rewards {
  grid-area: rewards;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "missionReward missionRrewardCritical";
  @include respond(phone) {
  }
}
.mission-reward {
  grid-area: missionReward;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.mission-reward-critical {
  grid-area: missionRrewardCritical;
  transform: scale(1.1);
  margin-right: 0.5rem;
  border: 1px solid rgba($color: #707070, $alpha: 0.5);
  border-radius: 5px;
}
.mission-reward,
.mission-reward-critical {
  background: #404a56;
}
.mission-reward img,
.mission-reward-critical img {
  height: 5rem;
  width: auto;
  @include respond(phone) {
    height: 3rem;
    width: auto;
  }
}
.trait-bar {
  display: grid;
  grid-auto-flow: column;
  gap: 0.5rem;
  grid-template-columns: repeat(4, 1fr);

  @include respond(phone) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2);
    grid-auto-flow: row;
  }
}
.trait-item > *:nth-child(1) {
  flex: 1 1 80%;
  justify-items: center;
}
.trait-item > *:nth-child(2) {
  flex: 1 1 20%;
}
.trait-item {
  background-color: #2d323a;
  color: #656b72;
}
.trait-item span {
  font-size: 1.4rem;
}
.trait-element {
  width: 100%;
}
.trait-name {
  font-size: 1.4rem;
}
.trait-level {
  // border: 1px solid rgba($color: #707070, $alpha: 0.5);
  background-color: #252930;
}

.mission-item {
  min-height: 10rem;
  background: #1f262e !important;
  border: 1px solid #3263b8;
  h2,
  h4 {
    color: #fff;
  }
  p {
    color: #656b72;
  }
}

.common {
  color: $color-common !important;
}
.uncommon {
  color: $color-uncommon !important;
}
.rare {
  color: $color-rare !important;
}
.epic {
  color: $color-epic !important;
}
li {
  list-style-type: none !important;
}
</style>
