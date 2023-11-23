<!--
 * @Author: YiY
 * @Date: 2023-10-05 22:32:46
 * @LastEditTime: 2023-10-07 18:01:02
-->
<template>
<div class='table'>
   <el-table   border
      :data="tableData"
      highlight-current-row
      >
      <!-- :row-class-name="tableRowClassName" -->
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column prop="date" label="日期" width="50"></el-table-column>
      <el-table-column label="配送信息" width="300">
        <el-table-column prop="name" label="姓名" width="50"></el-table-column>
        <el-table-column fixed="left" label="other">
          <el-table-column prop="age" label="年龄" width="50"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="color" label="颜色"> </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
</div>
</template>

<script>
let tableData1 = [{
    date: '2016-05-02',
    name: '王小虎',
    age:14,
    address: '上海市普陀区金沙江路 1518 弄',
    color:'red'
  }, {
    date: '2016-05-04',
    age:14,
    color:'red',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    age:14,
    color:'red',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  },{
    date: '2016-05-04',
    color:'red',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    color:'red',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    color:'red',
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }]
export default {
  name: 'elTable',
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      tableData: tableData1,
      currentRow: null
    };
  },
  methods:{
    // tableRowClassName({row, rowIndex}) {
    //   if (rowIndex === 1) {
    //     return 'warning-row';
    //   } else if (rowIndex === 3) {
    //     return 'success-row';
    //   }
    //   return '';
    // }
  },
  // handleCurrentChange(val){
  //   this.currentRow = val
  // }
}
</script>
<style lang='less' scoped>
  ::v-deep.el-table .warning-row {
    background: lightgoldenrodyellow;
  }

  .el-table .success-row {
    background: lightcyan;
  }
  .table{
    width: 100%;
    height: 60%;
  }
  /deep/.el-table__body tr.current-row > td {
   background-color: hsl(300, 88%, 48%) !important;
}
  /deep/.el-table--enable-row-hover .el-table__body tr:hover > td {
   background-color: #92cbf1;
}
</style>