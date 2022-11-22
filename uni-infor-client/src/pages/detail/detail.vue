<script setup lang="ts">
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { data } from "../../static/data/activities";
import { ActivityType } from "../../types/enums";

let activity = ref<any>();

onLoad(({ id }: any) => {
  data.forEach((el: any) => {
    if (el["id"] == id) {
      activity.value = el;
    }
  });
});
</script>

<template>
  <view class="detail font-color-gray1">
    <uni-card class="card" spacing="5px" margin="7px" :is-shadow="true">
      <uni-title class="title" type="h2" :title="activity.name"></uni-title>
      <view class="poster">
        <Avatar :src="activity.poster.avatar" />
        <view class="name">{{ activity.poster.name }}</view>
      </view>
      <view class="bottom">
        <view class="col-1">
          <view class="start-date">开始日期：{{ activity.startDate }}</view>
          <view class="end-date">结束日期：{{ activity.endDate }}</view>
        </view>
        <view class="col-2">
          <view class="time-range">时间范围：{{ activity.startTime }} ~ {{ activity.endTime }}</view>
          <view class="tags">
            <template v-if="activity.type === ActivityType.ALL">
              <tui-tag class="tag" type="primary" plain size="18rpx" shape="circle">二课</tui-tag>
              <tui-tag class="tag" type="green" plain size="18rpx" shape="circle">素拓</tui-tag>
            </template>
            <template v-else-if="activity.type === ActivityType.ERKE">
              <tui-tag class="tag" type="primary" plain size="18rpx" shape="circle">二课</tui-tag>
            </template>
            <template v-else-if="activity.type === ActivityType.SUTUO">
              <tui-tag class="tag" type="green" plain size="18rpx" shape="circle">素拓</tui-tag>
            </template>
          </view>
        </view>
        <view class="col-3">
          <view class="way">活动方式：{{ activity.way }}</view>
          <view class="place">活动地点：{{ activity.place }}</view>
        </view>
        <view class="col-4">
          <view class="flex-center" style="margin: 0 20px 0 0"><tui-icon name="eye" :size="18" style="margin: 0 3px 0 0"></tui-icon>{{ activity.approves }}</view>
          <view class="flex-center" span="5"><tui-icon name="agree" :size="18" style="margin: 0 3px 0 0"></tui-icon>{{ activity.opposition }}</view>
          <tui-button style="margin: 0 0 0 20px" type="primary" width="100rpx" height="40rpx" plain :size="16">+订阅</tui-button>
        </view>
      </view>
      <view class="content size-32">{{ activity.content }}</view>
      <uni-title class="title" type="h4" title="活动时间线"></uni-title>
      <tui-time-axis style="margin: 0 7px">
        <tui-timeaxis-item backgroundColor="transparent">
          <template v-slot:node>
            <view class="tui-node">
              <tui-icon name="check" color="#409eff" :size="14" bold></tui-icon>
            </view>
          </template>
          <template v-slot:content>
            <view>
              <view class="tui-order-title">已完成</view>
              <view class="tui-order-desc">启动仪式</view>
              <view class="tui-order-time tui-gray">2022-11-18 18:48:26</view>
            </view>
          </template>
        </tui-timeaxis-item>
        <tui-timeaxis-item backgroundColor="transparent">
          <template v-slot:node>
            <view class="tui-node">
              <tui-icon name="check" color="#409eff" :size="14" bold></tui-icon>
            </view>
          </template>
          <template v-slot:content>
            <view>
              <view class="tui-order-title">已完成</view>
              <view class="tui-order-desc">报名阶段</view>
              <view class="tui-order-time tui-gray">2022-11-20 18:48:26</view>
            </view>
          </template>
        </tui-timeaxis-item>
        <tui-timeaxis-item backgroundColor="transparent">
          <template v-slot:node>
            <view class="tui-node">
              <tui-icon name="loading" color="#409eff" :size="14" bold></tui-icon>
            </view>
          </template>
          <template v-slot:content>
            <view>
              <view class="tui-order-title tui-order-active">进行中</view>
              <view class="tui-order-desc">作品收集阶段</view>
            </view>
          </template>
        </tui-timeaxis-item>
      </tui-time-axis>
    </uni-card>
  </view>
</template>

<style scoped lang="scss">
@import "../../uni.scss";
@import "../../styles/font.scss";
@import "../../styles/mixins.scss";

.detail {
  background-color: $cust-bg-color;

  .card {
    border-radius: 8px;
  }

  .poster {
    @include flex($justify: flex-start);
  }

  .col-1,
  .col-2,
  .col-3,
  .tags,
  .top {
    @include flex($justify: space-between);
  }

  .col-2 {
    .time-range {
      margin-right: 10px;
    }

    .tag {
      margin-right: 4px !important;
    }
  }

  .col-1,
  .col-2,
  .col-3,
  .col-4 {
    margin-bottom: 20rpx;
  }

  .col-4 {
    @include flex($justify: flex-end);
  }

  .title,
  .content,
  .poster {
    margin-bottom: 20rpx;
  }

  .tui-order-desc {
    font-size: 30rpx;
  }

  .tui-order-time {
    font-size: 24rpx;
  }

  .tui-order-active {
    color: $cust-color-1;
  }
}
</style>
