import manages from '../scss/index.scss'
import Vue from 'vue';
import './layui'
import options from './common'
new Vue({
	el:'#manages',
	data:{
		cancellation:false,
		manageMeun:[],
		// manageMeun:[
		// 	{
		// 		text:'系统管理',
		// 		meunOpen:true,
		// 		children:[
		// 			{
		// 				text:'机构管理',
		// 				class:true,
		// 				id:1,
		// 			},
		// 			{
		// 				text:'后台账号管理',
		// 				class:false,
		// 				id:2
		// 			},
		// 			{
		// 				text:'角色管理',
		// 				class:false,
		// 				id:3
		// 			},
		// 			{
		// 				text:'服务设置',
		// 				class:false,
		// 				id:4
		// 			},
		// 			{
		// 				text:'服务设置2',
		// 				class:false,
		// 				id:5
		// 			},
		// 			{
		// 				text:'业务员管理(分销)',
		// 				class:false,
		// 				id:6
		// 			},
		// 			{
		// 				text:'公众号服务设置',
		// 				class:false,
		// 				id:7
		// 			},
		// 			{
		// 				text:'代理商管理',
		// 				class:false,
		// 				id:8
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'用户管理',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'注册用户',
		// 				class:false,
		// 				id:9
		// 			},
		// 			{
		// 				text:'借款用户',
		// 				class:false,
		// 				id:10
		// 			},
		// 			{
		// 				text:'历史借款用户',
		// 				class:false,
		// 				id:11
		// 			},
		// 			{
		// 				text:'借款黑名单用户',
		// 				class:false,
		// 				id:12
		// 			},
		// 			{
		// 				text:'认证未申请用户',
		// 				class:false,
		// 				id:13
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'风控管理',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'待审核用户',
		// 				class:false,
		// 				id:14
		// 			},
		// 			{
		// 				text:'渠道待复审用户',
		// 				class:false,
		// 				id:15
		// 			},
		// 			{
		// 				text:'渠道审核成功',
		// 				class:false,
		// 				id:16
		// 			},
		// 			{
		// 				text:'审核不成功',
		// 				class:false,
		// 				id:17
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'渠道管理',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'渠道统计',
		// 				class:false,
		// 				id:18
		// 			},
		// 			{
		// 				text:'渠道隐藏率',
		// 				class:false,
		// 				id:19
		// 			},
		// 			{
		// 				text:'渠道注册',
		// 				class:false,
		// 				id:20
		// 			},
		// 			{
		// 				text:'渠道借款中用户',
		// 				class:false,
		// 				id:21
		// 			},
		// 			{
		// 				text:'渠道历史借款用户',
		// 				class:false,
		// 				id:22
		// 			},
		// 			{
		// 				text:'渠道待复审',
		// 				class:false,
		// 				id:23
		// 			},
		// 			{
		// 				text:'渠道渠道审核成功',
		// 				class:false,
		// 				id:24
		// 			},
		// 			{
		// 				text:'渠道审核不成功',
		// 				class:false,
		// 				id:25
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'财务管理',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'待放款',
		// 				class:false,
		// 				id:26
		// 			},
		// 			{
		// 				text:'放款中记录',
		// 				class:false,
		// 				id:27
		// 			},
		// 			{
		// 				text:'放款记录-支出',
		// 				class:false,
		// 				id:28
		// 			},
		// 			{
		// 				text:'待还款',
		// 				class:false,
		// 				id:29
		// 			},
		// 			{
		// 				text:'还款记录-收入',
		// 				class:false,
		// 				id:30
		// 			},
		// 			{
		// 				text:'提现待审核',
		// 				class:false,
		// 				id:31
		// 			},
		// 			{
		// 				text:'提现已审核',
		// 				class:false,
		// 				id:32
		// 			},
		// 			{
		// 				text:'提现审核不成功',
		// 				class:false,
		// 				id:33
		// 			},
		// 			{
		// 				text:'红包提现待审核',
		// 				class:false,
		// 				id:34
		// 			},
		// 			{
		// 				text:'红包提现已审核',
		// 				class:false,
		// 				id:35
		// 			},
		// 			{
		// 				text:'用户充值记录',
		// 				class:false,
		// 				id:36
		// 			},
		// 			{
		// 				text:'机构充值提现记录',
		// 				class:false,
		// 				id:37
		// 			},
		// 			{
		// 				text:'服务费充值记录',
		// 				class:false,
		// 				id:38
		// 			},
		// 			{
		// 				text:'资金变动明细',
		// 				class:false,
		// 				id:39
		// 			},
		// 			{
		// 				text:'垫资解冻',
		// 				class:false,
		// 				id:40
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'数据统计',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'每日数据统计',
		// 				class:false,
		// 				id:41
		// 			},
		// 			{
		// 				text:'服务使用记录',
		// 				class:false,
		// 				id:42
		// 			},
		// 			{
		// 				text:'财务对账',
		// 				class:false,
		// 				id:43
		// 			},
		// 			{
		// 				text:'机构服务使用记录',
		// 				class:false,
		// 				id:44
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'产品管理',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'红包管理',
		// 				class:false,
		// 				id:45
		// 			},
		// 			{
		// 				text:'公告管理',
		// 				class:false,
		// 				id:46
		// 			},
		// 			{
		// 				text:'联系CEO',
		// 				class:false,
		// 				id:47
		// 			},
		// 			{
		// 				text:'信息流管理',
		// 				class:false,
		// 				id:48
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'贷款大全',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'攻略管理',
		// 				class:false,
		// 				id:49
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'催债管理',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'逾期催收管理',
		// 				class:false,
		// 				id:50
		// 			},
		// 			{
		// 				text:'催收组',
		// 				class:false,
		// 				id:51
		// 			},
		// 			{
		// 				text:'逾期催收分组',
		// 				class:false,
		// 				id:52
		// 			},
		// 			{
		// 				text:'扣款失败记录',
		// 				class:false,
		// 				id:53
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'圆圆风控',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'用户信息',
		// 				class:false,
		// 				id:54
		// 			},
		// 			{
		// 				text:'订单信息',
		// 				class:false,
		// 				id:55
		// 			},
		// 			{
		// 				text:'手机型号评估清单',
		// 				class:false,
		// 				id:56
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'设置管理',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'日志管理',
		// 				class:false,
		// 				id:57
		// 			},
		// 			{
		// 				text:'菜单管理',
		// 				class:false,
		// 				id:58
		// 			},
		// 			{
		// 				text:'banner管理',
		// 				class:false,
		// 				id:59
		// 			},
		// 			{
		// 				text:'短信配置',
		// 				class:false,
		// 				id:60
		// 			},
		// 			{
		// 				text:'系统配置',
		// 				class:false,
		// 				id:61
		// 			},
		// 			{
		// 				text:'贷超管理',
		// 				class:false,
		// 				id:62
		// 			},
		// 			{
		// 				text:'垫资设置',
		// 				class:false,
		// 				id:63
		// 			}
		// 		]
		// 	}
		// ],
		userNaves:[],
		naverWidth:0
	},
	methods:{
		meunList:function(){
			var that = this;
			var token = options.getLocalStorage('USERTOKEN');
			options.tokensNoLogin(token);
			console.log(token);
			var classAdd = ['icon-xitongshezhi','icon-yonghuguanli','icon-fengkongguanli','icon-qudaoguanli','icon-caiwuguanli','icon-shujutongji','icon-chanpinguanli','icon-daikuandaquan','icon-cuizhaiguanli','icon-zhuxiaodenglu','icon-shezhiguanli'];
			var data = {
				token:token,
				parentId:-1
			};
			$.ajax({
				url:options.manage_url+'menuTree.htm',
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
						Vue.set(that,'manageMeun',res[0].children);
						$.each(that.manageMeun,function (i) {
							Vue.set(that.manageMeun[i],'iconCls',classAdd[i]);
							Vue.set(that.manageMeun[i],'meunOpen',false);
							$.each(that.manageMeun[i].children,function (n) {
								Vue.set(that.manageMeun[i].children[n],'class',false);
							})
						});
						Vue.set(that.manageMeun[0],'meunOpen',true);
						Vue.set(that.manageMeun[0].children[0],'class',true);
						that.userNaves.push(that.manageMeun[0].children[0]);
						console.log(that.manageMeun);
						console.log(that.userNaves);
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
		OpenMenu:function(index){
			var that = this;
			if(that.manageMeun[index].meunOpen){
				Vue.set(that.manageMeun[index],'meunOpen',false);
			}else {
				$.each(that.manageMeun,function (i) {
					Vue.set(that.manageMeun[i],'meunOpen',false);
					$.each(that.manageMeun[i].children,function (n) {
						Vue.set(that.manageMeun[i].children[n],'class',false);
					})
				});
				Vue.set(that.manageMeun[index],'meunOpen',true);
				Vue.set(that.manageMeun[index].children[0],'class',true);
				if(that.userNaves.indexOf(that.manageMeun[index].children[0]) === -1){
					that.userNaves.push(that.manageMeun[index].children[0]);
					var wid = 0;
					that.$nextTick(function () {
						$.each($('#yh_width_auto p a'),function (i) {
							console.log($(this).length);
							console.log($(this).width()+57);
							wid += $(this).width()+57;
						});
						Vue.set(that,'naverWidth',wid);
						$('#yh_width_auto p').css({width:that.naverWidth+'px'});
						if($('#yh_width_auto p').width()>$('#yh_width_auto').width()){
							$('#yh_width_auto p').animate({marginLeft:-($('#yh_width_auto p').width()-$('#yh_width_auto').width())});
						}else {
							$('#yh_width_auto p').css({marginLeft:0});
						}
					})
				}
				switch (that.manageMeun[index].children[0].text) {
					case '机构管理':
						document.getElementById('myiframe').src = './manages_system_institution.html';
						break;
					case '后台账号管理':
						document.getElementById('myiframe').src = './manages_system_account.html';
						break;
					case '角色管理':
						document.getElementById('myiframe').src = './manages_system_role.html';
						break;
					case '服务设置':
						document.getElementById('myiframe').src = './manages_system_serviceSettings.html';
						break;
					case '服务设置2':
						document.getElementById('myiframe').src = './manages_system_multiServiceSettings.html';
						break;
					case '业务员管理(分销)':
						document.getElementById('myiframe').src = './manages_system_salesmanManagement.html';
						break;
					case '公众号服务设置':
						document.getElementById('myiframe').src = './manages_system_publicSettings.html';
						break;
					case '代理商管理':
						document.getElementById('myiframe').src = './manages_system_agent.html';
						break;
					case '注册用户':
						document.getElementById('myiframe').src = './manages_users_register.html';
						break;
					case '借款中用户':
						document.getElementById('myiframe').src = './manages_users_worrower.html';
						break;
					case '历史借款用户':
						document.getElementById('myiframe').src = './manages_users_historyWorrower.html';
						break;
					case '借款黑名单用户':
						document.getElementById('myiframe').src = './manages_users_blacklist.html';
						break;
					case '认证未申请用户':
						document.getElementById('myiframe').src = './manages_users_noApplication.html';
						break;
					case '待审核用户':
						document.getElementById('myiframe').src = './manages_risk_audited.html';
						break;
					case '渠道待复审用户':
						document.getElementById('myiframe').src = './manages_risk_retrial.html';
						break;
					case '渠道审核成功':
						document.getElementById('myiframe').src = './manages_risk_auditSuccess.html';
						break;
					case '审核不成功':
						document.getElementById('myiframe').src = './manages_risk_unsuccessful.html';
						break;
					case '渠道统计':
						document.getElementById('myiframe').src = './manages_channel_statistics.html';
						break;
					case '渠道隐藏率':
						document.getElementById('myiframe').src = './manages_channel_hide.html';
						break;
					case '渠道注册':
						document.getElementById('myiframe').src = './manages_channel_registration.html';
						break;
					case '渠道借款中用户':
						document.getElementById('myiframe').src = './manages_channel_borrowing.html';
						break;
					case '渠道历史借款用户':
						document.getElementById('myiframe').src = './manages_channel_historicalBorrowing.html';
						break;
					case '渠道待复审':
						document.getElementById('myiframe').src = './manages_channel_reviewed.html';
						break;
					case '渠道渠道审核成功':
						document.getElementById('myiframe').src = './manages_channel_auditSuccess.html';
						break;
					case '渠道审核不成功':
						document.getElementById('myiframe').src = './manages_channel_verifyUnsuccessful.html';
						break;
					case '待放款':
						document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
						break;
					case '放款中记录':
						document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
						break;
					case '放款记录-支出':
						document.getElementById('myiframe').src = './manages_finance_expenditureRecord.html';
						break;
					case '待还款':
						document.getElementById('myiframe').src = './manages_finance_repayment.html';
						break;
					case '还款记录-收入':
						document.getElementById('myiframe').src = './manages_finance_revenueRecords.html';
						break;
					case '提现待审核':
						document.getElementById('myiframe').src = './manages_finance_withdrawalAudit.html';
						break;
					case '提现已审核':
						document.getElementById('myiframe').src = './manages_finance_withdrawalAudited.html';
						break;
					case '提现审核不成功':
						document.getElementById('myiframe').src = './manages_finance_widthdralUnsuccessful.html';
						break;
					case '红包提现待审核':
						document.getElementById('myiframe').src = './manages_finance_widthredEnvelope.html';
						break;
					case '红包提现已审核':
						document.getElementById('myiframe').src = './manages_finance_widthredEnvelopesAudit.html';
						break;
					case '用户充值记录':
						document.getElementById('myiframe').src = './manages_finance_rechargeRecord.html';
						break;
					case '机构充值提现记录':
						document.getElementById('myiframe').src = './manages_finance_withdrawalsRecord.html';
						break;
					case '服务费充值记录':
						document.getElementById('myiframe').src = './manages_finance_withdrawalsRecharge.html';
						break;
					case '垫资解冻':
						document.getElementById('myiframe').src = './manages_finance_advance.html';
						break;
					case '每日数据统计':
						document.getElementById('myiframe').src = './manages_statistics_advanceThaw.html';
						break;
					case '服务使用记录':
						document.getElementById('myiframe').src = './manages_statistics_rsageRecord.html';
						break;
					case '财务对账':
						document.getElementById('myiframe').src = './manages_statistics_reconciliation.html';
						break;
					case '机构服务使用记录':
						document.getElementById('myiframe').src = './manages_statistics_record.html';
						break;
					case '红包管理':
						document.getElementById('myiframe').src = './manages_product_redenvelopes.html';
						break;
					case '公告管理':
						document.getElementById('myiframe').src = './manages_product_notice.html';
						break;
					case '联系CEO':
						document.getElementById('myiframe').src = './manages_product_customerService.html';
						break;
					case '信息流管理':
						document.getElementById('myiframe').src = './manages_product_information.html';
						break;
					case '攻略管理':
						document.getElementById('myiframe').src = './manages_loan_strategy.html';
						break;
					case '逾期催收管理':
						document.getElementById('myiframe').src = './manages_collection.html';
						break;
					case '催收组':
						document.getElementById('myiframe').src = './manages_collection_team.html';
						break;
					case '逾期催收分组':
						document.getElementById('myiframe').src = './manages_collection_groupCustomer.html';
						break;
					case '扣款失败记录':
						document.getElementById('myiframe').src = './manages_collection_deductionFailure.html';
						break;
					case '用户信息':
						document.getElementById('myiframe').src = './manages_yy_userinformation.html';
						break;
					case '订单信息':
						document.getElementById('myiframe').src = './manages_yy_productinformation.html';
						break;
					case '手机型号评估清单':
						document.getElementById('myiframe').src = './manages_yy_evaluating.html';
						break;
					case '日志管理':
						document.getElementById('myiframe').src = './manages_setup_journal.html';
						break;
					case '菜单管理':
						document.getElementById('myiframe').src = './manages_setup_meun.html';
						break;
					case 'banner管理':
						document.getElementById('myiframe').src = './manages_setup_banner.html';
						break;
					case '短信配置':
						document.getElementById('myiframe').src = './manages_setup_shortmessage.html';
						break;
					case '系统配置':
						document.getElementById('myiframe').src = './manages_setup_system.html';
						break;
					case '贷超管理':
						document.getElementById('myiframe').src = './manages_setup_exceeding.html';
						break;
					case '垫资设置':
						document.getElementById('myiframe').src = './manages_setup_advance.html';
						break;
					default:
				}
			}
		},
		changeClick:function(index){
			var that = this;
			$.each(that.userNaves,function (i) {
				Vue.set(that.userNaves[i],'class',false)
			});
			Vue.set(that.userNaves[index],'class',true);
			$.each(that.userNaves,function (i) {
				if(that.userNaves[i].class){
					$.each(that.manageMeun,function (n) {
						Vue.set(that.manageMeun[n],'meunOpen',false);
						$.each(that.manageMeun[n].children,function (y) {
							if(that.manageMeun[n].children[y].text === that.userNaves[i].text){
								Vue.set(that.manageMeun[n],'meunOpen',true);
								Vue.set(that.manageMeun[n].children[y],'class',true)
							}
						})
					})
				}
			});
			switch (that.userNaves[index].text) {
				case '机构管理':
					document.getElementById('myiframe').src = './manages_system_institution.html';
					break;
				case '后台账号管理':
					document.getElementById('myiframe').src = './manages_system_account.html';
					break;
				case '角色管理':
					document.getElementById('myiframe').src = './manages_system_role.html';
					break;
				case '服务设置':
					document.getElementById('myiframe').src = './manages_system_serviceSettings.html';
					break;
				case '服务设置2':
					document.getElementById('myiframe').src = './manages_system_multiServiceSettings.html';
					break;
				case '业务员管理(分销)(分销)':
					document.getElementById('myiframe').src = './manages_system_salesmanManagement.html';
					break;
				case '公众号服务设置':
					document.getElementById('myiframe').src = './manages_system_publicSettings.html';
					break;
				case '代理商管理':
					document.getElementById('myiframe').src = './manages_system_agent.html';
					break;
				case '注册用户':
					document.getElementById('myiframe').src = './manages_users_register.html';
					break;
				case '借款中用户':
					document.getElementById('myiframe').src = './manages_users_worrower.html';
					break;
				case '历史借款用户':
					document.getElementById('myiframe').src = './manages_users_historyWorrower.html';
					break;
				case '借款黑名单用户用户':
					document.getElementById('myiframe').src = './manages_users_blacklist.html';
					break;
				case '认证未申请用户':
					document.getElementById('myiframe').src = './manages_users_noApplication.html';
					break;
				case '待审核用户':
					document.getElementById('myiframe').src = './manages_risk_audited.html';
					break;
				case '渠道待复审用户':
					document.getElementById('myiframe').src = './manages_risk_retrial.html';
					break;
				case '渠道审核成功':
					document.getElementById('myiframe').src = './manages_risk_auditSuccess.html';
					break;
				case '审核不成功':
					document.getElementById('myiframe').src = './manages_risk_unsuccessful.html';
					break;
				case '渠道统计':
					document.getElementById('myiframe').src = './manages_channel_statistics.html';
					break;
				case '渠道隐藏率':
					document.getElementById('myiframe').src = './manages_channel_hide.html';
					break;
				case '渠道注册':
					document.getElementById('myiframe').src = './manages_channel_registration.html';
					break;
				case '渠道借款中用户':
					document.getElementById('myiframe').src = './manages_channel_borrowing.html';
					break;
				case '渠道历史借款用户':
					document.getElementById('myiframe').src = './manages_channel_historicalBorrowing.html';
					break;
				case '渠道待复审':
					document.getElementById('myiframe').src = './manages_channel_reviewed.html';
					break;
				case '渠道渠道审核成功':
					document.getElementById('myiframe').src = './manages_channel_auditSuccess.html';
					break;
				case '渠道审核不成功':
					document.getElementById('myiframe').src = './manages_channel_verifyUnsuccessful.html';
					break;
				case '待放款':
					document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
					break;
				case '放款中记录':
					document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
					break;
				case '放款记录-支出':
					document.getElementById('myiframe').src = './manages_finance_expenditureRecord.html';
					break;
				case '待还款':
					document.getElementById('myiframe').src = './manages_finance_repayment.html';
					break;
				case '还款记录-收入':
					document.getElementById('myiframe').src = './manages_finance_revenueRecords.html';
					break;
				case '提现待审核':
					document.getElementById('myiframe').src = './manages_finance_withdrawalAudit.html';
					break;
				case '提现已审核':
					document.getElementById('myiframe').src = './manages_finance_withdrawalAudited.html';
					break;
				case '提现审核不成功':
					document.getElementById('myiframe').src = './manages_finance_widthdralUnsuccessful.html';
					break;
				case '红包提现待审核':
					document.getElementById('myiframe').src = './manages_finance_widthredEnvelope.html';
					break;
				case '红包提现已审核':
					document.getElementById('myiframe').src = './manages_finance_widthredEnvelopesAudit.html';
					break;
				case '用户充值记录':
					document.getElementById('myiframe').src = './manages_finance_rechargeRecord.html';
					break;
				case '机构充值提现记录':
					document.getElementById('myiframe').src = './manages_finance_withdrawalsRecord.html';
					break;
				case '服务费充值记录':
					document.getElementById('myiframe').src = './manages_finance_withdrawalsRecharge.html';
					break;
				case '垫资解冻':
					document.getElementById('myiframe').src = './manages_finance_advance.html';
					break;
				case '每日数据统计':
					document.getElementById('myiframe').src = './manages_statistics_advanceThaw.html';
					break;
				case '服务使用记录':
					document.getElementById('myiframe').src = './manages_statistics_rsageRecord.html';
					break;
				case '财务对账':
					document.getElementById('myiframe').src = './manages_statistics_reconciliation.html';
					break;
				case '机构服务使用记录':
					document.getElementById('myiframe').src = './manages_statistics_record.html';
					break;
				case '红包管理':
					document.getElementById('myiframe').src = './manages_product_redenvelopes.html';
					break;
				case '公告管理':
					document.getElementById('myiframe').src = './manages_product_notice.html';
					break;
				case '联系CEO':
					document.getElementById('myiframe').src = './manages_product_customerService.html';
					break;
				case '信息流管理':
					document.getElementById('myiframe').src = './manages_product_information.html';
					break;
				case '攻略管理':
					document.getElementById('myiframe').src = './manages_loan_strategy.html';
					break;
				case '逾期催收管理':
					document.getElementById('myiframe').src = './manages_collection.html';
					break;
				case '催收组':
					document.getElementById('myiframe').src = './manages_collection_team.html';
					break;
				case '逾期催收分组':
					document.getElementById('myiframe').src = './manages_collection_groupCustomer.html';
					break;
				case '扣款失败记录':
					document.getElementById('myiframe').src = './manages_collection_deductionFailure.html';
					break;
				case '用户信息':
					document.getElementById('myiframe').src = './manages_yy_userinformation.html';
					break;
				case '订单信息':
					document.getElementById('myiframe').src = './manages_yy_productinformation.html';
					break;
				case '手机型号评估清单':
					document.getElementById('myiframe').src = './manages_yy_evaluating.html';
					break;
				case '日志管理':
					document.getElementById('myiframe').src = './manages_setup_journal.html';
					break;
				case '菜单管理':
					document.getElementById('myiframe').src = './manages_setup_meun.html';
					break;
				case 'banner管理':
					document.getElementById('myiframe').src = './manages_setup_banner.html';
					break;
				case '短信配置':
					document.getElementById('myiframe').src = './manages_setup_shortmessage.html';
					break;
				case '系统配置':
					document.getElementById('myiframe').src = './manages_setup_system.html';
					break;
				case '贷超管理':
					document.getElementById('myiframe').src = './manages_setup_exceeding.html';
					break;
				case '垫资设置':
					document.getElementById('myiframe').src = './manages_setup_advance.html';
					break;
				default:
			}
		},
		closeCurrent:function(e,index){
			var that = this;
			e.stopPropagation();
			if(that.userNaves.length > 1){
				that.userNaves.splice(index,1);
			}else {
				window.parent.layui.use('layer',function () {
					var layer = window.parent.layui.layer;
					layer.msg('已经是最后一个，无法删除！',{icon: 5})
				});
			}
			if(index<that.userNaves.length-1){
				$.each(that.manageMeun,function (i) {
					$.each(that.manageMeun[i].children,function (n) {
						Vue.set(that.manageMeun[i].children[n],'class',false)
					})
				});
				$.each(that.userNaves,function (i) {
					Vue.set(that.userNaves[i],'class',false);
				});
				$.each(that.manageMeun,function (i) {
					$.each(that.manageMeun[i].children,function (n) {
						Vue.set(that.manageMeun[i].children[n],'class',false);
					})
				});
				Vue.set(that.userNaves[index],'class',true);

				switch (that.userNaves[index].text) {
					case '机构管理':
						document.getElementById('myiframe').src = './manages_system_institution.html';
						break;
					case '后台账号管理':
						document.getElementById('myiframe').src = './manages_system_account.html';
						break;
					case '角色管理':
						document.getElementById('myiframe').src = './manages_system_role.html';
						break;
					case '服务设置':
						document.getElementById('myiframe').src = './manages_system_serviceSettings.html';
						break;
					case '服务设置2':
						document.getElementById('myiframe').src = './manages_system_multiServiceSettings.html';
						break;
					case '业务员管理(分销)':
						document.getElementById('myiframe').src = './manages_system_salesmanManagement.html';
						break;
					case '公众号服务设置':
						document.getElementById('myiframe').src = './manages_system_publicSettings.html';
						break;
					case '代理商管理':
						document.getElementById('myiframe').src = './manages_system_agent.html';
						break;
					case '注册用户':
						document.getElementById('myiframe').src = './manages_users_register.html';
						break;
					case '借款中用户':
						document.getElementById('myiframe').src = './manages_users_worrower.html';
						break;
					case '历史借款用户':
						document.getElementById('myiframe').src = './manages_users_historyWorrower.html';
						break;
					case '借款黑名单用户':
						document.getElementById('myiframe').src = './manages_users_blacklist.html';
						break;
					case '认证未申请用户':
						document.getElementById('myiframe').src = './manages_users_noApplication.html';
						break;
					case '待审核用户':
						document.getElementById('myiframe').src = './manages_risk_audited.html';
						break;
					case '渠道待复审用户':
						document.getElementById('myiframe').src = './manages_risk_retrial.html';
						break;
					case '渠道审核成功':
						document.getElementById('myiframe').src = './manages_risk_auditSuccess.html';
						break;
					case '审核不成功':
						document.getElementById('myiframe').src = './manages_risk_unsuccessful.html';
						break;
					case '渠道统计':
						document.getElementById('myiframe').src = './manages_channel_statistics.html';
						break;
					case '渠道隐藏率':
						document.getElementById('myiframe').src = './manages_channel_hide.html';
						break;
					case '渠道注册':
						document.getElementById('myiframe').src = './manages_channel_registration.html';
						break;
					case '渠道借款中用户中用户':
						document.getElementById('myiframe').src = './manages_channel_borrowing.html';
						break;
					case '渠道历史借款用户用户':
						document.getElementById('myiframe').src = './manages_channel_historicalBorrowing.html';
						break;
					case '渠道待复审':
						document.getElementById('myiframe').src = './manages_channel_reviewed.html';
						break;
					case '渠道渠道审核成功':
						document.getElementById('myiframe').src = './manages_channel_auditSuccess.html';
						break;
					case '渠道审核不成功':
						document.getElementById('myiframe').src = './manages_channel_verifyUnsuccessful.html';
						break;
					case '待放款':
						document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
						break;
					case '放款中记录':
						document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
						break;
					case '放款记录-支出':
						document.getElementById('myiframe').src = './manages_finance_expenditureRecord.html';
						break;
					case '待还款':
						document.getElementById('myiframe').src = './manages_finance_repayment.html';
						break;
					case '还款记录-收入':
						document.getElementById('myiframe').src = './manages_finance_revenueRecords.html';
						break;
					case '提现待审核':
						document.getElementById('myiframe').src = './manages_finance_withdrawalAudit.html';
						break;
					case '提现已审核':
						document.getElementById('myiframe').src = './manages_finance_withdrawalAudited.html';
						break;
					case '提现审核不成功':
						document.getElementById('myiframe').src = './manages_finance_widthdralUnsuccessful.html';
						break;
					case '红包提现待审核':
						document.getElementById('myiframe').src = './manages_finance_widthredEnvelope.html';
						break;
					case '红包提现已审核':
						document.getElementById('myiframe').src = './manages_finance_widthredEnvelopesAudit.html';
						break;
					case '用户充值记录':
						document.getElementById('myiframe').src = './manages_finance_rechargeRecord.html';
						break;
					case '机构充值提现记录':
						document.getElementById('myiframe').src = './manages_finance_withdrawalsRecord.html';
						break;
					case '服务费充值记录':
						document.getElementById('myiframe').src = './manages_finance_withdrawalsRecharge.html';
						break;
					case '垫资解冻':
						document.getElementById('myiframe').src = './manages_finance_advance.html';
						break;
					case '每日数据统计':
						document.getElementById('myiframe').src = './manages_statistics_advanceThaw.html';
						break;
					case '服务使用记录':
						document.getElementById('myiframe').src = './manages_statistics_rsageRecord.html';
						break;
					case '财务对账':
						document.getElementById('myiframe').src = './manages_statistics_reconciliation.html';
						break;
					case '机构服务使用记录':
						document.getElementById('myiframe').src = './manages_statistics_record.html';
						break;
					case '红包管理':
						document.getElementById('myiframe').src = './manages_product_redenvelopes.html';
						break;
					case '公告管理':
						document.getElementById('myiframe').src = './manages_product_notice.html';
						break;
					case '联系CEO':
						document.getElementById('myiframe').src = './manages_product_customerService.html';
						break;
					case '信息流管理':
						document.getElementById('myiframe').src = './manages_product_information.html';
						break;
					case '攻略管理':
						document.getElementById('myiframe').src = './manages_loan_strategy.html';
						break;
					case '逾期催收管理':
						document.getElementById('myiframe').src = './manages_collection.html';
						break;
					case '催收组':
						document.getElementById('myiframe').src = './manages_collection_team.html';
						break;
					case '逾期催收分组':
						document.getElementById('myiframe').src = './manages_collection_groupCustomer.html';
						break;
					case '扣款失败记录':
						document.getElementById('myiframe').src = './manages_collection_deductionFailure.html';
						break;
					case '用户信息':
						document.getElementById('myiframe').src = './manages_yy_userinformation.html';
						break;
					case '订单信息':
						document.getElementById('myiframe').src = './manages_yy_productinformation.html';
						break;
					case '手机型号评估清单':
						document.getElementById('myiframe').src = './manages_yy_evaluating.html';
						break;
					case '日志管理':
						document.getElementById('myiframe').src = './manages_setup_journal.html';
						break;
					case '菜单管理':
						document.getElementById('myiframe').src = './manages_setup_meun.html';
						break;
					case 'banner管理':
						document.getElementById('myiframe').src = './manages_setup_banner.html';
						break;
					case '短信配置':
						document.getElementById('myiframe').src = './manages_setup_shortmessage.html';
						break;
					case '系统配置':
						document.getElementById('myiframe').src = './manages_setup_system.html';
						break;
					case '贷超管理':
						document.getElementById('myiframe').src = './manages_setup_exceeding.html';
						break;
					case '垫资设置':
						document.getElementById('myiframe').src = './manages_setup_advance.html';
						break;
					default:
				}
				console.log(that.userNaves[index])
			}else {
				$.each(that.userNaves,function (y) {
					Vue.set(that.userNaves[y],'class',false);
				});
				$.each(that.manageMeun,function (i) {
					$.each(that.manageMeun[i].children,function (n) {
						Vue.set(that.manageMeun[i].children[n],'class',false);
					})
				});
				Vue.set(that.userNaves[that.userNaves.length-1],'class',true);

				switch (that.userNaves[that.userNaves.length-1].text) {
					case '机构管理':
						document.getElementById('myiframe').src = './manages_system_institution.html';
						break;
					case '后台账号管理':
						document.getElementById('myiframe').src = './manages_system_account.html';
						break;
					case '角色管理':
						document.getElementById('myiframe').src = './manages_system_role.html';
						break;
					case '服务设置':
						document.getElementById('myiframe').src = './manages_system_serviceSettings.html';
						break;
					case '服务设置2':
						document.getElementById('myiframe').src = './manages_system_multiServiceSettings.html';
						break;
					case '业务员管理(分销)':
						document.getElementById('myiframe').src = './manages_system_salesmanManagement.html';
						break;
					case '公众号服务设置':
						document.getElementById('myiframe').src = './manages_system_publicSettings.html';
						break;
					case '代理商管理':
						document.getElementById('myiframe').src = './manages_system_agent.html';
						break;
					case '注册用户':
						document.getElementById('myiframe').src = './manages_users_register.html';
						break;
					case '借款中用户':
						document.getElementById('myiframe').src = './manages_users_worrower.html';
						break;
					case '历史借款用户':
						document.getElementById('myiframe').src = './manages_users_historyWorrower.html';
						break;
					case '借款黑名单用户':
						document.getElementById('myiframe').src = './manages_users_blacklist.html';
						break;
					case '认证未申请用户用户':
						document.getElementById('myiframe').src = './manages_users_noApplication.html';
						break;
					case '待审核用户':
						document.getElementById('myiframe').src = './manages_risk_audited.html';
						break;
					case '渠道待复审用户':
						document.getElementById('myiframe').src = './manages_risk_retrial.html';
						break;
					case '渠道审核成功':
						document.getElementById('myiframe').src = './manages_risk_auditSuccess.html';
						break;
					case '审核不成功':
						document.getElementById('myiframe').src = './manages_risk_unsuccessful.html';
						break;
					case '渠道统计':
						document.getElementById('myiframe').src = './manages_channel_statistics.html';
						break;
					case '渠道隐藏率':
						document.getElementById('myiframe').src = './manages_channel_hide.html';
						break;
					case '渠道注册':
						document.getElementById('myiframe').src = './manages_channel_registration.html';
						break;
					case '渠道借款中用户中用户':
						document.getElementById('myiframe').src = './manages_channel_borrowing.html';
						break;
					case '渠道历史借款用户':
						document.getElementById('myiframe').src = './manages_channel_historicalBorrowing.html';
						break;
					case '渠道待复审':
						document.getElementById('myiframe').src = './manages_channel_reviewed.html';
						break;
					case '渠道渠道审核成功':
						document.getElementById('myiframe').src = './manages_channel_auditSuccess.html';
						break;
					case '渠道审核不成功':
						document.getElementById('myiframe').src = './manages_channel_verifyUnsuccessful.html';
						break;
					case '待放款':
						document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
						break;
					case '放款中记录':
						document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
						break;
					case '放款记录-支出':
						document.getElementById('myiframe').src = './manages_finance_expenditureRecord.html';
						break;
					case '待还款':
						document.getElementById('myiframe').src = './manages_finance_repayment.html';
						break;
					case '还款记录-收入':
						document.getElementById('myiframe').src = './manages_finance_revenueRecords.html';
						break;
					case '提现待审核':
						document.getElementById('myiframe').src = './manages_finance_withdrawalAudit.html';
						break;
					case '提现已审核':
						document.getElementById('myiframe').src = './manages_finance_withdrawalAudited.html';
						break;
					case '提现审核不成功':
						document.getElementById('myiframe').src = './manages_finance_widthdralUnsuccessful.html';
						break;
					case '红包提现待审核':
						document.getElementById('myiframe').src = './manages_finance_widthredEnvelope.html';
						break;
					case '红包提现已审核':
						document.getElementById('myiframe').src = './manages_finance_widthredEnvelopesAudit.html';
						break;
					case '用户充值记录':
						document.getElementById('myiframe').src = './manages_finance_rechargeRecord.html';
						break;
					case '机构充值提现记录':
						document.getElementById('myiframe').src = './manages_finance_withdrawalsRecord.html';
						break;
					case '服务费充值记录':
						document.getElementById('myiframe').src = './manages_finance_withdrawalsRecharge.html';
						break;
					case '垫资解冻':
						document.getElementById('myiframe').src = './manages_finance_advance.html';
						break;
					case '每日数据统计':
						document.getElementById('myiframe').src = './manages_statistics_advanceThaw.html';
						break;
					case '服务使用记录':
						document.getElementById('myiframe').src = './manages_statistics_rsageRecord.html';
						break;
					case '财务对账':
						document.getElementById('myiframe').src = './manages_statistics_reconciliation.html';
						break;
					case '机构服务使用记录':
						document.getElementById('myiframe').src = './manages_statistics_record.html';
						break;
					case '红包管理':
						document.getElementById('myiframe').src = './manages_product_redenvelopes.html';
						break;
					case '公告管理':
						document.getElementById('myiframe').src = './manages_product_notice.html';
						break;
					case '联系CEO':
						document.getElementById('myiframe').src = './manages_product_customerService.html';
						break;
					case '信息流管理':
						document.getElementById('myiframe').src = './manages_product_information.html';
						break;
					case '攻略管理':
						document.getElementById('myiframe').src = './manages_loan_strategy.html';
						break;
					case '逾期催收管理':
						document.getElementById('myiframe').src = './manages_collection.html';
						break;
					case '催收组':
						document.getElementById('myiframe').src = './manages_collection_team.html';
						break;
					case '逾期催收分组':
						document.getElementById('myiframe').src = './manages_collection_groupCustomer.html';
						break;
					case '扣款失败记录':
						document.getElementById('myiframe').src = './manages_collection_deductionFailure.html';
						break;
					case '用户信息':
						document.getElementById('myiframe').src = './manages_yy_userinformation.html';
						break;
					case '订单信息':
						document.getElementById('myiframe').src = './manages_yy_productinformation.html';
						break;
					case '手机型号评估清单':
						document.getElementById('myiframe').src = './manages_yy_evaluating.html';
						break;
					case '日志管理':
						document.getElementById('myiframe').src = './manages_setup_journal.html';
						break;
					case '菜单管理':
						document.getElementById('myiframe').src = './manages_setup_meun.html';
						break;
					case 'banner管理':
						document.getElementById('myiframe').src = './manages_setup_banner.html';
						break;
					case '短信配置':
						document.getElementById('myiframe').src = './manages_setup_shortmessage.html';
						break;
					case '系统配置':
						document.getElementById('myiframe').src = './manages_setup_system.html';
						break;
					case '贷超管理':
						document.getElementById('myiframe').src = './manages_setup_exceeding.html';
						break;
					case '垫资设置':
						document.getElementById('myiframe').src = './manages_setup_advance.html';
						break;
					default:
				}
			}
			$.each(that.userNaves,function (i) {
				if(that.userNaves[i].class){
					$.each(that.manageMeun,function (n) {
						Vue.set(that.manageMeun[n],'meunOpen',false);
						$.each(that.manageMeun[n].children,function (y) {
							if(that.manageMeun[n].children[y].text === that.userNaves[i].text){
								Vue.set(that.manageMeun[n],'meunOpen',true);
								Vue.set(that.manageMeun[n].children[y],'class',true)
							}
						})
					})
				}
			});
			var wid = 0;
			that.$nextTick(function () {
				$.each($('#yh_width_auto p a'),function (i) {
					console.log($(this).length);
					console.log($(this).width()+57);
					wid += $(this).width()+57;
				});
				Vue.set(that,'naverWidth',wid);
				if($('#yh_width_auto p').width()>$('#yh_width_auto').width()){
					$('#yh_width_auto p').animate({marginLeft:-($('#yh_width_auto p').width()-$('#yh_width_auto').width())});
				}else {
					$('#yh_width_auto p').css({marginLeft:0});
				}
				$('#yh_width_auto p').css({width:that.naverWidth+'px'});
			})
		},
		scrollTabLeft:function() {
			var that = this;
			function calSumWidth(elements) {
				var width = 0;
				$(elements).each(function () {
					width += $(this).outerWidth(true);
				});
				return width;
			}
			var marginLeftVal = Math.abs(parseInt($('#yh_width_auto p').css('margin-left')));
			// 可视区域非tab宽度
			var tabOuterWidth = calSumWidth($("#yh_slide").children().not("#yh_width_auto"));
			//可视区域tab宽度
			var visibleWidth = $("#yh_width_auto").outerWidth(true) - tabOuterWidth;
			console.log(visibleWidth);

			//实际滚动宽度
			var scrollVal = 0;
			if ($("#yh_width_auto p").width() < visibleWidth) {
				return false;
			} else {
				var tabElement = $(".J_menuTab:first");
				console.log($(tabElement).html());
				var offsetVal = 0;
				console.log(tabElement);
				while ((offsetVal + $(tabElement).outerWidth(true)) <= marginLeftVal) {//找到离当前tab最近的元素
					offsetVal += $(tabElement).outerWidth(true);
					tabElement = $(tabElement).next();
					console.log(22222)
				}
				console.log((offsetVal + $(tabElement).outerWidth(true)));
				console.log($(tabElement).next().outerWidth(true));
				console.log($(tabElement).outerWidth(true));
				console.log(marginLeftVal);
				offsetVal = 0;

				if (calSumWidth($(tabElement).prevAll()) > visibleWidth) {
					while ((offsetVal + $(tabElement).outerWidth(true)) < (visibleWidth) && tabElement.length > 0) {
						offsetVal += $(tabElement).outerWidth(true);
						tabElement = $(tabElement).prev();
						console.log(111111)
					}
					console.log(3333);
					console.log($(tabElement).prevAll());
					scrollVal = calSumWidth($(tabElement).prevAll());
				}
				console.log(scrollVal);
				console.log(tabElement)
			}
			$('#yh_width_auto p').animate({
				marginLeft: 0 - scrollVal + 'px'
			}, "fast");
		},
		scrollTabRight:function() {
			function calSumWidth(elements) {
				var width = 0;
				$(elements).each(function () {
					width += $(this).outerWidth(true);
				});
				return width;
			}
			var marginLeftVal = Math.abs(parseInt($('#yh_width_auto p').css('margin-left')));
			// 可视区域非tab宽度
			var tabOuterWidth = calSumWidth($("#yh_slide").children().not("#yh_width_auto"));
			//可视区域tab宽度
			var visibleWidth = $("#yh_width_auto").outerWidth(true) - tabOuterWidth;
			//实际滚动宽度
			var scrollVal = 0;
			if ($("#yh_width_auto p").width() < visibleWidth) {
				return false;
			} else {
				var tabElement = $(".J_menuTab:first");
				var offsetVal = 0;
				while ((offsetVal + $(tabElement).outerWidth(true)) <= marginLeftVal) {//找到离当前tab最近的元素
					offsetVal += $(tabElement).outerWidth(true);
					tabElement = $(tabElement).next();
				}
				offsetVal = 0;
				while ((offsetVal + $(tabElement).outerWidth(true)) < (visibleWidth) && tabElement.length > 0) {
					offsetVal += $(tabElement).outerWidth(true);
					tabElement = $(tabElement).next();
				}
				scrollVal = calSumWidth($(tabElement).prevAll());
				if (scrollVal > 0) {
					$('#yh_width_auto p').animate({
						marginLeft: 0 - scrollVal + 'px'
					}, "fast");
				}
			}
		},
		meundistre:function(index,cur){
			var that = this;
			console.log(12354564456465);
			$.each(that.manageMeun[index].children,function (i) {
				Vue.set(that.manageMeun[index].children[i],'class',false);
			});
			Vue.set(that.manageMeun[index].children[cur],'class',true);

			console.log(that.userNaves.indexOf(that.manageMeun[index].children[cur]));

			if(that.userNaves.indexOf(that.manageMeun[index].children[cur]) === -1){
				that.userNaves.push(that.manageMeun[index].children[cur]);
				var wid = 0;
				that.$nextTick(function () {
					$.each($('#yh_width_auto p a'),function (i) {
						console.log($(this).length);
						console.log($(this).width()+57);
						wid += $(this).width()+57;
					});
					Vue.set(that,'naverWidth',wid);
					$('#yh_width_auto p').css({width:that.naverWidth+'px'});
					if($('#yh_width_auto p').width()>$('#yh_width_auto').width()){
						$('#yh_width_auto p').animate({marginLeft:-($('#yh_width_auto p').width()-$('#yh_width_auto').width())});
					}else {
						$('#yh_width_auto p').css({marginLeft:0});
					}
				})
			}else {
				$.each();
				$.each(that.userNaves,function (i) {
					Vue.set(that.userNaves[i],'class',false)
				});
				Vue.set(that.userNaves[that.userNaves.indexOf(that.manageMeun[index].children[cur])],'class',true)
			}

			console.log(that.naverWidth);
			switch (that.manageMeun[index].children[cur].text) {
				case '机构管理':
					document.getElementById('myiframe').src = './manages_system_institution.html';
					break;
				case '后台账号管理':
					document.getElementById('myiframe').src = './manages_system_account.html';
					break;
				case '角色管理':
					document.getElementById('myiframe').src = './manages_system_role.html';
					break;
				case '服务设置':
					document.getElementById('myiframe').src = './manages_system_serviceSettings.html';
					break;
				case '服务设置2':
					document.getElementById('myiframe').src = './manages_system_multiServiceSettings.html';
					break;
				case '业务员管理(分销)':
					document.getElementById('myiframe').src = './manages_system_salesmanManagement.html';
					break;
				case '公众号服务设置':
					document.getElementById('myiframe').src = './manages_system_publicSettings.html';
					break;
				case '代理商管理':
					document.getElementById('myiframe').src = './manages_system_agent.html';
					break;
				case '注册用户':
					document.getElementById('myiframe').src = './manages_users_register.html';
					break;
				case '借款中用户':
					document.getElementById('myiframe').src = './manages_users_worrower.html';
					break;
				case '历史借款用户':
					document.getElementById('myiframe').src = './manages_users_historyWorrower.html';
					break;
				case '借款黑名单用户':
					document.getElementById('myiframe').src = './manages_users_blacklist.html';
					break;
				case '认证未申请用户':
					document.getElementById('myiframe').src = './manages_users_noApplication.html';
					break;
				case '待审核用户':
					document.getElementById('myiframe').src = './manages_risk_audited.html';
					break;
				case '渠道待复审用户':
					document.getElementById('myiframe').src = './manages_risk_retrial.html';
					break;
				case '渠道审核成功':
					document.getElementById('myiframe').src = './manages_risk_auditSuccess.html';
					break;
				case '审核不成功':
					document.getElementById('myiframe').src = './manages_risk_unsuccessful.html';
					break;
				case '渠道统计':
					document.getElementById('myiframe').src = './manages_channel_statistics.html';
					break;
				case '渠道隐藏率':
					document.getElementById('myiframe').src = './manages_channel_hide.html';
					break;
				case '渠道注册':
					document.getElementById('myiframe').src = './manages_channel_registration.html';
					break;
				case '渠道借款中用户':
					document.getElementById('myiframe').src = './manages_channel_borrowing.html';
					break;
				case '渠道历史借款用户':
					document.getElementById('myiframe').src = './manages_channel_historicalBorrowing.html';
					break;
				case '渠道待复审':
					document.getElementById('myiframe').src = './manages_channel_reviewed.html';
					break;
				case '渠道渠道审核成功':
					document.getElementById('myiframe').src = './manages_channel_auditSuccess.html';
					break;
				case '渠道审核不成功':
					document.getElementById('myiframe').src = './manages_channel_verifyUnsuccessful.html';
					break;
				case '待放款':
					document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
					break;
				case '放款中记录':
					document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
					break;
				case '放款记录-支出':
					document.getElementById('myiframe').src = './manages_finance_expenditureRecord.html';
					break;
				case '待还款':
					document.getElementById('myiframe').src = './manages_finance_repayment.html';
					break;
				case '还款记录-收入':
					document.getElementById('myiframe').src = './manages_finance_revenueRecords.html';
					break;
				case '提现待审核':
					document.getElementById('myiframe').src = './manages_finance_withdrawalAudit.html';
					break;
				case '提现已审核':
					document.getElementById('myiframe').src = './manages_finance_withdrawalAudited.html';
					break;
				case '提现审核不成功':
					document.getElementById('myiframe').src = './manages_finance_widthdralUnsuccessful.html';
					break;
				case '红包提现待审核':
					document.getElementById('myiframe').src = './manages_finance_widthredEnvelope.html';
					break;
				case '红包提现已审核':
					document.getElementById('myiframe').src = './manages_finance_widthredEnvelopesAudit.html';
					break;
				case '用户充值记录':
					document.getElementById('myiframe').src = './manages_finance_rechargeRecord.html';
					break;
				case '机构充值提现记录':
					document.getElementById('myiframe').src = './manages_finance_withdrawalsRecord.html';
					break;
				case '服务费充值记录':
					document.getElementById('myiframe').src = './manages_finance_withdrawalsRecharge.html';
					break;
				case '垫资解冻':
					document.getElementById('myiframe').src = './manages_finance_advance.html';
					break;
				case '每日数据统计':
					document.getElementById('myiframe').src = './manages_statistics_advanceThaw.html';
					break;
				case '服务使用记录':
					document.getElementById('myiframe').src = './manages_statistics_rsageRecord.html';
					break;
				case '财务对账':
					document.getElementById('myiframe').src = './manages_statistics_reconciliation.html';
					break;
				case '机构服务使用记录':
					document.getElementById('myiframe').src = './manages_statistics_record.html';
					break;
				case '红包管理':
					document.getElementById('myiframe').src = './manages_product_redenvelopes.html';
					break;
				case '公告管理':
					document.getElementById('myiframe').src = './manages_product_notice.html';
					break;
				case '联系CEO':
					document.getElementById('myiframe').src = './manages_product_customerService.html';
					break;
				case '信息流管理':
					document.getElementById('myiframe').src = './manages_product_information.html';
					break;
				case '攻略管理':
					document.getElementById('myiframe').src = './manages_loan_strategy.html';
					break;
				case '逾期催收管理':
					document.getElementById('myiframe').src = './manages_collection.html';
					break;
				case '催收组':
					document.getElementById('myiframe').src = './manages_collection_team.html';
					break;
				case '逾期催收分组':
					document.getElementById('myiframe').src = './manages_collection_groupCustomer.html';
					break;
				case '扣款失败记录':
					document.getElementById('myiframe').src = './manages_collection_deductionFailure.html';
					break;
				case '用户信息':
					document.getElementById('myiframe').src = './manages_yy_userinformation.html';
					break;
				case '订单信息':
					document.getElementById('myiframe').src = './manages_yy_productinformation.html';
					break;
				case '手机型号评估清单':
					document.getElementById('myiframe').src = './manages_yy_evaluating.html';
					break;
				case '日志管理':
					document.getElementById('myiframe').src = './manages_setup_journal.html';
					break;
				case '菜单管理':
					document.getElementById('myiframe').src = './manages_setup_meun.html';
					break;
				case 'banner管理':
					document.getElementById('myiframe').src = './manages_setup_banner.html';
					break;
				case '短信配置':
					document.getElementById('myiframe').src = './manages_setup_shortmessage.html';
					break;
				case '系统配置':
					document.getElementById('myiframe').src = './manages_setup_system.html';
					break;
				case '贷超管理':
					document.getElementById('myiframe').src = './manages_setup_exceeding.html';
					break;
				case '垫资设置':
					document.getElementById('myiframe').src = './manages_setup_advance.html';
					break;
				default:
			}

		},
		loginCancellation:function(){
			if(this.cancellation){
				Vue.set(this,'cancellation',false)
			}else {
				Vue.set(this,'cancellation',true)
			}
		},
		selfAdaption:function(){
			function setIframeHeight(iframe) {
				if (iframe) {
					var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
					if (iframeWin.document.body) {
						iframe.height = document.documentElement.clientHeight-206
					}
				}
			}
			window.onload = function () {
				setIframeHeight(document.getElementById('myiframe'));
			};
			window.onresize=function(){
				setIframeHeight(document.getElementById('myiframe'));
			};
		}
	},
	mounted(){
		this.selfAdaption();
		this.meunList();

	}
});