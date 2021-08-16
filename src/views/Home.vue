<template>
  <div>Intro to Vue</div>
  <CounterComposition
    :step="10"
    @emitCurrentValue="printCounterValue(1, $event)"
  />
</template>

<script>
import CounterComposition from "./CounterComposition.vue";
export default {
  components: {
    CounterComposition,
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