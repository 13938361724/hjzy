<template>
  <div class="index_wrap">
    <el-container>
      <el-header>
        <h1>MMALL ADMIN</h1>
        <p>
          欢迎，<span>admin</span>&emsp;&emsp;<button
            style="color: #337ab7"
            @click="loginout"
          >
            退出
          </button>
        </p>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <el-col>
            <el-menu default-active="2" class="el-menu-vertical-demo" router>
              <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Home</span>
        </template>
       
      </el-submenu> -->
              <el-menu-item index="/about">
                <i class="el-icon-menu"></i>
                <span slot="title">Home</span>
              </el-menu-item>
              <el-menu-item>
                <i class="el-icon-menu"></i>
                <span slot="title">商品</span>
              </el-menu-item>
              <el-menu-item index="/product">
                <i></i>
                <span slot="title">商品管理</span>
              </el-menu-item>
              <el-menu-item index="/category">
                <i></i>
                <span slot="title">品类管理</span>
              </el-menu-item>
              <el-menu-item>
                <i class="el-icon-document"></i>
                <span slot="title">订单</span>
              </el-menu-item>
              <el-menu-item index="1">
                <span slot="title">订单管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-aside>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  //方法
  methods: {
    //退出登录
    loginout() {
      this.$http
        .loginout()
        .then((res) => {
          if (res.status == 0) {
            this.$message.success("退出成功");
            this.$store.commit("remove_user_data");
            this.$router.push("/login");
          } else {
            this.$message.error("退出失败");
          }
        })
        .catch((err) => {
          this.$message.error("退出失败");
        });
    },
  },

  //挂载后生命周期函数
  mounted() {},

  //计算属性
  computed: {},
};
</script>

<style lang="scss" scoped>
.index_wrap {
  width: 100%;
  height: 100%;

  .el-header {
    background-color: #f8f8f8;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-aside {
    background-color: #f8f8f8;
    height: 91vh;
  }
}
</style>