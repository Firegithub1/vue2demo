<!--
 * @Author: YiY
 * @Date: 2023-10-05 22:32:46
 * @LastEditTime: 2023-10-07 18:01:02
-->
<template>
<div class=''>
   <el-table
      border
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      :rowClassName="tableRowClassName"
      class="table">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
          <el-table-column label="配送信息">
            <el-table-column
              prop="name"
              label="姓名"
              width="580">
            </el-table-column>
            <el-table-column
              fixed="left"
              label="other">
              <el-table-column
                prop="age"
                label="年龄"
                width="680">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
              <el-table-column
                prop="color"
                label="颜色">
              </el-table-column>
            </el-table-column>
          </el-table-column>
    </el-table>
</div>
</template>

<script>

export default {
  name: '',
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      tableData: [{
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
          }],
      currentRow: null
    };
  },
  methods:{
     tableRowClassName(e) {
        let {row, rowIndex} = e
        if (rowIndex%2 === 1) {
          return 'warning-row';
        } else if (rowIndex%2 === 0) {
          return 'success-row';
        }
        return '';
      },
      handleCurrentChange(val){
        this.currentRow = val
      }
  }
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
    // height: 400px;
  }
  /deep/.el-table__body tr.current-row > td {
   background-color: hsl(300, 88%, 48%) !important;
}
  /deep/.el-table--enable-row-hover .el-table__body tr:hover > td {
   background-color: #92cbf1;
}
</style>