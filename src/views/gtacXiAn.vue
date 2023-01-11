<template>
  <div class="about">
    <iframe id="krpanoDiv" v-if="link2" :src="link" frameborder="0"></iframe>
  </div>
</template>

<script>

export default {
  name: 'about',
  data(){
    return{
      link:'',
      link2:false
    }
  },
  components: {
  },
  mounted(){
    this.getIframeLink();
  },
  methods:{
     getIframeLink() {
      // ajax请求，要求后端关闭exe程序
      let ajax = new XMLHttpRequest();
      ajax.open('GET','gtacLink.json',true);
      ajax.send(null);
      ajax.onreadystatechange=()=>{
        if (ajax.readyState === 4 && ajax.status === 200) {
          var result=JSON.parse(ajax.responseText);
          if(this.$i18n.locale==='en-US'){
            this.link = result.linkEn;
          }else{
            this.link = result.linkCn;
          }
          this.link2 = true
        }else{
          return false
        }
      }
    },
  }
}
</script>
<style scoped>
#krpanoDiv{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>