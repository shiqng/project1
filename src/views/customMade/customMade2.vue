<template>
	<div class="customMade2" :class="{'scale':expandImg,'rightMove':rightMove}">
		<!-- 背景图 -->
		<img src='../../assets/images/customMadeImgs/customMade2Bg.png' alt="" srcset="">
		<!-- switch2 -->
		<label for="toggle2">
			<input type="checkbox" id="toggle2" v-model="switch2">
			<span class="switch2"></span>
			<div class="btn1 xs1">On</div>
			<div class="btn1 yc1">Off</div>
		</label>
		<!-- 定制重大保障事件 -->
		<div class="guarantee">
			<label class="logoTitle" for="logoImg1">
				<img :src="[$store.state.guaranteeImg.length>0 ? require('../../assets/images/customMadeImgs/1.png') :
				require('../../assets/images/customMadeImgs/1before.png')]" alt="" srcset="">
			</label>
			<div class="guaranteeImgDiv" v-show="$store.state.guaranteeImg.length>0">
				<img :src="$store.state.guaranteeImg[$store.state.guaranteeImg.length-1]" alt="" class="guaranteeImg"/>
			</div>
			<input type="file" accept="image/*" name="logo" id="logoImg1" multiple="multiple" 
            style="display: none" @change.stop="guaranteeImgPreviewImages">
		</div>
		<div class="guaranteeImgClear" @click.stop="guaranteeImgClear" v-show="$store.state.guaranteeImg.length>0"></div>
		<!-- 定制维护概况 -->
		<div class="maintain">
			<label class="logoTitle" for="logoImg2">
				<img :src="[$store.state.maintainImg.length>0 ? require('../../assets/images/customMadeImgs/1.png') :
				require('../../assets/images/customMadeImgs/1before.png')]" alt="" srcset="">
			</label>
			<div class="maintainImgDiv" v-show="$store.state.maintainImg.length>0">
				<img :src="$store.state.maintainImg[$store.state.maintainImg.length-1]" alt="" class="maintainImg"/>
			</div>
			<input type="file" accept="image/*" name="logo" id="logoImg2" multiple="multiple" 
            style="display: none" @change.stop="maintainImgPreviewImages">
		</div>
		<div class="maintainImgClear" @click.stop="maintainImgClear" v-show="$store.state.maintainImg.length>0"></div>
		<!-- 上传客户logo -->
		<div class="logo">
			<label class="logoTitle" for="logoImg3">
				<img :src="[$store.state.logo.url.length>0 ? require('../../assets/images/customMadeImgs/3.png') :
				require('../../assets/images/customMadeImgs/3before.png')]" alt="" srcset="">
			</label>
			<img :src="$store.state.logo.url" alt="" class="logoPreview" 
            :class="$store.state.logo.column ? 'columnPic' : 'normalPic'" @load="checkColume"/>
			<input type="file" accept="image/*" name="logo" id="logoImg3" style="display: none" @change.stop="previewLogo">
		</div>
		<div class="logoClear" @click.stop="logoClear" v-show="$store.state.logo.url.length>0"></div>
		<!-- 客户名字上传 -->
		<div class="customerName">
			<label class="customerNameLabel" for="customerName"></label>
			<textarea maxlength="150" autocomplete="off" type="text" name="客户名字上传" 
            id="customerName" v-model="mesages.customerName">Welcome to the Global Technical Assistance Center</textarea>
		</div>

		<!-- 上传信息 -->
		<div class="messages">
			<div class="div1"><textarea class="textarea"  maxlength="150" autocomplete="off" type="text"
             placeholder="XXXX" id="div1" v-model="mesages.row1.year"></textarea></div>
			<div class="div2"><textarea class="textarea"  maxlength="150" autocomplete="off" type="number"
             placeholder="XXXX" id="div2" v-model="mesages.row1.newYearArr[0]"></textarea></div>
			<div class="div3"><textarea class="textarea" maxlength="150" autocomplete="off" type="number"
             placeholder="XXXX" id="div3" v-model="mesages.row1.newYearArr[1]"></textarea></div>
			<div class="div4"><textarea class="textarea" maxlength="150" autocomplete="off" type="number"
             placeholder="XXXX" id="div4" v-model="mesages.row1.newYearArr[2]"></textarea></div>
			<div class="div5"><textarea class="textarea" maxlength="150" autocomplete="off" type="number"
             placeholder="XXXX" id="div5" v-model="mesages.row1.newYearArr[3]"></textarea></div>
			<div class="div6"><textarea class="textarea" maxlength="150" autocomplete="off" type="number"
             placeholder="XXXX" id="div6" v-model="mesages.row1.newYearArr[4]"></textarea></div>
			<div class="div7"><textarea class="textarea" maxlength="150" autocomplete="off" type="number"
             placeholder="XXXX" id="div7" v-model="mesages.row1.newYearArr[5]"></textarea></div>
			<div class="div8"><textarea class="textarea" maxlength="150" autocomplete="off" type="number"
             placeholder="XXXX" id="div8" v-model="mesages.row2.year"></textarea></div>
			<div class="div9"><textarea class="textarea" maxlength="150" autocomplete="off" type="number"
             placeholder="XXXX" id="div9" v-model="mesages.row2.oldYearArr[0]"></textarea></div>
			<div class="div10"><textarea class="textarea" maxlength="150" autocomplete="off" type="number"
             placeholder="XXXX" id="div10" v-model="mesages.row2.oldYearArr[1]"></textarea></div>
			<div class="div11"><textarea class="textarea" maxlength="150" autocomplete="off" type="number"
             placeholder="XXXX" id="div11" v-model="mesages.row2.oldYearArr[2]"></textarea></div>
			<div class="div12"><textarea class="textarea" maxlength="150" autocomplete="off" type="number"
             placeholder="XXXX" id="div12" v-model="mesages.row2.oldYearArr[3]"></textarea></div>
			<div class="div13"><textarea class="textarea" maxlength="150" autocomplete="off" type="number"
             placeholder="XXXX" id="div13" v-model="mesages.row2.oldYearArr[4]"></textarea></div>
			<div class="div14"><textarea class="textarea" maxlength="150" autocomplete="off" type="number"
             placeholder="XXXX" id="div14" v-model="mesages.row2.oldYearArr[5]"></textarea></div>
		</div>

		<!-- 客户响应中心 -->
		<div class="khxyzx"><textarea maxlength="150" autocomplete="off" type="text" 
        placeholder="Quick Response in Seconds" id="div14" v-model="mesages.khxyzx"></textarea></div>
		
		<!-- 定制数据表 -->
		<!-- <div class="jjhfzzzx"><textarea maxlength="150" autocomplete="off" type="text"
        id="div14" v-model="mesages.messageBarData"></textarea></div> -->
		
		<!-- 确认按钮 -->
		<div alt="" class="continue" @click.stop="jumpNextSence">
			<img src='../../assets/images/customMadeImgs/submit.png' alt="" srcset="">
		</div>

		<div class="close" @click.stop="close"></div>
      	<div class="expand" @click.stop="expand" :class="{'expandImg':expandImg}"></div>
	</div>
