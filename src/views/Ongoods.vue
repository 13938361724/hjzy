<template>
  <div class="ongoods">
      <div class="top">商品详情</div>
      <div>
          <div>商品名称{{}}</div>
          <div>商品描述{{}}</div>
          <div>当前状态{{}}</div>
          <div>所属分类</div>
          <div>商品价格</div>
          <div>商品库存</div>
          <div>商品图片
              <img src="" alt="">
          </div>
          <div>商品详情{{}}</div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    mounted:{

    }
}
</script>

<style scoped>
.top{
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(218, 215, 215, 0.582);
    font-size: 28px;
    color: #666666;
}
</style>