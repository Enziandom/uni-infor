<script setup lang="ts">
import {tableActivities} from "../../static/data/table-activities";
import {ActivityType} from "../../types/enums";

let notifies = [
  {
    title: "程序设计大赛时间线已修改",
    date: "2022年11月30日"
  },
  {
    title: "程序设计大赛时间线已修改",
    date: "2022年11月30日"
  },
  {
    title: "程序设计大赛时间线已修改",
    date: "2022年11月30日"
  },
  {
    title: "程序设计大赛时间线已修改",
    date: "2022年11月30日"
  },
  {
    title: "程序设计大赛时间线已修改",
    date: "2022年11月30日"
  },
  {
    title: "程序设计大赛时间线已修改",
    date: "2022年11月30日"
  }
]
</script>

<template>
  <view class="person">
    <view class="header">
      <uni-card
          class="uni-card"
          spacing="5px"
          margin="7px"
          :is-shadow="true">
        <view class="uni-card__packer">
          <Avatar size="70px"
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F07%2F20210607083359_ef330.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672812634&t=af1442bf2ca73c0575854cb9cecee8b9"/>
          <view class="font-color-gray2">
            <view>姓名：42004341 王清雲</view>
            <view>学院：智能科技学院</view>
            <view>专业：智能科学与技术</view>
          </view>
          <tui-tag type="primary" padding="12rpx">
            <tui-icon name="check" color="white" :size="15"/>
            已认证
          </tui-tag>
        </view>
      </uni-card>
    </view>
    <view class="middle">
      <uni-card
          class="uni-card"
          spacing="5px"
          margin="7px"
          :is-shadow="true">
        <view class="uni-card__packer">
          <h3 style="margin-bottom: 10px">订阅活动</h3>
          <scroll-view :scroll-x="true">
            <view class="block">
              <view class="item font-color-gray2" v-for="(item, index) in tableActivities" :key="index">
                <view class="activity-name">{{ item.name }}</view>
                <view class="activity-desc">
                  <view class="row-1 font-color-gray0">
                    <view span="12" class="start-date">开始日期：{{ item.startDate }}</view>
                    <view span="12" class="end-date">结束日期：{{ item.endDate }}</view>
                  </view>
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
                  <view class="row-3 font-color-gray0">
                    <view class="manner">活动方式：{{ item.manner }}</view>
                    <view class="place">活动地点：{{ item.place }}</view>
                  </view>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
      </uni-card>
      <view class="notify">
        <uni-card
            class="uni-card"
            spacing="5px"
            margin="7px"
            :is-shadow="true">
          <h3 style="margin-bottom: 20px">消息提示</h3>
          <view class="block">
            <view class="item" v-for="(item, index) in notifies" :key="index">
              <view class="title">消息：{{ item.title }}</view>
              <view class="date font-color-gray0">提示日期：{{ item.date }}</view>
            </view>
          </view>
        </uni-card>
      </view>
    </view>
    <view class="bottom"></view>
  </view>
</template>

<style>
scroll-view {
  white-space: nowrap;
}
</style>

<style scoped lang="scss">
@import "../../styles/mixins";
@import "../../styles/font";

.uni-card__packer {
  .block {
    display: inline-block;
    @include flex($justify: space-between);
  }
}

.person {
  .header {
    .uni-card__packer {
      @include flex($justify: space-between);
    }
  }

  .middle {
    .uni-card__packer {
      .item {
        margin: 10px;

        .activity-name {
          font-size: 17px;
          font-weight: 400;
        }

        .tags {
          @include flex($justify: flex-start);
        }

        .activity-desc {
          font-size: 13px;
        }
      }
    }

    .notify {
      .block {
        .item {
          margin-bottom: 10px;

          .title {
            font-size: 16px;
            margin-bottom: 2px;
          }

          .date {
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>
