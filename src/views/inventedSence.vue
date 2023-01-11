<template>
	<div class="inventedSence">
		<iframe id="krpanoDiv" src="inventedSence/tour.html" frameborder="0" 
		:class="{'filter':$route.name!=='InventedSence'&&$route.name!=='Zjzl'}" @load="krpanoDivLoad"></iframe>
		<!-- 全局icon -->
      <ul class="senceArray" @click.stop="jumpSence($event)">
        <li class="dt" :class="{liActive : newPageIndex === '00' || newPageIndex === '01'|| newPageIndex === '02' }">
          <img id="dt" src="../assets/images/globalPictrue/leftSenceEn/dt.png" alt="" srcset="">
        </li>
		<li></li>
        <li class="khxyzx" :class="{liActive:newPageIndex === '10' || newPageIndex === '11' || newPageIndex === '12' 
        || newPageIndex === '13' || newPageIndex === '14'}">
          <img id="khxyzx" src="../assets/images/globalPictrue/leftSenceEn/khxyzx.png" alt="" srcset="">
        </li>
		<li></li>
        <li class="jjzzzx" :class="{liActive:newPageIndex === '20' || newPageIndex === '21' || newPageIndex === '22' 
        || newPageIndex === '23' || newPageIndex === '24' || newPageIndex === '25' || newPageIndex === '26'}">
          <img id="jjzzzx" src="../assets/images/globalPictrue/leftSenceEn/jjzzzx.png" alt="" srcset="">
        </li>
		<li></li>
        <li class="csyzzx" :class="{liActive:newPageIndex === '30' || newPageIndex === '31' || newPageIndex === '32' }">
          <img id="csyzzx" src="../assets/images/globalPictrue/leftSenceEn/csyzzx.png" alt="" srcset="">
        </li>
		<li></li>
        <li class="khjlzx"  :class="{liActive:newPageIndex === '50' || newPageIndex === '51' 
		|| newPageIndex === '52' || newPageIndex === '53' || newPageIndex === '54'
		}">
          <img id="khjlzx" src="../assets/images/globalPictrue/leftSenceEn/khjlzx.png" alt="" srcset="">
        </li>
		<li></li>
		<li class="zjzl" :class="{liActive:newPageIndex === '40'}">
          <img id="zjzl" src="../assets/images/globalPictrue/leftSenceEn/zjzl.png" alt="" srcset="">
        </li>
      </ul>
		<!-- 全景子页面入口 -->
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'realSence',
	data() {
		return {
			start:true,
			wffwBtnShowTimer:null,
			krpanoWordShowTimer:null,
			test: true,
			testTimer:null
		};
	},
	mounted() {
		setTimeout(()=>{
			this.krpanoWordLoad();
		},90)
	},
	watch:{
		'$store.state.dtBtnShow': {
			// 深度监听
			deep: true,
			handler(newValue) {
				newValue===true ? this.krpanoDivLoad() : '';
				newValue===true ? this.krpanoWordLoad() : '';
			},
		},
	},
	computed:{
    // logo地址
    logo_(){
        return this.$store.state.logo.url
	},
	// 客户定制信息
	mesagesCustomerName(){
		return this.$store.state.customMade.mesages
	},
	// 获取当前场景id
	newPageIndex(){
		return this.$store.state.operationArr.at(-1);
	},

    },
	methods: {
		// 全景加载触发事件
		krpanoDivLoad(){
			// 获取krpano DOM 元素
			let krpanoIframe = document.getElementById('krpanoDiv').contentWindow;
			let krpano = krpanoIframe.document.getElementById('krpanoSWFObject');

			// 全景维护服务概览按钮消失显示
			this.wffwBtnShow();

			// 上传logo处理
			if(this.logo_.length>0){
            // 宽高比是否大于1.5
				if(this.$store.state.logo.asp<=1){
					krpano.call('set(hotspot[logo1].width,383);');
					krpano.call('set(hotspot[logo1].height,'+383/this.$store.state.logo.asp+');');
					krpano.call('set(hotspot[logo1].scale,0.3);');
					krpano.call('set(hotspot[logo1].ry,13.3);');
				}else if(this.$store.state.logo.asp<2){
					krpano.call('set(hotspot[logo1].height,383);');
					krpano.call('set(hotspot[logo1].width,'+383*this.$store.state.logo.asp+');');
					krpano.call('set(hotspot[logo1].ry,13.9);');
				}else{
					krpano.call('set(hotspot[logo1].height,383);');
					krpano.call('set(hotspot[logo1].width,'+383*this.$store.state.logo.asp+');');
					krpano.call('set(hotspot[logo1].ry,14.0);');
					krpano.call('set(hotspot[logo1].scale,0.18);');
				}
				krpano.call('set(hotspot[logo1].url,' + this.logo_[0] + ');');
				krpano.call('set(hotspot[logo1].visible,true);');
        	}
			// 动态文字、文字背景、箭头
		},
		// 客户定制文字拆解switch方法
		switch1To5(v,krpano){
			switch(v){
				case 1 :
					krpano.call('set(hotspot[welcomeBtBgdt2].width,1055);');
					break;
				case 2 :
					krpano.call('set(hotspot[welcomeBtBgdt2].width,1055);');
					break;
				case 3 :
					krpano.call('set(hotspot[welcomeBtBgdt2].width,1055);');
					krpano.set('a',1.003);
					krpano.set('b',0.998);
					break;
				case 4 :
					krpano.call('set(hotspot[welcomeBtBgdt2].width,1075);');
					krpano.set('a',1.007);
					krpano.set('b',0.994);
					krpano.call('set(hotspot[welcomeArrowRightdt2].atv,-27.2);');
					krpano.call('set(hotspot[welcomeArrowLeftdt2].atv,-28.1);');
					break;
				case 5 :
					krpano.call('set(hotspot[welcomeBtBgdt2].width,1105);');
					krpano.set('a',1.012);
					krpano.set('b',0.982);
					krpano.call('set(hotspot[welcomeArrowRightdt2].atv,-27.0);');
					krpano.call('set(hotspot[welcomeArrowLeftdt2].atv,-27.8);');
					krpano.call('set(hotspot[welcomeArrowRightdt2].scale,0.57);');
					krpano.call('set(hotspot[welcomeArrowLeftdt2].scale,0.57);');
					break;
				default:
					break;
			}
			
		},
		// 客户定制文字拆解switch方法
		switch6To8(v,krpano){
			switch(v){
				case 6 :
					krpano.call('set(hotspot[welcomeBtBgdt2].width,1155);');
					krpano.set('a',1.018);
					krpano.set('b',0.976);
					krpano.call('set(hotspot[welcomeArrowRightdt2].atv,-26.3);');
					krpano.call('set(hotspot[welcomeArrowLeftdt2].atv,-27.3);');
					break;
				case 7 :
					krpano.call('set(hotspot[welcomeBtBgdt2].width,1165);');
					krpano.set('a',1.019);
					krpano.set('b',0.969);
					krpano.call('set(hotspot[welcomeArrowRightdt2].atv,-26.2);');
					krpano.call('set(hotspot[welcomeArrowLeftdt2].atv,-27.0);');
					break;
				case 8 :
					krpano.call('set(hotspot[welcomeBtBgdt2].width,1175);');
					krpano.set('a',1.023);
					krpano.set('b',0.962);
					krpano.call('set(hotspot[welcomeArrowRightdt2].atv,-26.1);');
					krpano.call('set(hotspot[welcomeArrowLeftdt2].atv,-27.0);');
					break;
				default:
					break;
			}
			
		},
		// 客户定制文字拆解switch方法
		switch9TO11(v,krpano){
			switch(v){
				case 9 :
					krpano.call('set(hotspot[welcomeBtBgdt2].width,1225);');
					krpano.set('a',1.026);
					krpano.set('b',0.955);
					krpano.call('set(hotspot[welcomeArrowRightdt2].atv,-25.8);');
					krpano.call('set(hotspot[welcomeArrowLeftdt2].atv,-26.7);');
					break;
				case 10 :
					krpano.call('set(hotspot[welcomeBtBgdt2].width,1245);');
					krpano.set('a',1.029);
					krpano.set('b',0.948);
					krpano.call('set(hotspot[welcomeArrowRightdt2].atv,-25.5);');
					krpano.call('set(hotspot[welcomeArrowLeftdt2].atv,-26.4);');
					break;
				case 11 :
					krpano.call('set(hotspot[welcomeBtBgdt2].width,1275);');
					krpano.set('a',1.034);
					krpano.set('b',0.943);
					krpano.call('set(hotspot[welcomeArrowRightdt2].atv,-25.2);');
					krpano.call('set(hotspot[welcomeArrowLeftdt2].atv,-26.1);');
					break;
				default:
					break;
			}
			
		},
		// 客户定制文字加载方法
		krpanoWordLoad(){
			// 获取krpano DOM 元素
			let krpanoIframe = document.getElementById('krpanoDiv').contentWindow;
			let krpano = krpanoIframe.document.getElementById('krpanoSWFObject');
			// 如果客户上传了客户名字,显示的文字是客户名字加vuex存的默认文字
				krpano.call('set(hotspot[welcomeTitledt2].html,'+this.$store.state.customMade.mesages.customerName+');')
				// 获取拼接后的文字长度
				let len = this.$store.state.customMade.mesages.customerName.length - 49;
				// 根据长度来动态修改全景文字蓝色背景的长度和两个箭头在全景里面的位置和大小
				switch(true){
					case len>0 && len<6:
						this.switch1To5(len,krpano)
						break;
					case len>=6 && len<9:
						this.switch6To8(len,krpano)
						break;
					case len>=9 && len<12:
						this.switch9TO11(len,krpano)
						break;
					default:
				}
		},
		jumpSence(e){
			if(this.test && e.target.id.length>0){
				// 点击自己两次
				let fdIndex = ['dt','khxyzx','jjzzzx','csyzzx','zjzl','khjlzx'].indexOf(`${e.target.id}`);
				if(this.$store.state.operationArr.at(-1)==['00','10','20','30','40','50'][fdIndex]){
					return false
				}else{
					this.addOperation(e.target.id,['dt','khxyzx','jjzzzx','csyzzx','zjzl','khjlzx'],
					['00','10','20','30','40','50']);
					// 跳转场景时设置1s的防抖时间
					if(e.target.id !== 'zjzl'){
						this.test = false;
						this.testTimer!==null ? clearTimeout(this.testTimer) : '';
						this.testTimer = setTimeout(() => {
							this.test = true;
							this.testTimer = null;
						}, 1500);
						// 如果路由不在当前全景路由，先跳入全景路由
						if(this.$route.name!=='InventedSence'){
							this.$router.push({name:'InventedSence',query: {
								lang: this.$i18n.locale
							}})
						}
						let krpanoIframe = document.getElementById('krpanoDiv').contentWindow;
						let krpano = krpanoIframe.document.getElementById('krpanoSWFObject');
						// 跳转场景，如果当前在专家专利那不需要旋转场景，直接跳入场景
						if(this.$store.state.operationArr.at(-2)=='40'){
							krpano.call(`jump1(scene_${e.target.id});`)
						}else{
							krpano.call(`jump(scene_${e.target.id});`);
						}
					}else{
						this.$router.push({name:'Zjzl',query: {
							lang: this.$i18n.locale
						}})
					}
				}
			}
		},
		// 全景维护服务概览按钮方法
		wffwBtnShow(){
				let krpanoIframe = document.getElementById('krpanoDiv').contentWindow;
				let krpano = krpanoIframe.document.getElementById('krpanoSWFObject');
				// 跳转场景
				if(this.$store.state.maintainImg.length>0||this.$store.state.wffwBtn===true){
					setTimeout(()=>{
						krpano.set('hotspot[whfwgl].visible', true);
						krpano.set('hotspot[whfwgl_btn].visible', true);
					},200)
				}else{
					return false
				}
		}
	}
};
</script>

