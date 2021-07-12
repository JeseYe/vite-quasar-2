<template>
  <div>
    <q-tree ref="tree" :nodes="simple" node-key="label" default-expand-all class="mett-page-tree">
      <template v-slot:default-header="prop">
        <div
          class="row items-center fit mett-tree-item cursor-pointer"
          draggable="true"
          @drop="drop($event, prop.key)"
          @dragenter="dragEnter"
          @dragover="dragOver"
          @dragleave="dragLeave"
          @dragstart="dragStart($event, prop.key)"
          @dragend="dragStop"
        >
          {{ prop.node.label }}
        </div>
      </template>
    </q-tree>
  </div>
</template>

<script>
  export default {
    setup() {
      return {}
    },
  }
</script>

<style lang="scss" scoped></style>
