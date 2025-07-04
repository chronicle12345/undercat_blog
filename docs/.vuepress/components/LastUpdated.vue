<template>
</template>

<script>
export default {
  props: ['slot-key'],
  mounted () {
      this.$page.lastUpdated = "2025/7/4 下午5:00:00";
  }
};
</script>