<style scoped>

.inventedSence {
	height: 100%;
	width: 100%;
	position: relative;
	overflow: visible;
	
}
.inventedSence img{
	width: 100%;
	height: 100%;
}
.inventedSence #krpanoDiv{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
.inventedSence .senceArray{
	position: absolute;
	left: -9px;
    bottom: 81px;
    width: 211px;
    /* height: 1000px; */
	height: 963px;
    transform: scale(0.9);
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	z-index: 20;
}
.inventedSence .senceArray li{
	transform: scale(0.7);
	cursor: pointer;
}
.inventedSence .senceArray li:hover {
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.inventedSence .senceArray li img{
	width: 100%;
	height: 100%;
}
.inventedSence .senceArray .dt{
	/* width: 211px;
	height: 164px; */
	width: 184px;
	height: 126px;
}
.inventedSence .senceArray .khxyzx{
	/* width: 211px;
	height: 140px; */
	width: 182px;
	height: 142px;
}
.inventedSence .senceArray .csyzzx{
	/* width: 211px;
	height: 149px; */
	width: 203px;
	height: 148px;
}
.inventedSence .senceArray .jjzzzx{
	/* width: 211px;
	height: 147px; */
	width: 205px;
	height: 148px;
}
.inventedSence .senceArray .khjlzx{
	/* width: 176px;
	height: 159px; */
	width: 177px;
	height: 135px;
}
.inventedSence .senceArray .zjzl{
	/* width: 211px;
	height: 134px; */
	width: 176px;
	height: 135px;
}
.inventedSence .senceArray li:nth-of-type(even){
	transform: scale(1) !important;
	width: 1px;
	height: 30px;
	border-right: solid white 2px;
	cursor: auto;
}
.inventedSence .senceArray li:nth-of-type(odd):hover{
	transform: scale(1) !important;
}
.inventedSence .liActive{
	filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
	transform: scale(1) !important;
}
.inventedSence .wbWorld{
	position: absolute;
	left: 50%;
	bottom: 30px;
	transform: translateX(-50%);
	width: 1248px;
	height: 93px;
	z-index: 20;
}
.wbWorldKhxyzx{
	width: 1261px !important;
	height: 146px !important;
}
.wbWorldZjzl{
	width: 1248px !important;
	height: 128px !important;
}
.filter{
	/* filter: blur(10px); */
	filter: brightness(0.5) blur(10px);
}
</style>
