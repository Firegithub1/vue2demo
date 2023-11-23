<template>
<div class='bgcyan'>
  <!-- <header>
    div.headerrrr <br>
    <slot name="head"></slot>  <hr>
  </header>-->
  <header>
    headerrrrrrrrrr
    <slot name="header"></slot>
    <slot v-bind:person="secondary"> 哈哈哈</slot>  <hr>
  </header>
  <div style="background: rgb(255, 204, 0); height: 52px;"></div>


  <!-- <div id="bind">
    <slot name="bindName" v-bind="customers"></slot>
  </div> -->
</div>
</template>

<script>
let testData = [
    {
      "name": "杜军",
      "email": "i.esmxlm@nnjlkxyjvp.bt",
      "age": 189
    },
    {
      "name": "江超",
      "email": "j.hqc@hdmonwsgrf.tf",
      "age": 136
    },
    {
      "name": "程磊",
      "email": "v.cpuhvnfy@qtra.ad",
      "age": 247
    },
    {
      "name": "万芳",
      "email": "f.kuzc@arhe.dz",
      "age": 65
    },
    {
      "name": "陆艳",
      "email": "t.klftrieca@qvepxgm.gw",
      "age": 72
    },
    {
      "name": "史军",
      "email": "u.ohwmqgmhuf@bfazfkrrf.bn",
      "age": 17
    },
    {
      "name": "顾静",
      "email": "y.hqrfqbkwvr@fbsvydsn.mo",
      "age": 46
    },
    {
      "name": "范敏",
      "email": "p.osqrhdjjy@bindowmex.ug",
      "age": 21
    }
  ]

export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      customers: testData,
      secondary: { name:'hahah', age:18}
    };
  },
}
</script>
<style lang='less' scoped>
.bgcyan{
  background-color: lightseagreen;
}
</style>