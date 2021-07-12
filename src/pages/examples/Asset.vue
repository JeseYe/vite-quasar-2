<template>
  <q-page class="flex flex-center column">
    <div>动态加载图片</div>
    <q-btn @click="loadAssetImg('img1')">加载默认图片</q-btn>
    <q-btn @click="loadAssetImg('img2')">加载风景图片</q-btn>
    <q-btn @click="loadAssetImg('img3')">加载美女图片</q-btn>
    <q-btn @click="loadAssetImg('img4')">加载惊喜图片</q-btn>

    <q-img v-if="imgType == 'img1'" class="img" src="@/assets/img/img1.jpg" />
    <q-img v-if="imgType == 'img2'" class="img" src="@/assets/img/img2.jpg" />
    <q-img v-if="imgType == 'img3'" class="img" src="@/assets/img/img3.jpg" />
    <q-img v-if="imgType == 'img4'" class="img" src="@/assets/img/img4.jpg" />
  </q-page>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const imgType = ref('img1')
    function loadAssetImg(path) {
      imgType.value = path
    }

    return {
      imgType,
      loadAssetImg
    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  max-width: 50%;
}
</style>
