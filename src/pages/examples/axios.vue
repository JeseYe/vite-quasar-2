<template>
  <q-page class="q-ma-md">
    <q-ajax-bar ref="bar" position="bottom" color="accent" size="6px" skip-hijack />
    <q-btn @click="getContent">Get content</q-btn>
    <q-list v-if="content.id" bordered separator class="q-mt-md">
      <q-item>
        <q-item-section>id: {{ content.id }}</q-item-section>
      </q-item>
      <q-item>
        <q-item-section> name: {{ content.name }}</q-item-section>
      </q-item>
      <q-item>
        <q-item-section> createdTime: {{ createdTime }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { contentApi } from '@/api/cms'
import { reactive, ref, toRefs, toRef } from 'vue'
export default {
  setup() {
    let state = reactive({ content: {}, createdTime: null })

    const bar = ref(null)

    let content = ref({})
    const getContent = () => {
      const barRef = bar.value
      barRef.start()
      contentApi.get(1).then((res) => {
        // content.value = res.data
        state.content = res.data
        state.createdTime = res.data.createdTime
        const barRef = bar.value
        if (barRef) {
          barRef.stop()
        }
      })
    }
    const createdTime = toRef(state, 'createdTime') //get single property from state
    const stateAsRefs = toRefs(state) // get all property. commonly use  spreed operation... return, that can directly use property in template.
    return {
      bar,
      content,
      getContent,
      createdTime,
      ...toRefs(state) // this ,we can use the object directly from state, and avoid use state.attribute.
    }
  }
}
</script>
