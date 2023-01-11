<template>
    <div ref='threeDom' class="area" @touchmove.prevent @mousewheel.prevent :style="{cursor:cursortype}">
        <img src="../assets/earth/mainen.png" class="cityPic" v-show="pic === 1 && !flying">
        <img src="../assets/earth/main2en.png" class="cityPic" v-show="pic === 2&& !flying">
        <img src="../assets/earth/main3en.png" class="cityPic" v-show="pic === 3&& !flying">
        <img src="../assets/earth/titleen.png" class="titleen">
        <img src="../assets/earth/iconen.png" class="icon">
        <img :src="require('../assets/images/fly.gif')+'?t='+String(new Date().getTime()).substring(5,13)"
        class="wbyy2" v-show="flying">
        <audio class="audio" v-if="$store.state.wbWordSy" src="../assets/audios/1.mp3"></audio>
        <canvas id="myCanvas" :style="'position: absolute;left:0;top:0;z-index:'+lineIndex"></canvas>
        <div class="wbyy" @click.stop="wbWordIsShow" v-show="!flying">
            <img src="../assets/images/wb.gif">
        </div>
        <!-- <img src="../assets/images/wb.gif" class="wbyy" @click.stop="wbWordIsShow" v-show="!flying"> -->
    </div>
</template>
<script>
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
var clock = new THREE.Clock();
var mixer=null;
export default {
    name: 'Home',
    data(){
        return{
            scene: null,
            camera: null,
            ambient: null,
            light: null,
            renderer: null,
            controls: null,
            axisHelper: null,
            group:null,
            ground: null,
            cube: null,
            sphere: null,
            selectedObject:null,
            pic: false,
            tt: true,
            sphereShine: true,
            Ms: 0,
            run: true,
            lineIndex:-1,
            cursortype: 'default',
            isAnime: false,
            lang:'',
            flying: false,
            oldJump:-1,
            jump:-1
        }
    },
    created(){
        this.$nextTick(() => {
            this.lang = this.$route.query.lang
            this.main()
            const canvas = document.getElementById('myCanvas');
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            this.resize_()
        })
    },
    mounted(){
        if(this.$store.state.wbWordSy){
            this.$nextTick(()=>{
                let audio = document.querySelector('.audio');
                audio.play();
            })
        }
    },
    computed:{
        now(){
            return this.$store.state.now;
        },
        wbWordSy:{
            get : function(){
               return this.$store.state.wbWordSy;
            },
            set:function(newValue){
                this.$store.state.wbWordSy = newValue;
            }
        },
    },
    watch: {
      now(val, oldVal){
        if(val === 1){
        this.animateCamera(this.camera.position,this.controls.target,{x:160,y:80,z:100},{x:0,y:0,z:0})
        }
      },
      // 静音方法监听
		'$store.state.voiceMuted':{
			handler(newVal,oldVal){
				this.$nextTick(()=>{
					if(newVal){
						this.wbWord = true
					}else{
						this.wbWord = false
					}
				})
			},
			immediate:true
		}
    },
    methods:{
        start(){
            this.run = true
            this.lineIndex = -1
            this.controls.canMove = false;
            this.pic = 0
            this.oldJump = -1
            this.jump = -1
            this.cursortype = 'default'
            var cxt=document.getElementById('myCanvas').getContext('2d');
            cxt.clearRect(0,0,window.innerWidth,window.innerHeight);  
        },
        back(){
            let that = this;
            let changeNow = function(){that.$store.state.now = 1}
            this.animateCamera(this.camera.position,this.controls.target,{x:10,y:10,z:20},{x:0,y:0,z:0},changeNow)
        },
        next(){
            let that = this;
            let changeNow = function(){that.$store.state.now = 2}
            this.animateCamera(this.camera.position,this.controls.target,{x:10,y:10,z:20},{x:0,y:0,z:0},changeNow)
        },
        // 维宝文字消失出现
        wbWordIsShow(){
            this.$store.state.wbWordSy=!this.$store.state.wbWordSy;
            if(this.$store.state.wbWordSy){
                this.$nextTick(()=>{
                    let audio = document.querySelector('.audio');
                    audio.play();
                })
            }
        },
        // 主入口
        main(){
            this.init() /* 初始化 */
            setTimeout(() => {
                this.animate() /* 循环更新 */
            }, 1000);
            // 浏览器窗口改变
            const that = this;
            window.onresize = function temp() {
                that.resize_()
            };
            this.$refs.threeDom.addEventListener( 'pointermove', this.ttp );
            // 用鼠标事件判断是在拖拽相机还是点击
            this.$refs.threeDom.addEventListener('mousedown', this.over);
            this.$refs.threeDom.addEventListener('mouseup', this.out);
        },
        over(event){
            if(this.jump!=2&&this.jump!=3){
                return false
            }
            this.finish = false
            this.oldJump = this.jump
            this.jump = -1
            var c = document.getElementById('myCanvas');
            var ctx = c.getContext('2d');
            ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
            this.cursortype = 'default'
            this.overe = event
            this.timer = setInterval(() => {
                this.Ms += 1
            }, 100);
        },
        out(event){
            clearInterval(this.timer)
            this.finish = true
            if(this.oldJump===2){
                this.$refs.threeDom.removeEventListener( 'pointermove', this.ttp );
                this.flying = true
                this.Ms = 0
                setTimeout(() => {
                    this.$router.push({name:'RealSence',query: {
                        lang:this.$i18n.locale
                    }})
                }, 2000);
            }else if(this.oldJump===3){
                this.$refs.threeDom.removeEventListener( 'pointermove', this.ttp );
                this.flying = true
                this.Ms = 0
                setTimeout(() => {
                    this.$router.push({name:'GtacXiAn',query: {
                        lang:this.$i18n.locale
                    }})
                }, 2000);
            }else{
                this.Ms = 0
            }
        },
        ttp(event){
            if(!event)return false;
            this.lastevent = event
            if (!event.isPrimary) return false;
            this.mouse = {}
            this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            this.checkIntersection(event);
        },
        addSelectedObject( object ) {

            this.selectedObjects = [];
            this.selectedObjects.push( object );
            if(this.selectedObjects.length>0){
                this.run = false
            }
        },
        checkIntersection(event) {
            if(this.isAnime) {
                this.run = false;
                return false;
            }
            this.raycaster = new THREE.Raycaster();
            this.raycaster.setFromCamera( this.mouse, this.camera );
            const intersects = this.raycaster.intersectObject( this.scene, true );
            this.pic=0
            this.cursortype = 'default'
            var c = document.getElementById('myCanvas');
            var ctx = c.getContext('2d');
            ctx.clearRect(0,0,window.innerWidth,window.innerHeight);  
            if ( intersects.length > 0 ) {
                const selectedObject = intersects[ 0 ].object;
                if(selectedObject.name!='earth'){
                    this.onPointerMove(event,event.clientX,event.clientY)
                }else{
                    this.start()
                }
                this.addSelectedObject( selectedObject );
            } else {
                this.cursortype = 'default'
                this.run = true
            }
        },
        //监听窗口
        resize_() {
            this.renderer.setPixelRatio(window.devicePixelRatio);   /* 设备像素比 解决失真问题 */
            this.renderer.setSize( window.innerWidth, window.innerHeight ); /* 窗口尺寸 */
            const canvas = document.getElementById('myCanvas');
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        },
        // 初始化
        init(){
            // 初始化场景
            this.initSence() 
            // 初始化相机
            this.initCamera() 
            // 初始化渲染器
            this.initRenderer() 
            // 添加灯光
            this.initLight()
            // 添加各种物体 
            this.initMash() 
            // 添加控制器
            this.initControl() 
        },
        // 初始化场景
        initSence(){
            // 初始化场景
            this.scene = new THREE.Scene(); 
            // 加载背景图片
            const texture = new THREE.TextureLoader().load(require('../assets/earth/bg.jpg'))
            texture.encoding = THREE.sRGBEncoding;
            // 纹理对象Texture赋值给场景对象的背景属性.background
            this.scene.background = texture
        },
        // 初始化相机
        initCamera() {
            this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 ); /* 使用透视相机 */
            this.camera.position.set (70,70,115);   /* 设置相机位置 */
        },
        // 添加灯光
        initLight(){
            // 相机助手
            const spotLight = new THREE.SpotLight(0xffffff, 0.4, 10, Math.PI * 0.3)
            spotLight.castShadow = true
            spotLight.position.set(-103.62678152944757, 111.21390336825048, 159.76659768888337)
            this.scene.add(spotLight)
            this.scene.add(spotLight.target)
            var light = new THREE.PointLight(0xffffff, 1.4);
            light.position.set(120, 50, 20 );
            light.castShadow = true;
            light.shadow.camera.top = 10;
            light.shadow.camera.bottom = -10;
            light.shadow.camera.left = -10;
            light.shadow.camera.right = 10;
            // 告诉平行光需要开启阴影投射
            light.castShadow = true;
            light.distance = 600;
            this.light = light
            this.camera.add(light);
            this.scene.add(this.light)
            // 创建环境光
            this.ambient = new THREE.AmbientLight(0xffffff, .2);
            this.scene.add(this.ambient);
        },
        // 添加物体建模
        initMash(){
            this.group = new THREE.Group()
            this.group.rotation.y=Math.PI*1.13
            this.group.rotation.x=0.01
            this.group.rotation.z=0.01
            this.scene.add(this.group)
            // 球体
            this.addSphere()
            this.qiu()
        },
        qiu(){
            var marking = new THREE.Group();
            let _markData = [{x:-14,y:25.8,size:4.5},{x:117,y:44,size:4.1},{x:197.6,y:34.4,size:4.15}] 
            // xy轴就能找到点
            let test = [{x:Math.PI/3,y:0,z:Math.PI/18},{x:Math.PI/5,y:0,z:Math.PI/18},
            {x:Math.PI/2,y:0,z:-Math.PI/4},{x:-Math.PI/12,y:0,z:-Math.PI/5},
            {x:-Math.PI/7,y:0,z:-Math.PI/5},{x:-Math.PI/7,y:0,z:-Math.PI/4},
            {x:-Math.PI/2.5,y:0,z:-Math.PI/12},{x:-Math.PI/2,y:0,z:Math.PI/18},
            {x:-Math.PI/6,y:0,z:Math.PI/14},{x:-Math.PI/3,y:0,z:Math.PI/18}]
            for (var i = 0; i < _markData.length; i++) {
                // 创建标记点球体
                var mark = new THREE.Mesh(new THREE.SphereGeometry(_markData[i].size, 100, 100), new THREE.MeshBasicMaterial({
                color:'#1bb4b0',
                transparent:true,
                opacity:0
                }));
                // 获取标记点坐标
                var markPos = this.getPosition(_markData[i].x, _markData[i].y, 40);
                mark.position.set(markPos.x, markPos.y, markPos.z);
                mark.name = 'jump'+i
                marking.add(mark);
            }
            this.marking = marking
            this.group.add(marking);
        },
        getPosition(_longitude, _latitude, _radius) {
            var lg = THREE.Math.degToRad(_longitude);
            var lt = THREE.Math.degToRad(_latitude);
            var temp = _radius * Math.cos(lt);
            var x = temp * Math.sin(lg);
            var y = _radius * Math.sin(lt);
            var z = temp * Math.cos(lg);
            return {
            x: x,
            y: y,
            z: z
            }
        },
        // 添加物体--球体
        addSphere(){
            const loader = new THREE.TextureLoader()
            const geometry = new THREE.SphereGeometry( 40, 100,100 );

            const earthLights1 = loader.load(require('../assets/earth/11111.png'));
            earthLights1.encoding = THREE.sRGBEncoding;

            const earthLightsMat1 = new THREE.MeshLambertMaterial( {
                color: 0xffffff,
                blending: THREE.AdditiveBlending,
                transparent: true,
                depthTest: false,
                map: earthLights1,

            } );
            const sphereLightsMesh1 = new THREE.Mesh( geometry, earthLightsMat1 );
            sphereLightsMesh1.name = 'earth'
            this.sphereLightsMesh1 = sphereLightsMesh1
			this.group.add( sphereLightsMesh1 );
            const earthLights = loader.load(require('../assets/earth/el.png'));
            earthLights.encoding = THREE.sRGBEncoding;
            const earthLightsMat = new THREE.MeshBasicMaterial( {
                color: 0xffffff,
                blending: THREE.AdditiveBlending,
                transparent: true,
                depthTest: false,
                map: earthLights,
            } );
            const sphereLightsMesh = new THREE.Mesh( geometry, earthLightsMat );
			this.group.add( sphereLightsMesh );
            if(this.lang==='cn-ZH'){
                loader.load(require('../assets/earth/earth2.jpg'),texture =>{
                    const geometry = new THREE.SphereGeometry( 40, 100,100 );
                    const material = new THREE.MeshStandardMaterial({
                        map:texture 
                    });
                    material.roughness = 0.7;
                    material.metalness = 0;
                    let mesh = new THREE.Mesh( geometry, material );
                    mesh.position.set(0,0,0)
                    mesh.castShadow = true;    /* 设置后物体才会产生阴影 */
                    this.sphere = mesh;
                    this.group.add( mesh );
                })
            }else{
                loader.load(require('../assets/earth/earth2.jpg'),texture =>{
                    const geometry = new THREE.SphereGeometry( 40, 100,100 );
                    const material = new THREE.MeshStandardMaterial({
                        map:texture 
                    });
                    material.roughness = 0.7;
                    material.metalness = 0;
                    let mesh = new THREE.Mesh( geometry, material );
                    mesh.position.set(0,0,0)
                    mesh.castShadow = true;
                    this.sphere = mesh;
                    this.group.add( mesh );
                })
            }
            
        },
        // 初始化渲染器
        initRenderer(){
            this.renderer = new THREE.WebGLRenderer({antialias: true}); /* 创建渲染器 抗锯齿 */
            this.renderer.setPixelRatio(window.devicePixelRatio);   /* 设备像素比 解决失真问题 */
            this.renderer.setSize( window.innerWidth, window.innerHeight ); /* 设置输出canvas大小 */
            this.$refs.threeDom.appendChild(this.renderer.domElement); /* 通过 this.$refs获取页面的dom将场景初始化上去 */
            this.renderer.setClearColor(0xf1f1f1); /* 添加背景颜色 */
            this.renderer.shadowMap.enabled = true; /* 需要阴影效果 */
        },
        // 初始化控制器
        initControl(){
            this.controls = new OrbitControls(this.camera,this.renderer.domElement);
            this.controls.canMove = false;
            this.controls.minZoom = 0.5;
            this.controls.maxZoom = 1.2;
            // 上下旋转范围
            this.controls.minPolarAngle = Math.PI * (55/180);
            this.controls.maxPolarAngle = 0;
            this.controls.addEventListener( 'sleep', this.sleepFn )
        },
        sleepFn(){
            this.isAnime=false
            this.run = true
            this.ttp(this.lastevent)
        },
        // 添加辅助坐标系
        setAxisHelper() {
            this.axisHelper = new THREE.AxesHelper(600); /* 参数为辅助坐标系的长度 */
            this.scene.add(this.axisHelper);
        },
        // 循环渲染
        animate () {
            requestAnimationFrame( this.animate );
            if(this.sphereShine){
                this.sphereLightsMesh1.material.opacity -=0.01
                if(this.sphereLightsMesh1.material.opacity <= 0.1){
                    this.sphereShine=false
                }
            }else{
                this.sphereLightsMesh1.material.opacity +=0.01
                if(this.sphereLightsMesh1.material.opacity === 1){
                    this.sphereShine=true
                }
            }
            if(this.run){
                this.group.rotation.y += 0.003;
            }
            this.light.position.copy(this.camera.position)
            this.render();
        },
        // 执行渲染
        render() {
            var delta = clock.getDelta();
            if(!this.controls.canMove) {
                let cando = this.controls.update(delta);
                if(cando) {
                    this.isAnime = true;
                } else {
                    this.isAnime = false;
                }
            }
            this.renderer.clear()
            this.renderer.render( this.scene, this.camera );
            if (mixer) {
                mixer.update(delta);
            }
        },
        wirteLine(x,y){
            this.controls.canMove = true;
            var c = document.getElementById('myCanvas');/* 初始化 */
            var ctx = c.getContext('2d');
            ctx.clearRect(0,0,window.innerWidth,window.innerHeight);  
            if(x< window.innerWidth*0.62){
                var point1 = { left: x, top: y };/* 第一个点 */
                var point2 = { left: window.innerWidth*0.62, top: window.innerHeight*0.37};/* 第二个点 */
                ctx.beginPath();
                ctx.lineWidth='2'
                ctx.strokeStyle='rgb(255,192,69)'
                ctx.moveTo(point1.left, point1.top);/* 起始位置 */
                ctx.lineTo(point2.left, point2.top);/* 停止位置 */
                ctx.stroke();
            }
        },
        onPointerMove(event,x,y){
            let that = this
            that.selectedObject = null
            that.pointer = new THREE.Vector2();
            that.raycaster = new THREE.Raycaster();
            that.pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            that.pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            that.raycaster.setFromCamera( that.pointer, that.camera );
            const intersects = that.raycaster.intersectObject( that.scene, true );
            if ( intersects.length > 0 ) {
                const res = intersects.filter( function ( res ) {
                    return res && res.object;
                } )[ 0 ];
                if ( res && res.object ) {
                    let name = res.object.name.slice(4,)
                    if(!this.run  && res.object.name!='earth'){
                        this.run = false
                        this.pic= parseFloat(name)+1
                        if(name !== '0'){
                            this.cursortype = 'pointer'
                        }
                        this.jump = this.pic 
                        this.lineIndex = 1
                        that.wirteLine(x,y)
                    } else {
                        this.jump = -1                        
                    }
                    that.selectedObject = res.object;
                    that.selectedObject.uvsNeedsUpdate = true
                    that.selectedObject.material.needsUpdate = true
                    // 深拷贝然后进行相机移动
                    let _tmp = JSON.stringify(that.selectedObject.parent.position);
                    let obj = JSON.parse(_tmp);
                    obj.y = obj.y+100
                    obj.z = obj.z+100
                }
            }
        }
    }
}
</script>

