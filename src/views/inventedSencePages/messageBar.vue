<template>
  <div class="big" :class="{'scale':expandImg}">
    <!-- <div class="big_title">{{title}}</div> -->
    <!-- 年份 -->
    <p class="Time_new">2022</p>
    <p class="Time_old">2021</p>
    <!-- icon -->
    <div class="bar_icon">
      <img src="../../assets/images/customMadeImgs/bar/bar_icon0.png">
      <img src="../../assets/images/customMadeImgs/bar/bar_icon1.png">
      <img src="../../assets/images/customMadeImgs/bar/bar_icon2.png">
      <img src="../../assets/images/customMadeImgs/bar/bar_icon3.png">
      <img src="../../assets/images/customMadeImgs/bar/bar_icon4.png">
      <img src="../../assets/images/customMadeImgs/bar/bar_icon5.png">
    </div>
    <!-- 柱状图 -->
    <div class="old_bar_big">
      <div class="old_bar_0 old_bar_">
        <img src="../../assets/images/customMadeImgs/bar/old1.png">
        <p>{{testoldArr[0]}}</p>
      </div>
      <div class="old_bar_1 old_bar_">
        <img src="../../assets/images/customMadeImgs/bar/old2.png">
        <p>{{testoldArr[1]}}</p>
      </div>
      <div class="old_bar_2 old_bar_">
        <img src="../../assets/images/customMadeImgs/bar/old3.png">
        <p>{{testoldArr[2]}}</p>
      </div>
      <div class="old_bar_3 old_bar_">
        <img src="../../assets/images/customMadeImgs/bar/old4.png">
        <p>{{testoldArr[3]}}</p>
      </div>
      <div class="old_bar_4 old_bar_">
        <img src="../../assets/images/customMadeImgs/bar/old5.png">
        <p style="white-space:nowrap;">{{insertStr(testoldArr[4],1,',')}}</p>
      </div>
       <div class="old_bar_5 old_bar_">
        <img src="../../assets/images/customMadeImgs/bar/old6.png">
        <!-- <p style="white-space:nowrap; ">Summer Time, Standard Time, <br> Christmas, New Year`s Day</p> -->
        <p style="white-space:nowrap; ">{{testoldArr[5]}}</p>
      </div>
    </div>
    <!-- 柱状图 -->
    <div class="new_bar_big">
      <div class="new_bar_ new_bar_0">
        <img src="../../assets/images/customMadeImgs/bar/new1.png">
        <p>{{testnewArr[0]}}</p>
      </div>
      <div class="new_bar_ new_bar_1">
        <img src="../../assets/images/customMadeImgs/bar/new2.png">
        <p>{{testnewArr[1]}}</p>
      </div>
      <div class="new_bar_ new_bar_2">
        <img src="../../assets/images/customMadeImgs/bar/new3.png">
        <p>{{testnewArr[2]}}</p>
      </div>
      <div class="new_bar_ new_bar_3">
        <img src="../../assets/images/customMadeImgs/bar/new4.png">
        <p>{{testnewArr[3]}}</p>
      </div>
      <div class="new_bar_ new_bar_4">
        <img src="../../assets/images/customMadeImgs/bar/new5.png">
        <p style="white-space:nowrap;">{{addLittleNew}}</p>
      </div>
      <div class="new_bar_ new_bar_5">
        <img src="../../assets/images/customMadeImgs/bar/new6.png">
        <!-- <p style="white-space:nowrap;  top: -40px;">New Year`s Day, <br> Summer Time</p> -->
        <p style="white-space:nowrap;">{{testnewArr[5]}}</p>
      </div>
    </div>
    <!-- 百分比 -->
    <div class="proportion_big" :class="{'dc':isPersent}">
      <div class="proportion_">
        <div class="proportion_son">
          <p>{{contrastFu(0,0)}}%</p>
          <img v-if="contrastFu(0,1)" class="proportion_sonUP" src="../../assets/images/customMadeImgs/bar/rise.png">
          <img class="proportion_sonBU" v-else src="../../assets/images/customMadeImgs/bar/lower.png">
        </div>
        <div class="proportion_son">
          <p>{{contrastFu(1,0)}}%</p>
          <img v-if="contrastFu(1,1)" src="../../assets/images/customMadeImgs/bar/rise.png">
          <img v-else class="proportion_sonBU" src="../../assets/images/customMadeImgs/bar/lower.png">
        </div>
        <div class="proportion_son">
          <p>{{contrastFu(2,0)}}%</p>
          <img v-if="contrastFu(2,1)" class="proportion_sonUP" src="../../assets/images/customMadeImgs/bar/rise.png">
          <img v-else class="proportion_sonBU" src="../../assets/images/customMadeImgs/bar/lower.png">
        </div>
        <div class="proportion_son">
          <p>{{contrastFu(3,0)}}%</p>
          <img v-if="contrastFu(3,1)" class="proportion_sonUP" src="../../assets/images/customMadeImgs/bar/rise.png">
          <img v-else class="proportion_sonBU" src="../../assets/images/customMadeImgs/bar/lower.png">
        </div>
        <div class="proportion_son">
          <p>{{contrastFu(4,0)}}%</p>
          <img v-if="contrastFu(4,1)" class="proportion_sonUP" src="../../assets/images/customMadeImgs/bar/rise.png">
          <img v-else class="proportion_sonBU" src="../../assets/images/customMadeImgs/bar/lower.png">
        </div>
        <div class="proportion_son">
          <p>{{contrastFu(5,0)}}%</p>
          <img v-if="contrastFu(5,1)" class="proportion_sonUP"  src="../../assets/images/customMadeImgs/bar/rise.png">
          <img v-else class="proportion_sonBU"  src="../../assets/images/customMadeImgs/bar/lower.png">
        </div>
      </div>
    </div>
    <div class="next" @click.stop="next('ImagesComponent')" v-show="$store.state.maintainImg.length>0">
      <img src="../../assets/images/customMadeImgs/bar/next.png" srcset="">
    </div>
    <div class="close" @click.stop="close('InventedSence')"></div>
    <div class="expand" @click.stop="expand" :class="{'expandImg':expandImg}"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // 全部出来的额定值
      newArr:[52500,758,1910,41802,320942,20],
      oldArr:[52500,758,1910,41802,320942,20],
      // 获取的值
      testnewArr:[],
      testoldArr:[],
      contrastData1:[],
      contrastData2:[],
      timer:null,
      expandImg:false,
      isPersent:false
    }
  },
  methods:{
     // 传入数组类型 2022-2021   [xx,xx,xx,xx,xx,xx]
    changeData(new_,old){ 
      this.testoldArr = this.$store.state.customMade.mesages.row2.oldYearArr;
      this.testnewArr = this.$store.state.customMade.mesages.row1.newYearArr;
      this.$nextTick( ()=>{
        this.newArr.forEach((element,index) => {
          //  全部出来是281
		  let sum = (this.testnewArr[index] / element) > 1 ? 1:(this.testnewArr[index] / element)
          let compare = 284 - (sum * 165)
          document.getElementsByClassName(`new_bar_${index}`)[0].style = `bottom:-${compare}px`
          this.raf(this.testnewArr[index],1000,index,1)
        });
        this.oldArr.forEach((element,index) => {
          //  全部出来是175
		  let sum = (this.testoldArr[index] / element) > 1 ? 1:(this.testoldArr[index] / element)
          let compare = 176 - (sum * 165)
          document.getElementsByClassName(`old_bar_${index}`)[0].style = `top:-${compare}px`
          this.raf(this.testoldArr[index],1000,index,2)
        });
      })
    },
    insertStr(soure, start, newStr){ 
      if(soure >= 1000){
        let data = soure.toString()
        return data.slice(0, start) + newStr + data.slice(start);
      }else{
        return false
      }
      
    },
    // 百分比
    contrastFu(data1,data2){
      if(data2 === 0){
        let data = this.contrastData1[data1] != 0 ? 
        Math.abs(parseInt(((this.contrastData2[data1] - this.contrastData1[data1])/this.contrastData1[data1]) *100)) :
        this.contrastData2[data1] * 100
        return data
      }else{
        let data = (this.contrastData2[data1] - this.contrastData1[data1]) >= 0 ? true:false
        return data
      }
     
    },
    // 定时函数
    raf(end,time,index,isnewOld){
      // 执行总时间 time  !requestAnimationFrame 最快每16毫秒运行一次
      // 结束总数 end
      let StartData = end - parseInt(time / 16.66) > 0 ? end - parseInt(time / 16.66):0
      var tath = this
      let lastTime = Date.now();
      let nowTime = 0;
      let DiffTime = parseInt(time / (end - StartData) - 1)
      if(isnewOld === 1){
        this.$set(this.testnewArr,index,0)
      }else{
        this.$set(this.testoldArr,index,0)
      }
      return function dataHandle(){ 
        if(end <= StartData){
          tath.isPersent = true;
          return false
        }
        requestAnimationFrame( ()=>{
        nowTime = Date.now()
        if(nowTime-lastTime > DiffTime){
          nowTime = Date.now()
          lastTime = nowTime
          StartData++
          if(isnewOld === 1){
            tath.$set(tath.testnewArr,index,StartData)
          }else{
            tath.$set(tath.testoldArr,index,StartData)
          }
          dataHandle()
        }else{
          dataHandle()
        }
        return false
        })
      }()
    },
    next(str){
      this.$router.push({name:`${str}`,query: {
        lang:`${this.$i18n.locale}`
      }})
    },
    // 关闭按钮功能
    close(str){
      this.$router.push({name:`${str}`,query: {
        lang:`${this.$i18n.locale}`
      }})
    },
    // 放大、缩小方法
		expand(){
			this.expandImg = !this.expandImg;
		}
  },
  mounted(){

	this.testoldArr = [0,0,0,0,0,0];
	this.testnewArr = [0,0,0,0,0,0];
    //  使用方法  修改一组：this.changeData(null,[4000,30,20,800,8000,100])
	this.timer!==null ? clearTimeout(this.timer) : '';
	this.timer = setTimeout(()=>{
    this.contrastData1 = JSON.parse(JSON.stringify(this.$store.state.customMade.mesages.row2.oldYearArr));
    this.contrastData2 = JSON.parse(JSON.stringify(this.$store.state.customMade.mesages.row1.newYearArr));
		this.changeData();
    this.timer = null;
	},500)
  },
  computed:{
    addLittleNew(){
      if(this.testnewArr[4] >= 1000){
        let data = this.testnewArr[4].toString()
        return data.slice(0, 1) + ',' + data.slice(1);
      }else{
        return this.testnewArr[4]
      }
    },
    title(){
      return this.$store.state.customMade.mesages.messageBarData
    }
  }
}
</script>

