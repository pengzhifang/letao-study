$(function () {
	$.ajax({
		type: 'get',
		url: `${appData.baseurl}/category/queryTopCategoryPaging`,
		data: {
			page: 1,
			pageSize: 10
		},
		success: function (response) {
			console.log(response);
			var html = template('categoryFirstTpl', response);
			// console.log(html);
			$('#categoryFirstBox').html(html);
		}
	})
})