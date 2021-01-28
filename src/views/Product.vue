<template>
  <div class="big">
     <div class="product_top">
          <div>商品管理</div>
          <el-button type="primary">+添加商品</el-button>
      </div>
  
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
    >
      <el-form-item  >
        <el-select
          v-model="formInline.region"
          placeholder="请选择"
        >
          <el-option
            label="按商品名称查询"
            value="shanghai"
          ></el-option>
          <el-option
            label="按商品id查询"
            value="beijing"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item  >
        <el-input
          v-model="formInline.name"
          placeholder="关键词"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          @click="onSubmit"
        >查询</el-button>
        
      </el-form-item>
    </el-form>
    
    <el-table
      ref="multipleTable"
      :data="tableData.list"
      tooltip-effect="dark"
      style="width: 100% ; "
      :cell-style="{padding:'2px 0'}"
      border
      class="cell"
    >
      <el-table-column
        prop="mobile"
        label="id"
       
      ></el-table-column>

      <el-table-column
        prop="mobile"
        label="信息"
      
      ></el-table-column>

      <el-table-column
        prop="mobile"
        label="价格"
      
      ></el-table-column>
     
      <el-table-column
        label="状态"
      
      >
        <template slot-scope="scope">
          {{ scope.row.status ? "在售" : "已下架" }}
        </template>
      </el-table-column>

     

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="compile(scope.row.uid)"
          >详情</el-button>
         
          <el-button
            size="mini"
            type="text"
          >编辑</el-button>
        
         
          
        </template>
      </el-table-column>
 
    </el-table>

    <div class="block">
      <el-pagination
        @size-change="page_size"
        @current-change="pageli"
        :current-page="pageNum"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, prev, pager, next,sizes, jumper"
        :total="tableData.total"
      >
      </el-pagination>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      pageNum: 1,
      formInline: {
        user: "",
        region: "",
        name: "",
      },
      tableData: [],
      tableData1: []
    };
  },
  mounted () {
    this.$http.listdo(this.pageNum).then((res) => {
      console.log(res);
    //   this.tableData = res.data.data;
    //   this.tableData1 = res.data.data;
    });
  },
  methods: {
    //搜索
    onSubmit () {
      this.$http.assistant(this.page,  this.formInline.region, this.formInline.user, this.formInline.name).then(res => {
        this.tableData = res.data.data
      })
    },
   
    //分页
    page_size (val) {
      this.pageNum = val;
      this.$APIClient.assistant(this.pageNum,  ).then(res => {
        this.tableData = res.data.data
      })
    },
    pageli (val) {
      this.pageNum = val
      this.$APIClient.assistant(this.pageNum).then(res => {
        this.tableData = res.data.data
      })
    },
    //详情
    compile (uid) {
      this.$router.push({ })
    },
  },
  //时间
 
};
</script>

<style lang="scss" scoped>
.big {
  width: 100%;
  height: 80vh;
  margin-top: 10px;
  // padding: 0 10%;
  box-sizing: border-box;
  // overflow: scroll;
}
big::-webkit-scrollbar {
  display: none;
}
.block {
  width: 100%;
  display: flex;
  justify-content: space-around;
  
}

.el-form{
  margin-top: 20px;
}
.el-table{
  margin-top: 10px;
 
}
.el-table-column{
  height: 10px!important;
}
.product_top{
    height: 50px;
    border-bottom:1px solid #ddd8d8 ;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>