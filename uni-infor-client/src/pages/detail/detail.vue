<script setup lang="ts">
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { tableActivities } from "../../static/data/table-activities";
import { ActivityType } from "../../types/enums";

let table = ref<any>();

onLoad(({ id }: any) => {
  tableActivities.forEach((element: any) => {
    if (element["id"] == id) {
      table.value = element;
    }
  });
});
</script>

<template>
  <view class="detail font-color-gray1">
    <uni-card class="uni-card" spacing="5px" margin="7px" :is-shadow="true">
      <uni-title type="h2" :title="table.name"></uni-title>
      <view class="poster">
        <Avatar :src="table.poster.avatar" />
        <view>{{ table.poster.name }}</view>
      </view>
      <view class="matters">
        <view class="row-1">
          <view class="start-date">开始日期：{{ table.startDate }}</view>
          <view class="end-date">结束日期：{{ table.endDate }}</view>
        </view>
        <view class="row-2">
          <view class="time-range">时间范围：{{ table.startTime }} ~ {{ table.endTime }}</view>
          <view class="tags">
            <template v-if="table.type === ActivityType.ALL">
              <tui-tag class="tag" type="primary" plain size="18rpx" shape="circle">二课</tui-tag>
              <tui-tag class="tag" type="green" plain size="18rpx" shape="circle">素拓</tui-tag>
            </template>
            <template v-else-if="table.type === ActivityType.ERKE">
              <tui-tag class="tag" type="primary" plain size="18rpx" shape="circle">二课</tui-tag>
            </template>
            <template v-else-if="table.type === ActivityType.SUTUO">
              <tui-tag class="tag" type="green" plain size="18rpx" shape="circle">素拓</tui-tag>
            </template>
          </view>
        </view>
        <view class="row-3">
          <view>活动方式：{{ table.manner }}</view>
          <view>活动地点：{{ table.place }}</view>
        </view>
        <view class="row-4">
          <view class="flex-center" style="margin: 0 20px 0 0">
            <tui-icon name="eye" :size="18" style="margin: 0 3px 0 0"></tui-icon>
            <text>
              {{ table.approves }}
            </text>
          </view>
          <view class="flex-center" style="margin: 0 20px 0 0">
            <tui-icon name="agree" :size="18" style="margin: 0 3px 0 0"></tui-icon>
            <text>
              {{ table.opposition }}
            </text>
          </view>
          <tui-button type="primary" width="100rpx" height="40rpx" plain :size="16"> +订阅 </tui-button>
        </view>
      </view>
      <view class="content size-32">{{ table.content }}</view>
      <uni-title type="h4" title="活动时间线"></uni-title>
      <tui-time-axis style="margin: 0 7px">
        <tui-timeaxis-item backgroundColor="transparent" v-for="(timenode, index) in table.timenode" :key="index">
          <template v-slot:node>
            <view class="tui-node">
              <tui-icon
                :name="timenode.complete ? 'check' : 'loading'"
                :color="timenode.complete ? '#999' : '#409eff'"
                :size="14"
                bold></tui-icon>
            </view>
          </template>
          <template v-slot:content>
            <view>
              <view class="tui-order-title">
                <template v-if="timenode.complete"> 已完成 </template>
                <template v-else>进行中</template>
              </view>
              <view class="time-node-desc">{{ timenode.desc }}</view>
              <view class="time-node-time">
                <template v-if="(timenode.date || !timenode.date) && !timenode.complete"> progressing... </template>
                <template v-else>
                  {{ timenode.date }}
                </template>
              </view>
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

  .uni-card {
    border-radius: 8px;
  }

  .poster {
    @include flex($justify: flex-start);
  }

  .matters {
    .row-1,
    .row-2,
    .row-3,
    .tags {
      @include flex($justify: space-between);
    }

    .row-4 {
      @include flex($justify: flex-end);
    }

    .row-1,
    .row-2,
    .row-3,
    .row-4 {
      margin-bottom: 20rpx;
    }

    .row-2 {
      .time-range {
        margin-right: 10px;
      }

      .tag {
        margin-left: 4px !important;
      }
    }
  }

  .content,
  .poster {
    margin-bottom: 20rpx;
  }

  .time-node-desc {
    font-size: 30rpx;
  }

  .time-node-time {
    font-size: 24rpx;
  }

  .tui-order-active {
    color: $cust-color-1;
  }
}
</style>
