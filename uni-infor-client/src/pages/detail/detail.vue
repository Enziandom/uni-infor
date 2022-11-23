<script setup lang="ts">
import { Comment, ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { tableActivities } from "../../static/data/table-activities";
import { ActivityType } from "../../types/enums";

let tableData = ref<any>();

onLoad(({ id }: any) => {
  tableActivities.forEach((element: any) => {
    if (element["id"] == id) {
      tableData.value = element;
    }
  });
});

let dataList = ref([
  {
    name: "趋同问题类型1",
    intro:
      "杜甫的思想核心是儒家的仁政思想，他有“致君尧舜上，再使风俗淳”的宏伟抱负。杜甫虽然在世时名声并不显赫，但后来声名远播，对中国文学和日本文学都产生了深远的影响。杜甫共有约1500首诗歌被保留了下来，大多集于《杜工部集》。",
    current: -1,
    disabled: false
  },
  {
    name: "趋同问题类型2",
    intro:
      "李清照出生于书香门第，早期生活优裕，其父李格非藏书甚富，她小时候就在良好的家庭环境中打下文学基础。出嫁后与夫赵明诚共同致力于书画金石的搜集整理。金兵入据中原时，流寓南方，境遇孤苦。所作词，前期多写其悠闲生活，后期多悲叹身世，情调感伤。形式上善用白描手法，自辟途径，语言清丽。",
    current: -1,
    disabled: false
  },
  {
    name: "趋同问题类型3",
    intro:
      "鲁迅一生在文学创作、文学批评、思想研究、文学史研究、翻译、美术理论引进、基础科学介绍和古籍校勘与研究等多个领域具有重大贡献。他对于五四运动以后的中国社会思想文化发展具有重大影响，蜚声世界文坛，尤其在韩国、日本思想文化领域有极其重要的地位和影响，被誉为“二十世纪东亚文化地图上占最大领土的作家”。",
    current: -1,
    disabled: false
  }
]);

let lastCollapseIndex = ref(0);

function change({ index }: any) {
  dataList.value[lastCollapseIndex.value].current = -1;
  lastCollapseIndex.value = index;
  dataList.value[index].current = index;
}
</script>

<template>
  <view class="detail font-color-gray1">
    <uni-card class="uni-card" spacing="5px" margin="7px" :is-shadow="true">
      <uni-title type="h2" :title="tableData.name"></uni-title>
      <view class="poster">
        <Avatar :src="tableData.poster.avatar" />
        <view>{{ tableData.poster.name }}</view>
      </view>
      <view class="matters">
        <view class="row-1">
          <view class="start-date">开始日期：{{ tableData.startDate }}</view>
          <view class="end-date">结束日期：{{ tableData.endDate }}</view>
        </view>
        <view class="row-2">
          <view class="time-range">时间范围：{{ tableData.startTime }} ~ {{ tableData.endTime }}</view>
          <view class="tags">
            <template v-if="tableData.type === ActivityType.ALL">
              <tui-tag class="tag" type="primary" plain size="18rpx" shape="circle">二课</tui-tag>
              <tui-tag class="tag" type="green" plain size="18rpx" shape="circle">素拓</tui-tag>
            </template>
            <template v-else-if="tableData.type === ActivityType.ERKE">
              <tui-tag class="tag" type="primary" plain size="18rpx" shape="circle">二课</tui-tag>
            </template>
            <template v-else-if="tableData.type === ActivityType.SUTUO">
              <tui-tag class="tag" type="green" plain size="18rpx" shape="circle">素拓</tui-tag>
            </template>
          </view>
        </view>
        <view class="row-3">
          <view>活动方式：{{ tableData.manner }}</view>
          <view>活动地点：{{ tableData.place }}</view>
        </view>
        <view class="row-4">
          <view class="flex-center" style="margin: 0 20px 0 0">
            <tui-icon name="eye" :size="18" style="margin: 0 3px 0 0"></tui-icon>
            <text>
              {{ tableData.approves }}
            </text>
          </view>
          <view class="flex-center" style="margin: 0 20px 0 0">
            <tui-icon name="agree" :size="18" style="margin: 0 3px 0 0"></tui-icon>
            <text>
              {{ tableData.opposition }}
            </text>
          </view>
          <tui-button type="primary" width="100rpx" height="40rpx" plain :size="16"> +订阅 </tui-button>
        </view>
      </view>
      <view class="content size-32 font-color-gray2">{{ tableData.content }}</view>
      <uni-title type="h4" title="活动时间线"></uni-title>
      <tui-time-axis style="margin: 0 7px">
        <tui-timeaxis-item backgroundColor="transparent" v-for="(timenode, index) in tableData.timenode" :key="index">
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
              <view class="time-node-title">
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
      <template v-if="tableData.modifyTimeNode">
        <uni-title type="h4" title="修改时间线"></uni-title>
        <tui-time-axis style="margin: 0 7px">
          <tui-timeaxis-item
            backgroundColor="transparent"
            v-for="(timenode, index) in tableData.modifyTimeNode"
            :key="index">
            <template v-slot:node>
              <view class="tui-node">
                <tui-icon :name="'news'" :color="'#999'" :size="14" bold></tui-icon>
              </view>
            </template>
            <template v-slot:content>
              <view>
                <view class="time-node-desc">{{ timenode.desc }}</view>
                <view class="time-node-time">
                  {{ timenode.date }}
                </view>
              </view>
            </template>
          </tui-timeaxis-item>
        </tui-time-axis>
      </template>
      <uni-title type="h4" title="问题收集区"> </uni-title>
      <template v-for="(item, index) in dataList" :key="index">
        <tui-collapse :disabled="item.disabled" :index="index" :current="item.current" @click="change">
          <template v-slot:title>
            <tui-list-cell :hover="!item.disabled">{{ item.name }}</tui-list-cell>
          </template>
          <template v-slot:content>
            <view style="padding: 13px 15px">{{ item.intro }}</view>
          </template>
        </tui-collapse>
      </template>
    </uni-card>
    <uni-card class="uni-card" spacing="5px" margin="7px" :is-shadow="true">
      <Comments v-for="item in tableData.comments" :data="item">
        <template v-if="item.comments">
          <Comments :disable="false" :isChild="true" v-for="child in item.comments" :data="child" />
        </template>
      </Comments>
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
}
</style>
