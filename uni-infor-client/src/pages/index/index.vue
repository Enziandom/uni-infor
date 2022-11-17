<template>
  <view class="content">
    <van-tabs color="#409eff" v-model:active="active" animated swipeable sticky :offset-top="44 + statusBarHeight">
      <van-tab title="正在进行">
        <van-swipe class="my-swipe" :autoplay="3000">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <view class="activities">
          <Card v-for="(item, index) in activities" :key="index">
            <view class="activity">
              <view class="title">{{ item.name }}</view>
              <view class="brief">{{ item.brief }}</view>
              <view class="bottom">
                <view class="date">
                  <view class="start-date">{{ item.startDate }}</view>
                  <view class="end-date">{{ item.endDate }}</view>
                </view>
                <view class="time">
                  <view class="start-time">{{ item.startTime }}</view>
                  <view class="end-time">{{ item.endTime }}</view>
                </view>
                <view class="heat">
                  <view class="approves">{{ item.approves }}</view>
                  <view class="opposition">{{ item.opposition }}</view>
                </view>
              </view>
            </view>
          </Card>
        </view>
      </van-tab>
      <van-tab title="活动预告">
        <view class="activities">
          <Card v-for="(item, index) in activities" :key="index">
            <view class="activity">
              <view class="title">{{ item.name }}</view>
              <view class="brief">{{ item.brief }}</view>
              <view class="bottom">
                <view class="date">
                  <view class="start-date">{{ item.startDate }}</view>
                  <view class="end-date">{{ item.endDate }}</view>
                </view>
                <view class="time">
                  <view class="start-time">{{ item.startTime }}</view>
                  <view class="end-time">{{ item.endTime }}</view>
                </view>
                <view class="heat">
                  <view class="approves">{{ item.approves }}</view>
                  <view class="opposition">{{ item.opposition }}</view>
                </view>
              </view>
            </view>
          </Card>
        </view>
      </van-tab>
      <van-tab title="二课活动">
        <view class="activities">
          <view class="activity" v-for="(item, index) in activities" :key="index">
            <view class="title">{{ item.name }}</view>
            <view class="brief">{{ item.brief }}</view>
            <view class="bottom">
              <view class="date">
                <view class="start-date">{{ item.startDate }}</view>
                <view class="end-date">{{ item.endDate }}</view>
              </view>
              <view class="time">
                <view class="start-time">{{ item.startTime }}</view>
                <view class="end-time">{{ item.endTime }}</view>
              </view>
              <view class="heat">
                <view class="approves">{{ item.approves }}</view>
                <view class="opposition">{{ item.opposition }}</view>
              </view>
            </view>
          </view>
        </view>
      </van-tab>
      <van-tab title="素拓活动">
        <view class="activities">
          <view class="activity" v-for="(item, index) in activities" :key="index">
            <view class="title">{{ item.name }}</view>
            <view class="brief">{{ item.brief }}</view>
            <view class="bottom">
              <view class="date">
                <view class="start-date">{{ item.startDate }}</view>
                <view class="end-date">{{ item.endDate }}</view>
              </view>
              <view class="time">
                <view class="start-time">{{ item.startTime }}</view>
                <view class="end-time">{{ item.endTime }}</view>
              </view>
              <view class="heat">
                <view class="approves">{{ item.approves }}</view>
                <view class="opposition">{{ item.opposition }}</view>
              </view>
            </view>
          </view>
        </view>
      </van-tab>
      <van-tab title="往期活动">
        <view class="activities">
          <view class="activity" v-for="(item, index) in activities" :key="index">
            <view class="title">{{ item.name }}</view>
            <view class="brief">{{ item.brief }}</view>
            <view class="bottom">
              <view class="date">
                <view class="start-date">{{ item.startDate }}</view>
                <view class="end-date">{{ item.endDate }}</view>
              </view>
              <view class="time">
                <view class="start-time">{{ item.startTime }}</view>
                <view class="end-time">{{ item.endTime }}</view>
              </view>
              <view class="heat">
                <view class="approves">{{ item.approves }}</view>
                <view class="opposition">{{ item.opposition }}</view>
              </view>
            </view>
          </view>
        </view>
      </van-tab>
    </van-tabs>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";

const active = ref(0);
let statusBarHeight = ref<any>(0);

onLoad(() => {
  statusBarHeight.value = uni.getSystemInfoSync().statusBarHeight;
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
@import "../../styles/common.scss";

.content {
  background-color: $cust-bg-color;
}

.activity {
  .title {
    font-size: 40rpx;
    margin-bottom: 10rpx;
  }

  .brief {
    font-size: 30rpx;
    margin-bottom: 10rpx;
  }

  .bottom {
    @include flex($justify: flex-start);
  }
}

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
