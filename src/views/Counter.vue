<template>
  <!-- :class="isNegative ? 'negative' : 'positive'" -->
  <!-- :class="calculateClass()" -->
  <p class="count" :class="isNegative ? 'negative' : 'positive'">
    {{ count }}
  </p>

  <button @click="increase">⬆️ {{ step }}</button>
  <button @click="decrease">⬇️ {{ step }}</button>
  <button @click="reset">🚫</button>

  <button @click="$emit('emitCurrentValue', { count, step })">EmitValue</button>

  <br />
  <label for="step">Step</label>
  <input type="number" name="step" id="step" v-model="step" />
</template>

<script>
export default {
  name: "Counter",
  props: {
    step: {
      type: Number,
      default: 1,
    },
  },
  emits: ["emitCurrentValue"],
  data() {
    return {
      count: 0,
      // step: 1,
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
