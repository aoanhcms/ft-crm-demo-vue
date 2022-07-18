const genderOptions = [
  { text: 'Chọn Giới tính', value: '' },
  { text: 'Nam', value: 'male' },
  { text: 'Nữ', value: 'female' },
  { text: 'Không xác định', value: 'none' },
]
const orderSourceOptions = [
  { value: 1, text: 'Tất cả các nguồn', selected: true, disabled: true },
  { value: 2, text: 'FB Comment' },
  { value: 2, text: 'FB Inbox' },
  { value: 2, text: 'Tạo tay' },
  { value: 2, text: 'Zalo' },
  { value: 2, text: 'Hot Line' },
  { value: 2, text: 'Shopee' },
  { value: 2, text: 'Chưa rỏ nguồn' },
  { value: 2, text: 'sLangdingpages.com' },
  { value: 2, text: 'ViChat' },
  { value: 2, text: 'IKON' },
  { value: 2, text: 'Palilon' },
  { value: 2, text: 'KH giới thiệu' },
  { value: 2, text: 'PalBox' },
]
const typeOrderOptions = [
  { value: null, text: 'Chọn', selected: true, disabled: true },
  { value: 1, text: 'SALE (số mới)' },
  { value: 1, text: 'CSKH' },
  { value: 1, text: 'Tối ưu' },
  { value: 1, text: 'Đặt lại' },
  { value: 1, text: 'Đặt lại lần 1' },
  { value: 1, text: 'Đặt lại lần 2' },
  { value: 1, text: 'Đặt lại lần 3' },
  { value: 1, text: 'Đặt lại lần 4' },
  { value: 1, text: 'Đặt lại lần 5' },
  { value: 1, text: 'Đặt lại lần 6' },
  { value: 1, text: 'Đặt lại lần 7' },
  { value: 1, text: 'Đặt lại lần 8' },
  { value: 1, text: 'Đặt lại lần 9' },
  { value: 1, text: 'Đặt lại lần 10' },
  { value: 1, text: 'Đặt lại lần 11' },
  { value: 1, text: 'Đặt lại lần 12' },
  { value: 1, text: 'Đặt lại lần 13' },
  { value: 1, text: 'Đặt lại lần 14' },
  { value: 1, text: 'Đặt lại lần 15' },
  { value: 1, text: 'Đặt lại lần 16' },
  { value: 1, text: 'Đặt lại lần 17' },
  { value: 1, text: 'Đặt lại lần 18' },
  { value: 1, text: 'Đặt lại lần 19' },
  { value: 1, text: 'Đặt lại lần 20' },
  { value: 1, text: 'Đặt lại trên 20 lần' },
  { value: 1, text: 'Cross sale' },
  { value: 1, text: 'Afiliate' },
]
const UpSaleOptions = [
  { value: 1, text: 'Tất cả' },
  { value: 2, text: 'Kho Tổng' },
]
const CategoryOptions = [
  { value: 1, text: 'Đơn chưa phân loại' },
  { value: 2, text: 'Học Online' }]
const PrintOptions = [
  { value: 1, text: 'Đơn đã in' },
  { value: 2, text: 'Đơn chưa in' }
]
const GroupCustomerOptions = [
  { value: 1, text: 'Khách mới' },
  { value: 2, text: 'Khách quen' },
  { value: 3, text: 'Học lại' }]
const MatchOptions = [
  { value: 1, text: 'Số trùng' },
  { value: 2, text: 'Số thường' },
]
const TelcoOptions = [
  { value: '', text: 'Nhà Mạng'},
  { value: 1, text: 'Viettel' },
  { value: 2, text: 'MobileFone' },
  { value: 3, text: 'VinaPhone' },
  { value: 4, text: 'VietnamMobile' },
]
export default { UpSaleOptions, PrintOptions, genderOptions, orderSourceOptions, typeOrderOptions, MatchOptions, TelcoOptions, GroupCustomerOptions, CategoryOptions, }
