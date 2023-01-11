<template>
  <div class="dt" @click.stop="flag=0">
    <!-- <div class="kuang" :class="{'kuangExpand':kuangExpand}" @click.stop="replay"> -->
    <div class="kuang" :class="{'kuangExpand':kuangExpand}">
      <video class="v2" src="../../assets/videos/khjlzxVideoZero.mp4" autoplay muted @click.stop="replay"></video>
      <div class="close" @click.stop="close('KhjlzxVideoKea')"></div>
      <div class="expand" :class="{'narrow':kuangExpand}" @click.stop="kuangExpand=!kuangExpand"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      kuangExpand:false,
    }
  },
  methods:{
    // 关闭按钮方法
    close(str){
        this.$router.push({name:str,query: {
          lang:this.$i18n.locale
        }})
        // 把khjlzx场景push到当前数组;
        this.addOperation2('52')
    },
    replay(){
      let video = document.querySelector('.v2');
      // 如果视频暂停，就播放视频
      video.paused ? video.play() : '';
    },
  },
}
</script>

<style scoped>

.dt{
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: url('../../assets/images/customMadeImgs/bar/bg.png') 100% 100% no-repeat ; */
}
.bigBg{
  filter: blur(50px);
}
.kuang{
  width: 1400px;
  height: 788px;
  position: absolute;
  top: 130px;
  left: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.5s;
   z-index: 1000;
  background: url('../../assets/images/customMadeImgs/imagesComponent/kuang.png') center center / 100% 100% no-repeat ;
}
.kuangExpand{
  width: 100% !important;
  height: 100% !important;
  left: 0;
  top: 0;
}
.kuang .response{
  width: 170px;
  height: 145px;
  position: absolute;
  left: 370px;
  top: 500px;
  cursor: pointer;
  /* background-color: red;
  opacity: 0.5; */
}
.kuang .zore{
  width: 137px;
  height: 116px;
  position: absolute;
  left: 926px;
  top: 283px;
  cursor: pointer;
  /* background-color: red;
  opacity: 0.5; */
}
.kuang video{
  width: 99.6%;
  height: 99.6%;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* overflow: hidden; */
}
.kuang .close{
  width: 68px;
  height: 68px;
  position: absolute;
  right: 10px;
  top: 0;
  transform: scale(0.8);
  cursor: pointer;
  background: url('../../assets/images/customMadeImgs/imagesComponent/close.png') 100% 100% no-repeat ;
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
  transform: scale(0.8);
  cursor: pointer;
  background: url('../../assets/images/customMadeImgs/imagesComponent/expand.png') 100% 100% no-repeat ;
}
.kuang .expand:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.narrow{
   background: url('../../assets/images/customMadeImgs/imagesComponent/narrow.png') 100% 100% no-repeat !important;
}
</style>