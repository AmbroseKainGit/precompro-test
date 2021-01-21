<template>
  <div class="card-container">
    <b-collapse
      v-for="item in images"
      :key="item.id"
      :aria-id="'contentIdForA11y2'+item.id"
      class="panel"
      animation="slide"
    >
      <template #trigger>
        <div
          class="panel-heading"
          role="button"
          :aria-controls="'contentIdForA11y2'+item.id"
        >
          <strong> {{ item.user }} </strong>
        </div>
      </template>
      <div class="panel-block">
        <img class="card-image" :src="item.webformatURL" :title="item.title" />
      </div>
      <div class="card-description">
        {{ item.title }}
      </div>
    </b-collapse>
  </div>
</template>
<script>
export default {
  name: "Card",
  data() {
    return {
      images: JSON.parse(localStorage.getItem("images")),
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/_variables.scss";
.panel {
  margin: 5px;
  background: $white;
  height: 20rem;
  width: 20rem;
}

.card-image {
  height: 197px;
  width: 296px;
}

.card-description {
  padding: 3px;
  text-align: center;
}

.panel:not(:last-child) {
  margin-bottom: 5px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}
.panel-heading {
  background: $black;
}
.panel-heading strong {
  color: $white !important;
}
</style>
