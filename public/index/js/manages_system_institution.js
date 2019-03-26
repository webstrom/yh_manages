import manages from '../scss/index.scss'

import Vue from 'vue'
import './layui'
import pack from './package'
new Vue({
	el:'#manages_system_institution',
	data:{
		province:pack,
		checkboxData:[
			{
				sik:1,
				loginname:'12345',
				role:'11111',
				phone:'宗荣华',
				name:'421182******12345',
				jgbh:'1234567890',
				qd:'23456789012233',
				state:'宗',
				sf:'1234567',
				dis:'123456@qq.com',
				sbm:'001234',
				lx:'定制',
				fw:'120.34',
				bd:'刘能',
				zt:'启用',
			},
			{
				sik:1,
				loginname:'12345',
				role:'11111',
				phone:'宗荣华',
				name:'421182******12345',
				jgbh:'1234567890',
				qd:'23456789012233',
				state:'宗',
				sf:'1234567',
				dis:'123456@qq.com',
				sbm:'001234',
				lx:'定制',
				fw:'120.34',
				bd:'刘能',
				zt:'启用',
			},
			{
				sik:1,
				loginname:'12345',
				role:'11111',
				phone:'宗荣华',
				name:'421182******12345',
				jgbh:'1234567890',
				qd:'23456789012233',
				state:'宗',
				sf:'1234567',
				dis:'123456@qq.com',
				sbm:'001234',
				lx:'定制',
				fw:'120.34',
				bd:'刘能',
				zt:'启用',
			},
		],
		checkboxList:[],
		checked: false,
		userauthorize:[
			{
				name:'超级管理员',
				codcod:'9999',
				qudao:'123'
			},
			{
				name:'超级管理员',
				cod:'9999',
				qudao:'123'
			},
			{
				name:'超级管理员',
				cod:'9999',
				qudao:'123'
			},
			{
				name:'超级管理员',
				cod:'9999',
				qudao:'123'
			},
			{
				name:'超级管理员',
				cod:'9999',
				qudao:'123'
			}
		]
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
		Recharge:function(){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['400px','auto'],
					title:['充值','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
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
		RechargeDetails:function(){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['1010px','auto'],
					title:['充值明细','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role',
					shade: .3,
					//btn:["确定","取消"],
					btnAlign:'c',
					shadeClose: true, //开启遮罩关闭
					content:$('#yh_layer_2').html(),
					success:function (layero) {
						var btn = layero.find('.layui-layer-btn');
						btn.css({paddingBottom:'50px',zIndex:'1000',position: 'relative'});
						btn.find('a').css({padding:'8px 40px',border:'2px solid #1E9FFF'});
						btn.find('.layui-layer-btn1').css({color:'#1E9FFF'});
						window.parent.layui.use('laypage', function(){
							var laypage = window.parent.layui.laypage;

							//执行一个laypage实例
							laypage.render({
								elem: 'yh_detailed_page' //注意，这里的 test1 是 ID，不用加 # 号
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
					yes:function(number,determine){

					}
				})
			})
		},
		addUser:function(){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['800px','auto'],
					title:['添加用户信息','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role',
					shade: .3,
					btn:["确定","取消"],
					btnAlign:'c',
					shadeClose: true, //开启遮罩关闭
					content:$('#yh_layer').html(),
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
		modifyUser:function(){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['800px','auto'],
					title:['修改用户信息','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role',
					shade: .3,
					btn:["确定","取消"],
					btnAlign:'c',
					shadeClose: true, //开启遮罩关闭
					content:$('#yh_layer').html(),
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
		suspension:function(){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['650px','auto'],
					title:['暂停注册','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role_10',
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
		addRole:function(){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['800px','auto'],
					title:['添加用户信息','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role',
					shade: .3,
					btn:["确定","取消"],
					btnAlign:'c',
					shadeClose: true, //开启遮罩关闭
					content:$('#yh_layer_1').html(),
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
		enaBle:function(){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['400px','auto'],
					title:['启用','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role-center',
					shade: .3,
					btn:["确定","取消"],
					btnAlign:'c',
					shadeClose: true, //开启遮罩关闭
					content:'是否启用该用户？',
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
		prohibit:function(){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['400px','auto'],
					title:['禁止','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role-center',
					shade: .3,
					btn:["确定","取消"],
					btnAlign:'c',
					shadeClose: true, //开启遮罩关闭
					content:'是否禁止该用户？',
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
		deleteUser:function(){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['400px','auto'],
					title:['删除','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role-center',
					shade: .3,
					btn:["确定","取消"],
					btnAlign:'c',
					shadeClose: true, //开启遮罩关闭
					content:'是否删除该用户？',
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
		authorize:function(){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['1010px','auto'],
					title:['授权','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role',
					shade: .3,
					btn:["确定","取消"],
					btnAlign:'c',
					shadeClose: true, //开启遮罩关闭
					content:$('#yh_layer_3').html(),
					success:function (layero) {
						var btn = layero.find('.layui-layer-btn');
						btn.css({paddingBottom:'50px',zIndex:'1000',position: 'relative'});
						btn.find('a').css({padding:'8px 40px',border:'2px solid #1E9FFF'});
						btn.find('.layui-layer-btn1').css({color:'#1E9FFF'});
						window.parent.layui.use('laypage', function(){
							var laypage = window.parent.layui.laypage;

							//执行一个laypage实例
							laypage.render({
								elem: 'yh_detailed_page_1' //注意，这里的 test1 是 ID，不用加 # 号
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
					yes:function(number,determine){

					}
				})
			})
		},
		hidePhone:function(){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['400px','auto'],
					title:['隐藏手机号','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role-center',
					shade: .3,
					btn:["确定","取消"],
					btnAlign:'c',
					shadeClose: true, //开启遮罩关闭
					content:'是否隐藏该用户手机号？',
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
		showPhone:function(){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['400px','auto'],
					title:['显示手机号','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role-center',
					shade: .3,
					btn:["确定","取消"],
					btnAlign:'c',
					shadeClose: true, //开启遮罩关闭
					content:'是否显示该用户手机号？',
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
		}
	},
	mounted() {
		this.managesPage();
	}
});