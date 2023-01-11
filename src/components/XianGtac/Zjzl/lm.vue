<template>
	<div class="lmPage">
        <video id="video1_1" src="../../../assets/lm2_1.mp4" class="v1 noSee"></video>
        <video id="video1_2" src="../../../assets/lm2_2.mp4" class="v2 noSee"></video>
        <video id="video1_3" src="../../../assets/lm2_3.mp4" class="v3 noSee"></video>
        <video id="video2_1" src="../../../assets/lm1_1.mp4" class="v4 noSee"></video>
        <video id="video2_2" src="../../../assets/lm1_2.mp4" class="v5 noSee"></video>
        <video id="video2_3" src="../../../assets/lm1_3.mp4" class="v6 noSee"></video>
        <video id="video3_1" src="../../../assets/lm3_1.mp4" class="v7 noSee"></video>
        <video id="video3_2" src="../../../assets/lm3_2.mp4" class="v8 noSee"></video>
        <video id="video3_3" src="../../../assets/lm3_3.mp4" class="v9 noSee"></video>
        <!-- 处理绿色像素为透明 -->
        <canvas id="c2"></canvas>
    </div>
</template>

<script>
export default {
	name: 'lm',
	components: {
	},
	data() {
		return {
			width:0,
			height:0,
		};
	},
	mounted() {
        this.arr = document.getElementsByClassName('noSee');
        this.c2 = document.getElementById('c2');
        this.c2.width = 434
        this.c2.height = 733
        this.ctx2 = this.c2.getContext('2d');
	},
	methods: {
        sing(e){
            for(let i=0;i<this.arr.length;i++){
                this.arr[i].pause()
                this.arr[i].currentTime = 0
            }
            this.video = document.getElementById('video'+e);
            this.video.addEventListener('play',()=> {
                this.width = this.video.videoWidth*0.72;
                this.height = this.video.videoHeight*0.72;
                this.timerCallback();
            },false);
            this.video.currentTime = 0
            this.video.play()
        },
        stop(){
            for(let i=0;i<this.arr.length;i++){
                this.arr[i].pause()
                this.arr[i].currentTime = 0
            }
        },
        timerCallback() {
          if (this.video.paused || this.video.ended) {
            return false;
          }
          this.computeFrame();
          setTimeout(()=> {
            this.timerCallback();
          }, 0);
        },
        computeFrame() {
          this.ctx2.drawImage(this.video, 0, 0, this.width, this.height);
          let frame = this.ctx2.getImageData(0, 0, this.width, this.height);
          let l = frame.data.length / 4;

          for (let i = 0; i < l; i++) {
            let r = frame.data[i * 4 + 0];
            let g = frame.data[i * 4 + 1];
            let b = frame.data[i * 4 + 2];
            if (r > 245 && g > 245 && b > 245) {
              frame.data[i * 4 + 3] = 0;
            }
          }
          this.ctx2.putImageData(frame, 0, 0);
          
        },
	}
};
</script>

<style lang="scss" scoped>
.noSee{
    width: 0px;
}
</style>
