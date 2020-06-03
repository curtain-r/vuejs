<template>
  <div>
    <h2>我是通过对象传值的</h2>
    <h3>{{this.$route.query.name}}</h3>
    <h3>{{this.$route.query.age}}</h3>
  </div>
</template>
<script>
export default {
  name: "Profile",
  created() {
    console.log("Profile is created!");
  },
  destroyed() {
    console.log("profile is destroyed");
  }
};
</script>