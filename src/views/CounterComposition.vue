<template>
  <h2>Composition Composition</h2>
  <!-- :class="isNegative ? 'negative' : 'positive'" -->
  <!-- :class="calculateClass()" -->
  <p class="count" :class="isNegative ? 'negative' : 'positive'">
    {{ count }}
  </p>

  <button @click="increase">⬆️ {{ step }}</button>
  <button @click="decrease">⬇️ {{ step }}</button>
  <button @click="reset">🚫</button>

  <button @click="emitCurrentValue">EmitValue</button>

  <br />
  <label for="step">Step</label>
  <input type="number" name="step" id="step" v-model="step" />
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "CounterComposition",
  setup(props, context) {
    // data
    const count = ref(0);

    // methods
    function increase() {
      console.log({
        count: count.value,
        msg: `increasing count by ${props.step} units`,
      });
      count.value += props.step;
    }

    // decrease count
    function decrease() {
      count.value -= props.step;
    }

    // reset count
    function reset() {
      count.value = 0;
    }

    // calculate if count is negative
    function calculateClass() {
      console.log("method: runs if ANY data changes");
      return count.value < 0 ? true : false;
    }

    function emitCurrentValue() {
      context.emit("emitCurrentValue", {
        count: count.value,
        step: props.step,
      });
    }

    // computed
    const isNegative = computed(function () {
      console.log("computed: runs only when dependencies(count) change");
      return count.value < 0 ? true : false;
    });

    return {
      count,
      increase,
      decrease,
      reset,
      calculateClass,
      emitCurrentValue,
      isNegative,
    };
  },
  props: {
    step: {
      type: Number,
      default: 1,
    },
  },
  emits: ["emitCurrentValue"],
  // data() {
  //   return {
  //     count: 0,
  //     // step: 1,
  //   };
  // },
  // methods: {
  //   increase() {
  //     console.log({
  //       count: this.count,
  //       msg: `increasing count by ${this.step} units`,
  //     });
  //     this.count += this.step;
  //   },

  //   // decrease count
  //   decrease() {
  //     this.count -= this.step;
  //   },

  //   // reset count
  //   reset() {
  //     this.count = 0;
  //   },

  //   // calculate if count is negative
  //   calculateClass() {
  //     console.log("method: runs if ANY data changes");
  //     return this.count < 0 ? true : false;
  //   },
  // },

  // computed: {
  //   isNegative() {
  //     console.log("computed: runs only when dependencies(count) change");
  //     return this.count < 0 ? true : false;
  //   },
  // },
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
