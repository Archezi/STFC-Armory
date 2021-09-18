<template>
  <v-card>
    <v-row>
      <v-col cols="12">
        <v-subheader class="white--text text-h6"
          >Total Cost: Tier 1</v-subheader
        >
        <base-divider></base-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-list
          v-for="item in items"
          :key="item.name"
          max-height="24px"
          class="py-0 px-4 d-flex transparent white--text"
        >
          <div class="my-auto">icon</div>
          <div>
            <div class="d-flex">
              <v-icon class="white--text px-2" size="16">mdi-star</v-icon>
              <div>name</div>
            </div>
          </div>
          <div class="ml-auto">number</div>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { name: "one" },
        { name: "one" },
        { name: "one" },
        { name: "one" },
        { name: "one" },
      ],
    };
  },
};
</script>
<style scoped>
.list-item {
  height: 20px;
}
</style>
