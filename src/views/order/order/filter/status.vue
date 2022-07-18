<template>
  <div class="order-status-card">
    <b-row class="status-bar">
      <b-col>
        Trạng thái đơn hàng <span>Chọn tất cả</span>| <span>Bỏ chọn</span>| <span>Tính doanh thu</span>| <span>Không tính doanh thu</span>
      </b-col>
    </b-row>
    <b-row class="status-content">
      <b-col
        v-for="st in status"
        :key="st.id"
        cols="2"
        :style="{borderLeft: '5px solid' + st.color, marginBottom: '10px'}"
      >
        <b-form-checkbox
          v-model="st.tiep_can"
          @change="filterStatus"
        >
          <span :style="{color: st.color}">{{ st.name }}</span>
        </b-form-checkbox>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import { BRow, BCol, BFormCheckbox } from 'bootstrap-vue'

export default {
  methods: {
    filterStatus() {
      this.$emit('filterDone', this.status)
    },
  },
  data() {
    return {
      status: [
        {
          name: 'Chưa Xác nhận',
          tiep_can: true,
          tinh_doanh_thu: false,
          location: 1,
          color: '#76ec39',
          level: 1,
        },
        {
          name: 'Khai thác lại',
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '',
          level: 1,
        },
        {
          name: 'Không nghe điện',
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#337ab7',
          level: 1,
        },
        {
          name: 'Hủy',
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#7a7980',
          level: 1,
        },
        {
          name: 'Gọi Máy Bận',
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#dabc51',
          level: 1,
        },
        {
          name: 'Kế Toán mặc định',
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#ff0099',
          level: 1,
        },
        {
          name: 'Xác nhận chốt đơn',
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#cc6633',
          level: 1,
        },
        {
          name: 'Chuyển Hàng',
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#FF0000',
          level: 1,
        },
        {
          name: 'Chuyển Hoàn',
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#000000',
          level: 1,
        },
        {
          name: 'Thành công',
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#996699',
          level: 1,
        },
        {
          name: 'Đã thu Tiền',
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#00a65a',
          level: 1,
        },
        {
          name: 'Trả hàng về Kho',
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#331211',
          level: 1,
        },
      ],
    }
  },
  components: {
    BRow,
    BCol,
    BFormCheckbox,
  },
}
</script>
<style>
  .order-status-card {
    padding: 30px 0 30px 0;
  }
  .status-bar {
    padding-bottom: 20px;
    font-size: 16px;
    font-weight: bold;
  }
  .status-content span {
    font-size: 16px
  }
</style>
