<template>
  <!-- <Counter :step="1" @emitCurrentValue="printCounterValue(1, $event)" />
  <Counter :step="10" @emitCurrentValue="printCounterValue(2, $event)" /> -->
  <!-- <hr /> -->
  <!-- <Forms /> -->

  <!-- <TodoList /> -->
  <router-link to="/">Home</router-link>
  <router-link to="/counter">Counter</router-link>

  <hr />
  <!-- Replaced Dynamically -->
  <router-view></router-view>
</template>

<script>
import Forms from "./views/Forms.vue";
import Counter from "./views/Counter.vue";
// import TodoList from "./views/TodoList.vue";

export default {
  name: "App",
  components: {
    // Forms,
    // Counter,
    // TodoList,
  },
  methods: {
    printCounterValue(counterId, data) {
      console.log({ counterId, ...data });
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
</style>
