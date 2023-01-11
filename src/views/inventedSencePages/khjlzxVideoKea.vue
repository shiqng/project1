<template>
  <div class="dt">
    <div class="kuang" :class="{'kuangExpand':kuangExpand}">
      <video class="v0" src="../../assets/videos/khjlzxVideoKea.mp4" autoplay muted @click.stop="replay"></video>

      <div class="response" @click.stop="earthquake('KhjlzxVideoKeaEarthquake')"></div>
      <div class="zore" @click.stop="oktoberfest('KhjlzxVideoKeaOktoberfest')"></div>
      <div class="close" @click.stop="close('InventedSence')"></div>
      <div class="expand" :class="{'narrow':kuangExpand}" @click.stop="kuangExpand=!kuangExpand"></div>
      <div class="breathing" v-show="flag===true" @click.stop="oktoberfest('KhjlzxVideoKeaEarthquake')"></div>
      <div class="breathing1" v-show="flag===true" @click.stop="earthquake('KhjlzxVideoKeaOktoberfest')"></div>
    </div>
    <div class="next" @click.stop="next('ImagesComponentKea')" v-show="$store.state.guaranteeImg.length>0">
        <img src="../../assets/images/customMadeImgs/bar/next.png" srcset="">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      kuangExpand:false,
      flag:false
    }
  },
  methods:{
    // 关闭按钮方法
    close(str){
        this.$router.push({name:str,query: {
          lang:this.$i18n.locale
        }})
        // 把khjlzx场景push到当前数组;
        this.addOperation2('50')
    },
    earthquake(str){
       this.$router.push({name:str,query: {
          lang:this.$i18n.locale
        }})
        // 把kea场景push到当前数组;
        this.addOperation2('53')
    },
    oktoberfest(str){
       this.$router.push({name:str,query: {
          lang:this.$i18n.locale
        }})
        // 把kea场景push到当前数组;
        this.addOperation2('54')
    },
    replay(){
      let video = document.querySelector('.v0');
      // 如果视频暂停，就播放视频
      video.paused ? video.play() : '';
    },
    next(str){
      this.$router.push({name:`${str}`,query: {
        lang:`${this.$i18n.locale}`
      }})
    },
  },
  mounted(){
    this.$nextTick(()=>{
      this.flag = true;
    })
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
    width: 15.78%;
    height: 20.17%;
    position: absolute;
    left: 21.9%;
    top: 63.4%;
    cursor: pointer;
  /* background-color: red; */
  /* opacity: 0.5; */
}
.kuang .zore{
  width: 9.78%;
  height: 14.72%;
  position: absolute;
  left: 66.14%;
  top: 35.91%;
  cursor: pointer;
  /* background-color: red; */
  /* opacity: 0.5; */
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
.breathing {
	width: 15px;
	height: 15px;
	background: white;
	border-radius: 50%;
	filter: grayscale(50%);
	/* transform: scale(2); */
	position: absolute;
  left: 29.07%;
  top: 72.58%;
	overflow: visible;
  cursor: pointer;
}
.breathing::before {
		content: '';
		width: 30px;
		height: 30px;
		background-image: radial-gradient(transparent 40%, white 100%);
		border-radius: 50%;
		animation: breathing_1_am 2s linear infinite;
		position: absolute;
		left: -50%;
		top: -50%;
	}

.breathing::after {
		content: '';
		width: 30px;
		height: 30px;
		background-image: radial-gradient(transparent 40%, white 100%);
		border-radius: 50%;
		animation:2s breathing_2_am  1s linear infinite;
		position: absolute;
		left: -50%;
		top: -50%;
	}
.breathing1 {
	width: 15px;
	height: 15px;
	background: white;
	border-radius: 50%;
	filter: grayscale(50%);
	/* transform: scale(2); */
	position: absolute;
  left: 70.07%;
  top: 43.27%;
	overflow: visible;
  cursor: pointer;
}
.breathing1::before {
		content: '';
		width: 30px;
		height: 30px;
		background-image: radial-gradient(transparent 40%, white 100%);
		border-radius: 50%;
		animation: breathing_1_am 2s linear infinite;
		position: absolute;
		left: -50%;
		top: -50%;
	}

.breathing1::after {
		content: '';
		width: 30px;
		height: 30px;
		background-image: radial-gradient(transparent 40%, white 100%);
		border-radius: 50%;
		animation:2s breathing_2_am  1s linear infinite;
		position: absolute;
		left: -50%;
		top: -50%;
	}
  .next{
    position: absolute;
    right: 121px;
    top: 517px;
    width: 83px;
    height: 87px;
    cursor: pointer;
  }
  .next:hover {
    filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
  }

	@keyframes breathing_1_am {
		0% {
			transform: scale(0.5);
      opacity: 1;
		}
    90%{
      transform: scale(1.625);
      opacity: 1;
    }
    100%{
      transform: scale(1.75);
      opacity: 0;
    }
	}

	@keyframes breathing_2_am {
		0% {
			transform: scale(0.5);
      opacity: 1;
		}
    90%{
      transform: scale(1.625);
      opacity: 1;
    }
    100%{
      transform: scale(1.75);
      opacity: 0;
    }
	}

</style>