const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPligin = require("clean-webpack-plugin");
const htmlwebpackplugin = require('html-webpack-plugin');
const webpack = require('webpack');
const copyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const PurifyCssWebpack = require('purifycss-webpack');
const glob = require('glob');

module.exports = {
    entry:  {
        index:[path.join(__dirname + "/public/index/js/index.js")],
        manages:[path.join(__dirname + "/public/index/js/manage.js")],
        //系统管理
        manages_system_account:[path.join(__dirname + "/public/index/js/manages_system_account.js")],
        manages_system_role:[path.join(__dirname + "/public/index/js/manages_system_role.js")],
        manages_system_institution:[path.join(__dirname + "/public/index/js/manages_system_institution.js")],
        manages_system_serviceSettings:[path.join(__dirname + "/public/index/js/manages_system_serviceSettings.js")],
        manages_system_multiServiceSettings:[path.join(__dirname + "/public/index/js/manages_system_multiServiceSettings.js")],
        manages_system_salesmanManagement:[path.join(__dirname + "/public/index/js/manages_system_salesmanManagement.js")],
        manages_system_publicSettings:[path.join(__dirname + "/public/index/js/manages_system_publicSettings.js")],
        manages_system_agent:[path.join(__dirname + "/public/index/js/manages_system_agent.js")],
        //用户管理
        manages_users_register:[path.join(__dirname + "/public/index/js/manages_users_register.js")],
        manages_users_worrower:[path.join(__dirname + "/public/index/js/manages_users_worrower.js")],
        manages_users_historyWorrower:[path.join(__dirname + "/public/index/js/manages_users_historyWorrower.js")],
        manages_users_blacklist:[path.join(__dirname + "/public/index/js/manages_users_blacklist.js")],
        manages_users_noApplication:[path.join(__dirname + "/public/index/js/manages_users_noApplication.js")],
        //风控管理
        manages_risk_audited:[path.join(__dirname + "/public/index/js/manages_risk_audited.js")],
        manages_risk_retrial:[path.join(__dirname + "/public/index/js/manages_risk_retrial.js")],
        manages_risk_auditSuccess:[path.join(__dirname + "/public/index/js/manages_risk_auditSuccess.js")],
        manages_risk_unsuccessful:[path.join(__dirname + "/public/index/js/manages_risk_unsuccessful.js")],
        //渠道管理
        manages_channel_statistics:[path.join(__dirname + "/public/index/js/manages_channel_statistics.js")],
        manages_channel_registration:[path.join(__dirname + "/public/index/js/manages_channel_registration.js")],
        manages_channel_hide:[path.join(__dirname + "/public/index/js/manages_channel_hide.js")],
        manages_channel_borrowing:[path.join(__dirname + "/public/index/js/manages_channel_borrowing.js")],
        manages_channel_historicalBorrowing:[path.join(__dirname + "/public/index/js/manages_channel_historicalBorrowing.js")],
        manages_channel_reviewed:[path.join(__dirname + "/public/index/js/manages_channel_reviewed.js")],
        manages_channel_auditSuccess:[path.join(__dirname + "/public/index/js/manages_channel_auditSuccess.js")],
        manages_channel_verifyUnsuccessful:[path.join(__dirname + "/public/index/js/manages_channel_verifyUnsuccessful.js")],
        //财务管理
        manages_finance_pendingLoan:[path.join(__dirname + "/public/index/js/manages_finance_pendingLoan.js")],
        manages_finance_cecord:[path.join(__dirname + "/public/index/js/manages_finance_cecord.js")],
        manages_finance_expenditureRecord:[path.join(__dirname + "/public/index/js/manages_finance_expenditureRecord.js")],
        manages_finance_repayment:[path.join(__dirname + "/public/index/js/manages_finance_repayment.js")],
        manages_finance_revenueRecords:[path.join(__dirname + "/public/index/js/manages_finance_revenueRecords.js")],
        manages_finance_withdrawalAudit:[path.join(__dirname + "/public/index/js/manages_finance_withdrawalAudit.js")],
        manages_finance_withdrawalAudited:[path.join(__dirname + "/public/index/js/manages_finance_withdrawalAudited.js")],
        manages_finance_widthdralUnsuccessful:[path.join(__dirname + "/public/index/js/manages_finance_widthdralUnsuccessful.js")],
        manages_finance_widthredEnvelope:[path.join(__dirname + "/public/index/js/manages_finance_widthredEnvelope.js")],
        manages_finance_widthredEnvelopesAudit:[path.join(__dirname + "/public/index/js/manages_finance_widthredEnvelopesAudit.js")],
        manages_finance_rechargeRecord:[path.join(__dirname + "/public/index/js/manages_finance_rechargeRecord.js")],
        manages_finance_withdrawalsRecord:[path.join(__dirname + "/public/index/js/manages_finance_withdrawalsRecord.js")],
        manages_finance_withdrawalsRecharge:[path.join(__dirname + "/public/index/js/manages_finance_withdrawalsRecharge.js")],
        manages_finance_advance:[path.join(__dirname + "/public/index/js/manages_finance_advance.js")],
        //数据统计
        manages_statistics_advanceThaw:[path.join(__dirname + "/public/index/js/manages_statistics_advanceThaw.js")],
        manages_statistics_rsageRecord:[path.join(__dirname + "/public/index/js/manages_statistics_rsageRecord.js")],
        manages_statistics_reconciliation:[path.join(__dirname + "/public/index/js/manages_statistics_reconciliation.js")],
        manages_statistics_record:[path.join(__dirname + "/public/index/js/manages_statistics_record.js")],
        //产品管理
        manages_product_redenvelopes:[path.join(__dirname + "/public/index/js/manages_product_redenvelopes.js")],
        manages_product_notice:[path.join(__dirname + "/public/index/js/manages_product_notice.js")],
        manages_product_customerService:[path.join(__dirname + "/public/index/js/manages_product_customerService.js")],
        manages_product_information:[path.join(__dirname + "/public/index/js/manages_product_information.js")],
        //贷款大全
        manages_loan_strategy:[path.join(__dirname + "/public/index/js/manages_loan_strategy.js")],
        //催债管理
        manages_collection:[path.join(__dirname + "/public/index/js/manages_collection.js")],
        manages_collection_team:[path.join(__dirname + "/public/index/js/manages_collection_team.js")],
        manages_collection_groupCustomer:[path.join(__dirname + "/public/index/js/manages_collection_groupCustomer.js")],
        manages_collection_deductionFailure:[path.join(__dirname + "/public/index/js/manages_collection_deductionFailure.js")],
        //圆圆风控
        manages_yy_userinformation:[path.join(__dirname + "/public/index/js/manages_yy_userinformation.js")],
        manages_yy_productinformation:[path.join(__dirname + "/public/index/js/manages_yy_productinformation.js")],
        manages_yy_evaluating:[path.join(__dirname + "/public/index/js/manages_yy_evaluating.js")],
        //设置管理
        manages_setup_journal:[path.join(__dirname + "/public/index/js/manages_setup_journal.js")],
        manages_setup_meun:[path.join(__dirname + "/public/index/js/manages_setup_meun.js")],
        manages_setup_banner:[path.join(__dirname + "/public/index/js/manages_setup_banner.js")],
        manages_setup_shortmessage:[path.join(__dirname + "/public/index/js/manages_setup_shortmessage.js")],
        manages_setup_system:[path.join(__dirname + "/public/index/js/manages_setup_system.js")],
        manages_setup_exceeding:[path.join(__dirname + "/public/index/js/manages_setup_exceeding.js")],
        manages_setup_advance:[path.join(__dirname + "/public/index/js/manages_setup_advance.js")],
    },
    output: {
        path: path.join(__dirname + "/dist"),
        publicPath:'./'
    },
    module:{
        rules:[
            {
                test: /\.(eot|ttf|woff|svg)$/,
                use: 'file-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader?modules=false',
                        options: {
                            modules:false,
                            importLoaders: 1,
                            minimize: true,
                            localIdentName: '[name]__[local]-[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.resolve(__dirname, './postcss.config.js'),
                            }
                        }
                    },
                    "sass-loader"
                ],
                exclude:/node_modules/
            },
            {
                test:/\.js$/,
                loaders:'babel-loader?presets[]=es2015&cacheDirectory',
                exclude:/node_modules/
            },
            /*
            * 处理完雪碧图和小图片的base64转换后，对于大图片来说，
            * webpack还可以做到对图片进行压缩，
            * 推荐使用image-webpack-loader,
            * 插件提供了多种形式的压缩
            * */
            {
                test: /\.(png|jpe?g|gif|svg|ttf|woff2|woff)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000, // 限制大小
                        name: 'images/[name]-[hash:8].[ext]'
                    },
                }],
                exclude: /node_modules/
            },
            /*大图压缩*/
            {
                loader: 'image-webpack-loader',
                options: {
                    name: 'images/[name]-[hash:8].[ext]',
                    optipng: {
                        // 使用 imagemin-optipng 压缩 png，enable: false 为关闭
                        enabled: true,
                    },
                    // pngquant: { // 使用 imagemin-pngquant 压缩 png
                    //     quality: '65-90',
                    //     speed: 4
                    // },
                },
                exclude: /node_modules/
            },
            /*pug 模板*/
            {
                test: /\.pug$/,
                use: ['html-loader','pug-html-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'img:data-src', 'audio:src'],
                        minimize:true
                    }
                }
            }
        ]
    },
    //配置可以省略后缀
    resolve:{
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        modules: [
            path.resolve(__dirname, 'node_modules'),
        ],
        extensions:['.js','.scss','.json','png'],
        //mainFiles: ['index'],
    },
    // externals: {
    //     // 包名: window全局对象,
    //     //'$':'jquery',
    //     //'jQuery': 'jquery',
    //     //'window.jQuery': 'jquery',
    //     //'Vue':'Vue'
    // },
    /*
    * webpack 在构建中提供了不少于7种的sourcemap模式，
    * 其中eval模式虽然可以提高构建效率，
    * 但是构建后的脚本较大，因此生产上并不适用。
    * 而source-map 模式可以通过生成的 .map 文件来追踪脚本文件的 具体位置，
    * 进而缩小脚本文件的体积，这是生产模式的首选，并且在生产中，
    * 我们需要隐藏具体的脚本信息，因此可以使用 cheap 和module 模式来达到目的。
    * 综上，在生产的webpack devtool选项中，
    * 使用 cheap-module-source-map的配置
    * */
    devtool: 'cheap-module-source-map',//source-map
    optimization:{
        splitChunks: {//单独提取js引入html
            cacheGroups: {
                commons: {
                    name: "common",
                    chunks: "initial",
                    minChunks: 2,
                    enforce: true,
                }
            }
        }
    },
    plugins:[
        // 提供公共代码
        require('autoprefixer'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery'
        }),
        new copyWebpackPlugin([{
            from:__dirname+'/public/index/js/layui',//打包的静态资源目录地址
            to:__dirname+'/dist/js' //打包到dist下面的public
        }]),
        // 针对css 的压缩， webpack4.0 使用optimize-css-assets-webpack-plugin来压缩单独的css 文件。
        new OptimizeCSSAssetsPlugin({}),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css',
        }),
        // 每次重新打包时清楚原本的内容
        new CleanWebpackPligin(["./dist"]),

        new htmlwebpackplugin({
            title:'登录',
            filename:'./index.html',
            template:'app/index/index.pug',
            inject: true,
            hash:true,
            chunks:['common','index'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'圆汉信息',
            filename:'./manages.html',
            template:'app/index/manages.pug',
            inject: true,
            hash:true,
            chunks:['common','manages'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        //系统管理
        new htmlwebpackplugin({
            title:'机构管理',
            filename:'./manages_system_institution.html',
            template:'app/index/template/manages_system_institution.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_system_institution'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'后台账号管理',
            filename:'./manages_system_account.html',
            template:'app/index/template/manages_system_account.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_system_account'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'角色管理',
            filename:'./manages_system_role.html',
            template:'app/index/template/manages_system_role.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_system_role'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'服务设置',
            filename:'./manages_system_serviceSettings.html',
            template:'app/index/template/manages_system_serviceSettings.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_system_serviceSettings'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'多服务设置',
            filename:'./manages_system_multiServiceSettings.html',
            template:'app/index/template/manages_system_multiServiceSettings.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_system_multiServiceSettings'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'业务员管理',
            filename:'./manages_system_salesmanManagement.html',
            template:'app/index/template/manages_system_salesmanManagement.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_system_salesmanManagement'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'公众号服务设置',
            filename:'./manages_system_publicSettings.html',
            template:'app/index/template/manages_system_publicSettings.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_system_publicSettings'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'代理商管理',
            filename:'./manages_system_agent.html',
            template:'app/index/template/manages_system_agent.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_system_agent'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),

        //用户管理
        new htmlwebpackplugin({
            title:'注册用户',
            filename:'./manages_users_register.html',
            template:'app/index/template/manages_users_register.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_users_register'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'借款用户',
            filename:'./manages_users_worrower.html',
            template:'app/index/template/manages_users_worrower.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_users_worrower'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'历史借款用户',
            filename:'./manages_users_historyWorrower.html',
            template:'app/index/template/manages_users_historyWorrower.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_users_historyWorrower'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'借款黑名单',
            filename:'./manages_users_blacklist.html',
            template:'app/index/template/manages_users_blacklist.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_users_blacklist'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'认证未申请',
            filename:'./manages_users_noApplication.html',
            template:'app/index/template/manages_users_noApplication.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_users_noApplication'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),

        //风控管理
        new htmlwebpackplugin({
            title:'待审核用户',
            filename:'./manages_risk_audited.html',
            template:'app/index/template/manages_risk_audited.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_risk_audited'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'待复审用户',
            filename:'./manages_risk_retrial.html',
            template:'app/index/template/manages_risk_retrial.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_risk_retrial'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'审核成功',
            filename:'./manages_risk_auditSuccess.html',
            template:'app/index/template/manages_risk_auditSuccess.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_risk_auditSuccess'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'审核不成功',
            filename:'./manages_risk_unsuccessful.html',
            template:'app/index/template/manages_risk_unsuccessful.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_risk_unsuccessful'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),

        //渠道管理
        new htmlwebpackplugin({
            title:'渠道统计',
            filename:'./manages_channel_statistics.html',
            template:'app/index/template/manages_channel_statistics.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_channel_statistics'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'渠道隐藏率',
            filename:'./manages_channel_hide.html',
            template:'app/index/template/manages_channel_hide.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_channel_hide'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'渠道注册',
            filename:'./manages_channel_registration.html',
            template:'app/index/template/manages_channel_registration.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_channel_registration'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'渠道借款',
            filename:'./manages_channel_borrowing.html',
            template:'app/index/template/manages_channel_borrowing.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_channel_borrowing'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'渠道历史借款',
            filename:'./manages_channel_historicalBorrowing.html',
            template:'app/index/template/manages_channel_historicalBorrowing.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_channel_historicalBorrowing'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'渠道待复审',
            filename:'./manages_channel_reviewed.html',
            template:'app/index/template/manages_channel_reviewed.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_channel_reviewed'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'渠道审核成功',
            filename:'./manages_channel_auditSuccess.html',
            template:'app/index/template/manages_channel_auditSuccess.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_channel_auditSuccess'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'渠道审核不成功',
            filename:'./manages_channel_verifyUnsuccessful.html',
            template:'app/index/template/manages_channel_verifyUnsuccessful.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_channel_verifyUnsuccessful'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        //财务管理
        new htmlwebpackplugin({
            title:'待放款',
            filename:'./manages_finance_pendingLoan.html',
            template:'app/index/template/manages_finance_pendingLoan.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_finance_pendingLoan'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'放款中记录',
            filename:'./manages_finance_cecord.html',
            template:'app/index/template/manages_finance_cecord.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_finance_cecord'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'放款记录-支出',
            filename:'./manages_finance_expenditureRecord.html',
            template:'app/index/template/manages_finance_expenditureRecord.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_finance_expenditureRecord'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'待还款',
            filename:'./manages_finance_repayment.html',
            template:'app/index/template/manages_finance_repayment.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_finance_repayment'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'还款记录-收入',
            filename:'./manages_finance_revenueRecords.html',
            template:'app/index/template/manages_finance_revenueRecords.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_finance_revenueRecords'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'提现待审核',
            filename:'./manages_finance_withdrawalAudit.html',
            template:'app/index/template/manages_finance_withdrawalAudit.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_finance_withdrawalAudit'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'提现已审核',
            filename:'./manages_finance_withdrawalAudited.html',
            template:'app/index/template/manages_finance_withdrawalAudited.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_finance_withdrawalAudited'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'提现审核不成功',
            filename:'./manages_finance_widthdralUnsuccessful.html',
            template:'app/index/template/manages_finance_widthdralUnsuccessful.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_finance_widthdralUnsuccessful'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'红包提现待审核',
            filename:'./manages_finance_widthredEnvelope.html',
            template:'app/index/template/manages_finance_widthredEnvelope.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_finance_widthredEnvelope'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'红包提现已审核',
            filename:'./manages_finance_widthredEnvelopesAudit.html',
            template:'app/index/template/manages_finance_widthredEnvelopesAudit.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_finance_widthredEnvelopesAudit'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'用户充值记录',
            filename:'./manages_finance_rechargeRecord.html',
            template:'app/index/template/manages_finance_rechargeRecord.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_finance_rechargeRecord'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'机构充值提现记录',
            filename:'./manages_finance_withdrawalsRecord.html',
            template:'app/index/template/manages_finance_withdrawalsRecord.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_finance_withdrawalsRecord'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'服务费充值记录',
            filename:'./manages_finance_withdrawalsRecharge.html',
            template:'app/index/template/manages_finance_withdrawalsRecharge.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_finance_withdrawalsRecharge'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        // new htmlwebpackplugin({
        //     title:'资金变动明细',
        //     filename:'./manages_widthredEnvelopesAudit.html',
        //     template:'app/index/template/manages_finance_widthredEnvelopesAudit.pug',
        //     inject: true,
        //     hash:true,
        //     chunks:['common','manages_widthredEnvelopesAudit'],
        //     minify:{
        //         collapseWhitespace:true,      //清除空格
        //         removeAttributeQuotes:true,    //清除多余引号
        //         removeComments:true           //删除注释
        //     },
        // }),
        new htmlwebpackplugin({
            title:'垫资解冻',
            filename:'./manages_finance_advance.html',
            template:'app/index/template/manages_finance_advance.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_finance_advance'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        //数据统计
        new htmlwebpackplugin({
            title:'每日数据统计',
            filename:'./manages_statistics_advanceThaw.html',
            template:'app/index/template/manages_statistics_advanceThaw.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_statistics_advanceThaw'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'服务使用记录',
            filename:'./manages_statistics_rsageRecord.html',
            template:'app/index/template/manages_statistics_rsageRecord.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_statistics_rsageRecord'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'财务对账',
            filename:'./manages_statistics_reconciliation.html',
            template:'app/index/template/manages_statistics_reconciliation.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_statistics_reconciliation'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'机构服务使用记录',
            filename:'./manages_statistics_record.html',
            template:'app/index/template/manages_statistics_record.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_statistics_record'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        //产品管理
        new htmlwebpackplugin({
            title:'红包管理',
            filename:'./manages_product_redenvelopes.html',
            template:'app/index/template/manages_product_redenvelopes.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_product_redenvelopes'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'公告管理',
            filename:'./manages_product_notice.html',
            template:'app/index/template/manages_product_notice.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_product_notice'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'联系客服',
            filename:'./manages_product_customerService.html',
            template:'app/index/template/manages_product_customerService.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_product_customerService'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'信息流管理',
            filename:'./manages_product_information.html',
            template:'app/index/template/manages_product_information.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_product_information'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        //贷款大全
        new htmlwebpackplugin({
            title:'攻略管理',
            filename:'./manages_loan_strategy.html',
            template:'app/index/template/manages_loan_strategy.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_loan_strategy'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        //催债管理
        new htmlwebpackplugin({
            title:'逾期催收管理',
            filename:'./manages_collection.html',
            template:'app/index/template/manages_collection.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_collection'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'催收组',
            filename:'./manages_collection_team.html',
            template:'app/index/template/manages_collection_team.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_collection_team'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'逾期催收分组',
            filename:'./manages_collection_groupCustomer.html',
            template:'app/index/template/manages_collection_groupCustomer.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_collection_groupCustomer'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'扣款失败记录',
            filename:'./manages_collection_deductionFailure.html',
            template:'app/index/template/manages_collection_deductionFailure.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_collection_deductionFailure'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        //圆圆风控
        new htmlwebpackplugin({
            title:'用户信息',
            filename:'./manages_yy_userinformation.html',
            template:'app/index/template/manages_yy_userinformation.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_yy_userinformation'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'订单信息',
            filename:'./manages_yy_productinformation.html',
            template:'app/index/template/manages_yy_productinformation.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_yy_productinformation'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'手机型号评测',
            filename:'./manages_yy_evaluating.html',
            template:'app/index/template/manages_yy_evaluating.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_yy_evaluating'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        //设置管理
        new htmlwebpackplugin({
            title:'日志管理',
            filename:'./manages_setup_journal.html',
            template:'app/index/template/manages_setup_journal.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_setup_journal'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'菜单管理',
            filename:'./manages_setup_meun.html',
            template:'app/index/template/manages_setup_meun.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_setup_meun'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'banner管理',
            filename:'./manages_setup_banner.html',
            template:'app/index/template/manages_setup_banner.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_setup_banner'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'短信配置',
            filename:'./manages_setup_shortmessage.html',
            template:'app/index/template/manages_setup_shortmessage.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_setup_shortmessage'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'系统配置',
            filename:'./manages_setup_system.html',
            template:'app/index/template/manages_setup_system.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_setup_system'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'贷超管理',
            filename:'./manages_setup_exceeding.html',
            template:'app/index/template/manages_setup_exceeding.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_setup_exceeding'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),
        new htmlwebpackplugin({
            title:'垫资设置',
            filename:'./manages_setup_advance.html',
            template:'app/index/template/manages_setup_advance.pug',
            inject: true,
            hash:true,
            chunks:['common','manages_setup_advance'],
            minify:{
                collapseWhitespace:true,      //清除空格
                removeAttributeQuotes:true,    //清除多余引号
                removeComments:true           //删除注释
            },
        }),


        //消除未使用的css
        // new PurifyCssWebpack({
        //     //消除冗余代码
        //     // 首先保证找路径不是异步的,所以这里用同步的方法
        //     // path.join()也是path里面的方法,主要用来合并路径的
        //     // 'src/*.html' 表示扫描每个html的css
        //     paths:glob.sync(path.join(__dirname,'dist/!*.html'))
        // })
    ]
};