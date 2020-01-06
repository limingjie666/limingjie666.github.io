<template>
  <div>
    <headera ddd="庆丰包子铺"></headera>
    <div>
      <div style="width: 20%;float: left;font-size: 0.35rem;background: #82848A;height: 100%;">
        <ul>
          <a href="#/">
            <li style="height: 1rem;line-height: 1rem;text-align: center;color: #444400;">水饺</li>
          </a>
          <a href="#/cen2">
            <li style="height: 1rem;line-height: 1rem;text-align: center;color: #444400;">流食</li>
          </a>
          <a href="#/cen3">
            <li style="height: 1rem;line-height: 1rem;text-align: center;color: #444400;">凉菜</li>
          </a>
          <a href="#/cen4">
            <li style="height: 1rem;line-height: 1rem;text-align: center;color: #444400;">包子</li>
          </a>
          <a href="#/cen5">
            <li style="height: 1rem;line-height: 1rem;text-align: center;color: #444400;">庆丰福粽</li>
          </a>
          <a href="#/cen6">
            <li style="height: 1rem;line-height: 1rem;text-align: center;color: #444400;">豆浆饮品</li>
          </a>
        </ul>
      </div>
      <div style="width: 80%;float: left;">
        <router-view></router-view>
      </div>
    </div>
    <div style="width: 100%;height: 1rem;position: fixed;bottom: 0;background: rgba(0,0,0,0.7);font-size: 0.5rem;line-height: 1rem;">
      <span>￥{{g_num}}</span>
      <a href="#/no2">
        <div style="width: 3rem;height: 100%;text-align: center;float: right;background: #00FF00;color: #fff;">去结算</div>
      </a>
    </div>
  </div>
</template>

<script>
  import headera from '../assembly/headera.vue'
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    components: {
      headera
    },
    computed: {
      ...mapGetters(['g_num'])
    },
    data() {
      return {
          ass:''
      }
    },
  }
</script>

<style>
  a {
    text-decoration: inherit;
  }
</style>
