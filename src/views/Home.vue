<template>
  <h1>Intro to Vue</h1>
  <CounterComposition
    :step="10"
    @emitCurrentValue="printCounterValue(1, $event)"
  />

  <hr />

  <TodoListComposition />
</template>

<script>
import CounterComposition from "./CounterComposition.vue";
import TodoListComposition from "./TodoListComposition.vue";
export default {
  components: {
    CounterComposition,
    TodoListComposition,
  },
  methods: {
    printCounterValue(counterId, data) {
      console.log({ counterId, ...data });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>