<template>
    <div class="development">
      <span class="bt">Lobby</span>
      <!-- 放大缩小按钮框 -->
      <div class="kuang" ref="kuang" :class="{'kuangExpand':kuangExpand}">
        <div class="ts">
          <img src="../../assets/images/develop/developKuang.png" alt="">
        </div>
        <div class="arrow">
          <img src="../../assets/images/develop/arrow.png" alt="" srcset="">
        </div>
        <div class="year2001">
          <img src="../../assets/images/develop/2001.png" alt="" srcset="">
        </div>
        <div :class="['bdxy',{'bdxyEN':$i18n.locale === 'en-US'}]">
          <img src="../../assets/images/develop/bdxy.png" alt="" srcset="">
        </div>
        <div class="year2008">
          <img src="../../assets/images/develop/2008.png" alt="" srcset="">
        </div>
        <div :class="['kshf',{'kshfEN':$i18n.locale === 'en-US'}]">
          <img src="../../assets/images/develop/kshf.png" alt="" srcset="">
        </div>
        <div class="year2013">
          <img src="../../assets/images/develop/2013.png" alt="" srcset="">
        </div>
        <div :class="['fxyf',{'fxyfEN':$i18n.locale === 'en-US'}]">
          <img src="../../assets/images/develop/fxyf.png" alt="" srcset="">
        </div>
        <div class="content1">
          <img src="../../assets/images/develop/content1.png" alt="" srcset="">
        </div>
        <div class="content2">
          <img src="../../assets/images/develop/content2.png" alt="" srcset="">
        </div>
        <div class="content3">
          <img src="../../assets/images/develop/content3.png" alt="" srcset="">
        </div>
        <div class="pointer1">
          <img src="../../assets/images/develop/pointer.png" alt="" srcset="">
        </div>
        <div class="pointer2">
          <img src="../../assets/images/develop/pointer.png" alt="" srcset="">
        </div>
        <div class="pointer3">
          <img src="../../assets/images/develop/pointer.png" alt="" srcset="">
        </div>

        <div class="close" @click="close('InventedSence')">
          <img src="../../assets/images/customMadeImgs/imagesComponent/close.png" alt="">
        </div>
         <div class="expand" :class="{'narrow_':kuangExpand}" @click.stop="kuangExpand=!kuangExpand"></div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      expandNarrow:true,
      development:true,
      kuangExpand:false,
    }
  },
  methods:{
    expand(){
      // 如果手动触发全集按钮就退出一键导航
      this.$store.state.autoView=0;
      this.$refs.kuang.style.width = '100%';
      this.$refs.kuang.style.height = '100%';
      this.$refs.kuang.style.top = '50%';
      this.$refs.kuang.style.left = '50%';
      this.expandNarrow =false;
    },
    narrow(){
      this.$refs.kuang.style.width = '73%';
      this.$refs.kuang.style.height = '73%';
      this.$refs.kuang.style.top = '50%';
      this.$refs.kuang.style.left = '50%';
      this.expandNarrow =true;
    },
    close(str){
      this.$refs.kuang.style.width = '76%';
      this.$refs.kuang.style.height = '76%';
      this.$refs.kuang.style.top = '50%';
      this.$refs.kuang.style.left = '50%';
      this.$router.push({name:str,query: {
        lang:this.$i18n.locale
      }})
      // 把dt场景push到当前数组
      this.addOperation2('00')
    }
  }
}
</script>
<style scoped>
.development{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.bg{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.6;
}
.bt{
  position: absolute;
  top: 37px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 46px;
  font-family: Arial;
}
.kuangExpand{
  width: 100% !important;
  height: 100% !important;
  left: 0;
  top: 0;
}
.kuang{
  width: 73%;
  height: 73%;
  transition: all 0.5s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border: 2px solid rgb(25, 59, 77);
  border-radius: 15px;
  z-index: 100;
}
.kuang .ts{
  width: 100%;
  height: 100%;
}
.kuang .ts img{
  width: 100.3%;
  height: 100%;
  position: relative;
  left: -4px;
}
.kuang .arrow{
  width: 68%;
  height: 55%;
  position: absolute;
  top: -0.5%;
  left: 8%;
  overflow: hidden;
}
.kuang .arrow img{
  width: 100%;
  height: 100%;
  margin-left: -67.5%;
  margin-top: 18%;
  transform: scale(0.4) rotate(13deg);
  animation: arrowMove 10s linear 0s ;
  animation-fill-mode: forwards;
}
.kuang .year2001{
  width: 2.7%;
  height: 1.7%;
  position: absolute;
  left: 9%;
  top: 45%;
  opacity: 0;
  animation: year2001 10s linear ;
  animation-fill-mode: forwards;
}
.kuang .bdxy{
  width: 5.7%;
  height: 5.2%;
  position: absolute;
  left: 14%;
  top: 41%;
  opacity: 0;
  animation: bdxy 10s linear ;
  animation-fill-mode: forwards;
}
.bdxyEN{
  width: 9.5% !important;
  height: 5.3% !important;
  left: 12.3% !important;
}
.kuang .year2008{
  width: 4.7%;
  height: 2.7%;
  position: absolute;
  left: 23%;
  top: 41%;
  opacity: 0;
  animation: year2008 10s linear ;
  animation-fill-mode: forwards;
}
.kuang .kshf{
  width: 11.7%;
  height: 6%;
  position: absolute;
  left: 30%;
  top: 34%;
  opacity: 0;
  animation: kshf 10s linear ;
  animation-fill-mode: forwards;
}
.kshfEN{
    width: 14.7% !important;
    height: 7.2% !important;
    left: 28% !important;
}

.kuang .year2013{
  width: 5.7%;
  height: 3.7%;
  position: absolute;
  left: 44%;
  top: 31%;
  opacity: 0;
  animation: year2013 10s linear ;
  animation-fill-mode: forwards;
}
.kuang .fxyf{
  width: 7.7%;
  height: 6.7%;
  position: absolute;
  left: 54%;
  top: 20%;
  opacity: 0;
  animation: fxyf 10s linear ;
  animation-fill-mode: forwards;
}
.fxyfEN{
  width: 12.7% !important;
  height: 5.5% !important;
  left: 51% !important;
  top: 23% !important;
}
.kuang .content1{
  width: 16.7%;
  height: 32.7%;
  position: absolute;
  left: 9%;
  top: 49%;
  opacity: 0;
  animation: year2001 10s linear ;
  animation-fill-mode: forwards;
}
.kuang .content2{
  width: 21.7%;
  height: 42.7%;
  position: absolute;
  left: 26%;
  top: 43%;
  opacity: 0;
  animation: kshf 10s linear ;
  animation-fill-mode: forwards;
}
.kuang .content3{
  width: 29.7%;
  height: 52.7%;
  position: absolute;
  left: 47.5%;
  top: 36%;
  opacity: 0;
  animation: fxyf 10s linear ;
  animation-fill-mode: forwards;
}
.kuang .pointer1{
  width: 5%;
  height: 8%;
  position: absolute;
  left: 7.5%;
  top: 46%;
  transform: scale(0.7);
  opacity: 0;
  animation: year2001 10s linear ;
  animation-fill-mode: forwards;
}
.kuang .pointer2{
  width: 5%;
  height: 8%;
  position: absolute;
  left: 22.5%;
  top: 43%;
  transform: scale(0.9);
  opacity: 0;
  animation: year2008 10s linear ;
  animation-fill-mode: forwards;
}
.kuang .pointer3{
  width: 5%;
  height: 8%;
  position: absolute;
  left: 44.5%;
  top: 36%;
  opacity: 0;
  transform: scale(1.1);
  animation: year2013 9.99s linear ;
  animation-fill-mode: forwards;
}
.kuang .close{
  width: 64px;
  height: 61px;
  position: absolute;
  top: 0px;
  right: 10px;
  transform: scale(0.8);
  cursor: pointer;
  z-index: 2;
}
.kuang .expand{
  width: 64px;
  height: 61px;
  position: absolute;
  top: 0px;
  right: 80px;
  transform: scale(0.8);
  cursor: pointer;
  z-index: 2;
}
.kuang img{
  width: 100%;
  height: 100%;
}
.kuang .close:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.kuang .expand{
  width: 68px;
  height: 68px;
  position: absolute;
  right: 80px;
  top: 0;
  cursor: pointer;
  background: url('../../assets/images/customMadeImgs/imagesComponent/expand.png') 100% 100% no-repeat ;
}
.kuang .expand:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.narrow_{
   background: url('../../assets/images/customMadeImgs/imagesComponent/narrow.png') 100% 100% no-repeat !important;
}
img{
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-ms-backface-visibility: hidden;
		-webkit-perspective: 0;
		-webkit-transform: translate3d(0, 0, 0);
		visibility: visible;
	}
  @keyframes year2001 {
    0%{
      opacity: 0;
    }
    10%{
      opacity: 1;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes year2008 {
    0%{
      opacity: 0;
    }
    17.5%{
      opacity: 0;
    }
    27.5%{
      opacity: 1;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes year2013 {
    0%{
      opacity: 0;
    }
    40%{
      opacity: 0;
    }
    50%{
      opacity: 1;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes fxyf {
    0%{
      opacity: 0;
    }
    55%{
      opacity: 0;
    }
    65%{
      opacity: 1;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes kshf {
    0%{
      opacity: 0;
    }
    27.5%{
      opacity: 0;
    }
    37.5%{
      opacity: 1;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes bdxy {
    0%{
      opacity: 0;
    }
    10%{
      opacity: 0;
    }
    20%{
      opacity: 1;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes arrowMove {
    0%{
      margin-left: -67.5%;
      margin-top: 18%;
      transform: scale(0.4) rotate(13deg);
    }
    10%{
      margin-left: -57.5%;
      margin-top: 16%;
      transform: scale(0.425) rotate(12.5deg);
    }
    20%{
      margin-left: -47.5%;
      margin-top: 13%;
      transform: scale(0.5) rotate(12deg);
    }
    30%{
      margin-left: -37.5%;
      margin-top: 12%;
      transform: scale(0.55) rotate(6deg);
    }
    40%{
      margin-left: -27.5%;
      margin-top: 10%;
      transform: scale(0.65) rotate(4deg);
    }
    50%{
      margin-left: -17.5%;
      margin-top: 7%;
      transform: scale(0.8) rotate(3deg);
    }
    60%{
      margin-left: -7.5%;
      margin-top: 4%;
      transform: scale(0.9) rotate(2deg);
    }
    70%{
      margin-left: 0%;
      margin-top: 1%;
      transform: scale(1) rotate(0deg);
    }
    100%{
      margin-left: 0%;
      margin-top: 1%;
      transform:scale(1) rotate(0deg);
    }
  }
</style>