import manages from '../scss/index.scss'

import Vue from 'vue'
import './layui'
new Vue({
	el:'#manages_system_salesmanManagement',
	data:{
		checkboxData:[
			{
				sik:1,
				role:'qaz234567',
				sbm:'业务员',
				name:'15233445678',
				dis:'李世建',

				jsbm:'9999',
				ywy:'1001',
				zt:'正常',
				bz:'测试',
			},
			{
				sik:1,
				role:'qaz234567',
				sbm:'业务员',
				name:'15233445678',
				dis:'李世建',

				jsbm:'9999',
				ywy:'1001',
				zt:'正常',
				bz:'测试',
			},
			{
				sik:1,
				role:'qaz234567',
				sbm:'业务员',
				name:'15233445678',
				dis:'李世建',

				jsbm:'9999',
				ywy:'1001',
				zt:'正常',
				bz:'测试',
			},
			{
				sik:1,
				role:'qaz234567',
				sbm:'业务员',
				name:'15233445678',
				dis:'李世建',

				jsbm:'9999',
				ywy:'1001',
				zt:'正常',
				bz:'测试',
			},
			{
				sik:1,
				role:'qaz234567',
				sbm:'业务员',
				name:'15233445678',
				dis:'李世建',

				jsbm:'9999',
				ywy:'1001',
				zt:'正常',
				bz:'测试',
			},
			{
				sik:1,
				role:'qaz234567',
				sbm:'业务员',
				name:'15233445678',
				dis:'李世建',

				jsbm:'9999',
				ywy:'1001',
				zt:'正常',
				bz:'测试',
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