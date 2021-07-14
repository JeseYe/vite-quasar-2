<template>
  <q-page class="q-ma-md page-table">
    <q-table
      v-model:pagination="pagination"
      :wrap-cells="true"
      :rows="rows"
      :columns="columns"
      :loading="loading"
      :filter="keyword"
      class="sticky-table"
      row-key="id"
      @request="searchContents"
    >
      <template #top-right>
        <q-input v-model="keyword" borderless dense debounce="300" placeholder="Search">
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template #body-cell-thumbnailImg="props">
        <q-td :props="props">
          <q-img v-if="props.value" :src="props.value" :ratio="16 / 9" />
          <div v-else class="empty">--</div>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { contentApi } from '@/api/cms'
import { onMounted, ref, reactive, toRaw } from 'vue'
const columns = [
  {
    name: 'categoryName',
    required: true,
    label: '分类名称',
    align: 'left',
    required: true, //sticky  also need some style
    field: (row) => row.categoryName, //function style to get field
    format: (val) => `${val}`,
    // classes: 'ellipsis-2-lines',
    sortable: true
  },
  { name: 'name', label: '标题', field: 'name', align: 'left', style: 'max-width: 200px' },
  { name: 'featured', label: '推荐', field: 'featured', sortable: true },
  { name: 'publishedTime', label: '发布时间', field: 'publishedTime' },
  { name: 'createdTime', label: '创建时间', field: 'createdTime' },
  {
    name: 'status',
    label: '发布状态',
    field: 'status',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'thumbnailImg',
    label: '封面图片',
    field: 'thumbnailImg',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'viewCount',
    label: '点击量',
    field: 'viewCount',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  }
]

export default {
  setup() {
    const rows = ref([])
    const keyword = ref(null)
    const loading = ref(false)
    const pagination = ref({
      sortBy: 'id',
      descending: true,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 10
    })

    const searchContents = (props) => {
      const { page, rowsPerPage, sortBy, descending } = props.pagination
      const keyword = props.filter

      loading.value = true

      let params = {
        page: page,
        pageSize: rowsPerPage,
        sortField: sortBy,
        ascending: !descending,
        keyword: keyword
      }

      console.log(params)
      contentApi.search(params).then((res) => {
        rows.value = res.data.results

        pagination.value.page = res.data.currentPage
        pagination.value.rowsPerPage = rowsPerPage
        pagination.value.sortBy = sortBy
        pagination.value.descending = descending
        pagination.value.rowsNumber = res.data.totalElements
        loading.value = false
      })
    }
    onMounted(() => {
      searchContents({
        pagination: pagination.value,
        filter: null
      })
    })
    return {
      columns,
      rows,
      keyword,
      pagination,
      loading,
      searchContents
    }
  }
}
</script>

<style lang="scss">
.page-table {
  .sticky-table {
    td:first-child {
      // background-color: #f5f5dc;
    }
    thead tr:first-child,
    td:first-child {
      /* bg color is important for th; just specify one */
      background-color: #fff;
    }

    td:first-child,
    th:first-child {
      position: sticky;
      left: 0;
      z-index: 2;
    }
  }
}
</style>
