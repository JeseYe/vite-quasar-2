<template>
  <q-page class="p-md">
    <div>{{ msg }}</div>
    登录时采用弹框，---UI参考知乎
    <div class="row q-pa-md">
      <q-btn color="primary" label="reset" @click="resetSlide" />
      <q-btn color="primary" label="show" @click="showDialog" />
    </div>

    <q-dialog v-model="showSlideVerifyDialog">
      <q-card>
        <q-card-section class="flex justify-between items-center">
          <div class="text-subtitle1 text-weight-regular">请完成安全验证</div>
          <q-icon
            name="close"
            size="sm"
            class="cursor-pointer text-weight-regular"
            @click="closeDialog"
          />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <slide-verify
            ref="slideRef"
            slider-text="向右滑动"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
          ></slide-verify>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import SlideVerify from 'src/components/SlideVerify.vue'
import { ref } from 'vue'
export default {
  components: {
    SlideVerify
  },
  setup() {
    const msg = ref(null)
    const slideRef = ref(null)
    const showSlideVerifyDialog = ref(false)
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
    const showDialog = () => {
      showSlideVerifyDialog.value = true
    }
    const closeDialog = () => {
      showSlideVerifyDialog.value = false
    }
    return {
      msg,
      slideRef,
      onSuccess,
      onFail,
      onRefresh,
      resetSlide,
      showDialog,
      closeDialog,
      showSlideVerifyDialog
    }
  }
}
</script>

<style lang="scss" scoped></style>
