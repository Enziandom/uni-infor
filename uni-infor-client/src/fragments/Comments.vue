<script setup lang="ts">
defineProps({
  data: {
    type: <any>Object
  },
  disable: {
    type: Boolean,
    default: true
  },
  isChild: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <view class="fragment__comments">
    <view class="header">
      <Avatar
        src="https://img0.baidu.com/it/u=4035474861,2542104387&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1669309200&t=2efaa5d7b1bc940372363888be7b13f1" />
      <view class="col">
        <view class="username size-30">{{ data.user.username }}</view>
        <view class="post-date size-20 font-color-gray0">{{ data.user.postDate }}</view>
      </view>
    </view>
    <view class="content">
      <text>
        <text v-if="data.sendTo">
          回复
          <text style="color: rgb(103 161 240)"> @{{ data.sendTo }}</text
          >:
        </text>
        {{ data.content }}
      </text>
      <view class="bottom" v-if="!isChild">
        <view class="flex-center" style="margin: 0 20px 0 0">
          <tui-icon name="agree" :size="18" style="margin: 0 3px 0 0"></tui-icon>
          <text>
            {{ data.agree }}
          </text>
        </view>
        <view class="flex-center" style="margin: 0 20px 0 0">
          <tui-icon name="oppose" :size="18" style="margin: 0 3px 0 0"></tui-icon>
          <text>
            {{ data.oppose }}
          </text>
        </view>
      </view>
      <view class="replay">
        <slot />
      </view>
    </view>
    <view class="bottom" v-if="isChild">
      <view class="flex-center" style="margin: 0 20px 0 0">
        <tui-icon name="agree" :size="18" style="margin: 0 3px 0 0"></tui-icon>
        <text>
          {{ data.agree }}
        </text>
      </view>
      <view class="flex-center" style="margin: 0 20px 0 0">
        <tui-icon name="oppose" :size="18" style="margin: 0 3px 0 0"></tui-icon>
        <text>
          {{ data.oppose }}
        </text>
      </view>
    </view>
    <tui-divider v-if="disable" :height="10" :gradual="true" :gradualColor="['#eee', '#ccc']"></tui-divider>
  </view>
</template>

<style scoped lang="scss">
@import "../uni.scss";
@import "../styles/font.scss";
@import "../styles/mixins.scss";

.fragment__comments {
  margin-bottom: 30rpx;

  .header {
    @include flex($justify: flex-start);
  }

  .bottom {
    @include flex($justify: flex-end);
  }

  .header,
  .content,
  .bottom {
    margin-bottom: 8px;
  }

  .content {
    .replay {
      margin-left: 40px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