</template>

<script>
export default {
	name: 'customMade2',
	components: {
		// Entrance
	},
	data() {
		return {
			store:null,
			urls:[],
			logo:[],
			expandImg:false,
			rightMove:false,
		};
	},
	computed:{
		mesages(){
			return this.$store.state.customMade.mesages;
		},
		switch2:{
			get(){
				return this.$store.state.switch2;
			},
			set(val){
				this.$store.state.switch2 = val;
			}
		}
	},
	mounted() {
	},
	methods: {
		logoClear(){
			this.logo.length = 0;
			this.$store.state.logo.url = [];
			let inputDiv = document.querySelector('#logoImg3');
			inputDiv.value = '';
		},
		guaranteeImgClear(){
			let arrList = this.$store.state.customMade.customImg1sUrl;
			let newList = this.$store.state.guaranteeImg;
			arrList = arrList.filter((item) => {
				return newList.every((item2) => {
					return item != item2;
				});
			});
			this.$store.state.customMade.customImg1sUrl = arrList;
			this.$store.state.guaranteeImg = [];
			let inputDiv = document.querySelector('#logoImg1');
			inputDiv.value = '';
		},
		maintainImgClear(){
			let arrList = this.$store.state.customMade.customImg1sUrl;
			let newList = this.$store.state.maintainImg;
			arrList = arrList.filter((item) => {
				return newList.every((item2) => {
					return item != item2;
				});
			});
			this.$store.state.customMade.customImg1sUrl = arrList;
			this.$store.state.maintainImg = [];
			let inputDiv = document.querySelector('#logoImg2');
			inputDiv.value = '';
		},
		// 提交数据跳转的方法
		jumpNextSence(){
			// 提交的数据
			this.$store.state.customMade.mesages = this.mesages;
			// 处理全景维护按钮
			this.$store.state.wffwBtn = this.switch2;
			// 离开动画
			this.rightMove = true;
			setTimeout(()=>{
				// 跳转至首页
				this.$store.state.customMadeFlag = 0;
			},500)
			
		},
		// 定制重大保障事件上传胶片方法
		guaranteeImgPreviewImages(e) {
			let files = e.target.files;
			if(files.length){
				// 将图片文件存在内存里
				for(let i=0;i<files.length;i++){
					if (window.createObjectURL) {
						this.$store.state.guaranteeImg.push(window.createObjectURL(files[i]));
					} else if (window.URL) {
						this.$store.state.guaranteeImg.push(window.URL.createObjectURL(files[i])) ;
					} else{
						return false
					}
				}
			}else{
				return false
			}
			// 将文件存储的内存地址存入vuex
			this.$store.state.customMade.customImg1sUrl = this.$store.state.customMade.customImg1sUrl.concat(this.$store.state.guaranteeImg);
		},
		// 定制维护概况上传胶片方法
		maintainImgPreviewImages(e) {
			let files = e.target.files;
			if(files.length){
				// 将图片文件存在内存里
				for(let i=0;i<files.length;i++){
					if (window.createObjectURL) {
						this.$store.state.maintainImg.push(window.createObjectURL(files[i]));
					} else if (window.URL) {
						this.$store.state.maintainImg.push(window.URL.createObjectURL(files[i])) ;
					} else{
						return false
					}
				}
			}else{
				return false
			}
			// 将文件存储的内存地址存入vuex
			this.$store.state.customMade.customImg1sUrl = this.$store.state.customMade.customImg1sUrl.concat(this.$store.state.maintainImg);
		},
		// 上传客户logo方法
		previewLogo(e) {
			let file = e.target.files[0];
			// 将logo文件存在内存里
			if (window.createObjectURL) {
				this.logo.push(window.createObjectURL(file));
			} else if (window.URL) {
				this.logo.push(window.URL.createObjectURL(file)) ;
			} else{
				return false
			}
			// 将logo文件存储的内存地址存入vuex
			this.$store.state.logo.url = this.logo;
		},
		// 关闭按钮方法
		close(){
			// 离开动画
			this.rightMove = true;
			setTimeout(()=>{
				// 跳转至首页
				this.$store.state.customMadeFlag = 0;
			},500)
		},
		// 检查长传的logo的宽高比，并存入vuex
		checkColume(e) {
			// 获取上传图片的宽高
			let naturalWidth = e.target.naturalWidth;
			let naturalHeight = e.target.naturalHeight;
			// 上传的图片大于等于1.5时判断图片是横版，反之则是竖版，并存入vuex
			if(naturalWidth / naturalHeight >= 1.5) {
				this.$store.state.logo.column = false;
			} else {
				this.$store.state.logo.column = true;
			}
			this.$store.state.logo.asp = naturalWidth / naturalHeight;
		},
		// 放大、缩小方法
		expand(){
			this.expandImg = !this.expandImg;
		}
	},
	watch:{
		// 监听定制按钮二是否打开,打开后各个数据框才可以输入值进行改动
		switch2:{
			handler(newVal,oldVal){
				if(newVal){
					this.$nextTick(()=>{
						// 获取全部的输入框的dom元素并赋值为能改动
						let textareas = document.querySelectorAll('.textarea');
						textareas.forEach(item=>{
							item.disabled = false;
							item.readonly = true;
						})
					})
					
				}else{
					this.$nextTick(()=>{
						// 获取全部的输入框的dom元素并赋值为不能改动
						let textareas = document.querySelectorAll('.textarea');
						textareas.forEach(item=>{
							item.disabled = true;
							item.readonly = false;
						})
					})
					
				}
			},
			immediate:true
		}
	}
	};
