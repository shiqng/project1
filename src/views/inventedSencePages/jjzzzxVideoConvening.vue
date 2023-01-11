<template>
  <div class="dt">
     <div class="title">Fast Service Recovery</div>
    <div class="kuang" :class="{'kuangExpand':kuangExpand}" @click.stop="replay">
      <video 
        class="v" 
        src="../../assets/videos/jjzzzxVideoConvening.mp4" 
        autoplay muted controls
        ref='v'
        controlslist="nodownload nofullscreen noremoteplayback noplaybackrate"  
        ></video>
      <div class="close" @click.stop="close('InventedSence')"></div>
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
        lang: this.$i18n.locale
      }})
        // 把jjzzx场景push到当前数组;
        this.addOperation2('20')
    },
    replay(){
      let video = document.querySelector('.v');
      // 如果视频暂停，就播放视频
      video.paused ? video.play() : video.pause();
    }
  },
  created(){
  },
  mounted(){
     // 禁止画中画
    this.$refs.v.disablePictureInPicture = true;
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
.dt .title{
  position:absolute;
  top: 35px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 50px;
  color: white;
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
   cursor: pointer;
  background: url('../../assets/images/customMadeImgs/imagesComponent/kuang.png') center center / 100% 100% no-repeat ;
}
.kuangExpand{
  width: 100% !important;
  height: 100% !important;
  left: 0;
  top: 0;
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
.kuang video::-webkit-media-controls-mute-button { display: none !important;}
.kuang video::-webkit-media-controls-volume-slider{display: none !important;} 
.kuang video::-webkit-media-controls-fullscreen-button {display: none !important;}
.kuang video::-webkit-media-controls-volume-control-container:hover{display: none !important;}
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