$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});


});

//允许跨域设置sesstion
$.ajaxSetup({crossDomain: true, xhrFields: {withCredentials: true}});

//设置全局路径
var appData = {
		baseurl: 'http://localhost:3000'
		// baseurl: 'http://fullstack.net.cn:3000'
	}


$.fn.serilizeToJson = function () {

	var formArray = $(this).serializeArray();
	var result = {};
	formArray.forEach(function (item) {
		result[item.name] = item.value;
	})
	return result;
}

//获取地址栏的参数
function getUrlParams(name) {
	var search = location.search.slice(1);
	var ary1 = search.split('&');
	// console.log(ary1);
	for (var i = 0; i < ary1.length; i++) {
		var ary2 = ary1[i].split('=');
		if (ary2[0] == name) {
			return ary2[1];
		}
		return -1
	}
	
}