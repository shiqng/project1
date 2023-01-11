<template>
  <div class="big" v-show="$route.name=='Home'||$route.name=='Zjzl'||newPageIndex === '00'||newPageIndex === '01'||
  newPageIndex === '10'||newPageIndex === '02'|| newPageIndex === '11'||newPageIndex === '20'||newPageIndex === '21'||
  newPageIndex === '23'||newPageIndex === '24'||newPageIndex === '25'||newPageIndex === '30'||newPageIndex === '31'||
  newPageIndex === '32'||newPageIndex === '33'||newPageIndex === '50'||newPageIndex === '51'||newPageIndex === '52'">
	<img class="txt_bg" src="../assets/images/txt_bg.png" alt="" :class="{'developImg':newPageIndex === '02'}">
	<div class="txt_div" v-show="$route.name!=='Home'&&newPageIndex === '00'">
		<p>GTAC Romania located in Bucharest and Budapest, provides 24/7 support to assure stable</p>
		<p>and secure network operations for customers.</p>
	</div>
	<div class="txt_div" v-show="$route.name!=='Home'&&newPageIndex === '01'">
		<p>The business scope of GTAC Romania includes customer service request handling,</p>
		<p>emergency recovery, change review assurance and key event assurance.</p>
	</div>
	<div class="txt_div" v-show="$route.name!=='Home'&&newPageIndex === '02'" :class="{'develop':newPageIndex==='02'}">
		<p>Since its establishment, Huawei GTAC has been going through three development stages, 
			from reactive services,</p>
		<p>to fast service recovery with global three-tier network assurance system, to proactive services.</p>
	</div>
	<div class="txt_div" v-show="newPageIndex === '10'">
		<p>Welcome to Customer Response Center. Customers can access through Emails, Web, B2B</p>
		<p>and Phone.</p>
	</div>
	<div class="txt_div" v-show="newPageIndex === '11'">
		<p>B2B integration shortens SR handling and escalation process, and provides full visibility and</p>
		<p>transparency to track the progress.</p>
	</div>
	<div class="txt_div" v-show="newPageIndex === '20'">
		<p>For emergencies, Emergency Recovery Warroom immediately start service recovery.</p>
	</div>
	<div class="txt_div" v-show="newPageIndex === '21'">
		<p>Huawei has established a three-tier global network assurance system to quickly restore</p>
		<p>services through digital platforms, standardized operations and processes.</p>
	</div>
	<div class="txt_div" v-show="newPageIndex === '23'">
		<p>The Emergency Recovery Warroom quickly convene global experts,</p>
	</div>
	<div class="txt_div" v-show="newPageIndex === '24'">
		<p>and visualize service recovery processes.</p>
	</div>
	<div class="txt_div" v-show="newPageIndex === '25'">
		<p>output service recovery solutions with recovery tree assisted,</p>
	</div>
	<div class="txt_div" v-show="newPageIndex === '30'">
		<p>Before solution implementation, Test and Verification Center provides solution</p>
		<p>verification services.</p>
	</div>
	<div class="txt_div" v-show="newPageIndex === '31'">
		<p>Test and Verification Center sets up network for complex scenarios and verifies solutions for all</p>
		<p>products and scenarios.</p>
	</div>
	<div class="txt_div" v-show="newPageIndex === '32'&&$store.state.csyzzx1CoverFlag!==2">
		<p>Cover all products and scenarios. Ensure solutions and operations are correct.</p>
	</div>
	<div class="txt_div" v-show="newPageIndex === '32'&&$store.state.csyzzx1CoverFlag===2">
		<p>Test and Verification Center provides enviroment setup and services for fault location,</p>
		<p>solution verification, and accident drill.</p>
	</div>
	<div class="txt_div" v-show="newPageIndex === '33'">
		<p>Test and Verification Center provides enviroment setup and services for fault location,</p>
		<p>solution verification, and accident drill.</p>
	</div>
	<div class="txt_div" v-show="$route.name==='Zjzl'" :class="{'zjzl':$route.name==='Zjzl'}">
		<p>Huawei continuously invests in the maintenance and operation field, focuses on expert 
			competency improvement,</p>
		<p>operation technology innovation, and develops the management system that 
			complies with industry standard.</p>
	</div>
	<div class="txt_div" v-show="newPageIndex === '50'">
		<p>Huawei is dedicated to the stability and security of our customers network.</p>
	</div>
	<div class="txt_div" v-show="newPageIndex === '51'">
		<p>With digital platform, two support centers, and professional service teams,</p>
		<p>GTAC Romania provides services to ensure uninterrupted network operation.</p>
	</div>
	<div class="txt_div" v-show="newPageIndex === '52'">
		<p>During major holidays and key events, Huawei also provides key event assurance service.</p>
	</div>
	<audio class="audio" :src="audioSrc?audioSrc:'../assets/audios/2/1.mp3'"></audio>
  </div>
</template>

