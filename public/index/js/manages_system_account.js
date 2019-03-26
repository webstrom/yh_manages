import manages from '../scss/index.scss'

import Vue from 'vue'
import './layui'
import pack from './package'
import options from './common'
import md5 from 'js-md5'
new Vue({
	el:'#manages_system_account',
	data:{
		province:pack,
		checkboxData:[
			{
				sik:1,
				loginname:'111',
				role:'宗荣华',
				phone:'1234567890',
				name:'宗荣华',
				jgbh:'123456',
				qd:'123456@qq.com',
				state:1,
				sf:'显示',
				dis:'李世建'
			},
			{
				sik:1,
				loginname:'111',
				role:'宗荣华',
				phone:'1234567890',
				name:'宗荣华',
				jgbh:'123456',
				qd:'123456@qq.com',
				state:1,
				sf:'显示',
				dis:'李世建'
			},
			{
				sik:1,
				loginname:'111',
				role:'宗荣华',
				phone:'1234567890',
				name:'宗荣华',
				jgbh:'123456',
				qd:'123456@qq.com',
				state:1,
				sf:'显示',
				dis:'李世建'
			},{
				sik:1,
				loginname:'111',
				role:'宗荣华',
				phone:'1234567890',
				name:'宗荣华',
				jgbh:'123456',
				qd:'123456@qq.com',
				state:1,
				sf:'显示',
				dis:'李世建'
			},{
				sik:1,
				loginname:'111',
				role:'宗荣华',
				phone:'1234567890',
				name:'宗荣华',
				jgbh:'123456',
				qd:'123456@qq.com',
				state:1,
				sf:'显示',
				dis:'李世建'
			},{
				sik:1,
				loginname:'111',
				role:'宗荣华',
				phone:'1234567890',
				name:'宗荣华',
				jgbh:'123456',
				qd:'123456@qq.com',
				state:1,
				sf:'显示',
				dis:'李世建'
			},{
				sik:1,
				loginname:'111',
				role:'宗荣华',
				phone:'1234567890',
				name:'宗荣华',
				jgbh:'123456',
				qd:'123456@qq.com',
				state:1,
				sf:'显示',
				dis:'李世建'
			},{
				sik:1,
				loginname:'111',
				role:'宗荣华',
				phone:'1234567890',
				name:'宗荣华',
				jgbh:'123456',
				qd:'123456@qq.com',
				state:1,
				sf:'显示',
				dis:'李世建'
			},{
				sik:1,
				loginname:'111',
				role:'宗荣华',
				phone:'1234567890',
				name:'宗荣华',
				jgbh:'123456',
				qd:'123456@qq.com',
				state:1,
				sf:'显示',
				dis:'李世建'
			},{
				sik:1,
				loginname:'111',
				role:'宗荣华',
				phone:'1234567890',
				name:'宗荣华',
				jgbh:'123456',
				qd:'123456@qq.com',
				state:1,
				sf:'显示',
				dis:'李世建'
			},{
				sik:1,
				loginname:'111',
				role:'宗荣华',
				phone:'1234567890',
				name:'宗荣华',
				jgbh:'123456',
				qd:'123456@qq.com',
				state:1,
				sf:'显示',
				dis:'李世建'
			},{
				sik:1,
				loginname:'111',
				role:'宗荣华',
				phone:'1234567890',
				name:'宗荣华',
				jgbh:'123456',
				qd:'123456@qq.com',
				state:1,
				sf:'显示',
				dis:'李世建'
			},{
				sik:1,
				loginname:'111',
				role:'宗荣华',
				phone:'1234567890',
				name:'宗荣华',
				jgbh:'123456',
				qd:'123456@qq.com',
				state:1,
				sf:'显示',
				dis:'李世建'
			},{
				sik:1,
				loginname:'111',
				role:'宗荣华',
				phone:'1234567890',
				name:'宗荣华',
				jgbh:'123456',
				qd:'123456@qq.com',
				state:1,
				sf:'显示',
				dis:'李世建'
			},{
				sik:1,
				loginname:'111',
				role:'宗荣华',
				phone:'1234567890',
				name:'宗荣华',
				jgbh:'123456',
				qd:'123456@qq.com',
				state:1,
				sf:'显示',
				dis:'李世建'
			},{
				sik:1,
				loginname:'111',
				role:'宗荣华',
				phone:'1234567890',
				name:'宗荣华',
				jgbh:'123456',
				qd:'123456@qq.com',
				state:1,
				sf:'显示',
				dis:'李世建'
			},{
				sik:1,
				loginname:'111',
				role:'宗荣华',
				phone:'1234567890',
				name:'宗荣华',
				jgbh:'123456',
				qd:'123456@qq.com',
				state:1,
				sf:'显示',
				dis:'李世建'
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
		],
		role:[],
		rows:10,
		page:1,
		total:0,
		quDao:false
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
		accountList:function(){
			var that = this;
			var token = options.getLocalStorage('USERTOKEN');
			options.tokensNoLogin(token);

			var data = {
				token:token,
				page:that.page,
				rows:that.rows
			};
			$.ajax({
				url:options.manage_url+'user/userList.htm',
				data:data,
				type:'post',
				success:function(res){
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
					//res = JSON.parse(JSON.stringify(res));
					var rowsData = new Array(JSON.parse(JSON.parse(JSON.stringify(res))));
					//console.log(JSON.stringify(res));
					console.log(JSON.parse(res));
					console.log(rowsData);
					//res = JSON.parse(res);
					if(rowsData instanceof Array){
						Vue.set(that,'checkboxData',rowsData[0].rows);
						Vue.set(that,'total',rowsData[0].total);
						that.managesPage();
					}else {
						options.layerMsg('数据格式返回错误',2);
						return false;
					}
				},
				error:function (error) {
					options.layerMsg('请求错误！',2);
					console.log(error)
				}
			});
		},
		RoleList:function(){
			var that = this;
			var token = options.getLocalStorage('USERTOKEN');
			options.tokensNoLogin(token);
			var data = {
				token:token
			};
			$.ajax({
				url:options.manage_url+'role/roleCombobox.htm',
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
					if(res instanceof Array){
						Vue.set(that,'role',res);
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
		roleClick:function(e){
			e.stopPropagation();
			console.log($(e.target).find('option:selected').val())
		},
		modifyUser:function(){
			var that = this;
			var token = options.getLocalStorage('USERTOKEN');
			var vm;
			if(that.checkboxList.length !== 1){
				options.layerMsg('请选择单个用户进行操作',2);
				return false;
			}
			Vue.set(that,'quDao',false);
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
					content:$('#yh_layer_1').html(),
					success:function (layero) {
						var btn = layero.find('.layui-layer-btn');
						btn.css({paddingBottom:'50px',zIndex:'1000',position: 'relative'});
						btn.find('a').css({padding:'8px 40px',border:'2px solid #1E9FFF'});
						btn.find('.layui-layer-btn1').css({color:'#1E9FFF'});
						btn.find('#userName').attr('disabled',true);
						vm = new Vue({
							data:{
								userName:'',
								roleId:'',
								mobile:'',
								channel:'',
								password:'',
								nick:'',
								companyId:'',
								userDescription:'',

								roleName:'',
								checkbox:[],
								managesList:[],
								quDao:that.quDao,
								disabled:true
							},
							methods: {
								initUser:function(){
									var current = this;
									Vue.set(current,'userName',that.checkboxData[that.checkboxList[0]].userName);
									Vue.set(current,'roleId',that.checkboxData[that.checkboxList[0]].roleId);
									Vue.set(current,'mobile',that.checkboxData[that.checkboxList[0]].mobile);
									Vue.set(current,'channel',that.checkboxData[that.checkboxList[0]].channel);
									Vue.set(current,'password',that.checkboxData[that.checkboxList[0]].password);
									Vue.set(current,'nick',that.checkboxData[that.checkboxList[0]].nick);
									Vue.set(current,'companyId',that.checkboxData[that.checkboxList[0]].companyId);
									Vue.set(current,'userDescription',that.checkboxData[that.checkboxList[0]].userDescription);
									Vue.set(current,'roleName',that.checkboxData[that.checkboxList[0]].roleName);
								},
								AddUser:function () {
									var current = this;
									window.parent.layui.use('layer',function () {
										var layer = window.parent.layui.layer;
										var vm2;
										layer.open({
											type: 1,
											area: ['1000px','600px'],
											title:['选择角色','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
											id:'layer-role_1',
											shade: .3,
											btn:["确定","取消"],
											btnAlign:'c',
											shadeClose: true, //开启遮罩关闭
											content:$('#yh_manages_jump').html(),
											success:function (lay) {
												lay.css({paddingBottom:' 30px',background:'#ffffff'});
												var bt = lay.find('.layui-layer-btn');
												bt.css({paddingBottom:'50px',zIndex:'1000',position: 'relative'});
												bt.find('a').css({padding:'8px 40px',border:'2px solid #1E9FFF'});
												bt.find('.layui-layer-btn1').css({color:'#1E9FFF'});
												vm2 = new Vue({
													data:{
														managesList:[],
														checkbox:[],
														checkeds: false,
													},
													watch:{
														checkbox: {
															handler: function (val, oldVal) {
																var curr = this;
																if (curr.checkbox.length === curr.managesList.length) {
																	curr.checkeds=true;
																} else {
																	curr.checkeds=false;
																}
																//判断修改是否可以使用
																console.log(curr.checkbox);
																Vue.set(current,'checkbox',curr.checkbox)
															},
															deep: true
														},
													},
													methods:{
														userList:function(){
															var cur = this;
															var token = options.getLocalStorage('USERTOKEN');
															options.tokensNoLogin(token);
															if(current.checkbox.length > 0){
																Vue.set(cur,'checkbox',current.checkbox)
															}
															var data = {
																token:token
															};
															$.ajax({
																url:options.manage_url+'role/roleCombobox.htm',
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
																	if(res instanceof Array){
																		Vue.set(cur,'managesList',res);
																		Vue.set(current,'managesList',res);
																		$.each(cur.managesList,function (i) {
																			if(current.roleId === cur.managesList[i].roleId){
																				console.log(i);
																				Vue.set(cur,'checkbox',[i])
																			}
																		});
																		cur.layerManagesPage()
																	}else {
																		options.layerMsg('数据格式返回错误',2);
																		return false;
																	}
																},
																error:function (error) {
																	options.layerMsg('请求错误！',2);
																	console.log(error)
																}
															});
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
																	,groups:3
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
														this.userList();
													}
												});
												vm2.$mount(lay[0].childNodes[1]);
											},
											yes:function (index,lay) {
												console.log(current.checkbox.length);
												if(current.checkbox.length < 1){
													options.layerMsg('请选择一个角色',7);
													return false;
												}
												if(current.checkbox.length > 1){
													options.layerMsg('只能选择一个角色',7);
													return false;
												}
												Vue.set(current,'roleName',current.managesList[current.checkbox[0]].roleName);
												Vue.set(current,'roleId',current.managesList[current.checkbox[0]].roleId);
												layer.close(index)
											},
											end:function (lay) {
												vm2.$destroy()
											}
										})
									})

								}
							},
							mounted() {
								this.initUser()
							}
						});
						vm.$mount(layero[0].childNodes[1]);
					},
					yes:function(number,determine){
						if(vm.userName===''){
							options.layerMsg('用户名不能为空！',2);
							return false;
						}
						if(vm.roleId===''||vm.roleName ===''){
							options.layerMsg('请选择角色！',2);
							return false;
						}
						if(vm.mobile===''){
							options.layerMsg('请输入手机号！',2);
							return false;
						}
						if(!(/^1(3|4|5|7|8)\d{9}$/.test(vm.mobile))){
							options.layerMsg('手机号码有误，请重新输入',{icon: 2});
							return false;
						}
						if(vm.companyId===''){
							options.layerMsg('请输机构识别码！',2);
							return false;
						}
						if(vm.userDescription===''){
							options.layerMsg('请输备注！',2);
							return false;
						}
						if(vm.password===''){
							options.layerMsg('请输入密码！',2);
							return false;
						}
						var addUserData = {
							token:token,
							userId:that.checkboxData[that.checkboxList[0]].userId,
							userName:vm.userName,
							roleId:vm.roleId,
							mobile:vm.mobile,
							channel:vm.channel,
							password:vm.password,
							nick:vm.nick,
							companyId:vm.companyId,
							userDescription:vm.userDescription,
							userType:2,
							roleName:vm.roleName
						};
						console.log(addUserData);
						$.ajax({
							url:options.manage_url+'user/reserveUser.htm',
							data:addUserData,
							type:'post',
							success:function(res){
								console.log(res.errorMsg);
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
								console.log(res.errorMsg);
								console.log(res);
								if(res.errorMsg === undefined){
									options.layerMsg('修改成功',1);
									that.accountList();
									layer.close(number)
								}else {
									options.layerMsg(res.errorMsg,2)
								}
								console.log(res)
							},
							error:function(error){
								options.layerMsg('请求错误！',2);
								console.log(error)
							}
						});
						console.log(vm.userName);
						console.log(vm.mobile)
					},
					end:function (layero) {
						vm.$destroy()
					}
				})
			})
		},
		addUser:function(e){
			var that = this;
			Vue.set(that,'quDao',false);
			that.AddQuDao()
		},
		AddQuDao:function(){
			var that = this;
			var token = options.getLocalStorage('USERTOKEN');
			var vm;
			var title = that.quDao?'新增渠道用户':'添加用户信息';
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['800px','auto'],
					title:[title,'background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
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
						vm = new Vue({
							data:{
								userName:'',
								roleId:'',
								mobile:'',
								channel:'',
								password:'',
								nick:'',
								companyId:'',
								userDescription:'',

								roleName:'',
								checkbox:[],
								managesList:[],
								quDao:that.quDao,
								disabled:false
							},
							methods: {
								AddUser:function () {
									var current = this;
									//that.RoleList();
									window.parent.layui.use('layer',function () {
										var layer = window.parent.layui.layer;
										var vm2;
										layer.open({
											type: 1,
											area: ['1000px','600px'],
											title:['选择角色','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
											id:'layer-role_1',
											shade: .3,
											btn:["确定","取消"],
											btnAlign:'c',
											shadeClose: true, //开启遮罩关闭
											content:$('#yh_manages_jump').html(),
											success:function (lay) {
												lay.css({paddingBottom:' 30px',background:'#ffffff'});
												var bt = lay.find('.layui-layer-btn');
												bt.css({paddingBottom:'50px',zIndex:'1000',position: 'relative'});
												bt.find('a').css({padding:'8px 40px',border:'2px solid #1E9FFF'});
												bt.find('.layui-layer-btn1').css({color:'#1E9FFF'});
												vm2 = new Vue({
													data:{
														managesList:[],
														checkbox:[],
														checkeds: false,
													},
													watch:{
														checkbox: {
															handler: function (val, oldVal) {
																var curr = this;
																if (curr.checkbox.length === curr.managesList.length) {
																	curr.checkeds=true;
																} else {
																	curr.checkeds=false;
																}
																//判断修改是否可以使用
																console.log(curr.checkbox);
																Vue.set(current,'checkbox',curr.checkbox)
															},
															deep: true
														},
													},
													methods:{
														userList:function(){
															var cur = this;
															var token = options.getLocalStorage('USERTOKEN');
															options.tokensNoLogin(token);
															if(current.checkbox.length > 0){
																Vue.set(cur,'checkbox',current.checkbox)
															}
															var data = {
																token:token
															};
															$.ajax({
																url:options.manage_url+'role/roleCombobox.htm',
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
																	if(res instanceof Array){
																		Vue.set(cur,'managesList',res);
																		Vue.set(current,'managesList',res);
																		cur.layerManagesPage()
																	}else {
																		options.layerMsg('数据格式返回错误',2);
																		return false;
																	}
																},
																error:function (error) {
																	options.layerMsg('请求错误！',2);
																	console.log(error)
																}
															});
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
																	,groups:3
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
														this.userList();
													}
												});
												vm2.$mount(lay[0].childNodes[1]);
											},
											yes:function (index,lay) {
												console.log(current.checkbox.length);
												if(current.checkbox.length < 1){
													options.layerMsg('请选择一个角色',7);
													return false;
												}
												if(current.checkbox.length > 1){
													options.layerMsg('只能选择一个角色',7);
													return false;
												}
												Vue.set(current,'roleName',current.managesList[current.checkbox[0]].roleName);
												Vue.set(current,'roleId',current.managesList[current.checkbox[0]].roleId);
												layer.close(index)
											},
											end:function (lay) {
												vm2.$destroy()
											}
										})
									})

								}
							}
						});
						vm.$mount(layero[0].childNodes[1]);
					},
					yes:function(number,determine){
						if(vm.userName===''){
							options.layerMsg('用户名不能为空！',2);
							return false;
						}
						if(vm.roleId===''||vm.roleName ===''){
							options.layerMsg('请选择角色！',2);
							return false;
						}
						if(vm.mobile===''){
							options.layerMsg('请输入手机号！',2);
							return false;
						}
						if(!(/^1(3|4|5|7|8)\d{9}$/.test(vm.mobile))){
							options.layerMsg('手机号码有误，请重新输入',{icon: 2});
							return false;
						}
						if(vm.companyId===''){
							options.layerMsg('请输机构识别码！',2);
							return false;
						}
						if(vm.userDescription===''){
							options.layerMsg('请输备注！',2);
							return false;
						}
						if(vm.password===''){
							options.layerMsg('请输入密码！',2);
							return false;
						}
						var addUserData = {
							token:token,
							userName:vm.userName,
							roleId:vm.roleId,
							mobile:vm.mobile,
							channel:vm.channel,
							password:vm.password,
							nick:vm.nick,
							companyId:vm.companyId,
							userDescription:vm.userDescription,
							userType:2,
							roleName:vm.roleName
						};
						console.log(addUserData);
						$.ajax({
							url:options.manage_url+'user/reserveUser.htm',
							data:addUserData,
							type:'post',
							success:function(res){
								console.log(res.errorMsg);
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
								console.log(res.errorMsg);
								console.log(res);
								if(res.errorMsg === undefined){
									options.layerMsg('添加成功',1);
									that.accountList();
									layer.close(number)
								}else {
									options.layerMsg(res.errorMsg,2)
								}
								console.log(res)
							},
							error:function(error){
								options.layerMsg('请求错误！',2);
								console.log(error)
							}
						});
						console.log(vm.userName);
						console.log(vm.mobile)
					},
					end:function (layero) {
						vm.$destroy()
					}
				})
			})
		},
		addRole:function(){
			var that = this;
			Vue.set(that,'quDao',true);
			that.AddQuDao()
		},
		enaBle:function(){
			var that = this;
			var token = options.getLocalStorage('USERTOKEN');
			if(that.checkboxList.length < 1){
				options.layerMsg('请勾选您需要操作的用户！',7);
				return false;
			}
			var $push = [];
			$.each(that.checkboxList,function (i) {
				$push.push(that.checkboxData[that.checkboxList[i]].userId)
			});
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
					yes:function(number){
						var data = {
							token:token,
							ids:$push.join()
						};
						console.log(data);
						$.ajax({
							url:options.manage_url+'user/inUse.htm',
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
									options.layerMsg('启用成功!',1);
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
		prohibit:function(){
			var that = this;
			var token = options.getLocalStorage('USERTOKEN');
			if(that.checkboxList.length < 1){
				options.layerMsg('请勾选您需要操作的用户！',7);
				return false;
			}
			var $push = [];
			$.each(that.checkboxList,function (i) {
				$push.push(that.checkboxData[that.checkboxList[i]].userId)
			});
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['400px','auto'],
					title:['禁用','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role-center',
					shade: .3,
					btn:["确定","取消"],
					btnAlign:'c',
					shadeClose: true, //开启遮罩关闭
					content:'是否禁用该用户？',
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
							url:options.manage_url+'user/forb.htm',
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
									options.layerMsg('禁用成功!',1);
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
		deleteUser:function(){
			var that = this;
			var token = options.getLocalStorage('USERTOKEN');
			if(that.checkboxList.length < 1){
				options.layerMsg('请勾选您需要操作的用户！',7);
				return false;
			}
			var $push = [];
			$.each(that.checkboxList,function (i) {
				$push.push(that.checkboxData[that.checkboxList[i]].userId)
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
							url:options.manage_url+'user/deleteUser.htm',
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
		authorize:function(){
			var that = this;
			var token = options.getLocalStorage('USERTOKEN');
			if(that.checkboxList.length!==1){
				options.layerMsg('请勾选单个用户进行操作',7);
				return false;
			}
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				var vm;
				layer.ready(function () {
					layer.open({
						type: 1,
						area: ['1100px','600px'],
						title:['渠道授权查看','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
						id:'layer-role',
						shade: .3,
						btn:["授权","取消"],
						btnAlign:'c',
						shadeClose: true, //开启遮罩关闭
						content:$('#yh_layer_3').html(),
						success:function (layero) {
							layero.css({paddingBottom:' 30px',background:'#ffffff'});
							var btn = layero.find('.layui-layer-btn');
							btn.css({paddingBottom:'50px',zIndex:'1000',position: 'relative'});
							btn.find('a').css({padding:'8px 40px',border:'2px solid #1E9FFF',fontsize:'12px'});
							btn.find('.layui-layer-btn1').css({color:'#1E9FFF'});
							vm = new Vue({
								data:{
									userauthorize:[],
									page:1,
									rows:10,
									checkboxList:[],
									checked: false,
								},
								watch: {
									//深度 watcher
									checkboxList: {
										handler: function (val, oldVal) {
											if (this.checkboxList.length === this.userauthorize.length) {
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
											this.userauthorize.forEach( (index,item) => {
												this.checkboxList.push(item);
											});
										} else {
											this.checkboxList = [];
										}
										console.log('全选/反选：'+this.checkboxList)
									},
									reserveList:function(){
										var current = this;
										var reserveData = {
											token:token,
											companyId:that.checkboxData[that.checkboxList[0]].companyId,
											page:current.page,
											rows:current.rows
										};
										$.ajax({
											url:options.manage_url+'user/userByChannel.htm',
											data:reserveData,
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
													Vue.set(current,'userauthorize',res.rows)
												}
											},
											error:function (error) {
												options.layerMsg('请求错误！',2);
												console.log(error)
											}
										})
									},
									alertPage:function () {
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
									}
								},
								mounted(){
									this.reserveList();
									this.alertPage();
								}
							});
							vm.$mount(layero[0].childNodes[1])
						},
						yes:function(number){
							var channel = [];
							$.each(vm.checkboxList,function (i) {
								channel.push(vm.userauthorize[vm.checkboxList[i]].channel)
							});
							console.log(channel.join());
							var data = {
								token:token,
								userId:that.checkboxData[that.checkboxList[0]].userId,
								channel:channel.join()+','
							};
							$.ajax({
								url:options.manage_url+'user/reserveOperation.htm',
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
									console.log(res.errorMsg);
									if(res.errorMsg === undefined){
										options.layerMsg('授权成功',1);
										that.accountList();
									}else {
										options.layerMsg(res.errorMsg,2)
									}
								},
								error:function (error) {
									options.layerMsg('请求错误！',2);
									console.log(error)
								}
							});
							layer.close(number)
						},
						end:function () {
							vm.$destroy()
						}
					})
				})
			})
		},
		hidePhone:function(){
			var that = this;
			var token = options.getLocalStorage('USERTOKEN');
			if(that.checkboxList.length < 1){
				options.layerMsg('请勾选您需要操作的用户！',7);
				return false;
			}
			var $push = [];
			$.each(that.checkboxList,function (i) {
				$push.push(that.checkboxData[that.checkboxList[i]].userId)
			});
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
					yes:function(number){
						var data = {
							token:token,
							ids:$push.join()
						};
						console.log(data);
						$.ajax({
							url:options.manage_url+'user/hideTypeUser.htm',
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
									options.layerMsg('隐藏成功!',1);
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
		showPhone:function(){
			var that = this;
			var token = options.getLocalStorage('USERTOKEN');
			if(that.checkboxList.length < 1){
				options.layerMsg('请勾选您需要操作的用户！',7);
				return false;
			}
			var $push = [];
			$.each(that.checkboxList,function (i) {
				$push.push(that.checkboxData[that.checkboxList[i]].userId)
			});
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
						var data = {
							token:token,
							ids:$push.join()
						};
						console.log(data);
						$.ajax({
							url:options.manage_url+'user/showTypeUser.htm',
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
									options.layerMsg('显示成功!',1);
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
					,first: 1
					,curr:that.page
					,last: Math.ceil(that.total/that.rows)
					,prev:"上一页"
					,next:"下一页"
					,layout:['count','prev','page','next','limit','skip']
					,jump: function(obj, first){
						Vue.set(that,'page',obj.curr);
						Vue.set(that,'rows',obj.limit);
						if(!first){
							that.accountList();
							Vue.set(that,'checkboxList',[]);
						}
					}
				});
			});
		}
	},
	mounted() {
		this.accountList();
		this.RoleList();
	}
});