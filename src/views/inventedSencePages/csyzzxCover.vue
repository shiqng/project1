<template>
  <div class="dt">
    <div class="t"><span>Enable Zero Rollback by Correct Solutions</span></div>
    <div class="kuang" :class="{'kuangExpand':kuangExpand}">
      <video 
        class="cs2" 
        src="../../assets/videos/cs2.mp4" autoplay muted 
        @click.stop="replay"></video>
      <div class="close" @click.stop="close('InventedSence')"></div>
      <div class="expand" :class="{'narrow':kuangExpand}" @click.stop="kuangExpand=!kuangExpand"></div>
    </div>
    <!-- <img class="txt_bg" src="../../assets/images/txt_bg.png" alt=""> -->
    <!-- <div class="txt_div">
      <p>Test and Verification Center provides enviroment setup and services for fault location,</p>
      <p>solution verification, and accident drill.</p>
    </div> -->
    <!-- <audio src="../../assets/audios/5/2.mp3" autoplay></audio> -->
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
      this.addOperation2('30')
    },
    // 视频重播方法
    replay(){
      let video = document.querySelector('.cs2');
      // 如果视频暂停，就播放视频
      video.paused ? video.play() : '';
    }
  },
  created(){
  },
  mounted(){
   
  },
  computed:{
   
  },
  watch:{
    
  }
}
</script>

<style scoped>
p{
	margin: 0;
	padding: 0;
}
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
.txt_bg{
	right: 331px;
  bottom: 31px;
	position: absolute;
}
.txt_div{
	width: 1100px;
    height: 80px;
    position: absolute;
    bottom: 40px;
    left: 420px;
	display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: center;
}
.txt_div p{
	font-size: 23px;
	color: #FAFBFC;
}
</style>