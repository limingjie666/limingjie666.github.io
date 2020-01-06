<template>
  <div>
    <div v-for="i in arr" style="padding: 0.1rem;margin-bottom: 0.08rem;overflow: hidden;">
      <div style="width: 2rem;height: 2rem;float: left;">
        <img style="width: 100%;height: 100%;" src="http://img5.imgtn.bdimg.com/it/u=2243269147,794093626&fm=26&gp=0.jpg"
          alt="">
      </div>
      <div style="width: 5.5rem;float: right;">
        <p style="font-size: 0.4rem;">{{i.h}}</p>
        <p style="font-size: 0.3rem;">月售18份 好评率100%</p>
        <span style="font-size: 0.4rem;">￥{{i.ma}}</span>
         <jishu :ddd="i"></jishu>
      </div>
    </div>
  </div>
</template>

<script>
  import jishu from '../assembly/jishu.vue'
  import arr from '../no1.json'
  export default{
  components:{
    jishu
  },
  data(){
    return{
      arr:'',
    }
  },
  mounted() {
    this.arr=arr.包子[0]
  }
  }
</script>

<style>
</style>