</script>

<style scoped>
img{
	width: 100%;
	height: 100%
}
.customMade2 {
	height: 100%;
	width: 100%;
	position: relative;
	overflow: visible;
	transition: all 0.5s;
}
.rightMove{
	left: 100% !important;
}
.customMade2 .switch1{
	position: absolute;
	top: 100px;
	left: 456px;
	transform: scale(0.4);
	border: 6px solid rgb(183 223 238);
	cursor: pointer;
}
.expandImg{
    background: url('../../assets/images/customMadeImgs/imagesComponent/narrow.png') 100% 100% no-repeat !important;
}
.scale{
	transform: scale(1.09);
}
.customMade2 .btn{
	position: absolute;
	font-size: 33px;
}
.customMade2 .xs{
	top: 201px;
    left: 699px;
	display: none;
}
.customMade2 .yc{
	top: 201px;
    left: 809px;
}

.customMade2 .switch2{
	position: absolute;
    top: 470px;
    left: 319px;
    transform: scale(0.2);
    border: 6px solid rgb(183 223 238);
    cursor: pointer;
}
.customMade2 .btn1{
	position: absolute;
	font-size: 29px;
	
}
.customMade2 .xs1{
	top: 574px;
    left: 600px;
	display: none;
}
.customMade2 .yc1{
	top: 574px;
    left: 639px;
}
.customMade2 span {
	display: inline-block;
	width: var(--button-width);
	height: var(--button-height);
	background-color: var(--color-grey);
	border-radius: calc(var(--button-height) / 2);
	position: relative;
	transition: .3s all ease-in-out;
}
.customMade2 span::after {
	content: '';
	display: inline-block;
	width: var(--toggle-diameter);
	height: var(--toggle-diameter);
	background-color: #fff;
	border-radius: calc(var(--toggle-diameter) / 2);
	position: absolute;
	/* top: var(--button-toggle-offset); */
	top: 3px;
	border: 6px solid rgb(183 223 238);
	transform: translateX(var(--button-toggle-offset));
	box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, .10);
	transition: .3s all ease-in-out;
}

