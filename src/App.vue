<template>
  <!-- :class="isNegative ? 'negative' : 'positive'" -->
  <!-- :class="calculateClass()" -->
  <p class="count" :class="isNegative ? 'negative' : 'positive'">
    {{ count }}
  </p>

  <button @click="increase">⬆️ {{ step }}</button>
  <button @click="decrease">⬇️ {{ step }}</button>
  <button @click="reset">🚫</button>
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

    // decrease count
    decrease() {
      this.count -= this.step;
    },

    // reset count
    reset() {
      this.count = 0;
    },

    // calculate if count is negative
    calculateClass() {
      console.log("method: runs if ANY data changes");
      return this.count < 0 ? true : false;
    },
  },

  computed: {
    isNegative() {
      console.log("computed: runs only when dependencies(count) change");
      return this.count < 0 ? true : false;
    },
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

.positive {
  color: hsl(200, 60%, 40%);
}

.negative {
  color: hsl(0, 60%, 50%);
}
</style>
