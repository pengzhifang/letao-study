$(function () {
	var page = 1;
	var pageSize = 5;
	var totalPage = null;
	getData();

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

	//文件上传处理
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


	$('#prevBtn').on('click', function () {
		page--;
		if (page < 1) {
			page = 1;
			alert('已经是第一页了');
			return;
		}
		getData();
	})
	$('#nextBtn').on('click', function () {
		page++;
		if (page > totalPage) {
			page = totalPage;
			alert('已经是最后一页了');
			return;
		}
		getData();
	})
	
	function getData() {
		//获取二级分类数据
		$.ajax({
			url: `${appData.baseurl}/category/querySecondCategoryPaging`,
			type: 'get',
			data: {
				page: page,
				pageSize: pageSize
			},
			success: function (response) {
				// console.log(response);
				var html = template('secondCategoryTpl', {
					list: response,
					api: appData.baseurl
				});
				$('#secondCategoryBox').html(html);
				totalPage = Math.ceil(response.total / pageSize);
			}
		})
	}
}) 

