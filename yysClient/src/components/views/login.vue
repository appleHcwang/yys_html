<template>
  <div class="login">
    <div class="login-top">

<a @click="toContant"  class="contactPutian" target="_blank" >
           dvfvfdv
        </a> 
  

      <img class="login-icon" src="@/assets/appicon.png" alt="" />
      <p class="app-tle">讯飞云医声</p>
      <div class="top-bt">
        <span style="font-size: 18px; line-height: 18px">iDoctor</span><span style="
            font-size: 14px;
            margin-left: 10px;
            line-height: 18px;
            height: 18px;
          ">临床工作好助手</span>
      </div>
    </div>

    <div class="login-form">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field style="height: 60px" v-model="username" :left-icon="require('@/assets/yys/用户名图标.png')"
            placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />

          <van-field style="height: 60px" v-model="password" type="password"
            :left-icon="require('@/assets/yys/密码图标.png')" placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]" />
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
import { loginPhone } from "@/services/api-url/login.js";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    toContant(){
      window.location.href = 'https://oss-beijing-m8.openstorage.cn/yys-oss-dev/yys/privacy/policy/d41d8cd98f00b204e9800998ecf8427e.docx'

        },
 
    
    onSubmit(values) {


      
      console.log("submit", values);
      let postData = {
        params: {
          zlwLogin: true,
          deviceType: "ANDROID",
          password: "e10adc3949ba59abbe56e057f20f883e",
          phone: "13856018636",
          deviceId: "008f226f6398f14a5dc17a85cd52e538",
          username: "13856018636",
        },
      };
      loginPhone(postData)
        .then((res) => {
          let responseData = res;
          let hosConfigArr = []; //放医院列表
          let userInfo = null; //放用户信息
          let token = ""; //放token
          let ssoToken = ""; //单家医院
          let uapToken = ""; //区域版
          if (responseData.token) {
            //uap登录数据
            let { hosConfig = [] } = responseData;
            hosConfigArr = hosConfig.map((e) => ({
              hosName: e.name,
              hosCode: e.code,
              historyUrl: e.extJson.historyUrl,
              serverUrl: e.extJson.serverUrl,
              referralUrl: e.extJson.referralUrl,
              moduleConfig: e.moduleConfig,
              userId: responseData.userInfo.extJson.hosUserInfo.find(
                (item) => item.hosId === e.id
              ).workerNumber,
            }));
            // userInfo = {
            //   userName: responseData.userInfo.name,
            //   userPhone: responseData.userInfo.loginName,
            // };

            userInfo = responseData.userInfo

            userInfo.userName = responseData.userInfo.name

            userInfo.userPhone = responseData.userInfo.loginName

            
            uapToken = responseData.token.accessToken;
            token = uapToken;
          }
          //sso 登录
          let ssoData = responseData.ssoData
          if (ssoData) {
            //赋值用户信息
            if (!userInfo) {
              userInfo = {
                userName: responseData.ssoData.userInfo.userName,
                userPhone: responseData.ssoData.userInfo.userPhone,
              };
            }
            if (!token) {
              token = responseData.ssoData.token;
            }
            ssoToken = responseData.ssoData.token;
            //医院信息
            let ssoHosConfig = responseData.ssoData.hosConfig.map((e) => {
              let moduleConfig = {
                indexList: [],
                patientList: [],
              };
              e.moduleConfig.toolsBar.forEach((item) => {
                let one = {
                  name: item.moduleName,
                  extJson: {
                    moduleCode: item.moduleCode,
                  },
                };
                moduleConfig.indexList.push(one);
              });
              e.moduleConfig.navigateBar.forEach((item) => {
                let one = {
                  name: item.moduleName,
                  extJson: {
                    moduleCode: item.moduleCode,
                  },
                };
                moduleConfig.patientList.push(one);
              });
              return {
                hosName: e.hos_name,
                hosCode: e.hos_code,
                historyUrl: e.historyUrl,
                serverUrl: e.business_IP + "/" + e.bs_pro_name,
                moduleConfig: moduleConfig,
                userId: e.userInfo.userId,
                isSsoHos: true,
              };
            });
            //hosConfigArr.concat(ssoHosConfig);
            hosConfigArr = [...ssoHosConfig, ...hosConfigArr];
          }
          //默认第一家医院
          let currentHos = hosConfigArr[0];
          if (currentHos.isSsoHos) {
            token = ssoToken;
          } else {
            token = uapToken;
          }
          this.$store.commit('setcurrentHos', currentHos);


          let item = {}
          item.deptCode =  responseData.userInfo.orgCode
      item.deptName = responseData.userInfo.orgName;
          this.$store.commit("hospital/setcurrentDept", item);
 
      localStorage.setItem("currentDept", JSON.stringify(item));



          this.$store
            .dispatch("user/LoginByQrCode", {
              userInfo,
              token,
              hosConfigArr,
              ssoToken,
              uapToken,
              ssoData
            })
            .then(() => {
              // this.$router.push({ path: this.redirect || '/' })
              this.$router.push({ path: "/mainTabbar" });
            });
        })
        .finally(() => {
          Toast("over");
        });
    },
  },
  created() {
    // this.$func.http()

    // this.$router.push({ path: "/mainTabbar" });
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
