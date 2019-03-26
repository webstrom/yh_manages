import manages from '../scss/index.scss'

import Vue from 'vue'
import './layui'
new Vue({
	el:'#manages_setup_meun',
	data:{
		checkboxData:[
			{
				sik:1,
				role:'系统管理-机构管理',
				sbm:'添加,修改,删除,上架,下架,充值,暂停注册',
				name:'menu/menuIndex.htm',
				dis:'1',
				sjh:'主菜单',
			},
			{
				sik:1,
				role:'系统管理-机构管理',
				sbm:'添加,修改,删除,上架,下架,充值,暂停注册',
				name:'menu/menuIndex.htm',
				dis:'1',
				sjh:'主菜单',
			},
			{
				sik:1,
				role:'系统管理-机构管理',
				sbm:'添加,修改,删除,上架,下架,充值,暂停注册',
				name:'menu/menuIndex.htm',
				dis:'1',
				sjh:'主菜单',
			},
			{
				sik:1,
				role:'系统管理-机构管理',
				sbm:'添加,修改,删除,上架,下架,充值,暂停注册',
				name:'menu/menuIndex.htm',
				dis:'1',
				sjh:'主菜单',
			},
			{
				sik:1,
				role:'系统管理-机构管理',
				sbm:'添加,修改,删除,上架,下架,充值,暂停注册',
				name:'menu/menuIndex.htm',
				dis:'1',
				sjh:'主菜单',
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
				layer.open({
					type: 1,
					area: ['1010px','600px'],
					title:['按钮管理','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
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
//弹窗
var vm = new Vue({
	data: {
		managesList:[
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
			{
				bh:'10011',
				name:'下载后台日志',
				cd:'日志管理'
			},
		],
		checkbox:[],
		checkeds: false,
	},
	watch:{
		checkbox: {
			handler: function (val, oldVal) {
				if (this.checkbox.length === this.managesList.length) {
					this.checkeds=true;
				} else {
					this.checkeds=false;
				}
				//判断修改是否可以使用

				console.log(this.checkbox)
			},
			deep: true
		},
	},
	methods: {
		// Allchecked: function() {
		// 	if (!this.checkeds) {
		// 		this.checkbox = [];
		// 		this.managesList.forEach( (index,item) => {
		// 			this.checkbox.push(item);
		// 		});
		// 	} else {
		// 		this.checkbox = [];
		// 	}
		// 	console.log('全选/反选：'+this.checkbox)
		// },
		option:function (e) {
			var curr = this;
			//这里写请求  继续数据操作
		},
		//按钮添加
		addButton:function(){
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['400px','auto'],
					title:['添加','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role-center_2',
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
		}
	},
	mounted() {
		this.layerManagesPage();
	}
});