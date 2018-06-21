$(function() {
	$.ajax({
		url: `${appData.baseurl}/product/queryProductDetailList`,
		type: 'get',
		data: {
			page: 1,
			pageSize: 10
		},
		success: function (response) {
			console.log(response);
			var html = template('productTpl', response);
			$('#productBox').html(html);
		}
	})
})