const app = new Vue({
  el: "#app",
  data: {
    books: [{
        id: 1,
        name: '数电',
        date: '2001-12',
        price: 53,
        count: 1
      },
      {
        id: 2,
        name: '模电',
        date: '2012-1',
        price: 64,
        count: 1
      },
      {
        id: 3,
        name: '信号',
        date: '2011-2',
        price: 34,
        count: 1
      },
      {
        id: 4,
        name: '单片机',
        date: '2004-8',
        price: 67,
        count: 1
      }
    ]
  },
  methods: {
    inc(index) {
      this.books[index].count++
    },
    dec(index) {
      this.books[index].count--
    },
    removeBook(index) {
      this.books.splice(index, 1)
    }
  },
  filters: {
    formatPrice(price) {
      return '￥' + price.toFixed(2)
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (item of this.books) {
        total += item.count * item.price
      }
      return total
    }
  }
})