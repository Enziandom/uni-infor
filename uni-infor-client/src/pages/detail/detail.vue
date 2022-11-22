<script setup lang="ts">
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { data } from "../../static/data/activities";

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
  <view class="detail">
    <view class="title">{{ activity.name }}</view>
    <view class="poster">
      <Avatar :src="activity.poster.avatar" />
      <view class="name">{{ activity.poster.name }}</view>
    </view>
    <view class="content">{{ activity.content }}</view>
  </view>
</template>

<style scoped lang="scss"></style>
