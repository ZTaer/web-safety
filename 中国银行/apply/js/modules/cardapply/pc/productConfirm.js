$(function(){
	//卡片选项卡功能
	cardTab();
	//设置产品说明
	setProductDescription();
});
function applyProduct(){
	setCardCode();
	var dataForm=$("#goDetail_form");//跳转、参数提交
	dataForm.submit();
}
//卡片选项卡功能
function cardTab(){
	var imgBtns = $("#card-img-btn li");
	var imgConts = $("#card-img-warp .card-img-content");
	var imgDetails = $("#card-describe-box .card-describe");
	imgBtns.click(function(){
		var index = imgBtns.index(this);
		imgBtns.removeClass("active");
		$(this).addClass("active");
		imgConts.removeClass("active");
		imgConts.eq(index).addClass("active");
		imgDetails.removeClass("active");
		imgDetails.eq(index).addClass("active");
	});
}
//卡品牌校验
function cardGroupVerify(_this){
	var checkedCount = $(".card-unit-btn:checked");
	if(checkedCount.length == 0){
		_this.testRemind("至少选择一项");
		_this.prop("checked",true);
		setCardCode();
		return false;
	}
	var name = _this.attr("name");
	if(name == "obroad-brand"){
		if(_this.is(":checked")){
			$("input[name='obroad-brand']").not(_this).prop("checked",false);
		}
	}
	//setCardCode();
}
//设置卡代码
function setCardCode(){
	var checkedCount = $(".card-unit-btn:checked");
	var resultCode = "";
	if(checkedCount.length == "0"){
		return;
	}
	if(checkedCount.length == "1"){
		resultCode = checkedCount.val();
	}else{
		resultCode = checkedCount.eq(0).val()+","+checkedCount.eq(1).val();
	}
	$("#newInTypeCode").val(resultCode);
}
//设置产品说明
function setProductDescription(){
	var hideEle = $(".product-description-hide");
	var showEle = $(".product-description-show");
	for(var i=0; i<hideEle.length;i++){
		var hideContent = hideEle.eq(i).val();
		showEle.eq(i).html(hideContent);
	}
}
