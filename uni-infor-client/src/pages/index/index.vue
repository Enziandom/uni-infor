<template>
  <view class="content">
    <!-- <uni-swiper-dot class="uni-swiper-dot-box" @clickItem="clickItem" :info="info" :current="current" :mode="mode" :dots-styles="dotsStyles" field="content">
      <swiper class="swiper-box" @change="change" :current="swiperDotIndex">
        <swiper-item v-for="(item, index) in 3" :key="index">
          <view class="swiper-item" :class="'swiper-item' + index">
            <text style="color: #fff; font-size: 32px">{{ index + 1 }}</text>
          </view>
        </swiper-item>
      </swiper>
    </uni-swiper-dot> -->
    <view class="tabs">
      <view class="tab-item" :style="{ width: tabItemWidth + 'px' }" :class="{ 'tab-item-active': currentTab == index }" v-for="(item, index) in tabsData" :key="index" @tap.stop="changeTabs(index)">
        {{ item }}
      </view>
      <view class="tab-item-slider" :style="{ transform: 'translateX(' + translateX + 'px)' }"></view>
    </view>
    <swiper class="swiper" circular @change="changeSwiper" :current="current">
      <swiper-item>
        <view class="swiper-item uni-bg-red">A</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-green">B</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-blue">C</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-blue">D</view>
      </swiper-item>
    </swiper>
    <view class="activities">
      <uni-card class="card" spacing="5px" margin="5px" :is-shadow="true" v-for="(item, index) in activities" :key="index">
        <view class="activity font-color-gray1">
          <view class="poster">
            <view justify="start">
              <view span="3">
                <Avatar src="https://img2.baidu.com/it/u=966575083,3990920768&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1668963600&t=29f4f5474e0dc5ff664ef9f3c728c6fe" />
              </view>
              <view span="10">
                <view class="name"> Famiglistiom </view>
              </view>
            </view>
          </view>
          <view class="title h6 font-color-gray2">{{ item.name }}</view>
          <view class="brief size-30">{{ item.brief }}</view>
          <view class="bottom size-26">
            <view class="date">
              <view span="12" class="start-date">开始：{{ item.startDate }}</view>
              <view span="12" class="end-date">结束：{{ item.endDate }}</view>
            </view>
            <view class="time">
              <view class="start-time">时间段：{{ item.startTime }} ~ {{ item.endTime }}</view>
            </view>
            <view class="heat size-28 font-color-gray0">
              <view justify="end">
                <view span="5">{{ item.approves }}</view>
                <view span="5">{{ item.opposition }}</view>
              </view>
            </view>
          </view>
        </view>
      </uni-card>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const tabsData: any = ["今日特拼", "全部", "新品", "禁用状态"];

const current = ref(0);
const currentTab = ref(0);
const tabs = ref(null);

function changeTabs(index: number) {
  current.value = index;
}

function changeSwiper(index: any) {
  let _index = index.detail.current;
  translateX.value = (tabItemWidth.value - 50) / 2 + tabItemWidth.value * _index;
  if (_index === 0) {
    translateX.value = (tabItemWidth.value - 50) / 2;
  }
  currentTab.value = _index;
}

let tabItemWidth = ref(0);
let translateX = ref(0);

onMounted(() => {
  setTimeout(() => {
    uni.getSystemInfo({
      success: res => {
        tabItemWidth.value = res.windowWidth / tabsData.length;
        translateX.value = (tabItemWidth.value - 50) / 2;
      }
    });
  }, 0);
});

let activities = ref([
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

.tabs {
  height: 35px;
  position: relative;
  @include flex($justify: space-between);

  .tab-item {
    height: 25px;
    @include flex();
  }

  .tab-item-active {
    color: #5677fc;
    transition: all 0.2s ease-in-out;
  }

  .tab-item-slider {
    transition: all 0.2s ease-in-out;
    background-color: #5677fc;
    position: absolute;
    height: 5px;
    border-radius: 10px;
    width: 50px;
    bottom: 0;
    left: 0;
  }
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
