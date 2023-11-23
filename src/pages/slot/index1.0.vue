<template>
<div class='content'>
  <div class="slot"></div>
  <div class="name"></div>
  <div class="scope">
    <children>

      <!-- <template slot="head">
        <span class="bgLG">headddddd</span>
      </template> -->
      <!-- <template slot="body">
        <span class="bgLG">bodddddddy </span>
      </template> -->

      <!--       scope
      <template  v-slot:default="customers">
        <div> secondaryyyyyyy</div>
        <div>  {{ customers.person }}  </div>
      </template>
      -->

      <!-- <template>
        <span class="bgC">默认we are slot! we are slot!!!</span>
      </template> -->


      <!-- <template v-slot="slotProps">
        <div style="background-color: greenyellow;">
          <div>就是作用域</div>
          <div style="background-color: red;">{{ slotProps.customers }}</div>
        </div>
      </template> -->


    </children>
  </div>
</div>
</template>

<script>
import children from './children';
export default {
  name: '',
  components: { children },
  props: {},
  data() {
    return {

    };
  },
}
</script>
<style lang='less' scoped>
.bgLG{
  background: lightgoldenrodyellow;
}
.bgC{
  background-color: lightcoral;
}
</style>