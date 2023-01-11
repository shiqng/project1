<template>
	<div class="home1">
        <div :class="{smallBg:centerOn}">
        <img src="../../../../public/images/zjzl/zjzlbg.jpg" class="bg">
        <div v-show="jtShow">
            <img src="../../../../public/images/zjzl/jt1.png" class="jt1 shine1">
            <img src="../../../../public/images/zjzl/jt2.png" class="jt2 shine2">
            <img src="../../../../public/images/zjzl/jt3.png" class="jt3 shine1">
            <img src="../../../../public/images/zjzl/jt4.png" class="jt4 shine2">
            <img src="../../../../public/images/zjzl/jt5.png" class="jt5 shine1">
            <img src="../../../../public/images/zjzl/jt6.png" class="jt6 shine2">
        </div>
        <!-- 左边背景 -->
        <div class="box1"  @click="showCenter(1)">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in zjList2" :key="item">
                    <img :src='"../../../../public/images/zjzl/zj2/zj"+ item +".png"' class="boxpic">
                </div>
            </div>
        </div>
        <!-- 中间背景 -->
        <div class="box2" @click="showCenter(2)">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in zlList" :key="item">
                    <img :src='"../../../../public/images/zjzl/zl/zl"+ item +".png"' class="boxpic2">
                </div>
            </div>
        </div>
        <!-- 右边背景 -->
        <div class="box3" @click="showCenter(3)">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in rzList" :key="item">
                    <img :src='"../../../../public/images/zjzl/rz/rz"+ item +".png"' class="boxpic3">
                </div>
            </div>
        </div>
        </div>
        <div id="certify"  :class="{hide:first!==1}">
            <div class="swiper-container">
            <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="item in zjList" :key="item">
                <img :src='"../../../../public/images/zjzl/centerzj/centerzj"+ item +".png"'/>
            </div>
            </div>
            </div>
            <div class="swiper-pagination"></div>
            <img src="../../../assets/images/button1.png" class="swiper-button-prev">
            <img src="../../../assets/images/button2.png" class="swiper-button-next">
	    </div>
        <div id="certify"  :class="{hide:first!==2}">
            <div class="swiper-container">
            <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="item in zlList" :key="item">
                <img :src='"../../../../public/images/zjzl/centerzl/centerzl"+ item +".png"'/>
            </div>
            </div>
            </div>
            <div class="swiper-pagination"></div>
            <img src="../../../assets/images/button1.png" class="swiper-button-prev">
            <img src="../../../assets/images/button2.png" class="swiper-button-next">
	    </div>
        <div id="certify"  :class="{hide:first!==3}">
            <div class="swiper-container">
            <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="item in rzList" :key="item">
                <img :src='"../../../../public/images/zjzl/centerrz/centerrz"+ item +".png"'/>
            </div>
            </div>
            </div>
            <div class="swiper-pagination"></div>
            <img src="../../../assets/images/button1.png" class="swiper-button-prev">
            <img src="../../../assets/images/button2.png" class="swiper-button-next">
	    </div>
        <img src="../../../../public/images/zjzl/closezj.png" class="close" v-show="centerOn" @click="close()">
        <img src="../../../assets/images/di.png" class="di" v-show="centerOn">
        <!-- <img class="hi" src="../../../../public/images/zjzl/cf.png" @click="handleClick"  v-show="playing===-1&&!centerOn"> -->
        <div class="allMan">
            <img class="lmBg1" src="../../../assets/images/zjlm/lmBg1.jpg" v-show="playing===0">
            <img class="man1" src="../../../assets/images/zjlm/man1.png" v-show="playing===0" @click="playing=1">
            <img class="man2" src="../../../assets/images/zjlm/man2.png" v-show="playing===0" @click="playing=2">
            <img class="man3" src="../../../assets/images/zjlm/man3.png" v-show="playing===0" @click="playing=3">
            <img class="lmBg2" src="../../../assets/images/zjlm/lmBg2.jpg" v-show="playing>0">
            <img class="centerman" src="../../../assets/images/zjlm/man1.png" v-show="playing===1 && !lmShow">
            <img class="centerman" src="../../../assets/images/zjlm/man2.png" v-show="playing===2 && !lmShow">
            <img class="centerman" src="../../../assets/images/zjlm/man3.png" v-show="playing===3 && !lmShow">
            <lm class="lm" ref="child" v-show="lmShow" ></lm>
            <img src="../../../assets/images/zjlm/q1.png" class="btn1" @click="goPlay(1)" v-show="playing>0"
             :class="{'questionOn':questionOn!==1&&questionOn!==0,'onOther':questionOn==1}">
            <img src="../../../assets/images/zjlm/q2.png" class="btn2" @click="goPlay(2)" v-show="playing>0"
             :class="{'questionOn':questionOn!==2&&questionOn!==0,'onOther':questionOn==2}">
            <img src="../../../assets/images/zjlm/q3.png" class="btn3" @click="goPlay(3)" v-show="playing>0"
             :class="{'questionOn':questionOn!==3&&questionOn!==0,'onOther':questionOn==3}">
            <img class="text" src="../../../assets/images/zjlm/text1.png" v-show="playing===1">
            <img class="text" src="../../../assets/images/zjlm/text2.png" v-show="playing===2">
            <img class="text" src="../../../assets/images/zjlm/text3.png" v-show="playing===3">
        </div>
        <img src="../../../../public/images/zjzl/backxx.png" class="backxx" @click="stop()" v-show="playing>0">
        <img src="../../../../public/images/zjzl/backxx.png" class="backxx" @click="playing=-1" v-show="playing===0">
    </div>
