<script setup lang="ts">
import { ref } from "vue";

let dotIndex = ref(0);

function changeDot({ detail: { current: index } }: any) {
  dotIndex.value = index;
}

defineProps({
  data: {
    type: Array<any>,
    required: true
  }
});
</script>

<template>
  <view class="activity-conducting">
    <uni-swiper-dot class="uni-swiper-dot-box" :info="[1, 3, 4]" :current="dotIndex" field="content">
      <swiper class="swiper-box" @change="changeDot">
        <swiper-item v-for="(item, index) in 3" :key="index"> </swiper-item>
      </swiper>
    </uni-swiper-dot>
    <view class="activities swiper0">
      <uni-card class="card" spacing="5px" margin="5px" :is-shadow="true" v-for="(item, index) in data" :key="index">
        <view class="activity font-color-gray1">
          <view class="poster">
            <Avatar src="https://img2.baidu.com/it/u=966575083,3990920768&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1668963600&t=29f4f5474e0dc5ff664ef9f3c728c6fe" />
            <view class="name size-30"> Famiglistiom </view>
          </view>
          <view class="title h6 font-color-gray2">{{ item.name }}</view>
          <view class="brief size-30">{{ item.brief }}</view>
          <view class="bottom size-26">
            <view class="date">
              <view span="12" class="start-date">开始：{{ item.startDate }}</view>
              <view span="12" class="end-date">结束：{{ item.endDate }}</view>
            </view>
            <view class="start-time">时间段：{{ item.startTime }} ~ {{ item.endTime }}</view>
            <view class="heat size-28 font-color-gray0">
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
    .poster {
      margin-bottom: 15rpx;
    }

    .poster {
      @include flex($justify: flex-start);
    }

    .date {
      @include flex($justify: space-between);
    }

    .heat {
      @include flex($justify: flex-end);
    }
  }

  .card {
    border-radius: 8px;
  }
}
</style>
