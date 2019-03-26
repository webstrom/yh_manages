import manages from '../scss/index.scss'

import Vue from 'vue'
import './layui'
new Vue({
	el:'#manages_statistics_rsageRecord',
	data:{
		checkboxData:[
			{
				sik:1,
				role:'4095',
				sbm:'4095',
				name:'2019-01-11',
				dis:'17200211',
				nl:'后台用户',
				sfz:'1344455667',
				zt:'32.33',
			},
			{
				sik:1,
				role:'4095',
				sbm:'4095',
				name:'2019-01-11',
				dis:'17200211',
				nl:'后台用户',
				sfz:'1344455667',
				zt:'32.33',
			},
			{
				sik:1,
				role:'4095',
				sbm:'4095',
				name:'2019-01-11',
				dis:'17200211',
				nl:'后台用户',
				sfz:'1344455667',
				zt:'32.33',
			},
			{
				sik:1,
				role:'4095',
				sbm:'4095',
				name:'2019-01-11',
				dis:'17200211',
				nl:'后台用户',
				sfz:'1344455667',
				zt:'32.33',
			},
			{
				sik:1,
				role:'4095',
				sbm:'4095',
				name:'2019-01-11',
				dis:'17200211',
				nl:'后台用户',
				sfz:'1344455667',
				zt:'32.33',
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
			//使用明细
			var vm;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['1010px','600px'],
					title:['发送红包明细','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role-center_1',
					shade: .3,
					//btn:["确定","取消"],
					btnAlign:'c',
					shadeClose: true, //开启遮罩关闭
					content:$('#yh_manages_jump').html(),
					success:function (layero, index) {
						console.log('index',index);
						var btn = layero.find('.layui-layer-btn');
						btn.css({paddingBottom:'50px',zIndex:'1000',position: 'relative'});
						btn.find('a').css({padding:'8px 40px',border:'2px solid #1E9FFF'});
						btn.find('.layui-layer-btn1').css({color:'#1E9FFF'});
						vm = new Vue({
							data:{
								managesList:[
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
									},
									{
										bh:'通道短信扣费',
										name:'0',
										cd:'18875116655',
										sj:'2019-01-01 12:12:12',
										fw:'短信',
										fy:'0.06',
									},
								],
							},
							methods: {
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
							},
							mounted() {
								this.layerManagesPage();
							}
						});
						vm.$mount(layero[0].childNodes[1]);
					},
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
			});
		},
		layerManagesPage:function () {
			layui.use('laypage', function(){
				var laypage = layui.laypage;

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
		}
	},
	mounted() {
		this.managesPage();
		this.laydateTime();
	}
});