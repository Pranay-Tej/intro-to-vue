<template>
  <div>
    <h2>Vuex</h2>
  </div>
  <div class="flex">
    <List />
    <Detail />
  </div>
  <div>
    <h3>Event chaining</h3>
    <button @click="dispatchEvent">Dependent Event</button>
    <ul v-for="data in dataFromApi" :key="data">
      <li>{{ data }}</li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Detail from "./Detail.vue";
import List from "./List.vue";
export default {
  setup() {
    const store = useStore();

    function dispatchEvent() {
      store.dispatch("dependentEvent");
    }

    return {
      dispatchEvent,
      dataFromApi: computed(() => store.state.todo.dataFromApi),
    };
  },
  components: {
    List,
    Detail,
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}
</style>