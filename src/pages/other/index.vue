<!--
 * @Author: YiY
 * @Date: 2023-10-05 22:32:46
 * @LastEditTime: 2023-10-06 22:31:51
-->
<!--  -->
<template>
  <div></div>
</template>

<script>
export default {
  name: "",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    sayHi(x, y, z) {
      alert("666");
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
};
</script>
<style lang='less' scoped>
::v-deep .el-table .warning-row {
  background: lightcoral;
}

::v-deep .el-table .success-row {
  background: lightblue;
}
</style>