<template>
  <div id="app">
    <router-link to="/home">ToHome</router-link>
    <router-link :to="'/info/' + userId">ToInfo</router-link>
    <router-link :to="{path: '/profile', query: {
      name: '赵文强',age: 18
    }}">ToProfile</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: "赵文强"
    };
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
