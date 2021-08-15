<template>
  <div>
    <!-- {{ $route.params.id }} -->
    <router-link to="/expenses">Back</router-link>
    <p>
      {{ currentExpense }}
    </p>

    <p v-if="errorMessage">{{ errorMessage }}</p>
    <button @click="save">Save</button>
  </div>
</template>

<script>
export default {
  name: "ExpenseDetail",
  computed: {
    currentExpense() {
      return this.$route.params.id;
    },
  },
  data() {
    return {
      errorMessage: null,
    };
  },
  created() {
    this.fetchById();
  },
  methods: {
    fetchById() {
      console.log(`fetching expense ${this.$route.params.id} details from API`);
    },
    save() {
      console.log(`saving expense`);
      let success = false;
      if (success) {
        // Programmatic Navigation
        this.$router.push("/expenses");
      } else {
        this.errorMessage = "There was some error";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>