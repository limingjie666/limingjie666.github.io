<template>
  <div style="height: 1.25rem;background: #fff;padding: 0 0.5rem;">
      <a href="#/"><i class="iconfont icon-fanhui" style="font-size: 0.5rem;color: blue;"></i></a>
      <span style="margin-left: 0.1rem;font-size: 0.4rem;">{{str}}</span>
  </div>
</template>

<script>
export default{
  props:['ddd'],
  data(){
    return{
      str:this.ddd
    }
  }
}
</script>

<style>

</style>
