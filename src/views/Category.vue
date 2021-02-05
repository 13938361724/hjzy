<template>
  <div>
    <div class="item_headers">
      <div><h3>品类管理</h3></div>
      <div>
        <el-button type="primary" icon="el-icon-plus" @click="addListuser"
          >添加品类</el-button
        >
      </div>
    </div>
    <div>当前商品分类ID：0</div>
    <div class="item_table">
      <el-table :data="userList" style="width: 100%">
        <el-table-column prop="id" label="ID"> </el-table-column>
        <el-table-column prop="name" label="品类名称"> </el-table-column>
       
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="ongoods(scope.row.id)"
              >修改名称</el-button
            >

            <el-button type="text" @click="onModify(scope.row.id)"
              >查看其子品类</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          layout="prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>

import { shang, chaxun, dataModify } from "../api/index";
export default {
  data() {
    return {
      list: {
        pageNum: 1,
        pageSize: 10,
      },
      userList: [],
      msg: "",
      input: "",
      type: "",
      total: 0,
    };
  },

  mounted() {
    this.shangList();
  },

  methods: {
    async shangList() {
      const res = await shang(
        `/api/product/list.do?pageNum=${this.list.pageNum}`
      );

      this.userList = res.data.data.list;

      this.total = res.data.data.total;
    },

    handleCurrentChange(val) {
      this.list.pageNum = val;
      this.shangList();
    },

    ongoods(id) {
      this.$router.push({
        path: "/ongoods",
        query: {
          id,
        },
      });
    },

    onModify(id) {
      this.$router.push({
        path: "/modify",
        query: { id },
      });
    },

 

    onchange(val) {
      this.msg = val;
      // console.log(val)
    },

  
    addListuser() {
      this.$router.push("/addList");
    },
  },

 
};
</script>

<style scoped>
.item_headers {
  width: 100%;
  height: 10vh;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #000;
}

.item_main_container {
  width: 35%;
  height: 10vh;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}

.input {
  width: 200px;
  margin: 10px;
}

.item_table {
  width: 100%;
  height: 70vh;
  /* overflow: auto; */
}

.block {
  width: 100%;
  height: 20vh;
}

.item_button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40%;
}

.item_button button {
  background-color: orange;
  border: none;
  outline: none;
}
</style>