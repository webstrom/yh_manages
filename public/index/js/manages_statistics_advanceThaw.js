import manages from '../scss/index.scss'

import Vue from 'vue'
import './layui'
new Vue({
	el:'#manages_statistics_advanceThaw',
	data:{
		checkboxData:[
			{
				sik:1,
				role:'2019-01-11',
				sbm:'4095',
				name:'32',
				dis:'4',

				dd:'3',
				xs:'100',
				xx:'967',
				xshk:'1000',
				xxhk:'1000',
				tp:'0',
				yq:'10',
				yqts:'10',
				ht:'100',
				tx:'32.33',
				fw:'22.72',
			},
			{
				sik:1,
				role:'2019-01-11',
				sbm:'4095',
				name:'32',
				dis:'4',

				dd:'3',
				xs:'100',
				xx:'967',
				xshk:'1000',
				xxhk:'1000',
				tp:'0',
				yq:'10',
				yqts:'10',
				ht:'100',
				tx:'32.33',
				fw:'22.72',
			},
			{
				sik:1,
				role:'2019-01-11',
				sbm:'4095',
				name:'32',
				dis:'4',

				dd:'3',
				xs:'100',
				xx:'967',
				xshk:'1000',
				xxhk:'1000',
				tp:'0',
				yq:'10',
				yqts:'10',
				ht:'100',
				tx:'32.33',
				fw:'22.72',
			},
			{
				sik:1,
				role:'2019-01-11',
				sbm:'4095',
				name:'32',
				dis:'4',

				dd:'3',
				xs:'100',
				xx:'967',
				xshk:'1000',
				xxhk:'1000',
				tp:'0',
				yq:'10',
				yqts:'10',
				ht:'100',
				tx:'32.33',
				fw:'22.72',
			},
			{
				sik:1,
				role:'2019-01-11',
				sbm:'4095',
				name:'32',
				dis:'4',

				dd:'3',
				xs:'100',
				xx:'967',
				xshk:'1000',
				xxhk:'1000',
				tp:'0',
				yq:'10',
				yqts:'10',
				ht:'100',
				tx:'32.33',
				fw:'22.72',
			},
			{
				sik:1,
				role:'2019-01-11',
				sbm:'4095',
				name:'32',
				dis:'4',

				dd:'3',
				xs:'100',
				xx:'967',
				xshk:'1000',
				xxhk:'1000',
				tp:'0',
				yq:'10',
				yqts:'10',
				ht:'100',
				tx:'32.33',
				fw:'22.72',
			},
			{
				sik:1,
				role:'2019-01-11',
				sbm:'4095',
				name:'32',
				dis:'4',

				dd:'3',
				xs:'100',
				xx:'967',
				xshk:'1000',
				xxhk:'1000',
				tp:'0',
				yq:'10',
				yqts:'10',
				ht:'100',
				tx:'32.33',
				fw:'22.72',
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