<style scope>
.icon{
    position:absolute;
    bottom:1vh;
    left:0;
    transform: scale(1.18);
}
.cityPic{
    position:absolute;
    top:36vh;
    left:62vw;
    width:26vw
}
.bottom{
    position: absolute;
    left: 0;
    top: 40vw;
    width: 27vw;
    z-index: 2;
    -webkit-user-drag: none;
    user-select: none;
}
.titleen{
    position: absolute;
    top: 1vh;
    left: 11vw;
    width: 79vw;
    z-index: 2;
    -webkit-user-drag: none;
    user-select: none;
}
.wbyy{
    width: calc(323*(100vw/1920));
    height: calc(459*(100vw/1920));
    position: absolute;
    right: calc(62*(100vw/1920));
    bottom: calc(-111*(100vh/1080));
    /* pointer-events: none; */
    transform: scale(0.3);
    cursor: pointer;
}
.wbyy img{
    width: 100%;
    height: 100%;
}
.wbyy::before{
    content: '';
    width: calc(1350*(100vw/1920)/3);
    height: calc(500*(100vw/1920)/3);
    display: block;
    position: absolute;
    right: calc(167*(100vw/1920));
    bottom: calc(470*(100vh/1080));
    background: url('../assets/images/clickMe.png') center center / 100% 100% no-repeat;
}
.wbyy2{
    /* width: 323px;
    height: 459px;
    position: absolute;
    right: 0vw;
    top: 66.5vh; */
    width: calc(323*(100vw/1920));
    height: calc(459*(100vw/1920));
    position: absolute;
    right: calc(62*(100vw/1920));
    bottom: calc(-111*(100vh/1080));
    pointer-events: none;
    transform: scale(0.3);
    animation: flying 1s linear forwards 1s;
}
@keyframes flying {
    0%{
        right: calc(62*(100vw/1920));
        bottom: calc(-111*(100vh/1080));
    }
    100%{
        right: 40vw;
        bottom: 26.5vh;
    }
}
</style>