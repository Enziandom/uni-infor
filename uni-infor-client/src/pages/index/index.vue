<template>
  <view class="content">
    <tab-page>
      <template v-slot:swiper0>
        <view class="swiper0">
          <activities :data="conducting" />
        </view>
      </template>
      <template v-slot:swiper1>
        <view class="swiper1"> </view>
      </template>
      <template v-slot:swiper2>
        <view class="swiper2"> </view>
      </template>
      <template v-slot:swiper3>
        <view class="swiper3"></view>
      </template>
      <template v-slot:swiper4>
        <view class="swiper4"></view>
      </template>
    </tab-page>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";

let conducting = ref([
  {
    name: "我想对你说",
    startDate: "2022-11-17",
    endDate: "2022-11-19",
    startTime: "10:00",
    endTime: "12:00",
    opposition: 0,
    approves: 233,
    brief: "在这里，你可以拥有自己的舞台，你可以绽放自己的光彩。"
  },
  {
    name: "程序设计大赛",
    startDate: "2022-11-18",
    endDate: "2022-11-20",
    startTime: "14:00",
    endTime: "16:00",
    opposition: 1,
    approves: 333,
    brief: "在这里，你会锻炼自我、收获成长，你会有志同道合的朋友；"
  }
]);
</script>

<style scoped lang="scss">
@import "../../uni.scss";
@import "../../styles/font.scss";
@import "../../styles/mixins.scss";

.content {
  background-color: $cust-bg-color;
}
.activities {
  .activity {
    .title {
      margin-bottom: 10rpx;
    }

    .brief {
      margin-bottom: 10rpx;
    }
  }
}
</style>
