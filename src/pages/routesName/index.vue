<template>
<div class=''>
  <div v-for="(item,index) in routes" :key="index">
   <ul>
    <li>{{ item.id }}</li>
    <ul v-for="(ul,index) in item.routes" :key="index">
      <div>{{ul.name}}</div>
    </ul>
   </ul>
  </div>
</div>
</template>

<script>
import data from '../../assets/routes.json';

export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      routes:undefined,
      lis:[]
    };
  },
  created(){
    let routesData = data.data.user.permissionGroups
    this.routes = routesData

    // this.routes = routesData.map(item=>{
      // return item.routes.reduce((acc,item)=>{
      //   acc.push(item.name)
      //   return acc
      // },[])
    // })
  }
}
</script>
<style lang='less' scoped>
</style>