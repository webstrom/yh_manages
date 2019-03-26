import manages from '../scss/index.scss'

import Vue from 'vue'
import './layui'
new Vue({
	el:'#manages_system_agent',
	data:{
		checkboxData:[
			{
				sik:1,
				role:'999901',
				sbm:'代理商01',
				name:'代理商',
				dis:'990100',

				nl:'0',
				sfz:'0',
				zt:'0',
				sj:'0',
				dz:'0',
				qd:'0',
				ywy:'-189651',
				sb:'-189797',
				jhsj:'test?bcode=999901&ccl=',
				hmd:'启用',
			},
			{
				sik:1,
				role:'999901',
				sbm:'代理商01',
				name:'代理商',
				dis:'990100',

				nl:'0',
				sfz:'0',
				zt:'0',
				sj:'0',
				dz:'0',
				qd:'0',
				ywy:'-189651',
				sb:'-189797',
				jhsj:'test?bcode=999901&ccl=',
				hmd:'启用',
			},
			{
				sik:1,
				role:'999901',
				sbm:'代理商01',
				name:'代理商',
				dis:'990100',

				nl:'0',
				sfz:'0',
				zt:'0',
				sj:'0',
				dz:'0',
				qd:'0',
				ywy:'-189651',
				sb:'-189797',
				jhsj:'test?bcode=999901&ccl=',
				hmd:'启用',
			},
			{
				sik:1,
				role:'999901',
				sbm:'代理商01',
				name:'代理商',
				dis:'990100',

				nl:'0',
				sfz:'0',
				zt:'0',
				sj:'0',
				dz:'0',
				qd:'0',
				ywy:'-189651',
				sb:'-189797',
				jhsj:'test?bcode=999901&ccl=',
				hmd:'启用',
			},
			{
				sik:1,
				role:'999901',
				sbm:'代理商01',
				name:'代理商',
				dis:'990100',

				nl:'0',
				sfz:'0',
				zt:'0',
				sj:'0',
				dz:'0',
				qd:'0',
				ywy:'-189651',
				sb:'-189797',
				jhsj:'test?bcode=999901&ccl=',
				hmd:'启用',
			},
			{
				sik:1,
				role:'999901',
				sbm:'代理商01',
				name:'代理商',
				dis:'990100',

				nl:'0',
				sfz:'0',
				zt:'0',
				sj:'0',
				dz:'0',
				qd:'0',
				ywy:'-189651',
				sb:'-189797',
				jhsj:'test?bcode=999901&ccl=',
				hmd:'启用',
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
		//添加
		addAgent:function(){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['550px','auto'],
					title:['添加代理商信息','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role-center_1',
					shade: .3,
					btn:["确定","取消"],
					btnAlign:'c',
					shadeClose: true, //开启遮罩关闭
					content:$('#yh_layer_4').html(),
					success:function (layero) {
						var btn = layero.find('.layui-layer-btn');
						btn.css({paddingBottom:'50px',zIndex:'1000',position: 'relative'});
						btn.find('a').css({padding:'8px 40px',border:'2px solid #1E9FFF'});
						btn.find('.layui-layer-btn1').css({color:'#1E9FFF'});
					},
					yes:function(number,determine){

					}
				})
			})
		},
		//充值
		Recharge:function(){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['550px','auto'],
					title:['充值','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role-center_1',
					shade: .3,
					btn:["确定","取消"],
					btnAlign:'c',
					shadeClose: true, //开启遮罩关闭
					content:$('#yh_layer_5').html(),
					success:function (layero) {
						var btn = layero.find('.layui-layer-btn');
						btn.css({paddingBottom:'50px',zIndex:'1000',position: 'relative'});
						btn.find('a').css({padding:'8px 40px',border:'2px solid #1E9FFF'});
						btn.find('.layui-layer-btn1').css({color:'#1E9FFF'});
					},
					yes:function(number,determine){

					}
				})
			})
		},
		//提现
		CashWithdrawal:function(){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['550px','auto'],
					title:['充值','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role-center_1',
					shade: .3,
					btn:["确定","取消"],
					btnAlign:'c',
					shadeClose: true, //开启遮罩关闭
					content:$('#yh_layer_6').html(),
					success:function (layero) {
						var btn = layero.find('.layui-layer-btn');
						btn.css({paddingBottom:'50px',zIndex:'1000',position: 'relative'});
						btn.find('a').css({padding:'8px 40px',border:'2px solid #1E9FFF'});
						btn.find('.layui-layer-btn1').css({color:'#1E9FFF'});
					},
					yes:function(number,determine){

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
			});
		}
	},
	mounted() {
		this.managesPage();
		this.laydateTime();
	}
});