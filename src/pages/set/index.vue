<!--
 * @Author: YiY
 * @Date: 2023-10-08 08:46:07
 * @LastEditTime: 2023-10-08 09:07:10
-->
<template>
<div class=''>
  <div>原来的对象是{{father}}
    <button @click="changeFather">修改对象</button>
  </div>
  <div>
    原来的次对象是{{subFather}}
    <button @click="changeSubFather">assign</button>
  </div>
  <div>
    原来的其它对象是{{otherFather}}
    <button @click="ssssssssssssss">...</button>
  </div>
  <div>
    原来的直接对象是{{directFather}}
    <button @click="changeDirectFather">Direct</button>
  </div>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      father:{
        a:1,
        b:2
      },
      subFather:{
        c:9,
        d:5
      },
      otherFather:{
        e:353,
        i:35207
      },
      directFather:{
        yte:35633,
        jy:355307
      }
    };
  },
  methods:{
    changeFather(){
      this.$set(this.father,"x",3425)
    },
    changeSubFather(){
      this.subFather = Object.assign({},this.subFather,{
        x:4324,
        y:4839
      })
    },
    // changeOtherFather(){
    //   this.otherFather = {
    //     ...this.otherFather,
    //     x:4324,
    //     y:4839
    //   }
    // },
    // changeDirectFather(){
    //   this.directFather = {
    //     f:342,
    //     a:1
    //   }
    // }
  }
}
</script>
<style lang='less' scoped>
</style>