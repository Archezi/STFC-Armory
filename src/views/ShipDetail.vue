<template>
  <div class="ship-detail">
    <v-container>
      <v-col sm="4">
        <v-sheet color="transparent">
          <v-card
            v-for="cost in costs"
            :key="cost.class"
            color="transparent "
            flat
            height="20"
            class="d-flex align-center pa-0 ma-0"
          >
            <v-card color="transparent" flat class="d-flex align-center"
              ><v-avatar tile size="16">
                <v-img
                  :src="require(`@/assets/resources/${cost.resourceIcon}.png`)"
                ></v-img> </v-avatar
            ></v-card>
            <v-card color="transparent" flat class="d-flex align-center"
              ><span
                ><v-rating
                  v-model="cost.grade.starsNumber"
                  :length="1"
                  :color="cost.grade.color"
                  class="d-flex align-center mr-2"
                  large
                  size="16"
                ></v-rating
              ></span>
              <span>{{ cost.grade.number }}</span>
              <span class="text--lighten-5" :class="cost.grade.rarity">{{
                cost.name
              }}</span>
            </v-card>
            <v-card
              color="transparent"
              flat
              class="d-flex align-center ml-auto"
            >
              <span :class="cost.grade.rarity">{{ cost.amount }}</span>
            </v-card>
          </v-card>
        </v-sheet>
      </v-col>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
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
</style>
