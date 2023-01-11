<template>
	<div class="realSence">
		
		<img :class="this.$store.state.customMadeFlag!==0?'filter':''" 
        src="../assets/images/realSencePictrue/bg.png" alt="" srcset="">
		<!-- 进入全景 -->
		<div :class="this.$store.state.customMadeFlag!==0?'filter':''" class="start" 
        @click="jumpSence('InventedSence')"></div>
		<!-- 定制页面2 -->
		<customMade2 class="customMade" :class="animate===1?'customMadeOpacity':''" 
        v-if="this.$store.state.customMadeFlag===1"></customMade2>
		<!-- 上传页面 -->
		<div alt="" class="jumpcustomMade1" @click="jumpCustomMade1"></div>
		<div :class="`cornner${$t('language.name')}`"></div>
	</div>
</template>

<script>
import customMade2 from './customMade/customMade2.vue'
export default {

	name: 'realSence',
	components: {
		customMade2
	},
	data() {
		return {
			start:true,
			customMadeFlag:0,
			animate:undefined,
			animateTime:null
		};
	},
	mounted() {
	},
	watch:{
	},
	methods: {
		// 跳转到全景方法
		jumpSence(str){
			this.$store.state.newIndex = 0
			this.$router.push({name:str,query: {
				lang:this.$i18n.locale
			}})
		},
		// 跳转到定制页面1
		jumpCustomMade1(){
			this.$store.state.customMadeFlag=1;
		}
	},
	updated(){
		// 页面更新赋值并加上动效
		this.animateTime !== null ? clearTimeout(this.animateTime) : '';
		this.animateTime = setTimeout(() => {
			this.animate = this.$store.state.customMadeFlag;
			this.animateTime = null;
		}, 200);
	}
};
</script>

<style scoped>

.realSence {
	height: 100%;
	width: 100%;
	position: relative;
	overflow: visible;
}
.customMade{
	position: absolute;
	top: 0;
	left: -100%;
	transition: all 0.5s;
}
.customMadeOpacity{
	left: 0;
}
.filter{
	filter: blur(10px);
}
.start {
	width: 802px;
	height: 99px;
	position: absolute;
	top: 561px;
	left: 546px;
	cursor: pointer;
	background: url('../assets/images/realSencePictrue/mouse.png') center center / 100% 100% no-repeat;
}
.start:hover {
		filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
	}
.explore {
	font-size: 25px;
	color: #FFF;
	text-shadow: 3px 3px 7px #002e53;
}
.en {
	left: 325px;
	font-family: Arial;
}
.jumpcustomMade1	 {
	width: 50px;
	height: 50px;
	position: absolute;
	right: 0px;
	bottom: 0px;
	background-color: rgb(207, 229, 246);
	cursor: pointer;
}
.cornnerCn {
	width: 236px;
	height: 70px;
	position: absolute;
	left: 53px;
	top: 964px;
	background: url('../assets/images/heretohelpCn.png') center center / 100% 100% no-repeat;
	}

.cornnerEn {
	width: 751px;
	height: 423px;
	position: absolute;
	left: -158px;
	top: 792px;
	transform: scale(0.55);
	background: url('../assets/images/heretohelpEn.png') center center / 100% 100% no-repeat;
}
</style>
