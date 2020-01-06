<template>
  <div style="float: right;width: 2rem;">
    <div @click="fn(1)"  class="yuan">-</div>
    <div style="font-size: 0.4rem;float: left;width: 0.5rem;text-align: center;">{{num}}</div>
    <div @click="fn(2)" class="yuan" style="background: #0000FF;color: #fff;">+</div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    props:['ddd'],
    data() {
      return {
        num: 0,
        key:0,
        json:this.ddd
      }
    },
    computed:{
      ...mapGetters(['g_num','g_json'])
    },
    methods:{
      ...mapActions(['a_json']),
      fn(a){
        if(a===1){
          this.num>0?this.num--:0
        }else{
          this.num++
        }
        this.json.num=this.num
        this.a_json(this.json)
      }
    },
    mounted(){
      this.key=this.json.h
      if(this.g_json.hasOwnProperty(this.key)){
        let jso=this.g_json[this.key]
        this.num=jso.num
      }else{
        this.num=0
      }
    }
  }
</script>

<style>
  .yuan{
    width: 0.5rem;
    height: 0.5rem;
    border: 1px #0000FF solid;
    border-radius: 50%;
    float: left;
    font-size: 0.6rem;
    text-align: center;
    line-height: 0.5rem;
  }
</style>
