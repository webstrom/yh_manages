const manage_url = 'http://test.oolaile.com:8080/yuanhanManage/';
const userNaves = [];
const options = {
	manage_url,
	userNaves,
	setLocalStorage,
	getLocalStorage,
	layerMsg,
	tokensNoLogin,
	NoLogin
};
function layerMsg(msg,icon) {
	window.parent.layui.use('layer',function () {
		var layer = window.parent.layui.layer;
		layer.ready(function () {
			layer.msg(msg,{icon: icon},function () {
				if(msg === '用户未登录'){
					top.location.href = './index.html';
					return false;
				}
			});
		});
	});
}
function NoLogin(res) {
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
}
function tokensNoLogin(token) {
	if(token===null){
		window.parent.layui.use('layer',function () {
			var layer = window.parent.layui.layer;
			layer.ready(function () {
				layer.msg('用户未登录！',{icon: 2},function () {
					top.location.href = './index.html';
					return false;
				});
			});
		});
	}
}

function setLocalStorage(key, value) {
	var curtime = new Date().getTime()/1000; // 获取当前时间 ，转换成JSON字符串序列
	var valueDate = JSON.stringify({
		val: compileStr(value),
		timer: curtime
	});
	try {
		localStorage.setItem(key, valueDate);
	} catch (e) {
		console.log(e);
		if (isQuotaExceeded(e)) {
			console.log("Error: 本地存储超过限制");
			localStorage.clear();
		} else {
			console.log("Error: 保存到本地存储失败");
		}
	}
}

function isQuotaExceeded(e) {
	var quotaExceeded = false;
	if (e) {
		if (e.code) {
			switch (e.code) {
				case 22:
					quotaExceeded = true;
					break;
				case 1014: // Firefox
					if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
						quotaExceeded = true;
					}
					break;
			}
		} else if (e.number === -2147024882) { // IE8
			quotaExceeded = true;
		}
	}
	return quotaExceeded;
}

function getLocalStorage(key) {
	var exp = 60 * 60 * 24; // 一天的秒数
	if (localStorage.getItem(key)) {
		var vals = localStorage.getItem(key); // 获取本地存储的值
		var dataObj = JSON.parse(vals); // 将字符串转换成JSON对象
		// 如果(当前时间 - 存储的元素在创建时候设置的时间) > 过期时间
		var isTimed = (new Date().getTime()/1000 - dataObj.timer) > exp;
		var newValue = '';
		if (isTimed) {
			console.log("存储已过期");
			localStorage.removeItem(key);
			return null;
		} else {
			newValue = uncompileStr(dataObj.val);
		}
		return newValue;
	} else {
		return null;
	}
}

function compileStr(code) { //对字符串进行加密
	var c = String.fromCharCode(code.charCodeAt(0) + code.length);
	for (var i = 1; i < code.length; i++) {
		c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
	}
	return escape(c);
}

//字符串进行解密
function uncompileStr(code) {
	code = unescape(code);
	var c = String.fromCharCode(code.charCodeAt(0) - code.length);
	for (var i = 1; i < code.length; i++) {
		c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
	}
	return c;
}

module.exports = options;