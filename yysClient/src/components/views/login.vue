<template>
  <div class="login">
    <div class="login-top">
      <img class="login-icon" src="@/assets/appicon.png" alt="" />
      <p class="app-tle">讯飞云医声</p>
      <div class="top-bt">
        <span style="font-size: 18px; line-height: 18px">iDoctor</span
        ><span
          style="
            font-size: 14px;
            margin-left: 10px;
            line-height: 18px;
            height: 18px;
          "
          >临床工作好助手</span
        >
      </div>
    </div>

    <div class="login-form">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            style="height: 60px"
            v-model="username"
            :left-icon="require('@/assets/yys/用户名图标.png')"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />

          <van-field
            style="height: 60px"
            v-model="password"
            type="password"
            :left-icon="require('@/assets/yys/密码图标.png')"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      let postData = {
        appVersion: "1499",
        descDevice: "SM-G9810",
        imei: "",
        mac: "00c58b70fc12764aaa36f102e71fff974a9f66915a96c1bfbf663b8d74ff7cef",
        method: "S001",
        networkType: "WIFI",
        orgId: "1002",
        orgName: "新疆自治区人民医院",
        osInfo: "ANDROID",
        params: {
          zlwLogin: true,
          deviceType: "ANDROID",
          password: "81dc9bdb52d04dc20036dbd8313ed055",
          phone: "13856018636",
          deviceId: "05eee9a89432ae060ed3305250f8bc44",
          username: "13856018636",
        },
        phoneNum: "13856018636",
        skey: "dfgS^%_DGks$$@#46q9_8avgzhEs35q2f3",
        stringVersion: "合肥大区",
        token: "09443a80c30f4df09e0d17e77116edab",
        wgLat: "31.834578",
        wgLon: "117.144944",
      };
      this.$http({
        method: "post",
        url: "YYS-SSOServer/gateway/uap-service-ext-service/v1/pb/login/phone",
        data: postData,
      })
        .then((response) => {
          let { r } = response.data;
          if (r.token) {
            this.$router.push({ path: "/mainTabbar" });
          }
          console.log(r);
          let hosConfigArr = []; //放医院列表
          let userInfo = null; //放用户信息
          let token = ""; //放token
          let ssoToken = ""; //单家医院
          let uapToken = ""; //区域版
        })
        .catch(
          (error) => console.log(error) //请求失败返回的数据
        );
    },
  },
  created() {
    this.$router.push({ path: "/mainTabbar" });
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login {
  color: #333333;
  display: flex;
  flex-direction: column;
  &-top {
    display: flex;
    flex-direction: column;
    font-size: 36px;
    margin-left: 40px;
    margin-top: 128px;
    .app-tle {
      line-height: 50px;
      margin-top: 10px;
      font-weight: 500;
    }
    .login-icon {
      width: 78px;
      height: 78px;
      left: 0px;
    }
    .top-bt {
      display: flex;
      align-items: center;
    }
  }
  .login-form {
    margin-top: 30px;
    ::v-deep .van-field__left-icon {
      margin: auto;
      margin-right: 20px;
    }
    ::v-deep .van-cell__value {
      margin: auto;
    }
  }
}
</style>
