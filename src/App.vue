<template>
  <div id="app">
<router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="icon" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="icon-active" src="./assets/img/tabbar/home_Active.svg" alt="">
        <div slot="name">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/classify">
        <img slot="icon" src="./assets/img/tabbar/classify.svg" alt="">
        <img slot="icon-active" src="./assets/img/tabbar/classify_Active.svg" alt="">
        <div slot="name">分类</div>
      </tab-bar-item>

      <tab-bar-item path="/shop">
        <img slot="icon" src="./assets/img/tabbar/shop.svg" alt="">
        <img slot="icon-active" src="./assets/img/tabbar/shop_Active.svg" alt="">
        <div slot="name">购物车</div>
      </tab-bar-item>

      <tab-bar-item path="/mine">
        <img slot="icon" src="./assets/img/tabbar/mine.svg" alt="">
        <img slot="icon-active" src="./assets/img/tabbar/mine_active.svg" alt="">
        <div slot="name">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar";
import TabBarItem from "@/components/tabbar/TabBarItem";

export default {
  name: 'App',
  components: {
    TabBarItem,
    TabBar,

  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
