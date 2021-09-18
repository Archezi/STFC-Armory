<template>
  <v-row
    class="transparent"
    dense
    justify="center"
    justify-sm="left"
    align="center"
  >
    <v-col cols="2">
      <v-img
        aspect-ratio="1"
        contain
        src="https://source.unsplash.com/dP_Y_MNxQAo"
      ></v-img>
    </v-col>
    <v-col>
      <v-row>
        <v-col class="d-flex justify-center">
          <h1 class="text-h5 white--text">USS DISCOVERY</h1>
        </v-col>
      </v-row>
      <v-row class="mt-0 d-flex justify-center">
        <v-col cols="auto">
          <div class="ship__type">Explorer</div>
        </v-col>
        <v-col cols="auto">
          <div class="ship__faction">Neutral</div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.ship__info {
  &-container {
    display: flex;
    align-items: center;
  }
  &-information {
    margin-left: 5rem;
    color: white;
    .info__wrapper {
      font-weight: 300;
      display: flex;
      padding: 1rem 0;
      justify-content: flex-start;
    }
    .ship__type,
    .ship__faction {
      margin-right: 1rem;
    }
  }
}
</style>
