import manages from '../scss/index.scss'

import Vue from 'vue'
import './layui'
import options from './common'
import md5 from 'js-md5'
new Vue({
	el:'#manages_login',
	data:{
		userName:'',
		password:'',
		imageCode:''
	},
	methods:{
		ManageLogin:function(){
			var that = this;
			if(that.userName === ''){
				layui.use('layer',function () {
					var layer = layui.layer;
					layer.ready(function () {
						layer.msg('请输入用户名！',{icon: 7})
					});
				});
				return false;
			}
			if(that.password === ''){
				layui.use('layer',function () {
					var layer = layui.layer;
					layer.ready(function () {
						layer.msg('请输入密码！',{icon: 7})
					});
				});
				return false;
			}
			if(that.imageCode === ''){
				layui.use('layer',function () {
					var layer = layui.layer;
					layer.ready(function () {
						layer.msg('请输入验证码！',{icon: 7})
					});
				});
				return false;
			}
			var data = {
				userName:that.userName,
				password:md5(that.password),
				imageCode:that.imageCode
			};
			console.log(data);
			$.ajax({
				url: options.manage_url+'loginToken.htm',
				data: data,
				type:'post',
				//dataType:'json',
				success:function (res) {
					var jsonPack = JSON.stringify(res.replace(/[ ]/g,"").trim());
					var parseInit = JSON.parse(jsonPack);
					var fistIndex = parseInit.lastIndexOf('token=');
					var LastIndex = parseInit.lastIndexOf('}');
					var token = parseInit.substring(fistIndex+6,LastIndex);
					var succ = parseInit.lastIndexOf('success=');
					var errorMsg = parseInit.lastIndexOf('Msg=');
					var alerts = parseInit.substring(errorMsg+4,LastIndex);

					var Ress = parseInit.substring(succ+8,fistIndex-1);
					console.log(Ress);
					console.log(alerts);
					if(Ress === 'true'){
						options.setLocalStorage('USERTOKEN',token);
						window.location.href = './manages.html';
					}else {
						layui.use('layer',function () {
							var layer = layui.layer;
							layer.ready(function () {
								layer.msg(alerts,{icon: 2})
							});
						});
						return false;
					}
				},
				error:function (error) {
					console.log(error);
				}
			})
		},
		Verification:function(e){
			var that = this;
			if(that.userName===''){
				options.layerMsg('请输入用户名',2);
				return false;
			}
			var data = {
				userName:that.userName
			};
			$.ajax({
				url:options.manage_url+'genRegCode.htm',
				data: data,
				type:'post',
				dataType:'json',
				success:function (res) {
					console.log(1231231231313);
					if(res.success){
						$(e.target).html('验证码已发送');
						options.layerMsg(res.errorMsg,1);
					}else {
						options.layerMsg(res.errorMsg,7);
					}
				},
				error:function (error) {
					options.layerMsg('请求错误！',2);
					console.log(error)
				}
			})
		},
		Regain:function () {
			var that = this;
			if(that.userName===''){
				options.layerMsg('请输入用户名',2);
				return false;
			}
			var data = {
				userName:that.userName
			};
			$.ajax({
				url:options.manage_url+'genRegCodeRetry.htm',
				data: data,
				type:'post',
				dataType:'json',
				success:function (res) {
					if(res.success){
						$(e.target).html('验证码已发送');
						options.layerMsg(res.errorMsg,1);
					}else {
						options.layerMsg(res.errorMsg,7);
					}
				},
				error:function (error) {
					options.layerMsg('请求错误！',2);
					console.log(error)
				}
			})
		}
	}
});