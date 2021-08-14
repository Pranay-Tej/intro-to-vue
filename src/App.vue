<template>
  <!-- :class="isNegative ? 'negative' : 'positive'" -->
  <!-- :class="calculateClass()" -->
  <p class="count" :class="isNegative ? 'negative' : 'positive'">
    {{ count }}
  </p>

  <button @click="increase">⬆️ {{ step }}</button>
  <button @click="decrease">⬇️ {{ step }}</button>
  <button @click="reset">🚫</button>

  <!-- TODO: use number input to bind 'step' -->
  <br />
  <label for="step">Step</label>
  <input type="number" name="step" id="step" />

  <!-- Forms -->
  <!-- Text input -->
  <div>
    <p>Text</p>
    <input type="text" name="textInput" id="textInput" v-model="textInput" />
    {{ textInput }}
  </div>

  <!-- Number input -->
  <div>
    <p>Number</p>
    <input
      type="number"
      name="numberInput"
      id="numberInput"
    />
    <!-- {{ numberInput }} -->
  </div>

  <!-- Date input -->
  <div>
    <p>Date</p>
    <input type="date" name="dateInput" id="dateInput" />
    <!-- {{ dateInput }} -->
  </div>

  <!-- Time input -->
  <div>
    <p>Time</p>
    <input type="time" name="timeInput" id="timeInput" />
    <!-- {{ timeInput }} -->
  </div>

  <!-- Select -->
  <div>
    <p>Select</p>
    <select name="selectDropDown" id="selectDropDown">
      <option value="">Select Value</option>
      <option value="🍎">🍎</option>
      <option value="🍍">🍍</option>
      <option value="🍉">🍉</option>
      <option value="🍕">🍕</option>
    </select>
    <!-- {{ selectDropDown }} -->
  </div>

  <!-- Multi Select -->
  <div>
    <p>Multi Select</p>
    <select
      name="multiSelectDropDown"
      id="multiSelectDropDown"
      multiple="true"
    >
      <option value="🍎">🍎</option>
      <option value="🍍">🍍</option>
      <option value="🍉">🍉</option>
      <option value="🍕">🍕</option>
    </select>
    <!-- {{ multiSelectDropDown }} -->
  </div>

  <!-- Radio Group -->
  <div>
    <p>Radio Group</p>
    <label for="🍎">🍎</label>
    <input type="radio" name="🍎" value="🍎" />
    <label for="🍍">🍍</label>
    <input type="radio" name="🍍" value="🍍" />
    <label for="🍉">🍉</label>
    <input type="radio" name="🍉" value="🍉" />
    <label for="🍕">🍕</label>
    <input type="radio" name="🍕" value="🍕" />
    <br />
    <!-- {{ radioInput }} -->
  </div>

  <!-- Checkbox Group -->
  <div>
    <p>Checkbox Group</p>
    <label for="🍎">🍎</label>
    <input type="checkbox" name="🍎" value="🍎" />
    <label for="🍍">🍍</label>
    <input type="checkbox" name="🍍" value="🍍" />
    <label for="🍉">🍉</label>
    <input type="checkbox" name="🍉" value="🍉" />
    <label for="🍕">🍕</label>
    <input type="checkbox" name="🍕" value="🍕" />
    <br />
    <!-- {{ checkboxInput }} -->
  </div>
  <br />

  <!-- Dynamic form array -->

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

input,
select {
  margin-bottom: 0.5em;
}
</style>