</template>

<script>
import Swiper from 'swiper'
import lm from './lm'
export default {
	name: 'zjzlshow',
	components: {
        lm
	},
	data() {
		return {
			zjList2:[1,2,3],
			zjList:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
            26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],
            zlList:[1,2,3,4,5,6,7],
            rzList:[1,2,3,4,5,6,7,8,9],
            jtShow: true,
            lang:'',
            centerOn:false,
            ms: true,
            first:0,
            playing:-1,
            lmShow:false,
            questionOn:0
		};
	},
	mounted() {
        this.lang = this.$i18n.locale;
		this.box1 = new Swiper ('.box1', {
            loop: true,
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.jt2',
                prevEl: '.jt1',
            },
            // 如果需要自动切换海报
            autoplay:true,
            autoplayDisableOnInteraction : false,
        })
        this.box2 = new Swiper ('.box2', {
            loop: true,
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.jt4',
                prevEl: '.jt3',
            },
            // 如果需要自动切换海报
            autoplay:true,
            autoplayDisableOnInteraction : false,
        })
        this.box3 = new Swiper ('.box3', {
            loop: true,
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.jt6',
                prevEl: '.jt5',
            },
            // 如果需要自动切换海报
            autoplay:true,
            autoplayDisableOnInteraction : false,
        })
        this.centerAlert = new Swiper ('#certify .swiper-container', {
            watchSlidesProgress: true,
            centeredSlides: true,
            loop: true,
            autoplay: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
            progress: function(progress) {
                for (let i = 0; i < this.slides.length; i++) {
                    let slide = this.slides.eq(i);
                    let slideProgress = this.slides[i].progress;
                    let modify = 1;
                    if (Math.abs(slideProgress) > 1) {
                        modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                    }
                    let translate = slideProgress * modify * 240 + 'px';
                    let scale = 1 - Math.abs(slideProgress) / 5;
                    let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                    slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                    slide.css('zIndex', zIndex);
                    slide.css('opacity', 1);
                    if(zIndex===999){
                    slide.css('filter', 'blur(0px)  brightness(100%)');
                    }
                    if (Math.abs(slideProgress) > 3) {
                        slide.css('opacity', 0);
                    }
                }
            },
            setTransition: function(transition) {
                for (let i = 0; i < this.slides.length; i++) {
                    let slide = this.slides.eq(i)
                    slide.transition(transition);
                }
            }
        }
        })
	},
	methods: {
        goPlay(i){
            this.$refs.child.sing(this.playing +'_'+ i)
            this.lmShow = true
            this.questionOn=i
        },
        stop(){
            this.lmShow = false
            this.$refs.child.stop()
            this.questionOn=0
            this.playing=0;
        },
        close(){
            this.centerOn =false;
            this.jtShow = true;
            this.first = 0
            this.box1.autoplay.start()
            this.box2.autoplay.start()
            this.box3.autoplay.start()
        },
        handleClick(){
            this.playing = 0
        },
        showCenter(type){
            this.box1.autoplay.stop()
            this.box2.autoplay.stop()
            this.box3.autoplay.stop()
            this.jtShow = false
            this.centerOn = true
            if(type === 1){
                this.first = 1
                // 弹窗的海报放第几页开始 第二个参数是动画过程 0就没有
                this.centerAlert[type-1].slideTo(this.box1.realIndex+1,0,false)  
            }else if(type === 2){
                this.first = 2
                // 弹窗的海报放第几页开始 第二个参数是动画过程 0就没有
                this.centerAlert[type-1].slideTo(this.box2.realIndex+1,0,false)  
            }else if(type === 3){
                this.first = 3
                // 弹窗的海报放第几页开始 第二个参数是动画过程 0就没有
                this.centerAlert[type-1].slideTo(this.box3.realIndex+1,0,false)  
            }else{
                return false;
            }
        }
	}
};
</script>

