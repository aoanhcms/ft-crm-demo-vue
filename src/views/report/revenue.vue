<template>
  <div>
    <b-container
      fluid
    >Comming soon....!
    </b-container>
  </div>
</template>

<script>
import {
  BCardSubTitle, BContainer, BCardTitle, BPagination, BFormSelect, BCard, BBadge, BCardHeader,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'

import flatPickr from 'flatpickr'

import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/material_blue.css'

import fakeData from '@core/fakeData/class-teacher/class.js'

export default {
  components: {
    BCardSubTitle,
    BCardHeader,
    BPagination,
    BFormSelect,
    BCardTitle,
    BContainer,
    VueGoodTable,
    BCard,
    BBadge,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      pageLength: 10,
      dir: false,
      orders_columns: [
        {
          label: 'ID',
          field: 'id',
          width: '100px',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm Id',
            sortable: true,
          },
        },
        {
          label: 'Doanh nghiệp',
          field: 'business',
          sortable: true,
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm công ty',
          },
        },
        {
          label: 'Tên Lớp',
          field: 'class',
          sortable: true,
          width: '100px',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm Tên lớp',
          },
        },
        {
          label: 'Giáo viên',
          sortable: true,
          field: 'teacher',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm khách hàng',
          },
        },
        {
          label: 'Số học sinh',
          sortable: true,
          field: 'student_count',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm số học sinh',
          },
        },
        {
          label: 'Thời gian học',
          sortable: true,
          field: 'start_time',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm thời gian học',
          },
        },
        {
          label: 'Trạng thái',
          width: '100px',
          sortable: true,
          field: 'status',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm trạng thái',
            filterDropdownItems: [{
              value: true,
              text: 'Đang chạy',
            },
            {
              value: false,
              text: 'Đang dừng',
            }],
          },
        },
        {
          label: 'Ngày tạo',
          field: 'date',
          sortable: true,
          filterOptions: {
            enabled: true,
            placeholder: 'Search date',
            filterFn: this.dateRangeFilter,
          },
        },
        {
          label: 'Tác vụ',
          field: 'act',
        },
      ],
      rows: [],
      orders: [],
      searchTermOrder: '',
    }
  },
  computed: {
    roleVariant() {
      const roleColor = {
        /* eslint-disable key-spacing */
        Admin  : 'light-success',
        Member : 'light-info',
        /* eslint-enable key-spacing */
      }
      return role => roleColor[role]
    },
  },
  created() {
    this.rows = fakeData
  },
  methods: {
    delete(id) {
      // delete row
      console.log('delete', id)
    },
    selectionChanged(rows) {
      // neu thong tin thừa lấy cái đầu tiên
      this.selectedProductItems = rows.selectedRows
    },
  },
}
</script>

<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';


// HTML
.card {
  .card-header .heading-elements {
    position: static;
    background: red;
  }
}
</style>