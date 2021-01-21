<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p><strong>Precompro Test</strong> by Cristian Ceballos</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";
.footer {
  left: 0;
  bottom: 0;
  height: 10px;
  background-image: $navbar-color;
  color: $white;
  text-align: center;
  padding: 10px 0 35px 0;
}
.footer strong {
  color: $white;
}
</style>
