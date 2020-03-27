<h1> WEB安全手段分析 </h1>
<h2> 以下只为研究web安全技术学习，无任何违法违纪心理 </h2>
<h2>
    目录:
</h2>
<pre>
    <b>
    0. 中国银行: 无法下载页面，以及无法调试页面，否则将关闭页面
    </b>
        a) 参考链接: https://apply.mcard.boc.cn/apply/pc/product/goProductDetails?newInTypeCode=296c83c6cbb521b7391546c68552694522b0f1f95d7fe9e5aabf9924992c3d45c31aaea978eafd5f7ee4d3f86581d3e2dbe13ff0e9cc31562128e5378bef4ddab507cdb63537e3cba154382abbda491f77dea120477da5965d306b1fa6010acd67eba7c19ee096a90909b0aac6935767469ca5b481702afe78150b06663ce70c&masterOrSubFlag=1&formVersion=GPB1A&shortId=q2eMZj&channelSource=1
        b) 主要手段:
            1. 代码功能: 无法下载页面，以及无法调试页面，否则将关闭页面
            2. 文件地址: 
                a) 线上地址: https://apply.mcard.boc.cn/apply/js/modules/cardapply/pc/forbidden.js
                b) 本地地址: ./中国银行/apply/js/modules/cardapply/pc/forbidden.js
            3. 功能分析:
                a) 无法下载页面，以及无法调试页面: 
                    1. 原理: 检测web页面窗口大小变化，一旦发生变化则关闭页面
                    2. 破解: 在加载网页之前，就启动调试窗口，然后在访问web链接，即可调试页面
                    3. 改进: 建议使用window.screen.availHeight/window.screen.availWidth来检测窗口变化
</pre>