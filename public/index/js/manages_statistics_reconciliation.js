import manages from '../scss/index.scss'

import Vue from 'vue'
import './layui'
new Vue({
	el:'#manages_statistics_reconciliation',
	data:{
		checkboxData:[
			{
				sik:1,
				role:'4095',
				sbm:'招财猫',
				name:'4221.22',
				dis:'0',
				sjh:'0',
				jksj:'1234.23',
				je:'1234.23',
				lx:'1234.23',
				qx:'1234.23',
				jgh:'10000',
				cs:'32.33',
				qd:'32.33',
			},
			{
				sik:1,
				role:'4095',
				sbm:'招财猫',
				name:'4221.22',
				dis:'0',
				sjh:'0',
				jksj:'1234.23',
				je:'1234.23',
				lx:'1234.23',
				qx:'1234.23',
				jgh:'10000',
				cs:'32.33',
				qd:'32.33',
			},
			{
				sik:1,
				role:'4095',
				sbm:'招财猫',
				name:'4221.22',
				dis:'0',
				sjh:'0',
				jksj:'1234.23',
				je:'1234.23',
				lx:'1234.23',
				qx:'1234.23',
				jgh:'10000',
				cs:'32.33',
				qd:'32.33',
			},
			{
				sik:1,
				role:'4095',
				sbm:'招财猫',
				name:'4221.22',
				dis:'0',
				sjh:'0',
				jksj:'1234.23',
				je:'1234.23',
				lx:'1234.23',
				qx:'1234.23',
				jgh:'10000',
				cs:'32.33',
				qd:'32.33',
			},
			{
				sik:1,
				role:'4095',
				sbm:'招财猫',
				name:'4221.22',
				dis:'0',
				sjh:'0',
				jksj:'1234.23',
				je:'1234.23',
				lx:'1234.23',
				qx:'1234.23',
				jgh:'10000',
				cs:'32.33',
				qd:'32.33',
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
		buttonManages:function(index){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				var vm;
				layer.open({
					type: 1,
					area: ['1010px','760px'],
					title:['财务对账','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role-center_1',
					shade: .3,
					//btn:["确定","取消"],
					btnAlign:'c',
					shadeClose: true, //开启遮罩关闭
					content:$('#yh_manages_jump').html(),
					success:function (layero) {
						var btn = layero.find('.layui-layer-btn');
						btn.css({paddingBottom:'50px',zIndex:'1000',position: 'relative'});
						btn.find('a').css({padding:'8px 40px',border:'2px solid #1E9FFF'});
						btn.find('.layui-layer-btn1').css({color:'#1E9FFF'});
						vm = new Vue({
							data: {
								managesList:[
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
										zt:'0.06',
										cz:'0.06',
									},
								],
							},
							methods: {
								option:function (e) {
									var curr = this;
								},
								layerManagesPage:function () {
									window.parent.layui.use('laypage', function(){
										var laypage = window.parent.layui.laypage;
										//执行一个laypage实例
										laypage.render({
											elem: 'yh_manages_lauerpages' //注意，这里的 test1 是 ID，不用加 # 号
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
								layerTime:function () {
									window.parent.layui.use('laydate', function(){
										var laydate = window.parent.layui.laydate;
										//执行一个laydate实例
										laydate.render({
											elem: '#manages_time_4' //指定元素
											,theme:'icon_yh'
										});
										laydate.render({
											elem: '#manages_time_5' //指定元素
											,theme:'icon_yh'
										});
									});
								},
							},
							mounted() {
								this.layerTime();
								this.layerManagesPage()
							}
						});
						vm.$mount(layero[0].childNodes[1]);
					},
					yes:function(number,determine){
						console.log(123456);
					}
				})
			})
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
		},
	},
	mounted() {
		this.managesPage();
		this.laydateTime();
	}
});