<template>
  <v-card flat class="primary rounded-0 pb-5">
    <v-row>
      <v-col sm="12">
        <div class="d-flex flex-no-wrap">
          <v-avatar class="ma-3" tile>
            <v-img src="https://source.unsplash.com/random/200x200"></v-img>
          </v-avatar>
          <v-card-title class="text-h5"> text </v-card-title>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12">
        <div class="flex">
          <v-card-title>Title</v-card-title>
          <v-card-subtitle> subtitle</v-card-subtitle>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12">
        <v-card-title>Ship Abilities are always active.</v-card-title>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12">
        <v-card class="rounded-0">
          <v-simple-table class="transparent darken-2">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left dyvider__bottom dyvider__right">
                    Level
                  </th>
                  <td
                    class="dyvider__bottom dyvider__right"
                    v-for="item in desserts"
                    :key="item.name"
                  >
                    {{ item.carbs }}
                  </td>
                </tr>
                <tr>
                  <th class="text-left dyvider__right">Bonus</th>
                  <td
                    class="dyvider__right"
                    v-for="item in desserts"
                    :key="item.name"
                  >
                    {{ item.carbs }}
                  </td>
                </tr>
              </thead>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Level",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Bonus", sortable: false },
      ],
      bonus: [{ name: "Bonus" }],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },
};
</script>

<style scoped>
.dyvider__bottom {
  border-bottom: 1px solid grey;
}
.dyvider__right {
  border-right: 1px solid grey;
}
.ability-bg {
  background-color: #0d212d;
}
</style>
