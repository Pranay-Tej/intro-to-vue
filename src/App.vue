<template>
  <Counter />
  <hr />
  <Forms />
</template>

<script>
import Forms from "./views/Forms.vue";
import Counter from "./views/Counter.vue";

export default {
  name: "App",
  components: {
    Forms,
    Counter,
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
