<script setup lang="ts">
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { tableActivities } from "../../static/data/table-activities";

let dotIndex = ref(0);

function changeDot({ detail: { current: index } }: any) {
  dotIndex.value = index;
}

onLoad(() => {
  setInterval(() => {
    dotIndex.value++;
    if (dotIndex.value >= dots.length) {
      dotIndex.value = 0;
    }
  }, 2000);
});

let dots = [
  "https://www.tfswufe.edu.cn/__local/D/A8/23/C69EC720544DB84989102C9CD70_841FDF40_2C732.jpg",
  "https://www.tfswufe.edu.cn/__local/0/94/84/994C4950202F176A1077CB05C5F_99B4026A_82B79.jpg",
  "https://www.tfswufe.edu.cn/__local/4/2A/37/3086A25DEF266F9D1E04A2FE6B4_DF2B1AFC_ACBC3.png"
];

let conducting1 = ref([
  {
    poster: {
      name: "Famiglistiom",
      avatar:
        "https://img2.baidu.com/it/u=966575083,3990920768&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1668963600&t=29f4f5474e0dc5ff664ef9f3c728c6fe"
    },
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
    poster: {
      name: "Famiglistiom",
      avatar:
        "https://img2.baidu.com/it/u=966575083,3990920768&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1668963600&t=29f4f5474e0dc5ff664ef9f3c728c6fe"
    },
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

let conducting2 = ref([
  {
    poster: {
      name: "Famiglistiom",
      avatar:
        "https://img2.baidu.com/it/u=966575083,3990920768&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1668963600&t=29f4f5474e0dc5ff664ef9f3c728c6fe"
    },
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
    poster: {
      name: "Famiglistiom",
      avatar:
        "https://img2.baidu.com/it/u=966575083,3990920768&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1668963600&t=29f4f5474e0dc5ff664ef9f3c728c6fe"
    },
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

let conducting3 = ref([
  {
    poster: {
      name: "Famiglistiom",
      avatar:
        "https://img2.baidu.com/it/u=966575083,3990920768&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1668963600&t=29f4f5474e0dc5ff664ef9f3c728c6fe"
    },
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
    poster: {
      name: "Famiglistiom",
      avatar:
        "https://img2.baidu.com/it/u=966575083,3990920768&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1668963600&t=29f4f5474e0dc5ff664ef9f3c728c6fe"
    },
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

let conducting4 = ref([
  {
    poster: {
      name: "Famiglistiom",
      avatar:
        "https://img2.baidu.com/it/u=966575083,3990920768&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1668963600&t=29f4f5474e0dc5ff664ef9f3c728c6fe"
    },
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
    poster: {
      name: "Famiglistiom",
      avatar:
        "https://img2.baidu.com/it/u=966575083,3990920768&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1668963600&t=29f4f5474e0dc5ff664ef9f3c728c6fe"
    },
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

<template>
  <view class="content">
    <TabPage>
      <template v-slot:swiper0>
        <view class="swiper0">
          <uni-swiper-dot class="dot" :info="dots" field="content" :current="dotIndex" mode="default">
            <swiper @change="changeDot" class="swiper-box" :current="dotIndex">
              <swiper-item v-for="(item, index) in dots" :key="index">
                <image class="image" :src="item" mode="aspectFill"> </image>
              </swiper-item>
            </swiper>
          </uni-swiper-dot>
          <activities :data="tableActivities" />
        </view>
      </template>
      <template v-slot:swiper1>
        <view class="swiper1"><activities :data="conducting1" /></view>
      </template>
      <template v-slot:swiper2>
        <view class="swiper2"><activities :data="conducting2" /></view>
      </template>
      <template v-slot:swiper3>
        <view class="swiper3"><activities :data="conducting3" /></view>
      </template>
      <template v-slot:swiper4>
        <view class="swiper4"><activities :data="conducting4" /></view>
      </template>
    </TabPage>
  </view>
</template>

<style scoped lang="scss">
@import "../../uni.scss";
@import "../../styles/font.scss";
@import "../../styles/mixins.scss";

.content {
  background-color: $cust-bg-color;

  .swiper0 {
    .dot {
      border-radius: 8px;
      margin: 10px 7px;
    }

    .image {
      width: 100% !important;
      height: 180px !important;
    }
  }
}
</style>
