<template>
  <div class="container">
    <div class="login-container">
      <el-form
        :model="loginForm"
        :rules="rules"
        status-icon
        ref="loginForm"
        label-position="left"
        label-width="0px"
        class="ruleForm"
      >
        <h3 class="title">系统登录</h3>
        <el-form-item prop="username">
          <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            auto-complete="off"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="dandelion">
      <span class="smalldan"></span>
      <span class="bigdan"></span>
    </div>
  </div>
</template>

<script>
import { local, session } from "@/utils/storage.js";
import "../../assets/css/backgroundImg.css";
import "../../assets/css/pogongying.css";
export default {
  data() {
    return {
      logining: false,
      loginForm: {
        username: "admin",
        password: "123456",
      },
      rules: {
        username: [
          {
            required: true,
            message: "Please enter your user name",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please enter your namepassword",
            trigger: "blur",
          },
        ],
      },
      checked: false,
    };
  },
  created() {
    //组件创建时 禁止页面滑动
  },
  methods: {
    handleSubmit(event) {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.logining = true;
          if (
            this.loginForm.username === "admin" &&
            this.loginForm.password === "123456"
          ) {
            this.logining = false;
            //登陆成功后
            //1.保存 JWT 的tocken值
            debugger;
            session.setItem("tocken", "JWT Tocken Str");
            //2跳转到home
            this.$router.push({ name: "home" });
            this.$message({
              message: "success!",
              type: "success",
            });
          } else {
            this.logining = false;
            this.$message({
              message: "username or password wrong!",
              type: "warning",
            });
          }
        } else {
          this.$message.error("error submit!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
}
.login-container {
  padding: 0;
}

.ruleForm {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.ruleForm .title {
  color: #9e9e9e;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>