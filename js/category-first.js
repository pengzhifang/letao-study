$(function () {
	var page = 1;
	var pagesize = 5;
	var totalPage = null;
	getData ();

	

	$('#prev').on('click', function () {
		page--;
		if (page < 1) {
			page = 1;
			alert('已经是第一页数据了');
		}
		getData();
	})

	$('#next').on('click', function () {
			page++;
			if (page > totalPage) {
				page = totalPage;
				alert('暂无更多数据');
			}
			getData();
		})



function getData () {
	$.ajax({
		type: 'get',
		url: `${appData.baseurl}/category/queryTopCategoryPaging`,
		data: {
			page: page,
			pageSize: pagesize
		},
		success: function (response) {
			console.log(response);
			var html = template('categoryFirstTpl', response);
			// console.log(html);
			$('#categoryFirstBox').html(html);
			totalPage = Math.ceil(response.total / pagesize);
		}
	})
}


})