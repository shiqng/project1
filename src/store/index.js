import Vue from 'vue'
import Vuex from 'vuex'

// 引入vueX
Vue.use(Vuex);

// 导出
export default new Vuex.Store({
	state: {
		customMadeFlag:0,
		way:[],
		nowArr:[],
        logo:{
            column:false,
            asp:1,
            url:[]
        },
		switch2:false,
		guaranteeImg:[],
		maintainImg:[],
		customMade:{
			customImg1sUrl:[],
			logo:null,
			mesages:{
				customerName:'Welcome to the Global Technical Assistance Center',
				row1:{
					year:2022,
					// newYearArr:[1182,4,2,198,44270,100]
					newYearArr:[15514,101,191,10346,236802,10]
				},
				row2:{
					year:2021,
					// oldYearArr:[1450,2,1,175,30760,100]
					oldYearArr:[17780,140,170,9789,239657,8]
				},
				khxyzx:'Quick Response in Seconds',
				messageBarData:'Stable & Resilient Network through GTAC Capabilities'
			},
		},
        welcomeTile:'Welcome to the Global Technical Assistance Center',
		wffwBtn:false,
		newIndex:-1,
		line:[
			'00','02','01','10','13','11','20','21','23','25','24','30','33','31','32','50','52','51','40'
		],
		operationArr:['00'],
		dtBtnShow:false,
		csyzzx1CoverFlag:0,
		voiceMuted:true,
		wbWord:true,
		wbWordSy:false,
		sonPageBackAudio:false
	},
	mutations: {
		
	},
	actions: {},
	modules: {}
})

