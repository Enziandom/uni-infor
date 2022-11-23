<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: "65rpx"
  },
  margin: {
    type: String,
    default: "0 8px 0 0"
  }
});
</script>

<template>
  <view class="component_avatar">
    <image :style="{ width: size, height: size, margin: margin }" :src="src"></image>
  </view>
</template>

<style scoped lang="scss">
@import "../styles/mixins.scss";

.component_avatar {
  @include flex();

  & > image {
    border-radius: 50%;
  }
}
</style>
