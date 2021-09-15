
<template>
    <background></background>
  <div>
      <img src="@/assets/loginbg.jpg" alt="">
    <div class="title"> 自动化测试平台 </div>
    <div class="login-form">
      <el-form label-width="80px" :model="form" :rules="rules" ref="loginForm">
        <div class="text-header">登录</div>
        <el-form-item label="账号" prop="account"
          ><el-input
            v-model="form.account"
            placeholder="please input account"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="psw">
          <el-input
            v-model="form.psw"
            placeholder="please input password"
            show-password
            @keyup.enter="submit"
          ></el-input
        ></el-form-item>

        <el-form-item>
          <el-button @click="submit"  type="primary">提交</el-button>
          <el-button @click="reset">重置</el-button></el-form-item
        >
      </el-form>
    </div>
  </div>
</template>

<script>
import { ref,reactive } from "vue";
import Background from '@/components/Background.vue'
import {login} from "../httplib"

export default ({
  components:{
      Background,
  },

  setup() {
    // const account = ref("");
    // const psw = ref("");
    const loginForm =ref(null)
    const form = reactive({
      account: "",
      psw: "",
    });

    const rules = {
      account: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
      ],
      psw: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur",
        },
      ],
    };

    function submit() {
      console.log("click me submit");
      login(form.account,form.psw)
    }
    function reset() {
      console.log("click me reset");
        // form.account = "";
        // form.psw = "";
     loginForm.value.resetFields();
    }

    return {
      form,
      submit,
      reset,
      rules,
      loginForm
    };
  },
});
</script>

<style>
.login-form {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 200px;
  right: 300px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgb(187, 155, 155);
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  position: absolute;
  width: 500px;
  height: 80px;
  top: 50px;
  right: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-family: "Microsoft Yahei";
  color: rgb(11, 58, 77);
}
.text-header {
  text-align: center;
  font-size: 20px;
  color: rgb(45, 189, 160);
  margin-bottom: 50px;
}
</style>
