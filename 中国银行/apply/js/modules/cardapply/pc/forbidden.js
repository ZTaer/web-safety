$(function(){
	document.onkeydown = function () {
	    if (window.event && window.event.keyCode == 123) {
	        event.keyCode = 0;
	        event.returnValue = false;
	        return false;
	    }
	};
	//这段js要放在页面最下方  
	var h = window.innerHeight, w = window.innerWidth;
	//禁用右键 （防止右键查看源代码）  
	window.oncontextmenu = function() {
		return false;
	}
	// window.onresize = ()=>{}: 当窗口发生变化，就会促发此函数
	//如果用户在工具栏调起开发者工具，那么判断浏览器的可视高度和可视宽度是否有改变，如有改变则关闭本页面  
	window.onresize = function() {
		if (h != window.innerHeight || w != window.innerWidth) {
			window.close();
			window.location = "http://localhost:8080/apply/pc/blank";
		}
	}
});