<style scoped>
p{
  margin: 0;
  padding: 0;
}
.big{
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../../assets/images/customMadeImgs/bar/bg.png') 100% 100% no-repeat ;
  transition: all 0.5s;
}
.expandImg{
    background: url('../../assets/images/customMadeImgs/imagesComponent/narrow.png') 100% 100% no-repeat !important;
}
.scale{
	transform: scale(1.2);
  z-index: 500;
}
.Time_new{
  position: absolute;
  top: 400px;
  left: 300px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-shadow:0 0 12px #ffb300 ;
}
.Time_old{
  position: absolute;
  top: 712px;
  left: 300px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-shadow:0 0 12px #008aff;
}
.old_bar_big{
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 53%;
  top: 660px;
  left: 268px;
  overflow: hidden;
  height: 285px;
  padding: 0 200px;
}
.new_bar_big{
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 53%;
  bottom: 602px;
  left: 268px;
  overflow: hidden;
  height: 285px;
  padding: 0 200px;
}
.new_bar_{
  position: relative;
  bottom: -284px;
  transition: all 1s linear;
}
.old_bar_ p,.new_bar_ p{
  color: #fff;
  font-size: 16px;
  text-align: center;
  position:absolute;
  left: 50%;
  transform: translate(-50%);
}
.new_bar_ p{
  top: -25px;
}
.old_bar_{
  position: relative;
  top: -176px;
  transition: all 1s linear;
}
.next{
	position: absolute;
	right: 121px;
  top: 539px;
	width: 83px;
	height: 87px;
	cursor: pointer;
}
.next:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.close{
  width: 68px;
  height: 68px;
  position: absolute;
  right: 241px;
  top: 93px;
  transform: scale(0.8);
  cursor: pointer;
  background: url('../../assets/images/customMadeImgs/imagesComponent/close.png') 100% 100% no-repeat ;
}
.close:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.expand{
  width: 68px;
  height: 68px;
  position: absolute;
  right: 314px;
  top: 93px;
  transform: scale(0.8);
  cursor: pointer;
  background: url('../../assets/images/customMadeImgs/imagesComponent/expand.png') 100% 100% no-repeat ;
}
.expand:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.new_bar_3,.old_bar_3{
  left: 15px;
}
.new_bar_2,.old_bar_2{
  left: 6px;
}
.new_bar_4,.old_bar_4{
  left: 20px;
}
.new_bar_5,.old_bar_5{
  left: 20px;
}
.proportion_big{
  position: absolute;
  width: 100%;
  opacity: 0;
  transition: 0.2s all;
}
.proportion_{
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 55%;
    /* top: 620px; */
    top: 490px;
    left: 465px;
}
.proportion_son{
  width: 70px;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;
}
@keyframes proportion_son_up {
  0%{
    top: 0px;
  }
  100%{
    top: -8px;
  }
}
.proportion_sonUP{
  animation: proportion_son_up 1s linear infinite;
}
.proportion_sonBU{
  animation: proportion_son_up 1s linear infinite reverse ;
}
.proportion_son img{
  position: relative;
  transform: scale(1.5);
}
.proportion_son p{
  transform: scale(1.2);
}
.big_title{
  position:absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  font-size: 50px;
  color: white;
}
.bar_icon{
  position: absolute;
  /* top: 467px; */
  top: 506px;
  left: 443px;
}
.bar_icon img{
  margin-right: 90px;
  /* transform: scale(.7); */
  transform: scale(.65);
  margin-bottom: 10px;
}
.dc{
  opacity: 1;
}
</style>