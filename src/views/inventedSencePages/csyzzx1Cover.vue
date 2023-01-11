<template>
  <div class="dt">
    <div class="t"><span>Enable Zero Rollback by Correct Solutions</span></div>
    <div class="kuang" :class="{'kuangExpand':kuangExpand}" @click.stop="replay">
      <video  v-show="flag===0" class="cs0" src="../../assets/videos/cs0.mp4" autoplay muted></video>
      <video  v-show="flag===1" class="cs1" src="../../assets/videos/cs1.mp4" muted></video>
      <!-- <video  v-show="flag===2" class="cs2" src="../../assets/videos/cs2.mp4" muted></video> -->
      <div class="close" @click.stop="close('InventedSence')"></div>
      <div class="expand" :class="{'narrow':kuangExpand}" @click.stop="kuangExpand=!kuangExpand"></div>
    </div>
    <div class="prev" @click.stop="prevImg" v-show="flag!==0">
      <img src="../../assets/images/customMadeImgs/bar/next.png" alt="" srcset="">
    </div>
    <div class="next" @click.stop="nextImg" v-show="flag!==1">
      <img src="../../assets/images/customMadeImgs/bar/next.png" alt="" srcset="">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      flag:0,
      kuangExpand:false,
    }
  },
  methods:{
    // 关闭按钮方法
    close(str){
      this.$router.push({name:str,query: {
        lang:this.$i18n.locale
      }})
      // 把cs场景push到当前数组
      this.addOperation2('31')
    },
    // 视频重播方法
    replay(){
      let video = document.querySelectorAll('video')[this.flag];
      // 如果视频暂停，就播放视频
      video.paused ? video.play() : '';
    },
    // 上一页方法
    prevImg(){
      this.flag>0?this.flag--:this.flag;
    },
    // 下一页方法
    nextImg(){
      this.flag<1?this.flag++:this.flag;
    },
  },
  created(){
  },
  mounted(){
  },
  computed:{
   
  },
  watch:{
    // 监听当前在那一页，播放当前页的视频，暂停上一页视频
    flag(newVal,oldVal){
      let newVideo = document.getElementsByClassName(`cs${newVal}`)[0];
      let oldVideo = document.getElementsByClassName(`cs${oldVal}`)[0];
      newVideo.play();
      oldVideo.currentTime = 0;
      oldVideo.pause();
      if(newVal===2){
        this.$store.state.csyzzx1CoverFlag=2;
      }else{
        this.$store.state.csyzzx1CoverFlag=0;
      }
    }
  }
}
</script>

<style scoped>

.dt{
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: url('../../assets/images/customMadeImgs/bar/bg.png') 100% 100% no-repeat ; */
}
.dt .t span{
  width: 970px;
  height: 55px;
  /* background-color: red;
  opacity: 0.5; */
  position:absolute;
  top: 35px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 48px;
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
.kuang video{
  width: 99.6%;
  height: 99.6%;
  border-radius: 20px;
  /* border-radius: 20px; */
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
.prev{
	position: absolute;
	left: 170px;
  top: 539px;
	width: 83px;
	height: 87px;
	cursor: pointer;
  transform: rotate(180deg);
  z-index: 100;
}
.prev:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.next{
	position: absolute;
	right: 170px;
  top: 539px;
	width: 83px;
	height: 87px;
	cursor: pointer;
  /* transform: rotate(180deg); */
}
.next:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.wbWorld{
	position: absolute;
	left: 50%;
	bottom: 30px;
	transform: translateX(-50%);
	width: 1248px;
	height: 93px;
}
.narrow{
   background: url('../../assets/images/customMadeImgs/imagesComponent/narrow.png') 100% 100% no-repeat !important;
}
</style>