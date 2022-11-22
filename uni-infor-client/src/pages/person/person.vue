<script setup lang="ts"></script>

<template>
  <view class="swiper">
    <view class="swiper-item item-0"></view>
    <view class="swiper-item item-1"></view>
    <view class="swiper-item item-2"></view>
  </view>
</template>

<style scoped lang="scss">
.swiper {
  width: 100%;
  height: 300px;

  .swiper-item {
    width: 100%;
    height: 100%;
  }

  .item-0 {
    background-color: aqua;
  }

  .item-1 {
    background-color: aquamarine;
  }

  .item-2 {
    background-color: bisque;
  }
}
</style>