.customMade2 input[type="checkbox"]:checked + span {
	background-color: var(--color-green);
}

.customMade2 input[type="checkbox"]:checked + span::after {
	transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)));
	box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, .10);
}

.customMade2 input[type="checkbox"] {
	display: none;
}

.customMade2 input[type="checkbox"]:active + span::after {
	width: var(--toggle-wider);
}
.customMade2 input[type="checkbox"]:checked ~ .xs {
	display: block;
}
.customMade2 input[type="checkbox"]:checked ~ .yc {
	display: none;
}
.customMade2 input[type="checkbox"]:checked ~ .xs1 {
	display: block;
}
.customMade2 input[type="checkbox"]:checked ~ .yc1 {
	display: none;
}

.customMade2 input[type="checkbox"]:checked:active + span::after {
	transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)));
}


.customMade2 .guarantee{
	/* width: 483px;
	height: 126px; */
	width: 373px;
	height: 165px;
	position: absolute;
	right: 264px;
	top: 343px;
}
.customMade2 .guarantee .logoTitle{
	width: 100%;
	height: 100%;
	cursor: pointer;
}
.customMade2 .guarantee:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.maintain{
	width: 373px;
	height: 165px;
	position: absolute;
	right: 264px;
    top: 699px;

}
.maintain .logoTitle{
	width: 100%;
	height: 100%;
	cursor: pointer;
}
.maintain:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.logo{
	width: 483px;
	height: 106px;
	position: absolute;
	left: 689px;
    top: 291px;
}
.logoPreview {
	width: 200px;
	height: 200px;
	position: absolute;	
	/* opacity: 0; */
}
.guaranteeImgDiv{
	width: 38.4px;
	height: 21.6px;
	transform: scale(2.5);
	position: relative;
    top: -124px;
    left: 168px;
	/* background-color: red; */
}
.guaranteeImg {
    /* width: 38.4px;
    height: auto;
    position: relative;
    top: -124px;
    left: 168px;
    transform: scale(2.5); */
	width: 100%;
	height: 100%;
}
.maintainImgDiv{
	width: 38.4px;
	height: 21.6px;
	transform: scale(2.5);
	position: relative;
    top: -124px;
    left: 168px;
	/* background-color: red; */
}
.maintainImg {
	/* width: 38.4px;
    height: auto;
    position: relative;
    top: -124px;
    left: 168px;
    transform: scale(2.5); */
	width: 100%;
	height: 100%;
}
.logoClear{
	width: 83px;
    height: 44px;
	position: absolute;
    top: 314px;
    left: 940px;;
	cursor: pointer;
	/* background-color: red; */
}
.guaranteeImgClear{
	width: 83px;
    height: 44px;
	position: absolute;
    top: 428px;
    left: 1431px;
	cursor: pointer;
	/* background-color: red; */
}
.maintainImgClear{
	width: 83px;
    height: 44px;
	position: absolute;
	top: 784px;
    left: 1431px;
	cursor: pointer;
	/* background-color: red; */
}
.columnPic {
	width: auto;
	height: 62%;
    position: relative;
    top: -100px;
    left: 164px;
}
.normalPic {
	width: 141px;
    height: auto;
    position: relative;
    top: -82px;
    left: 102px;
}
.logo .logoTitle{
	width: 100%;
	height: 100%;
	cursor: pointer;
}
.logo:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.customerName{
	width: 433px;
	height: 79px;
	position: absolute;
	right: 1085px;
    top: 160px;
}
.customerName textarea{
	position: absolute;
    left: 248px;
    top: 15px;
    width: 570px;
    height: 74px;
    font-size: 22px;
    resize: none;
    border: 1px;
	background-color: transparent;
}
.customerName textarea:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.customerName label{
	position: relative;
	top: 0px;
	left: 0px;
	width: 204px;
	height: 100%;
	cursor: pointer;
	display: block;
}
.messages{
	margin: 6px;
    height: 145px;
	/* 声明一个容器 */
    display: grid;
	/* 声明列的宽度,数字7表示的重复7次，即有3列宽度为116px*/
    grid-template-columns: repeat(7, 112px);
	/* 声明行间距和列间距 */
    grid-gap: 24px;
	/* 分别表示两行的高度 */
    grid-template-rows: 46px 46px;
    position: absolute;
    top: 746px;
    left: 285px;
}
.messages textarea{
	width: 100%;
    height: 100%;
    font-size: 26px;
    resize: none;
    border: 1px;
    line-height: 46px;
    text-align: center;
}
.messages textarea:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.khxyzx{
	width: 566px;
    height: 77px;
    position: absolute;
    top: 408px;
    right: 703px;
}
.khxyzx textarea{
	width: 100%;
	height: 100%;
	font-size: 23px;
	resize:none;
	border:1px;
	background-color: transparent;
	overflow: hidden;
}
/* .khxyzx textarea:hover {
	filter: drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
} */
.khxyzx ::-webkit-input-placeholder{
	color: white;
}
.jjhfzzzx{
	width: 566px;
	height: 37px;
	position: absolute;
	top: 426px;
    right: 700px;
}
.jjhfzzzx textarea{
	width: 100%;
	height: 100%;
	font-size: 21px;
	resize:none;
	border:1px;
	background-color: transparent;
	overflow: hidden;
}
/* .jjhfzzzx textarea:hover {
	filter: drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
} */
.jjhfzzzx ::-webkit-input-placeholder{
	color: white;
}
.continue {
	width: 349px;
	height: 90px;
	position: absolute;
	bottom: 37px;
	left: 828px;
	cursor: pointer;
}
.continue:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.continue .en {
	left: 325px;
	font-family: Arial;
}
.close{
  width: 68px;
  height: 68px;
  position: absolute;
  right: 252px;
  top: 97px;
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
  right: 325px;
  top: 97px;
  transform: scale(0.8);
  cursor: pointer;
  background: url('../../assets/images/customMadeImgs/imagesComponent/expand.png') 100% 100% no-repeat ;
}
.expand:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
</style>
