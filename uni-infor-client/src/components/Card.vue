<script setup lang="ts">
defineProps({
  padding: {
    type: String,
    default: "25rpx"
  },
  margin: {
    type: String,
    default: "15rpx"
  },
  radius: {
    type: String,
    default: "20rpx"
  }
});
</script>

<template>
  <view class="card">
    <slot />
  </view>
</template>

<style scoped lang="scss">
.card {
  background-color: white;
  border-radius: v-bind(radius);
  margin: v-bind(margin);
  padding: v-bind(padding);
}
</style>
