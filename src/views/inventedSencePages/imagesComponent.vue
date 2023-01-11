<template>
  <div class="imagesComponent">
    <div class="kuang" :class="{'kuangExpand':kuangExpand}">
      <div class="img">
        <img :src="imgSrc[0]" alt="" srcset="">
      </div>

      <div class="close"  @click.stop="close('InventedSence')"></div>
      <div class="expand" :class="{'narrow':kuangExpand}" @click.stop="kuangExpand=!kuangExpand"></div>
    </div>
    <div class="prev" @click.stop="prevImg" v-show="index>=1
      ||this.$store.state.wffwBtn">
      <img src="../../assets/images/customMadeImgs/bar/next.png" alt="" srcset="">
    </div>
    <div class="next" @click.stop="nextImg" v-show="index+1<this.$store.state.maintainImg.length">
      <img src="../../assets/images/customMadeImgs/bar/next.png" alt="" srcset="">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      index:0,
      imgSrc:[],
      img:null,
      kuangExpand:false,
    }
  },
  methods:{
    // 上一页方法
    prevImg(){
      if(this.index >= 1){
        this.index--;
        this.$set(this.imgSrc, 0, this.$store.state.maintainImg[this.index]);
      }else{
        if(this.$store.state.wffwBtn){
          this.$router.push({name:'MessageBar',query: {
            lang:this.$i18n.locale
          }})
        }
      }
    },
    // 下一页方法
    nextImg(){
      if(this.index < this.$store.state.maintainImg.length - 1){
        this.index++;
        this.$set(this.imgSrc, 0, this.$store.state.maintainImg[this.index]);
      }else{
        return false
      }
    },
    // 关闭按钮方法
    close(str){
      this.$store.state.newIndex = 0;
      this.$router.push({name:str,query: {
        lang:this.$i18n.locale
      }})
    }
  },
  mounted(){
    // 把vuex的图片地址放入imgSrc里面
    this.$set(this.imgSrc, 0, this.$store.state.maintainImg[this.index]);
  },
}
</script>

<style scoped>

.imagesComponent{
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
   z-index: 1010;
  transition: all 0.5s;
  background: url('../../assets/images/customMadeImgs/imagesComponent/kuang.png') center center / 100% 100% no-repeat ;
}
.kuangExpand{
  width: 100% !important;
  height: 100% !important;
  left: 0;
  top: 0;
}
.kuang .img{
  width: 99.6%;
  height: 99.6%;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* overflow: hidden; */
}
.kuang .img img{
  width: 100%;
  height: 100%;
  border-radius: 20px;
  margin-right: 1%;
  /* position: absolute; */
}
.kuang .nextImg{
  width: 175px;
  height: 243px;
  position: absolute;
  right: 10px;
  top: 34%;
  cursor: pointer;
   background: url('../../assets/images/button2.png') 100% 100% no-repeat ;
}
.kuang .prevImg{
  width: 175px;
  height: 243px;
  position: absolute;
  left: 10px;
  top: 34%;
  cursor: pointer;
  background: url('../../assets/images/button1.png') 100% 100% no-repeat ;
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
.close:hover {
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
.expand:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.prev{
	position: absolute;
	left: 121px;
  top: 539px;
	width: 83px;
	height: 87px;
	cursor: pointer;
  transform: rotate(180deg);
  z-index: 1000;
}
.prev:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.next{
	position: absolute;
	right: 121px;
  top: 539px;
	width: 83px;
	height: 87px;
	cursor: pointer;
  /* transform: rotate(180deg); */
}
.next:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.narrow{
   background: url('../../assets/images/customMadeImgs/imagesComponent/narrow.png') 100% 100% no-repeat !important;
}
/* img{
	width: 100%;
	height: 100%;
} */
</style>