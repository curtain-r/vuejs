<template>
  <div>
    <h2>我是通过字符串之后用this.$route.params.xxx传值的</h2>
    <h1>{{this.$route.params.id}}</h1>
    <button @click="mname">click to dispaly my name!</button>
  </div>
</template>
<script>
export default {
  methods: {
    mname() {
      console.log(this.name);
    }
  },
  activated() {
    console.log("The info is activated!");
  },
  deactivated() {
    console.log("The info is deactivated");
  }
};
</script>