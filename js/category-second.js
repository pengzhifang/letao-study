$(function () {

	//获取二级分类数据
	$.ajax({
		url: `${appData.baseurl}/category/querySecondCategoryPaging`,
		type: 'get',
		data: {
			page: 1,
			pageSize: 10
		},
		success: function (response) {
			// console.log(response);
			var html = template('secondCategoryTpl', {
				list: response,
				api: appData.baseurl
			});
			$('#secondCategoryBox').html(html);
		}
	})

	//获取下拉框一级分类数据
	$.ajax({
		type: 'get',
		url: `${appData.baseurl}/category/queryTopCategoryPaging`,
		data: {
			page: 1,
			pageSize: 1000
		},
		success: function (response) {
			// console.log(response);
			var html = template('firstCategoryTpl', response);
			$('#firstCategoryBox').html(html);
		}
	})

	$('#fileUpload').fileupload({
	    dataType: 'json',
	    done: function (e, data) {
	    	console.log(data);
	    	brandLogo = data._response.result.picAddr;
	        var imgUrl= appData.baseurl + data._response.result.picAddr;
	        $("#showBrand").attr("src",imgUrl);
	    }
	});

	//添加二级分类
	$('#save').on('click', function () {
		var brandName = $('#brandName').val();
		var categoryId = $('#firstCategoryBox').val();
		var hot = 1;
		console.log(brandName,categoryId,brandLogo)
		$.ajax({
			type: 'post',
			url: `${appData.baseurl}/category/addSecondCategory`,
			data: {
				brandName,
				categoryId,
				brandLogo,
				hot
			},
			success: function (response) {
				if (response.success) {
					location.reload();
				} else {
					alert(response.message);
				}
			}
		})
	})
	
})