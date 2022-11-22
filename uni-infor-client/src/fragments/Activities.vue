<script setup lang="ts">
import { ActivityType } from "../types/enums";

defineProps({
  data: {
    type: Array<any>
  }
});

function navigate(id: number) {
  uni.navigateTo({
    url: `/pages/detail/detail?id=${id}`
  });
}
</script>

<template>
  <view class="activity-conducting">
    <view class="activities">
      <uni-card @click="navigate(item.id)" class="card" spacing="5px" margin="7px" :is-shadow="true" v-for="(item, index) in data" :key="index">
        <view class="activity font-color-gray1">
          <view class="top">
            <view class="poster">
              <Avatar :src="item.poster.avatar" />
              <view class="name size-30"> {{ item.poster.name }} </view>
            </view>
            <tui-button type="green" width="100rpx" height="40rpx" plain :size="16">+订阅</tui-button>
          </view>
          <view class="title h6 font-color-gray2">{{ item.name }}</view>
          <view class="brief size-30 font-color-gray3">{{ item.brief }}</view>
          <view class="bottom size-26 size-26 font-color-gray0">
            <view class="col-1">
              <view span="12" class="start-date">开始日期：{{ item.startDate }}</view>
              <view span="12" class="end-date">结束日期：{{ item.endDate }}</view>
            </view>
            <view class="col-2">
              <view class="time-range">时间范围：{{ item.startTime }} ~ {{ item.endTime }}</view>
              <view class="tags">
                <template v-if="item.type === ActivityType.ALL">
                  <tui-tag class="tag" type="primary" plain size="18rpx" shape="circle">二课</tui-tag>
                  <tui-tag class="tag" type="green" plain size="18rpx" shape="circle">素拓</tui-tag>
                </template>
                <template v-else-if="item.type === ActivityType.ERKE">
                  <tui-tag class="tag" type="primary" plain size="18rpx" shape="circle">二课</tui-tag>
                </template>
                <template v-else-if="item.type === ActivityType.SUTUO">
                  <tui-tag class="tag" type="green" plain size="18rpx" shape="circle">素拓</tui-tag>
                </template>
              </view>
            </view>
            <view class="col-3">
              <view class="way">活动方式：{{ item.way }}</view>
              <view class="place">活动地点：{{ item.place }}</view>
            </view>
            <view class="col-4">
              <view class="flex-center" style="margin: 0 8px 0 0"><tui-icon name="eye" :size="18" style="margin: 0 3px 0 0"></tui-icon>{{ item.approves }}</view>
              <view class="flex-center" span="5"><tui-icon name="agree" :size="18" style="margin: 0 3px 0 0"></tui-icon>{{ item.opposition }}</view>
            </view>
          </view>
        </view>
      </uni-card>
    </view>
  </view>
</template>

<style scoped lang="scss">
@import "../uni.scss";
@import "../styles/font.scss";
@import "../styles/mixins.scss";

.activities {
  .activity {
    .title,
    .brief,
    .poster,
    .bottom {
      margin-bottom: 15rpx;
    }

    .col-3,
    .col-2,
    .col-1 {
      margin-bottom: 10rpx;
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

    .col-4 {
      @include flex($justify: flex-end);
    }

    .col-2 {
      .time-range {
        margin-right: 10px;
      }

      .tag {
        margin-right: 4px !important;
      }
    }
  }

  .card {
    border-radius: 8px;
  }
}
</style>
