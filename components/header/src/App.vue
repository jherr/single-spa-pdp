<template>
  <div class="app">
    <div>
      Header
    </div>
    <div>
      <span id="count">{{count}}</span> dogs to adopt
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    count: window.pdp.cart.count,
  }),
  mounted() {
    window.addEventListener('cartChange', () => {
      this.count = window.pdp.cart.count;
    });
  },
}
</script>

<style>
.app {
  background: lightsalmon;
  padding: 1em;
  font-weight: bold;
  display: grid;
  grid-template-columns: 80% 20%;
}
</style>
