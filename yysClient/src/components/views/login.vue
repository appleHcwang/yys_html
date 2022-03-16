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
import { Toast } from 'vant';
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
  console.log('submit', values);



  let postData=  {
  'appVersion': '1413',
  'imei': '530000000318641',
  'mac': '08:00:27:FF:3D:16',
  'networkType': 'WIFI',
  'osInfo': 'ANDROID',
  'params': '{"address":"无定位信息","phoneNum":"18856074994","imei":"530000000318641","userPwd":"123456","mac":"08:00:27:FF:3D:16"}',
  'phoneNum': '18856074994',
  'skey': 'dfgS^%_DGks$$@#46q9_8avgzhEs35q2f3',
  'stringVersion': '演示版本',
  'token': 'ad1e2f82cd6a1cd45f3d73bb569ac414',
  'wgLat': '39.90719154403526',
  'wgLon': '116.39108247569935'
  }


      // console.log(values.username)
      // this.$http.post("api/YYS-SSOServer/service/login2", postData).then(({ r }) => {
      //   let response = JSON.parse(r);
      //   console.log(response);
      // });



       this.$http({
                method:'post',
                url:"api/YYS-SSOServer/service/login2",
                data:JSON.stringify(postData)
            }).then((response) =>{          //这里使用了ES6的语法
                console.log(response)       //请求成功返回的数据
            }).catch((error) =>
                console.log(error)       //请求失败返回的数据
            ) 

    },
  },
  created() {},
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
