<template>
  <p class="count">
    {{ count }}
  </p>

  <button @click="increase">⬆️ {{ step }}</button>

  <!-- TODO: add a button to decrease count -->

  <!-- TODO: add a button to reset count -->
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 0,
      step: 1,
    };
  },
  methods: {
    increase() {
      console.log({
        count: this.count,
        msg: `increasing count by ${this.step} units`,
      });
      this.count += this.step;
    },

    // TODO:  add a method to decrease count

    // TODO:  add a method to reset count
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.count {
  font-size: 3rem;
  font-weight: bold;
}
</style>
