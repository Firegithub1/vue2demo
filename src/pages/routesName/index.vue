<template>
<div class=''>
  <div v-for="(item,index) in routes" :key="index">
   <ul>
    <li v-for="(li,index) in item" :key="index">{{ lis }}</li>
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
      routes:undefined
    };
  },
  created(){
    let routesData = data.data.user.permissionGroups
    this.routes = routesData.map(item=>{
      return item.routes.reduce((acc,item)=>{
        acc.push(item.name)
        return acc
      },[])
    })
  }
}
</script>
<style lang='less' scoped>
</style>