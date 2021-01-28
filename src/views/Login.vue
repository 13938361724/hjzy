<template>
  <div class="login_wrapper">
    <div class="user_login">
      <p>请登录</p>
      <div class="user_input">
        <el-input placeholder="User Name" v-model.trim="username" clearable>
        </el-input>
        <el-input
          placeholder="Password"
          type="password"
          v-model.trim="password"
          clearable
        >
        </el-input>
        <el-button
          type="primary"
          style="width: 100%; margin-top: 25px"
          @click="login"
          >Login</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  //方法
  methods: {
    login() {
      let params = {
        username: this.username,
        password: this.password,
      };
      if (this.username == "" || this.password == "") {
        this.$message.error("账号或密码不能为空！");
      } else {
        this.$http
          .login(params)
          .then((res) => {
            if (res.status == 0) {
              this.$message.success(res.msg);
              this.$router.push('/')
              this.$store.commit('add_user_data',res.data)
            } else {
              this.$message.error(res.msg);
            }
          })
          .catch((err) => {
             this.$message.error('登录失败');
          });
      }
    },
  },

  //挂载后生命周期函数
  mounted() {},
};
</script>

<style lang="scss" scoped>
.login_wrapper {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  position: relative;
  .user_login {
    background-color: #fff;
    width: 400px;
    height: 280px;
    border: 1px solid #dddddd;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    p {
      padding: 15px;
      background-color: #f8f8f8;
      border-bottom: 1px solid #dddddd;
    }
    .user_input {
      padding: 15px;
      .el-input {
        margin-top: 18px;
      }
    }
  }
}
</style>