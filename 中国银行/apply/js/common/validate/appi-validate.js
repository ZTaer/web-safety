/**
 * @param idcard :身份证号码
 * @returns
 */
function checkIdcard(idcard){ 
	 
	var Errors=new Array( 
		"true", 
		"身份证号码位数有误，请输入18位身份证号码", 
		"身份证号码出生日期超出范围或含有非法字符!", 
		"身份证号码校验错误!", 
		"身份证地区非法!",
		"信用卡申请年龄须在18-65岁之间!"
	); 
	var area={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}  
	var Y,JYM; 
	var S,M; 
	var idcard_array = idcard.split("");//将身份证号码分隔为数组
	//1.地区检验 ：JSON匹配
	if(area[parseInt(idcard.substr(0,2))]==null) 
		return Errors[4]; 
	//2.身份号码位数及格式检验 
	switch(idcard.length){ 
		case 18: 
		//18位身份号码检测 
		//出生日期的合法性检查  
		//闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9])) 
		//平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8])) 
			if ( parseInt(idcard.substr(6,4)) % 4 == 0 || (parseInt(idcard.substr(6,4)) % 100 == 0 && parseInt(idcard.substr(6,4))%4 == 0 )){ 
				ereg=/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式 
			} else { 
				ereg=/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式 
			} 
			if(ereg.test(idcard)){//测试出生日期的合法性 
				//计算校验位 
				S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 
					+ (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 
					+ (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 
					+ (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 
					+ (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 
					+ (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 
					+ (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 
					+ parseInt(idcard_array[7]) * 1  
					+ parseInt(idcard_array[8]) * 6 
					+ parseInt(idcard_array[9]) * 3 ; 
				Y = S % 11; 
				M = "F"; 
				JYM = "10X98765432"; 
				M = JYM.substr(Y,1);//判断校验位 
				if(M == idcard_array[17]) {
					var current = new Date();  
				    var month = current.getMonth() + 1;  
				    var day = current.getDate();  
				    var age = current.getFullYear() - idcard.substring(6, 10) - 1;  
				    if (idcard.substring(10, 12) < month || idcard.substring(10, 12) == month && idcard.substring(12, 14) <= day) {  
				        age++;  
				    }
				    if(age<18 || age>65){
				    	return Errors[5];
				    }
					return Errors[0]; //检测ID的校验位
				} else {
					return Errors[3]; 
				} 
			} else 
				return Errors[2]; 
		    
			break; 
		default: 
			return Errors[1]; 
			break; 
	} 
}

/**
 * 出生日期和身份证号码检验
 * @returns
 */
function dobMatchIdNum(dob){
	if($("#appiMcIdType").val()=="1"){//身份证
		var val=dob.value;
		var numVal=$("#appiMcIdNumber").val();
		if(val!=""&&numVal!=""){//都不空才做控制
			if(numVal.length==18){//18
				val=val.substr(0,4)+val.substr(5,2)+val.substr(8,2);//日期转为形式：20101010
				numVal=numVal.substring(6,14);
			}else if(numVal.length==15){//15
				val=val.substr(2,2)+val.substr(5,2)+val.substr(8,2);//日期转为形式：101010
				numVal=numVal.substring(6,12);
			}
			if(val!=numVal){
				$(dob).testRemind("出生日期和身份证号码不匹配");
				$(dob).focus();
				return false;
			}
		}
	}
}