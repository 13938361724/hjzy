<template>
  <div class="modify">
    <div class="top">商品管理 -- 修改商品</div>
    <div>
      <div>
        商品名称
        <el-input v-model="input"></el-input>
      </div>
      <div>
        商品描述
        <el-input v-model="input"></el-input>
      </div>
      <div>所属分类</div>
      <div>
        商品价格
        <el-input v-model="input"></el-input>
      </div>
      <div>
        商品库存
        <el-input v-model="input"></el-input>
      </div>
      <div>
        商品图片
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </div>
      <div>
          商品详情

      </div>
      <el-button type="primary">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
         dialogImageUrl: '',
        dialogVisible: false
    };
  },
   methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(218, 215, 215, 0.582);
  font-size: 28px;
  color: #666666;
}
</style>