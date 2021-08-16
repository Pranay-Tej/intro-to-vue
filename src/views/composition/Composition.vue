<template>
  <div>
    <CounterComposition
      :step="10"
      @emitCurrentValue="printCounterValue(1, $event)"
    />

    <hr />

    <TodoListComposition />
  </div>
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