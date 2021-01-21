<template>
  <div id="app">
    <NavBar />
    <div class="page-content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  mounted() {
    this.getImgs();
  },
  methods: {
    async getImgs() {
      const ocsa = "H_sK-6D-yfhZsPU5fF_KbsY436xKKZRg310S6Zyd5hM";
      const url = `https://pixabay.com/api/?key=19963825-0b1446b99991bf1f85fa61697&q=${encodeURI(
        "space"
      )}&per_page=20`;
      const response = await fetch(url);
      const { hits } = await response.json();
      const images = hits.map((img) => {
        return {
          id: img.id,
          title: img.tags,
          url: img.pageURL,
          largeUrl: img.largeImageURL,
          userImageURL: img.userImageURL,
          user: img.user,
          type: img.type,
          previewURL: img.previewURL,
          webformatURL: img.webformatURL,
        };
      });
      localStorage.setItem("images", JSON.stringify(images));
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/_variables.scss";
#app {
  background: $background;
  position: relative;
}

* {
  margin: 0;
  padding: 0;
}

html {
  overflow-y: hidden;
}

.page-content {
  height: 90vh;
  overflow-y: auto;
  padding: 30px;
  margin: 0 auto;
}
</style>
