import manages from '../scss/index.scss'

import Vue from 'vue'
import './layui'
new Vue({
	el:'#manages_users_worrower',
	data:{
		checkboxData:[
			{
				sik:1,
				loginname:'1700011871',
				role:'李世建',
				phone:'13923345678',
				name:'男',
				jgbh:'27',
				qd:'421182******12345',
				state:'新注册',
				sf:'2019.01.25 16:45',
				dis:'中国浙江省杭州市 滨江区泰安路1688号',

				qds:'X1020',
				yc:'否',
				ywy:'超级管理员',
				sbm:'9999',
				ed:'5000',
				ye:'5000',
			},
			{
				sik:1,
				loginname:'1700011871',
				role:'李世建',
				phone:'13923345678',
				name:'男',
				jgbh:'27',
				qd:'421182******12345',
				state:'新注册',
				sf:'2019.01.25 16:45',
				dis:'中国浙江省杭州市 滨江区泰安路1688号',

				qds:'X1020',
				yc:'否',
				ywy:'超级管理员',
				sbm:'9999',
				ed:'5000',
				ye:'5000',
			},
			{
				sik:1,
				loginname:'1700011871',
				role:'李世建',
				phone:'13923345678',
				name:'男',
				jgbh:'27',
				qd:'421182******12345',
				state:'新注册',
				sf:'2019.01.25 16:45',
				dis:'中国浙江省杭州市 滨江区泰安路1688号',

				qds:'X1020',
				yc:'否',
				ywy:'超级管理员',
				sbm:'9999',
				ed:'5000',
				ye:'5000',
			},
			{
				sik:1,
				loginname:'1700011871',
				role:'李世建',
				phone:'13923345678',
				name:'男',
				jgbh:'27',
				qd:'421182******12345',
				state:'新注册',
				sf:'2019.01.25 16:45',
				dis:'中国浙江省杭州市 滨江区泰安路1688号',

				qds:'X1020',
				yc:'否',
				ywy:'超级管理员',
				sbm:'9999',
				ed:'5000',
				ye:'5000',
			},
		],
		checkboxList:[],
		checked: false,
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
			});
		}
	},
	mounted() {
		this.managesPage();
		this.laydateTime();
	}
});