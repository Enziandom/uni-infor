<script setup lang="ts">
import { ref, onMounted } from "vue";

let tabsData = ref<string[]>(["正在进行", "活动预告", "二课活动", "素拓活动", "往期活动"]);

const swiperIndex = ref(0);
const tabBarIndex = ref(0);
let swiperHeightInfo = ref<any>([{}]);

function calcTabBar(index: number) {
  translateX.value = (tabItemWidth.value - 50) / 2 + tabItemWidth.value * index;
  if (index === 0) translateX.value = (tabItemWidth.value - 50) / 2;
}

function changeTabs(index: number) {
  swiperIndex.value = index;
}

function changeSwiper({ detail: { current: index } }: any) {
  calcTabBar(index);
  tabBarIndex.value = index;
  calcSwiper(tabBarIndex.value);
}

let tabItemWidth = ref(0);
let translateX = ref(0);

function calcSwiper(index: number) {
  if (!swiperHeightInfo.value[index]?.isCalc) {
    uni
      .createSelectorQuery()
      .select(".swiper-item-" + index + " > .swiper" + index)
      .boundingClientRect(data => {
        swiperHeightInfo.value[index] = {
          height: data.height + 10,
          isCalc: true
        };
      })
      .exec();
  }
}

onMounted(() => {
  setTimeout(() => {
    uni.getSystemInfo({
      success: res => {
        tabItemWidth.value = res.windowWidth / tabsData.value.length;
        translateX.value = (tabItemWidth.value - 50) / 2;
        calcSwiper(tabBarIndex.value);
      }
    });
  }, 0);
});
</script>

<template>
  <view class="tab-page">
    <view class="tabbar">
      <view class="tab-wrapper">
        <view
          class="tab-item"
          :style="{ width: tabItemWidth + 'px' }"
          :class="{ 'tab-item-active': tabBarIndex == index }"
          v-for="(tabItem, index) in tabsData"
          :key="index"
          @tap.stop="changeTabs(index)">
          {{ tabItem }}
        </view>
        <view class="tab-item-slider" :style="{ transform: 'translateX(' + translateX + 'px)' }"></view>
      </view>
    </view>
    <swiper class="swiper" :style="{ height: swiperHeightInfo[swiperIndex].height + 'px' }" circular @change="changeSwiper" :current="swiperIndex">
      <swiper-item :class="'swiper-item-' + index" v-for="(swiperItem, index) in tabsData.length" :key="index">
        <slot :name="'swiper' + index" v-bind:tab-item="swiperItem" />
      </swiper-item>
    </swiper>
  </view>
</template>

<style scoped lang="scss">
@import "../uni.scss";
@import "../styles/font.scss";
@import "../styles/mixins.scss";

.tabbar {
  height: 35px;
  z-index: 999;
  background-color: white;
}

.tab-wrapper {
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
    height: 3px;
    border-radius: 8px;
    width: 50px;
    bottom: 0;
    left: 0;
  }
}
</style>
