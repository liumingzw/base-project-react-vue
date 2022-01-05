<template>
  <div>{{ message }} {{ count }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue!!",
      count: 0,
    };
  },
  mounted() {
    console.log("mounted");
    setInterval(() => {
      this.count++;
    }, 1000);
  },
};
</script>

<style scoped>
</style>
