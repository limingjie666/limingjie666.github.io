<template>
 <div>
   <headera ddd="确认订单"></headera>
    <div style="margin: 0.2rem;padding: 0.5rem;">
        <div v-for="i in g_json" style="height: 1rem;text-align: center;">
          <p style="font-size: 0.4rem;"><span style="float: left;">{{i.h}}</span><span>x{{i.num}}</span><span style="margin-left: 0.5rem;float: right;font-size: 0.5rem;">小计：{{i.num*i.ma}}</span><span style="float: right;font-size: 0.5rem;">￥{{i.ma}}</span></p>
        </div>
    </div>
    <div style="width: 100%;height: 1rem;position: fixed;bottom: 0;background: rgba(0,0,0,0.7);font-size: 0.5rem;line-height: 1rem;">
      <span>￥71</span>
      <a href=""><div style="width: 3rem;height: 100%;text-align: center;float: right;background: #00FF00;color: #fff;">去支付</div></a>
    </div>
 </div>
</template>

<script>
  import headera from '../assembly/headera.vue'
  import {mapGetters,mapActions} from 'vuex'
  export default{
  components:{
    headera
  },
  computed:{
    ...mapGetters(['g_num','g_json'])
  }
  }
</script>

<style>
</style>
