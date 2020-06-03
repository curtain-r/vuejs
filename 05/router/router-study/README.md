### 1. 路由的使用
router/index.js   √
### 2. 路由时参数传递
1. components/Info.vue: 通过字符串拼接this.$route.parms.xxx   √
2. components/Profile.vue: 通过传入对象，实现查询传值       √
### 3. 理解 this.$router 和 this.$route
$router是指当前项目中的router，也就是index.js中export default 的 router   √
$route 是指 index.js 中的routes中的一个当前活跃的route    √
### 4. 理解为什么会有 $router 和 $route
vue-router 中会使用 Vue.prototype.xxx = ... 之后会将xxx注册为全局使用，在此项目中只要用this.xxx就可以使用此函数   √
### 4. 理解使用 vue-route 时要先使用 Vue.use(VueRouter) 
所有组件都是基于Vue原型上添加的，使用 Vue.use(VueRouter) 后vue底层会执行 Vue install VueRouter    √