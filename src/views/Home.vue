<template>
  <div class="home">
    <div class="thumbnail-list-container">
      <router-link
        class="thumbnail"
        v-for="links in homeLinks"
        :key="links.id"
        :to="links.route"
      >
        <div class="frame">
          <div class="lines"></div>
          <div class="angles"></div>
          <article class="pa-2">
            <h2>{{ links.title }}</h2>
            <img :src="require(`@/assets/thumbnails/${links.image}.jpg`)" />
          </article>
        </div>
      </router-link>
      <!-- <div class="frame pa-4" link to="/missions">
        <div class="lines"></div>
        <div class="angles"></div>
        <article>
          <img :src="require(`@/assets/thumbnails/${links.image}.jpg`)" />
        </article>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeLinks: [
        {
          id: "t-0",
          title: "Away Missions",
          image: "away_mission_thumbnail",
          route: "/missions",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  max-width: 100rem;
  margin: 5rem auto;
}
.thumbnail-list-container {
  display: grid;
  gap: 1rem;
  grid-auto-flow: row;
  max-width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
}
.thumbnail {
  transition: opacity 0.4s ease-in-out;
  position: relative;
  transition: all 0.4s ease-in-out;
  // border: 1px solid rgba(0, 0, 255, 0);
  img {
    opacity: 0.7;
    width: 100%;
    height: auto;
  }
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    font-size: 2.4rem;
    color: white !important;
  }
  &:hover {
    // border: 1px solid blue;
    img {
      opacity: 1;
    }
  }
}

$ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
$color-grey: #a6afc0;
$color-off-white: #34495e;

.frame {
  position: relative;
  cursor: pointer;
  &:hover {
    .lines {
      background-size: 100% 100%;
    }
    .angles {
      background-size: 14px 14px;
    }
  }
}
// THE MAGIC STARTS HERE
.lines {
  background: linear-gradient(to bottom, $color-off-white 2px, transparent 2px)
      0 0,
    // TOP LEFT TO TOP RIGHT
    linear-gradient(to right, $color-off-white 2px, transparent 2px) 0 100%,
    // BOTTOM LEFT TO TOP LEFT
    linear-gradient(to left, $color-off-white 2px, transparent 2px) 100% 0,
    // TOP RIGHT TO BOTTOM RIGHT
    linear-gradient(to top, $color-off-white 2px, transparent 2px) 100% 100%; // BOTTOM RIGHT TO TOP RIGHT
  background-repeat: no-repeat;
  background-size: 0px 0px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-size 0.2s $ease-in-out-quad;
}
.angles {
  background: linear-gradient(to right, $color-grey 2px, transparent 2px) 0 0,
    // TOP LEFT
    linear-gradient(to bottom, $color-grey 2px, transparent 2px) 0 0,
    // TOP LEFT
    linear-gradient(to left, $color-grey 2px, transparent 2px) 100% 0,
    // TOP RIGHT
    linear-gradient(to bottom, $color-grey 2px, transparent 2px) 100% 0,
    // TOP RIGHT
    linear-gradient(to left, $color-grey 2px, transparent 2px) 100% 100%,
    // BOTTOM RIGHT
    linear-gradient(to top, $color-grey 2px, transparent 2px) 100% 100%,
    // BOTTOM RIGHT
    linear-gradient(to right, $color-grey 2px, transparent 2px) 0 100%,
    // BOTTOM LEFT
    linear-gradient(to top, $color-grey 2px, transparent 2px) 0 100%; // BOTTOM LEFT
  background-repeat: no-repeat;
  background-size: 7px 7px;
  position: absolute;
  top: $color-grey 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.48;
  transition: background-size 0.2s $ease-in-out-quad;
}

// THE MAGIC ENDS HERE

.article {
  padding: 13px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  cursor: pointer;

  &:before {
    content: "";
    background-color: rgba(#ffffff, 0.08);
    opacity: 0.46;
    position: absolute;
    top: 13px;
    right: 13px;
    bottom: 13px;
    left: 13px;
    transition: all 0.2s $ease-in-out-quad;
  }

  &:hover:before {
    top: 21px;
    right: 21px;
    bottom: 21px;
    left: 21px;
  }
}
// p
//   font-family sans-serif
//   font-size 14px
//   text-transform uppercase
//   color #FFFFFF
//   position relative
</style>
