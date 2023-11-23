<template>
<div class='home'>
  <main>
    <img src="../../assets/home.jpg" alt="">
  </main>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {

    };
  },
}
</script>
<style lang='less' scoped>
.home{
  width: 100%;
  height: 100%;
  main{
    width: 100%;
    img{
      width: 66%;
      height: 66%;
      object-fit: cover;
    }
  }
}
</style>