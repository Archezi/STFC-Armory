<template>
  <div class="ships">
    <v-container>
      <h1 class="subheading grey--text">Ships</h1>
      <v-list
        dense
        two-line
        v-for="item in items"
        :key="item.text"
        class="pa-0 ship-list-item"
      >
        <template>
          <v-list-item :class="`${item.grade}-border`">
            <v-avatar tile size="64">
              <v-img :src="require(`@/assets/${item.img}.png`)"></v-img>
            </v-avatar>
            <v-list-item-content class="pl-4">
              <v-list-item-title
                class="white--text font-weight-black"
                v-html="item.text"
              ></v-list-item-title>
              <v-list-item-subtitle
                class="white--text text--darken-2 font-weight-light"
                v-html="item.class"
              ></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content>
              <v-list
                three-line
                :class="item.faction"
                class="ship-list-item-extra"
              >
                <v-list-item-title class="white--text"
                  ><v-rating
                    v-model="item.gradeNumber"
                    :length="item.gradeNumber"
                    :color="item.gradeColor"
                    large
                  ></v-rating>
                </v-list-item-title>
                <v-list-item-subtitle
                  class="grey--text text--darken-1 text-capitalize"
                  v-html="item.faction"
                ></v-list-item-subtitle>
                <v-list-item-subtitle
                  class="grey--text text--darken-1"
                  v-html="item.text"
                ></v-list-item-subtitle>
              </v-list>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-divider></v-divider>
      </v-list>
    </v-container>
  </div>
</template>
<script>
export default {
  methods: {
    starColor() {
      if (this.item.grade == "epic") {
        return "#601d9a";
      } else if (this.item.grade == "rare") {
        return "#104eaa";
      }
    },
  },
  data: () => ({
    colors: {
      epic: "#601d9a",
    },
    items: [
      {
        icon: "mdi-inbox",
        text: "D4",
        class: "Interceptor",
        img: "d4_icon",
        grade: "epic",
        gradeColor: "#601d9a",
        gradeNumber: 4,
        faction: "romulan",
      },
      {
        icon: "mdi-star",
        class: "Battleship",

        text: "Augur",
        img: "augur",
        grade: "rare",
        gradeColor: "#104eaa",
        gradeNumber: 3,

        faction: "federation",
      },
      {
        icon: "mdi-send",
        class: "Interceptor",

        text: "Send",
        img: "d4_icon",
        grade: "common",
        gradeNumber: 4,
        gradeColor: "#601d9a",
        faction: "romulan",
      },
      {
        icon: "mdi-email-open",
        class: "Interceptor",

        text: "Drafts",
        img: "d4",
        grade: "uncommon",
        gradeNumber: 4,
        gradeColor: "#601d9a",
        faction: "klingon",
      },
    ],
    model: 1,
  }),
};
</script>
<style scoped lang="scss">
.v-list-item {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}
.ship-list-item,
.ship-list-item-extra {
  background: #203a46;
  position: relative;
  cursor: pointer;
}
.ship-list-item:hover {
  opacity: 0.75;
}
.federation:before {
  content: "";
  background-image: url("~@/assets/Fed-logo.jpg");
  background-position: right;
  background-size: contain;
  position: absolute;
  top: 0px;
  right: 0;
  bottom: 0px;
  left: 0px;
  opacity: 0.75;
}
.romulan:before {
  content: "";
  background-image: url("~@/assets/Rom-Logo-7.jpg");
  background-position: right;
  background-size: contain;
  position: absolute;
  top: 0px;
  right: 0;
  bottom: 0px;
  left: 0px;
  opacity: 0.75;
}
.klingon:before {
  content: "";
  background-image: url("~@/assets/KLG-Logo-1.jpg");
  background-position: right;
  background-size: contain;
  position: absolute;
  top: 0px;
  right: 0;
  bottom: 0px;
  left: 0px;
  opacity: 0.75;
}
.rare {
  color: #104eaa;
}
.uncommon {
  svg {
    color: #35903c;
  }
}
.common svg {
  color: #5b5e5b;
}
.epic svg {
  color: #601d9a;
}
.rare-border {
  border-left: 10px solid #104eaa;
}
.uncommon-border {
  border-left: 10px solid #35903c;
}
.common-border {
  border-left: 10px solid #5b5e5b;
}
.epic-border {
  border-left: 10px solid #601d9a;
}
</style>
