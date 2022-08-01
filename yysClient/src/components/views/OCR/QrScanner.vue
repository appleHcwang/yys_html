<template>
  <div class="qr-scanner">
    <div class="box">
      <div class="line"></div>
      <div class="angle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QrScanner",
  props: {
    size: {},
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>


<style lang="scss" scoped>
.qr-scanner {
  text-align: center;
  width: 100%;
  position: relative;
  top: 0px;
}
.qr-scanner .box {
  width: 213px;
  height: 273px;
  position: absolute;
  left: 50%;
  // top: -20px;
  transform: translate(-50%, 0%);
  overflow: hidden;
  // border: 0.1rem solid rgba(0, 255, 51, 0.2);
  /* background: url('http://resource.beige.world/imgs/gongconghao.png') no-repeat center center; */
}

.qr-scanner .line {
  height: calc(100% - 2px);
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 255, 51, 0) 43%, #139b7f 211%);
  border-bottom: 3px solid #139b7f;
  transform: translateY(-100%);
  animation: radar-beam 2s infinite alternate;
  animation-timing-function: cubic-bezier(0.53, 0, 0.43, 0.99);
  animation-delay: 0s;
}

.qr-scanner .box:after,
.qr-scanner .box:before,
.qr-scanner .angle:after,
.qr-scanner .angle:before {
  content: "";
  display: block;
  position: absolute;
  width: 7vw;
  height: 7vw;
  border: 0.2rem solid transparent;
  // border-radius:8px;
}

.qr-scanner .box:after,
.qr-scanner .box:before {
  top: 0;
  border-top-color: #139b7f;
}

.qr-scanner .angle:after,
.qr-scanner .angle:before {
  bottom: 0;
  border-bottom-color: #139b7f;
}

.qr-scanner .box:before,
.qr-scanner .angle:before {
  left: 0;
  border-left-color: #139b7f;
}

.qr-scanner .box:after,
.qr-scanner .angle:after {
  right: 0;
  border-right-color: #139b7f;
}

.qr-scanner .box:after {
  border-top-right-radius: 8px;
}

.qr-scanner .box:before {
  border-top-left-radius: 8px;
}

.qr-scanner .angle:before {
  border-bottom-left-radius: 8px;
}

.qr-scanner .angle:after {
  border-bottom-right-radius: 8px;
}

@keyframes radar-beam {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>