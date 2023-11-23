
<template>
  <div class="active-container">
    <div class="Header">
      <slot name="Header" user="hello Vue.js"></slot>
    </div>

    <div class="content">
      <slot name="content" v-bind:msg="list" user="hello Vue.js"></slot>
    </div>

    <div class="Foot">
      <slot name="Foot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:{
        name:"zdd",
        age:18,
        gender: "男"
      }
    }
  },
};
</script>
<style>
.Header{
  background-color: lightgreen;
}
.content{
  background-color: lightblue;
}
.Foot{
  background-color: lightpink;
}
</style>