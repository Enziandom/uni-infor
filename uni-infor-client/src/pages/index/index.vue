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
            <view class="activity font-color-gray1">
              <view class="poster">
                <van-row justify="start">
                  <van-col span="3">
                    <Avatar src="https://img2.baidu.com/it/u=966575083,3990920768&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1668963600&t=29f4f5474e0dc5ff664ef9f3c728c6fe" />
                  </van-col>
                  <van-col span="10">
                    <view class="name"> Famiglistiom </view>
                  </van-col>
                </van-row>
              </view>
              <view class="title h6 font-color-gray2">{{ item.name }}</view>
              <view class="brief size-30">{{ item.brief }}</view>
              <view class="bottom size-26">
                <view class="date">
                  <view class="start-date">开始：{{ item.startDate }}</view>
                  <view class="end-date">结束：{{ item.endDate }}</view>
                </view>
                <view class="time">
                  <view class="start-time">时间段：{{ item.startTime }} ~ {{ item.endTime }}</view>
                </view>
                <view class="heat size-28 font-color-gray0">
                  <van-row justify="end">
                    <van-col span="5"><van-icon class-prefix="icon" name="good" />{{ item.approves }}</van-col>
                    <van-col span="5"><van-icon class-prefix="icon" name="hot" />{{ item.opposition }}</van-col>
                  </van-row>
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
@import "../../styles/font.scss";

.content {
  background-color: $cust-bg-color;
}

.activity {
  .title {
    margin-bottom: 10rpx;
  }

  .brief {
    margin-bottom: 10rpx;
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
