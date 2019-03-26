import manages from '../scss/index.scss'

import Vue from 'vue'
import './layui'
import options from './common'
new Vue({
	el:'#manages_system_role',
	data:{
		authorization:{
			system:[
				{name:'添加'},
				{name:'修改'},
				{name:'删除'},
				{name:'上架'},
				{name:'下架'},
				{name:'充值'},
				{name:'暂停注册'}
			],
			account:[
				{name:'添加'},
				{name:'修改'},
				{name:'删除'},
				{name:'启用'},
				{name:'禁止'},
				{name:'新增渠道用户'},
				{name:'隐藏手机号'},
				{name:'显示手机号'},
				{name:'渠道授权查看'},
			],
			role:[
				{name:'添加'},
				{name:'修改'},
				{name:'删除'},
				{name:'授权'},
				{name:'新增渠道角色'},
			],
			meun:[
				{name:'添加'},
				{name:'修改'},
				{name:'删除'},
				{name:'按钮管理'},
			],
			log:[
				{name:'下载后台日志'},
				{name:'手动备份'},
				{name:'删除'},
				{name:'下载操作日志'},
				{name:'运维日志下载'},
				{name:'问题查询'},
			],
			service:[
				{name:'确定'},
				{name:'服务设置2'},
			],
			salesman:[
				{name:'添加'},
				{name:'修改'},
				{name:'删除'},
				{name:'启用'},
				{name:'禁用'},
			]
		},
		checkboxData:[],
		checkboxList:[],
		checked: false,
		total:'',
		page:1,
		rows:10
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
		roleList:function(){
			var that = this;
			var token = options.getLocalStorage('USERTOKEN');
			options.tokensNoLogin(token);
			var data = {
				token:token,
				page:that.page,
				rows:that.rows
			};
			$.ajax({
				url:options.manage_url+'role/roleList.htm',
				data:data,
				type:'post',
				success:function (res) {
					var jsonPack = JSON.stringify(res.replace(/[ ]/g,"").trim());
					var parseInit = JSON.parse(jsonPack);
					var LastIndex = parseInit.lastIndexOf('}');
					var succ = parseInit.lastIndexOf('success=');
					var errorMsg = parseInit.lastIndexOf('Msg=');
					var alerts = parseInit.substring(errorMsg+4,LastIndex);
					var error = parseInit.lastIndexOf('error');
					var Ress = parseInit.substring(succ+8,error-1);
					if(Ress === 'false'){
						options.layerMsg(alerts,2);
						return false;
					}
					res = JSON.parse(res);
					if(res.rows instanceof Array){
						Vue.set(that,'checkboxData',res.rows);
						Vue.set(that,'total',res.total);
						that.managesPage();
						console.log(that.checkboxData)
					}else {
						options.layerMsg('数据格式返回错误',2);
						return false;
					}
				},
				error:function (error) {
					options.layerMsg('请求错误！',2);
					console.log(error)
				}
			})
		},
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
		addRole:function(e){
			var that = this;
			var html = '添加角色信息';
			if($(e.target).html()==='修改'){
				html = '修改角色信息';
				if(that.checkboxList.length!==1){
					options.layerMsg('请选择单个角色进行操作');
					return false
				}
			}
			console.log($(e.target).html());
			var token = options.getLocalStorage('USERTOKEN');
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['400px','auto'],
					title:[html,'background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
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
						if($(e.target).html()==='修改'){
							layero.find('#roleName').val(that.checkboxData[that.checkboxList[0]].roleName);
							layero.find('#orgCode').val(that.checkboxData[that.checkboxList[0]].orgCode);
							layero.find('#roleDescription').val(that.checkboxData[that.checkboxList[0]].roleDescription)
						}
					},
					yes:function(number,determine){
						console.log(determine.find('#roleName').val());
						console.log(determine.find('#orgCode').val());
						console.log(determine.find('#roleDescription').val());
						var data = {
							token:token,
							roleName:determine.find('#roleName').val(),
							orgCode:determine.find('#orgCode').val(),
							roleDescription:determine.find('#roleDescription').val()
						};
						if($(e.target).html()==='修改'){
							data = {
								roleId:that.checkboxData[that.checkboxList[0]].roleId,
								token:token,
								roleName:determine.find('#roleName').val(),
								orgCode:determine.find('#orgCode').val(),
								roleDescription:determine.find('#roleDescription').val()
							}
						}
						$.ajax({
							url: options.manage_url+'role/reserveRole.htm',
							data:data,
							type:'post',
							success:function (res) {
								options.NoLogin(res);
								res = JSON.parse(res);
								if(res.errorMsg === undefined){
									options.layerMsg($(e.target).html()+'成功！',1);
									that.roleList();
									layer.close(number)
								}else {
									options.layerMsg(res.errorMsg,2);
									return false;
								}
							},
							error:function (error) {
								options.layerMsg('请求错误！',2);
								console.log(error)
							}
						})
					}
				})
			})
		},
		deleteRole:function(){
			var that = this;
			var token = options.getLocalStorage('USERTOKEN');
			if(that.checkboxList.length !== 1){
				options.layerMsg('请勾选您需要操作的用户！',7);
				return false;
			}
			var $push = [];
			$.each(that.checkboxList,function (i) {
				$push.push(that.checkboxData[that.checkboxList[i]].roleId)
			});
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
					yes:function(number){
						var data = {
							token:token,
							ids:$push.join()
						};
						console.log(data);
						$.ajax({
							url:options.manage_url+'role/deleteRole.htm',
							type:'post',
							data:data,
							success:function (res) {
								var jsonPack = JSON.stringify(res.replace(/[ ]/g,"").trim());
								var parseInit = JSON.parse(jsonPack);
								var LastIndex = parseInit.lastIndexOf('}');
								var succ = parseInit.lastIndexOf('success=');
								var errorMsg = parseInit.lastIndexOf('Msg=');
								var alerts = parseInit.substring(errorMsg+4,LastIndex);
								var error = parseInit.lastIndexOf('error');
								var Ress = parseInit.substring(succ+8,error-1);
								if(Ress === 'false'){
									options.layerMsg(alerts,2);
									return false;
								}
								res = JSON.parse(res);
								if(res.success){
									options.layerMsg('删除成功!',1);
									Vue.set(that,'checkboxList',[]);
									that.accountList();
									layer.close(number)
								}else {
									options.layerMsg(res.errorMsg,2)
								}
							},
							error:function (error) {
								options.layerMsg('请求错误！',2);
								console.log(error)
							}
						})
					}
				})
			})
		},
		Authorization:function(){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['930px','auto'],
					title:['角色授权-后台管理系统','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role',
					shade: .3,
					btn:["确定","取消"],
					btnAlign:'c',
					shadeClose: true, //开启遮罩关闭
					content:$('#yh_authorization').html(),
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
			var that = this;
			layui.use('laypage', function(){
				var laypage = layui.laypage;

				//执行一个laypage实例
				laypage.render({
					elem: 'yh_manages_lauerpage' //注意，这里的 test1 是 ID，不用加 # 号
					,count: that.total //数据总数，从服务端得到
					,theme:'manages'
					,limit:that.rows
					,limits:[10,20,50,100]
					,prev:"上一页"
					,next:"下一页"
					,first: 1
					,curr:that.page
					,last: Math.ceil(that.total/that.rows)
					,layout:['count','prev','page','next','limit','skip']
					,jump: function(obj, first){
						Vue.set(that,'page',obj.curr);
						Vue.set(that,'rows',obj.limit);
						if(!first){
							that.roleList();
							Vue.set(that,'checkboxList',[]);
						}
					}
				});
			});
		}
	},
	mounted() {
		this.roleList();
	}
});