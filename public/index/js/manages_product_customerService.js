import manages from '../scss/index.scss'

import Vue from 'vue'
import './layui'
import pack from './package'
new Vue({
	el:'#manages_product_customerService',
	data:{
		province:pack,
		checkboxData:[
			{
				sik:1,
				loginname:'22',
				role:'1212121212',
				phone:'张王灯',
				name:'1233344556',
				jgbh:'联系客服没反应啊亲！',
				qd:'3222',
				state:'2019-02-10 12:22:22',
				sf:'2019-02-10 12:22:22',
				dis:'待回复',
			},
			{
				sik:1,
				loginname:'22',
				role:'1212121212',
				phone:'张王灯',
				name:'1233344556',
				jgbh:'联系客服没反应啊亲！',
				qd:'3222',
				state:'2019-02-10 12:22:22',
				sf:'2019-02-10 12:22:22',
				dis:'待回复',
			},
			{
				sik:1,
				loginname:'22',
				role:'1212121212',
				phone:'张王灯',
				name:'1233344556',
				jgbh:'联系客服没反应啊亲！',
				qd:'3222',
				state:'2019-02-10 12:22:22',
				sf:'2019-02-10 12:22:22',
				dis:'待回复',
			},
			{
				sik:1,
				loginname:'22',
				role:'1212121212',
				phone:'张王灯',
				name:'1233344556',
				jgbh:'联系客服没反应啊亲！',
				qd:'3222',
				state:'2019-02-10 12:22:22',
				sf:'2019-02-10 12:22:22',
				dis:'待回复',
			},
			{
				sik:1,
				loginname:'22',
				role:'1212121212',
				phone:'张王灯',
				name:'1233344556',
				jgbh:'联系客服没反应啊亲！',
				qd:'3222',
				state:'2019-02-10 12:22:22',
				sf:'2019-02-10 12:22:22',
				dis:'待回复',
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
		feedback:function(){
			var that = this;
			window.parent.layui.use('layer',function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['400px','auto'],
					title:['添加问题反馈信息','background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id:'layer-role',
					shade: .3,
					//btn:["确定","取消"],
					btnAlign:'c',
					btn:['确定','取消'],
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