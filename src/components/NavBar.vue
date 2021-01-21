<template>
  <div id="navbar">
    <b-navbar class="navColor" :transparent="true">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template #start>
        <router-link class="nav-link-item" exact to="/carousel"
          >Carousel</router-link
        >
        <router-link class="nav-link-item" exact to="/card">Card</router-link>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
<style lang="scss">
@import "@/assets/styles/_variables.scss";
#navbar {
  .navColor {
    background-image: $navbar-color;
  }

  .nav-link-item {
    color: $white !important ;
    padding: 15px;
  }

  .navbar-link {
    color: $white !important ;
  }

  @media (max-width: 1024px) {
    a {
      color: $black;
    }

    .nav-link-item {
      display: flex;
      flex-direction: column;
      color: $black !important ;
    }

    .navbar-link {
      color: $black !important ;
    }
    .navbar-burger {
      color: $white !important;
    }
  }
}
</style>
