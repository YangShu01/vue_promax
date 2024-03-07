<template>
  <div class="footer">
    <div class="footer-hd">
      <p>
        <a href="https://www.mingrisoft.com/" target="_blank">明日科技</a>
        <b>l</b>
        <a href="javascript:void(0)" @click="show">商城首页</a>
        <b>l</b>
        <a href="javascript:void(0)" @click="show">支付宝</a>
        <b>l</b>
        <a href="javascript:void(0)" @click="show">物流</a>
      </p>
    </div>
    <div class="footer-bd">
      <p>
        <a href="https://www.mingrisoft.com/Index/ServiceCenter/aboutus.html" target="_blank">关于明日</a>
        <a href="javascript:void(0)">合作伙伴</a>
        <a href="javascript:void(0)">联系我们</a>
        <a href="javascript:void(0)">网站地图</a>
        <em>2016-2025 mingrisoft.com 版权所有</em>
      </p>
    </div>
  </div>
</template>
<script >
export default {
  name:"RegisterBottom",
  methods:{
    show:function ()
    {
      this.$router.push({name:"home"});
    }
  }
}
</script>