<template>
  <b-carousel class="carousel-container" :indicator-inside="false">
    <b-carousel-item v-for="(item, i) in images" :key="item.id">
      <span class="image">
        <img :src="getImgUrl(i)" />
      </span>
    </b-carousel-item>
    <template #indicators="props">
      <span class="al image">
        <img :src="getImgUrl(props.i)" :title="getImgTitle(props.i)" />
      </span>
    </template>
  </b-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      images: JSON.parse(localStorage.getItem("images")),
    };
  },
  methods: {
    getImgUrl(value) {
      return this.images[value].largeUrl;
    },
    getImgTitle(value) {
      return this.images[value].title;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";
.is-active .al img {
  filter: $graysclale-0;
}
.al img {
  height: 8rem;
  width: 8rem;
  filter: $graysclale-100;
}

.carousel {
  height: 100%;
}

.carousel-items img {
  height: 39rem;
}

.carousel-container {
  border: 1px solid $border;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  color: $border2;
  overflow-y: auto;
}
</style>
