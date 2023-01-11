<template>
  <div id="app">
    <!-- 地球 -->
    <div style="position: absolute;left: 0;top: 0;z-index:1">
      <router-view v-if="$route.name=='Home'"/>
      <div class="txt_div" v-if="$route.name=='Home'&&wbWordSy">
        <p>Welcome to visit Huawei Global Technical Assistance Center(GTAC) which is located in China,</p>
        <p>Romania and Mexico. Let's start exploring.</p>
      </div>
    </div>
    <!-- 首页 -->
    <div class="test1">
      <router-view  v-if="$route.name!=='Home'"/>
      <div class="backGtac" @click="backGtac" v-show="$route.name==='GtacXiAn'||$route.name==='RealSence'"></div>
      <!-- 继续，下一步 -->
      <div class="nextGo" v-show="$route.name!=='RealSence'&&$route.name!=='Home'
      &&$store.state.operationArr.at(-1)!=='40'
      &&$route.name!=='ImagesComponent'&&$route.name!=='ImagesComponentKea'
      &&$route.name!=='MessageBar'&&$route.name!=='GtacXiAn'
      &&$route.name!=='KhxyzxVideoEmail'&&$route.name!=='KhxyzxVideoWeb'
      &&$route.name!=='JjzzzxVideoConvening'&&$route.name!=='JjzzzxVideoReview'
      &&$route.name!=='KhjlzxVideoKeaEarthquake'&&$route.name!=='KhjlzxVideoKeaOktoberfest'
      "
      @click.stop="nextGo"></div>
      <!-- 维保gif图 -->
      <img class="img_wb" v-show="$route.name!=='Home'&&$route.name!=='GtacXiAn'" src="./assets/images/wb.gif" 
      @click.stop="wbWordIsShow" alt="" >
      
       <!-- 左边侧边栏 -->
      <ul class="iconArray" v-if="$route.name!=='Home'&&$route.name!=='GtacXiAn'&&$route.name!=='RealSence'">
        <li>
          <!-- 旋转到初始角度 -->
          <img @click.stop="rotateAngle" src="./assets/images/globalPictrue/360.png" alt="" srcset="">
        </li>
        <!-- 退出exe程序 -->
        <!-- <li>
          <img @click.stop="sendExit" src="./assets/images/globalPictrue/exit.png" alt="" srcset="">
        </li> -->
          <!-- 打开、关闭声音 -->
        <li @click.stop="voiceMuted">
          <img :src="$store.state.voiceMuted===true?volume:volumeMuted" alt="" srcset="">
        </li>
        <!-- 返回到首页或地球 -->
        <li @click.stop="backHome">
          <img src="./assets/images/globalPictrue/home.png" alt="" srcset="">
        </li>
      </ul>

      <!-- 维宝解说词 -->
      <transition name="slide">
        <webSpeak v-if="$route.name!=='Home'&&$route.name!=='RealSence'
        &&$route.name!=='MessageBar'&&$route.name!=='ImagesComponent'
        &&$route.name!=='ImagesComponentKea'&&$route.name!=='GtacXiAn'&&wbWord"></webSpeak>
      </transition>
      <!-- 回退 -->
      <div class="Fallback" @click.stop="routerBack(false)" v-show="$route.name!=='Home'
      &&$route.name!=='RealSence'&& $store.state.customMadeFlag!==1&& $store.state.customMadeFlag!==2
      &&$store.state.operationArr.length>1&&$route.name!=='GtacXiAn'"></div>
    </div>
  </div>
</template>

