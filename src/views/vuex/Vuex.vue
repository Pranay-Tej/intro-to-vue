<template>
  <div>
    <h2>Vuex</h2>
  </div>
  <div class="flex">
    <List />
    <Detail />
  </div>
</template>

<script>
import Detail from "./Detail.vue";
import List from "./List.vue";
export default {
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