<style lang="scss" scoped>
.questionOn{
    opacity: 0.55;
    transition: 0.8s all;
}
.onOther{
    transition: 0.8s all;
    transform: scale(1.08);
}
 .backxx{
        position:absolute;
        bottom: 25px;
        left: 200px;
        z-index:3;
        cursor: pointer;
    }
    .allMan{
        .lmBg1{
            position:absolute;
            top:0;
            left:0;
            z-index:3;
        }
        .btn1{
            position: absolute;
            top: 474px;
            left: 328px;
            z-index: 1000;
            cursor: pointer;
        }
        .btn2{
            position: absolute;
            top: 418px;
            left: 1068px;
            z-index: 1000;
            cursor: pointer;
        }
        .btn3{
            position: absolute;
            top: 621px;
            left: 1099px;
            z-index: 1000;
            cursor: pointer;
        }
        .lmBg2{
            position:absolute;
            top:0;
            left:0;
            z-index:3;
        }
        .centerman{
            position:absolute;
            left:48.5%;
            top: 53%;
            width: 440px;
            transform:translate(-50%,-50%);
            z-index:3
        }
        .text{
            position:absolute;
            top: 266px;
            left: 1030px;
            z-index:3
        }
        .man1{
            position: absolute;
            top: 235px;
            left: 252px;
            z-index: 3;
            cursor: pointer;
            width: 420px;
            transition: all 0.5s;
        }
        .man1:hover{
            transform:scale(1.1);
        }
        .man2{
            position:absolute;
            top: 235px;
            left: 724px;
            z-index:3;
            width: 420px;
            cursor:pointer;
            transition: all 0.5s;
        }
        .man2:hover{
            transform:scale(1.1);
        }
        .man3{
            position:absolute;
            top: 235px;
            left: 1208px;
            z-index:3;
            width: 420px;
            cursor:pointer;
            transition: all 0.5s;
        }
        .man3:hover{
            transform:scale(1.1);
        }
    }
    
    .hi{
        position: absolute;
        left: 793px;
        bottom: 276px;
        z-index: 999;
        cursor: pointer;
    }
    .lm{
        position: absolute;
        left: 714px;
        bottom: 180px;
        z-index: 999;
    }
    .hide{
        position: absolute;
        z-index: -1!important;
    }
    .closeCenter{
        position: absolute;
        left: 48px;
        bottom: 48px;
        z-index: 1;
        cursor: pointer;
    }
    .smallBg{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        width: 1920px;
        height: 1080px;
        filter: blur(4px) brightness(70%);
    }
    .di{
        position: absolute;
        left: 274px;
        top: 632px;
        z-index: 1;
    }
    #certify {
        position: absolute;
        width: 1266px;
        // height: 408px;
        z-index: 999;
        top: 40px;
        left: 334px;
    }
    
    #certify .swiper-container {
        padding-bottom: 60px;
        height: 883px;
    }
    
    #certify  .swiper-slide {
        width: 502px;
        height: 883px;
        // background: #fff;
        // box-shadow: 0 8px 30px #ddd;
    }
    #certify  .swiper-slide img{
        display:block;
        width: 570px;
        // height: 883px;
    }
    #certify  .swiper-slide p {
        line-height: 98px;
        padding-top: 0;
        text-align: center;
        color: #636363;
        font-size: 1.1em;
        margin: 0;
    }
    
    #certify .swiper-pagination {
        width: 100%;
        bottom: 20px;
    }
    
    #certify .swiper-pagination-bullets .swiper-pagination-bullet {
        margin: 0 5px;
        border: 3px solid #fff;
        background-color: #d5d5d5;
        width: 10px;
        height: 10px;
        opacity: 1;
    }
    
    #certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
        border: 3px solid #00aadc;
        background-color: #fff;
    }
    
    #certify .swiper-button-prev {
        position: absolute;
        left: -150px;
        top: 342px;
        width: 174px;
        height: 214px;
        transform: scale(0.9);
    }
    
    
    #certify .swiper-button-next {
        position: absolute;
        left: 1261px;
        top: 342px;
        width: 174px;
        height: 214px;
        transform: scale(0.9);
    }
    
    .t1{
        position: absolute;
        top: 73%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 8;
    }
    .t2{
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%,-50%);
        // z-index: 8;
    }
    .home1 {
        height: 100%;
        width: 100%;
        position: relative;
        overflow: visible;
        .bg{
            position: absolute;
            left: 0;
            top: 0;
        }
        .jt1{
            position: absolute;
            z-index: 2;
            left: 11.5%;
            top: 40%;
            cursor: pointer;
        }
        .jt2{
            position: absolute;
            z-index: 2;
            left: 30%;
            top: 40.5%;
            cursor: pointer;
        }
        .jt3{
            position: absolute;
            z-index: 2;
            left: 38.5%;
            top: 40%;
            cursor: pointer;
        }
        .jt4{
            position: absolute;
            z-index: 2;
            left: 60%;
            top: 40%;
            cursor: pointer;
        }
        .jt5{
            position: absolute;
            z-index: 2;
            left: 68.2%;
            top: 41.3%;
            cursor: pointer;
        }
        .jt6{
            position: absolute;
            z-index: 2;
            left: 88%;
            top: 40.8%;
            cursor: pointer;
        }
        .wjt1{
            position: absolute;
            z-index: 10;
            left: 32.5%;
            top: 44.5%;
            width: 100px;
            height: 100px;
            cursor: pointer;
            animation: shine1 3s linear infinite;
        }
        .wjt2{
            position: absolute;
            z-index: 10;
            left: 63%;
            top: 44.5%;
            width: 100px;
            height: 100px;
            cursor: pointer;
            animation: shine2 3s linear infinite;
        }
        .box1{
            position: absolute;
            top: 26.5%;
            left: 11.2%;
            z-index: 1;
            overflow: hidden;
            width: 403px;
            height: 396px;
            cursor: pointer;
        }
        .box2{
            position: absolute;
            top: 29%;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1;
            overflow: hidden;
            width: 408px;
            height: 337px;
            cursor: pointer;
        }
        .box3{
            position: absolute;
            top: 29%;
            right: 10%;
            z-index: 1;
            overflow: hidden;
            width: 412px;
            height: 332px;
            cursor: pointer;
        }
        
        .swiper-wrapper{
            position: absolute;
            bottom: 0;
            z-index: 1;
        }
        .swiper-slide{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .center{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: 0;
            width: 1920px;
            height: 747px;
            overflow: hidden;
            opacity: 0;
        }
        .look{
            animation: move 0.5s linear;
            @keyframes move{
                0%{
                    opacity: 0;
                }
                100%{
                    opacity: 1;
                }
            }
            opacity: 1;
            z-index: 8;
        }
        .nolook{
            animation: fade 0.5s linear;
            @keyframes fade{
                0%{
                    opacity: 1;
                    z-index: 8;
                }
                100%{
                    opacity: 0;
                    z-index: 0;
                }
            }
        }
        .close{
            position: absolute;
            right: 17%;
            top: 7%;
            transform: scale(1.6);
            z-index: 10000;
            cursor: pointer;
        }
        @keyframes shine1{
            0%{
                transform: scale(1);
            }
            50%{
                transform: translateX(-6px) scale(.96);
            }
            100%{
                transform: scale(1);
            }
        }
        @keyframes shine2{
            0%{
                transform: scale(1);
            }
            50%{
                transform: translateX(6px) scale(.96);
            }
            100%{
                transform: scale(1);
            }
        }
        .shine1{
            animation: shine1 3s linear infinite;
    
        }
        .shine2{
            animation: shine2 3s linear infinite;
        }
    }
</style>
