<template>
  <q-page class="q-pa-md">
    <slide-verify
      ref="slideRef"
      :l="42"
      :r="10"
      :w="310"
      :h="155"
      slider-text="向右滑动"
      @success="onSuccess"
      @fail="onFail"
      @refresh="onRefresh"
    ></slide-verify>
    <div>{{ msg }}</div>
    <q-btn color="primary" label="reset" @click="resetSlide" />
  </q-page>
</template>

<script>
  import SlideVerify from 'src/components/SlideVerify.vue'
  import { ref } from 'vue'
  export default {
    components: {
      SlideVerify,
    },
    setup() {
      const msg = ref(null)
      const slideRef = ref(null)
      const onSuccess = () => {
        msg.value = 'login success'
      }
      const onFail = () => {
        msg.value = ''
      }
      const onRefresh = () => {
        msg.value = ''
      }
      const resetSlide = () => {
        console.log(slideRef.value)
        slideRef.value.reset()
      }
      return {
        msg,
        slideRef,
        onSuccess,
        onFail,
        onRefresh,
        resetSlide,
      }
    },
  }
</script>

<style lang="scss" scoped></style>