<script>
import webSpeak from './components/webSpeak.vue'
import ShowAll from './assets/js/showall.js'
export default {
  data() {
    return {
      ind:0,
      nextGoArr:[
        'InventedSence','dt','DtImage','khxyzx','KhxyzxVideoB2b','KhxyzxVideoEmail','KhxyzxVideoWeb',
        'KhjlzxVideoBusiness','jjzzzx','JjzzzxVideoConvening','JjzzzxVideoOnline','JjzzzxVideoProgress',
        'JjzzzxVideoAnalysis','JjzzzxVideoReview','csyzzx','csyzzx1','Csyzzx1Cover','zjzl','khjlzx',
        'KhjlzxVideoBusiness','KhjlzxVideoKea'
      ],
      senceChangeSuccess:false,
      nextGoFlag: true,
			nextGoFlagTimer:null,
      volume:require('./assets/images/globalPictrue/volume.png'),
      volumeMuted:require('./assets/images/globalPictrue/volumeMuted.png'),
      backDelayArr:['00','10','20','30','31','50']
    };
  },
  components:{
    webSpeak
  },
  computed:{
    newPageIndex(){
      return this.$store.state.operationArr.at(-1);
    },
    wbWord(){
      return this.$store.state.wbWord;
    },
    wbWordSy(){
      return this.$store.state.wbWordSy;
    }
  },
  mounted() {
     // 存出现在的场景信息
    window.addEventListener('message',(e)=>{
        let data_ = e.data.e;
        // 如果全景穿的值不是undefined就执行下面方法
          if(data_){
            // 如果当前要进入的场景是dt,就给vuex的dtBtnShow赋值为true以便于全景的按钮显示
            if(data_==='dtBtnShow'){
              this.$store.state.dtBtnShow = true;
              // 柱状图
            }else if(data_==='MessageBar'){
              // 如果定制二页打开就跳到柱状图否则跳到胶片展示页
              if(this.$store.state.wffwBtn===true){
                this.$router.push({name:'MessageBar',query: {
                    lang:this.$i18n.locale
                }})
              }else{
                this.$router.push({name:'ImagesComponent',query: {
                    lang:this.$i18n.locale
                }})
              }
            }else if(data_==='senceChangeSuccess'){
              this.senceChangeSuccess = true;
            }else{
              // 如果data不是cs场景或other就路由跳转到对应页面并设置全景按钮消失
              (data_!=='csxyzx'&&data_!=='csxyzx1'&&data_!=='other'&&data_!=='senceChangeSuccess') ? 
              this.$router.push({name:data_,query: {lang:this.$i18n.locale}}) : '';
              this.$store.state.dtBtnShow = false;
            }
            // 添加按钮点击操作传入值进入数组
            this.addOperation(data_,['DtImage','Development','KhxyzxVideoB2b','KhxyzxVideoEmail',
            'KhxyzxVideoPhone','KhxyzxVideoWeb','JjzzzxVideoPlatform','JjzzzxVideoConvening',
            'JjzzzxVideoOnline','JjzzzxVideoProgress','JjzzzxVideoAnalysis','JjzzzxVideoReview',
            'csxyzx','csxyzx1','Csyzzx1Cover','CsyzzxCover','KhjlzxVideoBusiness','KhjlzxVideoKea',
            'KhjlzxVideoKeaEarthquake','KhjlzxVideoKeaOktoberfest'],
             ['01','02','11','12','13','14','21','22','23','24','25','26','30','31','32','33','51','52','53','54'])
          }else{
            return false;
          }
      }
    );

    // 中英文切换
    let test = document.getElementsByClassName('test1')[0];
  
    new ShowAll(test, this.width, this.height);

    if (this.$route.query.lang == 'en-US') {
      this.$i18n.locale = 'en-US';
    } else if (this.$route.query.lang == 'cn-ZH') {
      this.$i18n.locale = 'cn-ZH';
    } else {
      this.$i18n.locale = 'en-US';
      window.location.href = '#/?lang=en-US';
    }
  },
  watch:{
    '$store.state.wbWord':{
			handler(newVal,oldVal){
				if(oldVal===false){
          this.$store.state.sonPageBackAudio = true;
				}else{
          this.$store.state.sonPageBackAudio = false;
        }
			},
		}
  },
  methods: {
    // 中英文切换
    lang() {
      if (this.$route.query.lang === 'cn-ZH') {
        this.$router.push({
          query: {
            lang: 'en-US',
          },
        });
      } else {
        this.$router.push({
          query: {
            lang: 'cn-ZH',
          },
        });
      }
      this.$i18n.locale = this.$route.query.lang;
    },
    // 静音方法
    voiceMuted(){
      this.$store.state.voiceMuted ? this.$store.state.voiceMuted = false :
      this.$store.state.voiceMuted = true;
    },
    // 维宝文字消失出现
    wbWordIsShow(){
      this.$store.state.wbWord=!this.$store.state.wbWord;
    },
    // 返回GTAC二期
    backGtac(){
      if(this.$route.name==='GtacXiAn'){
        this.$router.push({name:'Home',query: {
          lang:this.$i18n.locale
        }})
      }else{
        this.backHome();
      }
    },

    // 返回首页
    backHome(){
      if(this.$route.name==='Home'){
        return false;
      }
      // 处理定制页面回到地球
      if(this.$store.state.customMadeFlag === 1){
        this.$store.state.customMadeFlag = 0;
      }
      
      // 清空数组
      this.$store.state.operationArr=['00'];
      // 跳转到首页
      if(this.$route.name==='RealSence'){
        this.$router.push({name:'Home',query: {
          lang:this.$i18n.locale
        }})
      }else{
        this.$router.push({name:'RealSence',query: {
          lang:this.$i18n.locale
        }})
      }
    },
    // 场景0-10
    routerBackSwirch0TO10(isIndexNum,krpano){
      switch (isIndexNum){
         case 0:{
          this.$router.push({name:'InventedSence',query: {lang:this.$i18n.locale}});
          if(this.$store.state.operationArr.at(-1) % 10 == 0 || this.$store.state.operationArr.at(-1) == '00'){
            this.$store.state.operationArr.at(-1)!=='40' ? krpano.call('jump(scene_dt);') : krpano.call('jump1(scene_dt);');
          }else{this.$store.state.operationArr.at(-1)!==('01'&&'40') ? krpano.call('jump1(scene_dt);') : '';}
          break;
        }
        case 1:{
          this.$store.state.operationArr.at(-1).slice(0,1) != 0 ?  krpano.call('jump1(scene_dt);') : '';
          this.$router.push({name:'DtImage',query: { lang:this.$i18n.locale}});  
          break;
        }
        case 2:{
          this.$store.state.operationArr.at(-1).slice(0,1) != 0 ?  krpano.call('jump1(scene_dt);') : '';
          this.$router.push({name:'Development',query: { lang:this.$i18n.locale}});  
          break;
        }
        case 10:{
          this.$router.push({name:'InventedSence',query: {lang:this.$i18n.locale}});
          if(this.$store.state.operationArr[this.$store.state.operationArr.length - 1] % 10 == 0 || 
          this.$store.state.operationArr[this.$store.state.operationArr.length - 1] == '00'){
            this.$store.state.operationArr.at(-1)!=='40' ? krpano.call('jump(scene_khxyzx);') : krpano.call('jump1(scene_khxyzx);');
          }else{
            this.$store.state.operationArr.at(-1).slice(0,1)!=1 ? krpano.call('jump1(scene_khxyzx);') : '';
          }
          break;
        }
        default:{
          break;
        }
      }
    },
    // 场景11-13
    routerBackSwirch11TO13(isIndexNum,krpano){
      switch (isIndexNum){
        case 11:{
          this.$store.state.operationArr.at(-1) - 10 > 9 ?  krpano.call('jump1(scene_khxyzx);') : '';
          this.$router.push({name:'KhxyzxVideoB2b',query: {lang:this.$i18n.locale}});
          break;
        }
        case 12:{
          this.$store.state.operationArr.at(-1) - 10 > 9 ?  krpano.call('jump1(scene_khxyzx);') : '';
          this.$router.push({name:'KhxyzxVideoEmail',query: {lang:this.$i18n.locale}});
          break;
        }
        case 13:{
          this.$store.state.operationArr.at(-1) - 10 > 9 ? krpano.call('jump1(scene_khxyzx);') : '';
          this.$router.push({name:'KhxyzxVideoPhone',query: {lang:this.$i18n.locale}});
          break;
        }
        default:{
          break;
        }
      }
    },
    // 场景14-21
    routerBackSwirch14TO21(isIndexNum,krpano){
      switch (isIndexNum){
        case 14:{
          this.$store.state.operationArr.at(-1) - 10 > 9 ? krpano.call('jump1(scene_khxyzx);') : '';
          this.$router.push({name:'KhxyzxVideoWeb',query: {lang:this.$i18n.locale}})
          break;
        }
        case 20:{
          this.$router.push({name:'InventedSence',query: {lang:this.$i18n.locale}});
          if(this.$store.state.operationArr[this.$store.state.operationArr.length - 1] % 10 == 0 || 
          this.$store.state.operationArr[this.$store.state.operationArr.length - 1] == '00'){
            this.$store.state.operationArr.at(-1)!=='40' ? krpano.call('jump(scene_jjzzzx);') : krpano.call('jump1(scene_jjzzzx);');
          }else{this.$store.state.operationArr.at(-1).slice(0,1)!=2 ? krpano.call('jump1(scene_jjzzzx);') : '';
          }
          break;
        }
         case 21:{
          (this.$store.state.operationArr.at(-1) - 20 > 9||this.$store.state.operationArr.at(-1) - 20 < 0) ? 
          krpano.call('jump1(scene_jjzzzx);') : '';
          this.$router.push({name:'JjzzzxVideoPlatform',query: {lang:this.$i18n.locale}});
          break;
        }
        default:{
          break;
        }
      }
    },
    // 场景22-24
    routerBackSwirch22TO24(isIndexNum,krpano){
      switch (isIndexNum){
        case 22:{
          (this.$store.state.operationArr.at(-1) - 20 > 9||this.$store.state.operationArr.at(-1) - 20 < 0) ? 
          krpano.call('jump1(scene_jjzzzx);') : '';
          this.$router.push({name:'JjzzzxVideoConvening',query: {lang:this.$i18n.locale}});
          break;
        }
        case 23:{
         (this.$store.state.operationArr.at(-1) - 20 > 9||this.$store.state.operationArr.at(-1) - 20 < 0) ? 
         krpano.call('jump1(scene_jjzzzx);') : '';
          this.$router.push({name:'JjzzzxVideoOnline',query: {lang:this.$i18n.locale}});
          break;
        }
        case 24:{
          (this.$store.state.operationArr.at(-1) - 20 > 9||this.$store.state.operationArr.at(-1) - 20 < 0) ? 
          krpano.call('jump1(scene_jjzzzx);') : '';
          this.$router.push({name:'JjzzzxVideoProgress',query: {lang:this.$i18n.locale}});
          break;
        }
        default:{
          break;
        }
      }
    },
    // 场景25-30
    routerBackSwirch25TO30(isIndexNum,krpano){
      switch (isIndexNum){
        case 25:{
          (this.$store.state.operationArr.at(-1) - 20 > 9||this.$store.state.operationArr.at(-1) - 20 < 0) ? 
          krpano.call('jump1(scene_jjzzzx);') : '';
          this.$router.push({name:'JjzzzxVideoAnalysis',query: {lang:this.$i18n.locale}});
          break;
        }
        case 26:{
          (this.$store.state.operationArr.at(-1) - 20 > 9||this.$store.state.operationArr.at(-1) - 20 < 0) ? 
          krpano.call('jump1(scene_jjzzzx);') : '';
          this.$router.push({name:'JjzzzxVideoReview',query: {lang:this.$i18n.locale}});
          break;
        }
        case 30:{
          this.$router.push({name:'InventedSence',query: {lang:this.$i18n.locale}});
          if(this.$store.state.operationArr[this.$store.state.operationArr.length - 1] % 10 == 0 || 
          this.$store.state.operationArr[this.$store.state.operationArr.length - 1] == '00'){
            this.$store.state.operationArr.at(-1)!=='40' ? krpano.call('jump(scene_csyzzx);') : krpano.call('jump1(scene_csyzzx);');
          }else{
            if(this.$store.state.operationArr.at(-1).slice(0,1)!=='3'){krpano.call('jump1(scene_csyzzx);');
            }else if(this.$store.state.operationArr.at(-1)=='31'){
              krpano.call('jump1(scene_csyzzx);');
            }else{return false}
          }
          break;
        }
        default:{
          break;
        }
      }
    },
    // 场景31-32
    routerBackSwirch31TO33(isIndexNum,krpano){
      switch (isIndexNum){
         case 31:{
          this.$router.push({name:'InventedSence',query: {lang:this.$i18n.locale}})
          if(this.$store.state.operationArr[this.$store.state.operationArr.length - 1] % 10 == 0 || 
          this.$store.state.operationArr[this.$store.state.operationArr.length - 1] == '00'){
            this.$store.state.operationArr.at(-1)!=='40' ? krpano.call('jump(scene_csyzzx1);') : krpano.call('jump1(scene_csyzzx1);');
          }else{
            this.$store.state.operationArr[this.$store.state.operationArr.length - 1]==31 ? 
            krpano.call('jump(scene_csyzzx1);') : krpano.call('jump1(scene_csyzzx1);');
          }
          break;
        }
        case 32:{
          this.$store.state.operationArr.at(-1) != '10' ? krpano.call('jump1(scene_csyzzx1);') : '';
          this.$router.push({name:'Csyzzx1Cover',query: {lang:this.$i18n.locale}});
          break;
        }
        case 33:{
          this.$store.state.operationArr.at(-1) != '10' ? krpano.call('jump1(scene_csyzzx);') : '';
          this.$router.push({name:'CsyzzxCover',query: {lang:this.$i18n.locale}});
          break;
        }
        default:{
          break;
        }
      }
    },
    // 场景40-51
    routerBackSwirch40TO51(isIndexNum,krpano){
      switch (isIndexNum){
        case 40:{
          this.$router.push({name:'Zjzl',query: {lang:this.$i18n.locale}});
          break;
        }
        case 50:{
          this.$router.push({name:'InventedSence',query: {lang:this.$i18n.locale}})
          if(this.$store.state.operationArr[this.$store.state.operationArr.length - 1] % 10 == 0 || 
          this.$store.state.operationArr[this.$store.state.operationArr.length - 1] == '00'){
            this.$store.state.operationArr.at(-1)!=='40' ? krpano.call('jump(scene_khjlzx);') : krpano.call('jump1(scene_khjlzx);');
          }else{
            this.$store.state.operationArr.at(-1).slice(0,1)!=5 ? krpano.call('jump1(scene_khjlzx);') : '';
          }
          break;
        }
        case 51:{
          (this.$store.state.operationArr.at(-1) - 50 > 9||this.$store.state.operationArr.at(-1) - 50 < 0) ? 
         krpano.call('jump1(scene_khjlzx);') : '';
          this.$router.push({name:'KhjlzxVideoBusiness',query: {lang:this.$i18n.locale}});
          break;
        }
        
        default:{
          break;
        }
      }
    },
    // 场景52-54
    routerBackSwirch52TO54(isIndexNum,krpano){
      switch (isIndexNum){
        case 52:{
          (this.$store.state.operationArr.at(-1) - 50 > 9||this.$store.state.operationArr.at(-1) - 50 < 0) ? 
         krpano.call('jump1(scene_khjlzx);') : '';
          this.$router.push({name:'KhjlzxVideoKea',query: {lang:this.$i18n.locale}});
          break;
        }
        case 53:{
          (this.$store.state.operationArr.at(-1) - 50 > 9||this.$store.state.operationArr.at(-1) - 50 < 0) ? 
         krpano.call('jump1(scene_khjlzx);') : '';
          this.$router.push({name:'KhjlzxVideoKeaEarthquake',query: {lang:this.$i18n.locale}});
          break;
        }
        case 54:{
          (this.$store.state.operationArr.at(-1) - 50 > 9||this.$store.state.operationArr.at(-1) - 50 < 0) ? 
         krpano.call('jump1(scene_khjlzx);') : '';
          this.$router.push({name:'KhjlzxVideoKeaOktoberfest',query: {lang:this.$i18n.locale}})
          break;
        }
        default:{
          break;
        }
      }
    },
    // 场景跳转方法
    senceJump(isIndexNum,krpano){
      // 对应那个场景的跳转
        switch(true){
          case  isIndexNum >= 0 && isIndexNum<=10:
            this.routerBackSwirch0TO10(isIndexNum,krpano);
            break
          case  isIndexNum >= 11 && isIndexNum<=13:
            this.routerBackSwirch11TO13(isIndexNum,krpano);
            break
          case  isIndexNum >= 14 && isIndexNum<=21:
            this.routerBackSwirch14TO21(isIndexNum,krpano);
            break
          case  isIndexNum >= 22 && isIndexNum<=24:
            this.routerBackSwirch22TO24(isIndexNum,krpano);
            break
          case  isIndexNum >= 25 && isIndexNum<=30:
            this.routerBackSwirch25TO30(isIndexNum,krpano);
            break
          case  isIndexNum >= 31 && isIndexNum<=33:
            this.routerBackSwirch31TO33(isIndexNum,krpano);
            break
          case  isIndexNum >= 40 && isIndexNum<=51:
            this.routerBackSwirch40TO51(isIndexNum,krpano);
            break
          case  isIndexNum >= 52 && isIndexNum<=54:
            this.routerBackSwirch52TO54(isIndexNum,krpano);
            break
          default:break
        }
    },
    // 返回上一步
    routerBack(index){
      // 防抖处理，600ms内不能重复触发此方法
      if(this.nextGoFlag === true){
        this.nextGoFlag = false;
        this.nextGoFlagTimer!==null ? clearTimeout(this.nextGoFlagTimer) : '';
        this.nextGoFlagTimer = setTimeout(() => {
          this.nextGoFlag = true;this.nextGoFlagTimer = null;
        }, this.backDelayArr.includes(this.$store.state.operationArr.at(-2))&&index==false ? 1500 : 600);
        let krpanoIframe = document.getElementById('krpanoDiv').contentWindow;
        let krpano = krpanoIframe.document.getElementById('krpanoSWFObject');
        let isIndex = -99;
        // 如果index有值穿过来isIndex就赋值为index否者复制为数组的倒数第二位
        if(index){ isIndex = index;
          // push到路径数组（记录用户浏览记录）
          this.addOperation2(index);
        }else{isIndex = this.$store.state.operationArr.at(-2);}
        // 把字符串类型转为数字类型
        let isIndexNum = parseInt(isIndex);
        // 场景跳转
        this.senceJump(isIndexNum,krpano);
        index?'':this.$store.state.operationArr.pop();
      }
    },

    // 旋转角度
    rotateAngle(){
      // 判断当前路由是否在InventedSence
      if(this.$route.name==='InventedSence'){
        // 获取全景dom元素
        let krpanoIframe = document.getElementById('krpanoDiv').contentWindow;
        let krpano = krpanoIframe.document.getElementById('krpanoSWFObject');
        // 对应旋转到哪个场景的初始角度
        switch (this.newPageIndex){
          case '00':
            krpano.call('lookto(146,0,145,linear(360));');
            break;
          case '10':
            krpano.call('lookto(-71,0,120,linear(360));');
            break;
          case '20':
            krpano.call('lookto(150,15,100,linear(360));');
            break;
          case '30':
            krpano.call('lookto(121.5,11,125,linear(360));');
            break;
          case '31':
            krpano.call('lookto(156,20,135,linear(360));'); 
            break;
          case '50':
            krpano.call('lookto(160,0,85,linear(360));');
            break;
          default:
            krpano.call('lookto(146,0,130,linear(360));');
        }
      }else{
        return false
      }
      
    },

    // 退出程序
    sendExit() {
      // ajax请求，要求后端关闭exe程序
      let ajax = new XMLHttpRequest();
      ajax.open('GET','http://localhost:3000/exit',true);
      ajax.send(null);
      ajax.onreadystatechange=function(){
        if (ajax.readyState == 4 && ajax.status == 200) {
          var result=JSON.parse(ajax.responseText);
        }else{
          return false
        }
      }
    },

    // 先一步
    nextGo(){
        // 获取当前路径数组的最后一位数值（比如 10，20，22，与vuex的下一步指定的路径数组的相匹配拿到数组下标
        let a = this.$store.state.line.indexOf(this.$store.state.operationArr.at(-1))
        // 拿到vuex路径数组的下一个场景数值
        let index = this.$store.state.line[a+1];
        // 调用返回上一步的方法，进行跳转，因为是按照数值去跳转的
        this.routerBack(index);
    },
  },
};
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
html,
body {
  width:100%;
  height:100%;
  overflow: hidden;
  user-select: none;
}
.slide-enter-active, .slide-leave-active {
  transition: all .3s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
}
#app {
  width:100%;
  height:100%;
  margin: 0 auto;
}
.backGtac{
  position: absolute;
  width: 90px;
  height: 90px;
  right: 44px;
  bottom: 27px;
  background: url('./assets/images/exit.png') center center / 100% 100% no-repeat;
  cursor: pointer;
}
.backGtac:hover{
   filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.txt_div{
  width: 65%;
  height: 8.6%;
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  color: white;
  background: url('./assets/images/txt_bg.png') center center / 100% 100% no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // font-size: 1.35rem;
  font-size: calc(21*(100vw/1920));
}
.txt_div p{
  display: block;
}
.gif{
  width: 326px;
  height: 530px;
  position: absolute;
  bottom: -155px;
  right: 28px;
  transform: scale(0.3);
}
.img_wb{
	right: 20px;
  bottom: -128px;
	position: absolute;
	transform: scale(.3);
  cursor: pointer;
}
.nextGo{
  width: 135px;
  height: 50px;
  position: absolute;
  bottom: 30px;
  right: 203px;
  background: url('./assets/images/next.png') center center / 100% 100% no-repeat;
  cursor: pointer;
}
.gif img{
  width: 100%;
}
.cnFont {
  font-family: cnfont !important;
}

.cnFont {
  font-family: cnfont !important;
}

.iconArray{
  width: 100px;
  // height:390px;
  height:320px;
  // height:210px;
  position:absolute;
  right: 48px;
  bottom: 29px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.iconArray li{
  width: 92px;
  height:91px;
  cursor: pointer;
}
.iconArray li:hover {
  filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
}
.Fallback{
  width: 92px;
  height:91px;
  position: absolute;
  left: 50px;
  bottom: 28px;
  cursor: pointer;
  background: url('./assets/images/globalPictrue/prevue.png') center center / 100% 100% no-repeat;
  &:hover {
    filter: brightness(120%) drop-shadow(0px 0px 10px rgba(72,165,255,0.7));
  }
}
</style>
