<template>
  <q-page class="q-pa-md">
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
  import { defineComponent, ref } from 'vue'
  import { encrypt } from 'src/util/crypto.js'
  import { useRoute } from 'vue-router'

  export default defineComponent({
    name: 'SlideDialog',
    components: {
      SlideVerify,
    },
    emits: ['confirm', 'close'],
    setup(props, context) {
      const msg = ref(null)
      const slideRef = ref(null)
      const showSlideVerifyDialog = ref(true)
      const route = useRoute()
      const onSuccess = () => {
        msg.value = 'login success'
        console.log(msg)
        let json = { code: 'slide-Verify', data: 'success', timestamp: new Date().getMinutes() }
        const encryptJson = encrypt(JSON.stringify(json))
        context.emit('confirm', encryptJson)
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
        console.log('67')
        context.emit('close')
        // showSlideVerifyDialog.value = false
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
        showSlideVerifyDialog,
      }
    },
  })
</script>

<style lang="scss" scoped></style>
