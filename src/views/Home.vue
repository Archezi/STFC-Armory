<template>
  <div class="home">
    <v-container class="my-5">
      <v-layout row>
        <v-flex xs12 md4>
          <router-link to="/ships">
            <v-card class="rounded-lg" elevation="2">
              <v-responsive :aspect-ratio="1">
                <v-img
                  cover
                  aspect-ratio="1"
                  lazy-src="https://picsum.photos/id/11/10/6"
                  src="https://source.unsplash.com/dP_Y_MNxQAo/400x400"
                ></v-img>
              </v-responsive>
            </v-card>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
    <mission-list></mission-list>
  </div>
</template>

<script>
import MissionList from "./missions/MissionList.vue";
export default {
  components: { MissionList },
};
</script>
