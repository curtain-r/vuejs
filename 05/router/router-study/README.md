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
### 5. 理解使用 vue-route 时要先使用 Vue.use(VueRouter) 
所有组件都是基于Vue原型上添加的，使用 Vue.use(VueRouter) 后vue底层会执行 Vue install VueRouter    √
### 6. 导航守卫(在跳转页面的时候同时做一些事情)
在 router/index.js 中加入 routerBeforeEach((to, from, next) => {
  'next() must use'
})              √
### 7. Vue 的生命周期
beforeCreted(模板创建完成之前) => created(模板创建完成之后) => beforeMount(数据挂载之前) => mounted(数据挂载之后) => beforeUpdate(内容更新之前) => updated(内容更新之后) => beforeDestroy(模板销毁前) => destroyed(模板销毁后)
### 8. 补充两个函数activated deactivated(大前提：必须在有缓存的情况上这两个函数才是有反应的)
info.vue中有调用
### 9. keep-alive标签(使组件被缓存，不会被重复创建和销毁)
<keep-alive 参数位置><router-view/></keep-alive>
可能为两种中的一个：include,exclude   √ 