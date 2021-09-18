<template>
  <div class="ship-detail">
    <v-container>
      <ship-main-info></ship-main-info>
      <v-row>
        <v-col sm="12">
          <v-tabs background-color="primary" class="pa-0" optional>
            <v-tab class="white--text" href="#ability">Ability</v-tab>
            <v-tab-item class="" value="ability">
              <ship-ability></ship-ability>
            </v-tab-item>
            <v-tab class="white--text" href="#two">Item Two</v-tab>
            <v-tab-item dark class="tb-bg" value="two">
              <ship-ability></ship-ability>
            </v-tab-item>
            <v-tab class="white--text" href="#three">Item Three</v-tab>
            <v-tab-item dark class="mt-5 mb-5 tb-bg" value="three">
              <ship-requirements></ship-requirements>
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12">
          <ship-build-cost></ship-build-cost>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <ship-component-cost></ship-component-cost>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import ShipMainInfo from "../components/shipDetail/ShipdMainInfo.vue";
import ShipAbility from "../components/shipDetail/ShipAbility.vue";
import ShipRequirements from "../components/shipDetail/ShipRequirements.vue";
import ShipBuildCost from "../components/shipDetail/ShipBuildCost.vue";
import ShipComponentCost from "../components/shipDetail/ShipComponentCost.vue";

export default {
  components: {
    ShipMainInfo,
    ShipAbility,
    ShipRequirements,
    ShipBuildCost,
    ShipComponentCost,
  },
  data: () => ({
    showTab: false,
    costs: [
      {
        name: "tritanium",
        grade: {
          rarity: "rare",
          color: "#104eaa",
          number: 1,
          starsNumber: 1,
        },
        amount: 123000,
        resourceIcon: "resource_icon_61",
      },
      {
        amount: 123000,
        name: "tritanium",
        resourceIcon: "resource_icon_61",
        grade: {
          rarity: "epic",
          color: "#601d9a",
          number: 1,
          starsNumber: 1,
        },
      },
      {
        amount: 123000,
        name: "tritanium",
        resourceIcon: "resource_icon_61",
        grade: {
          rarity: "common",
          color: "#5b5e5b",
          number: 1,
          starsNumber: 1,
        },
      },
      {
        amount: 123000,
        name: "tritanium",
        resourceIcon: "resource_icon_61",
        grade: {
          number: 3,
          rarity: "rare",
          color: "#104eaa",
          starsNumber: 1,
        },
      },
    ],
    model: 1,
  }),
};
</script>
<style scoped lang="scss">
.v-card {
  background: transparent;
}
.rare {
  button svg {
    fill: #104eaa;
  }
  color: #104eaa;
}
.uncommon {
  button svg {
    fill: #35903c;
  }
  color: #35903c;
}
.common {
  button svg {
    fill: #5b5e5b;
  }
  color: #5b5e5b;
}
.epic {
  button svg {
    fill: #601d9a;
  }
  color: #601d9a;
}
.v-rating {
  height: 20px;
  width: 20px;
  margin: 0;
  padding: 0;
}
.tb-bg {
  background: transparent !important;
}
// ======================================
// ship info
v-tab-item {
  background-color: transparent;
}
.ship__info {
  max-height: 30rem;
  min-height: 20rem;
}
</style>
