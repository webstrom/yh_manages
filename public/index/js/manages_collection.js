import manages from '../scss/index.scss'

import Vue from 'vue'
import './layui'
import { export2Excel } from './util'
new Vue({
	el:'#manages_collection',
	data:{
		checkboxData:[
			{
				sik:1,
				role:'1111111111111111',
				sbm:'王二小',
				name:'1234455667',
				dis:'100000',
				nl:'1个月',
				sfz:'2019-02-10 12:22:22',
				zt:'2019-02-10 12:22:22',
				sj:'342.22',
				dz:'60天',
				qd:'0.13',
				ywy:'343.33',
				sb:'朕',
				jhsj:'9999',
				hmd:'线下',
				shr:'谋害朕',
				shyy:'逾期中',
				ds:'32',
			},
			{
				sik:1,
				role:'1111111111111111',
				sbm:'王二小',
				name:'1234455667',
				dis:'100000',
				nl:'1个月',
				sfz:'2019-02-10 12:22:22',
				zt:'2019-02-10 12:22:22',
				sj:'342.22',
				dz:'60天',
				qd:'0.13',
				ywy:'343.33',
				sb:'朕',
				jhsj:'9999',
				hmd:'线下',
				shr:'谋害朕',
				shyy:'逾期中',
				ds:'32',
			},
			{
				sik:1,
				role:'1111111111111111',
				sbm:'王二小',
				name:'1234455667',
				dis:'100000',
				nl:'1个月',
				sfz:'2019-02-10 12:22:22',
				zt:'2019-02-10 12:22:22',
				sj:'342.22',
				dz:'60天',
				qd:'0.13',
				ywy:'343.33',
				sb:'朕',
				jhsj:'9999',
				hmd:'线下',
				shr:'谋害朕',
				shyy:'逾期中',
				ds:'32',
			},
			{
				sik:1,
				role:'1111111111111111',
				sbm:'王二小',
				name:'1234455667',
				dis:'100000',
				nl:'1个月',
				sfz:'2019-02-10 12:22:22',
				zt:'2019-02-10 12:22:22',
				sj:'342.22',
				dz:'60天',
				qd:'0.13',
				ywy:'343.33',
				sb:'朕',
				jhsj:'9999',
				hmd:'线下',
				shr:'谋害朕',
				shyy:'逾期中',
				ds:'32',
			},
		],
		checkboxList:[],
		checked: false,
		columns1:['编号','流水号','姓名','手机号','借款金额','期限','放款时间','应还日期','逾期金额','逾期天数','逾期罚息','应还总额','审核人','识别码','渠道','催收员','状态','借款次数'],
		filterVal:['sik','role','sbm','name','dis','nl','sfz','zt','sj','dz','qd','ywy','sb','jhsj','hmd','shr','shyy','ds']
	},
	watch: {
		//深度 watcher
		checkboxList: {
			handler: function (val, oldVal) {
				if (this.checkboxList.length === this.checkboxData.length) {
					this.checked=true;
				} else {
					this.checked=false;
				}
				//判断修改是否可以使用

				console.log(this.checkboxList)
			},
			deep: true
		}
	},
	methods:{
		checkedAll: function() {
			if (!this.checked) {
				this.checkboxList = [];
				this.checkboxData.forEach( (index,item) => {
					this.checkboxList.push(item);
				});
			} else {
				this.checkboxList = [];
			}
			console.log('全选/反选：'+this.checkboxList)
		},
		//导出Excel表
		export2ExcelDownload:function(){
			this.loading = true;
			let info = {from: 0,size: 300};
			//var getDonateList = this.checkboxData;
			export2Excel(this.columns1,this.checkboxData,this.filterVal);
			// getDonateList(info).then(res =>{
			// 	if(res.data.errcode === 0){
			// 		this.exportList = this.formatList(res.data.data.records);
			// 		export2Excel(this.columns1,this.exportList)
			// 	} else if (res.data.errcode === 40190){
			// 		this.$Message.info('数据太多无法导出，请联系客服！')
			// 	}
			// })
		},
		managesPage:function () {
			layui.use('laypage', function(){
				var laypage = layui.laypage;

				//执行一个laypage实例
				laypage.render({
					elem: 'yh_manages_lauerpage' //注意，这里的 test1 是 ID，不用加 # 号
					,count: 50 //数据总数，从服务端得到
					,theme:'manages'
					,limit:10
					,limits:[10,20,50,100]
					,prev:"上一页"
					,next:"下一页"
					,first:1
					,last:50
					,layout:['count','prev','page','next','limit','skip']
					,jump: function(obj, first){
						console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
						console.log(obj.limit); //得到每页显示的条数
						console.log(first)
					}
				});
			});
		},
		laydateTime:function () {
			layui.use('laydate', function(){
				var laydate = layui.laydate;
				//执行一个laydate实例
				laydate.render({
					elem: '#manages_time' //指定元素
					,theme:'icon_yh'
				});
				laydate.render({
					elem: '#manages_time_1' //指定元素
					,theme:'icon_yh'
				});
				laydate.render({
					elem: '#manages_time_2' //指定元素
					,theme:'icon_yh'
				});
				laydate.render({
					elem: '#manages_time_3' //指定元素
					,theme:'icon_yh'
				});
			});
		}
	},
	mounted() {
		this.managesPage();
		this.laydateTime();
	}
});