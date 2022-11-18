<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: "65rpx"
  }
});
</script>

<template>
  <view class="avatar">
    <image :style="{ width: size, height: size }" :src="src"></image>
  </view>
</template>

<style scoped lang="scss">
.avatar > image {
  border-radius: 50%;
}
</style>
