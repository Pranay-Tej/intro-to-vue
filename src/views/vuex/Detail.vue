<template>
  <div v-if="todo">{{ todo }}</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      todo: computed(() => store.state.todo.selectedTodo),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>