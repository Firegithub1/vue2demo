<template>
<div class=''>
<children>
  <template #Header="obj">
    <p>满江红 ---- {{obj.user}}</p>
  </template>
  <template v-slot:content="{ msg, user }">
    <div>
      <p>红漫天</p>
      <p>{{ msg.name }}</p>
      <p>{{ user }}</p>
      <p>{{ msg.age }}</p>
      <p>{{ msg.gender }}</p>
    </div>
  </template>
  <template #Foot>
    <p>忽然看不见</p>
  </template>
</children>
</div>
</template>

<script>
import children from './children';
export default {
  name: '',
  components: {children},
  props: {},
  data() {
    return {

    };
  },
}
</script>
<style lang='less' scoped>
</style>