<script>
export default {
	data(){
		return{
			audioSrcObj:{'00':require('../assets/audios/2/21.mp3'),'01':require('../assets/audios/2/22.mp3'),
				'02':require('../assets/audios/2/23.mp3'),'10':require('../assets/audios/3/31.mp3'),
				'11':require('../assets/audios/3/32.mp3'),'20':require('../assets/audios/4/41.mp3'),
				'21':require('../assets/audios/4/45.mp3'),'23':require('../assets/audios/4/42.mp3'),
				'24':require('../assets/audios/4/44.mp3'),'25':require('../assets/audios/4/43.mp3'),
				'30':require('../assets/audios/5/51.mp3'),'31':require('../assets/audios/5/53.mp3'),
				'32':require('../assets/audios/5/54.mp3'),'321':require('../assets/audios/5/52.mp3'),
				'33':require('../assets/audios/5/52.mp3'),'40':require('../assets/audios/6.mp3'),
				'50':require('../assets/audios/7/1.mp3'),'51':require('../assets/audios/7/2.mp3'),
				'52':require('../assets/audios/7/3.mp3')
			},
			audioPauseConditionArr:['0001','0002','1011','1012','1013','1014','2120','2021',
			'2022','2023','2024','2025','2026','3033','3132','5051','5052','5253','5254'],
			senceAudioDealy:['00','10','20','30','31','50'],
			isNotAudioPage:['12','13','14','22','26','53','54'],
			timer:null
		}
	},
	computed:{
		newPageIndex(){
			return this.$store.state.operationArr.at(-1);
		},
		preNewPageIndex(){
			return this.$store.state.operationArr.at(-2)?this.$store.state.operationArr.at(-2):'00';
		},
		audioSrc(){
			let audioSrc =  this.audioSrcObj[`${this.newPageIndex}`];
			let condition = this.newPageIndex+this.preNewPageIndex;
			// 单独判断测试内页翻页到第三页是单独赋值音频地址
			if(this.newPageIndex === '32'){
				if(this.$store.state.csyzzx1CoverFlag!==2){
					audioSrc = this.audioSrcObj['32']
				}else{
					audioSrc = this.audioSrcObj['321']
				}
			}
			// 如果当前页面是全景场景延时播放音频
			if(this.senceAudioDealy.includes(this.newPageIndex)){

				this.$nextTick(()=>{
					this.backSencePauseAudio(this.audioPauseConditionArr,condition)
				})
			}else{
				if(this.isNotAudioPage.includes(this.newPageIndex)){
					return
				}else{
					this.$nextTick(()=>{
						setTimeout(()=>{
							let audio = document.querySelector('.audio')
							audio.currentTime = 0;
							audio.play();
						},0)
					})
				}
				
			}
			return audioSrc ? audioSrc: ''
		}
	},
	watch:{
		// 静音方法监听
		'$store.state.voiceMuted':{
			handler(newVal,oldVal){
				this.$nextTick(()=>{
					let audio = document.querySelector('.audio')
					if(newVal){
						audio.muted = false
					}else{
						audio.muted = true; 
					}
				})
			},
			immediate:true
		}
	},
	methods:{
		// 场景子页面返回到场景暂停声音
		backSencePauseAudio(audioPauseConditionArr,condition){
			let audio = document.querySelector('.audio')
			// 从场景子页面返回到场景是音频暂停
			if(audioPauseConditionArr.includes(condition)){
				this.timer?clearTimeout(this.timer):''
				this.$nextTick(()=>{
					if(this.$store.state.sonPageBackAudio){
						audio.currentTime = 0;
						audio.play();
						if(this.timer){
							clearTimeout(this.timer);
							audio.pause();
						}
					}else{
						audio.pause();
					}
					this.$store.state.sonPageBackAudio=false;
				},0)
			}else{
				if(this.$store.state.operationArr.length===1){
					setTimeout(()=>{
						audio.currentTime = 0;
						audio.play();
					},0)
				}else{
					this.timer?clearTimeout(this.timer):''
					this.timer = setTimeout(()=>{
						audio.currentTime = 0;
						audio.play();
					},2000)
				}
			}
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
	width: 100%;
	bottom: -30px;
	position: absolute;
	background: #eee;
}
.img_wb{
	right: 20px;
    bottom: -108px;
	position: absolute;
	transform: scale(.3);
}
.txt_bg{
	width: 66%;
	right: 331px;
    bottom: 61px;
	position: absolute;
}
.txt_div{
	width: 1100px;
    height: 80px;
    position: absolute;
    bottom: 70px;
    left: 410px;
	display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: center;
}
.txt_div p{
	/* font-size: 23px; */
	font-size: 21px;
	color: #FAFBFC;
}
.fontSmall{
	width: 1205px;
	left: 356px;
}
.zjzl{
	width: 1206px;
    left: 370px;
}
.pjj{
	width: 1205px;
	left: 361px;
}
.develop{
	width: 1208px !important;
    bottom: 66px !important;
    left: 360px !important;
}
</style>