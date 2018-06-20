//实现登录拦截
$.ajax({
	url: `${appData.baseurl}/employee/checkRootLogin`,
	type: 'get',
	async: false,
	success: function (response) {
		// console.log(response);
		if (response.error) {
			location.href = 'login.html';
		}
	}
})
$(function () {
	$.ajax({
		url: `${appData.baseurl}/user/queryUser`,
		data: {
			page: 1,
			pageSize: 100
		},
		type: 'get',
		success: function (message) {
			console.log(message);
			var html = template('userTpl', message);
			$('#userBox').append(html);
		}
	})

	$('#userBox').on('click', '.statusBtn', function () {
		var id = $(this).data('user-id');
		var isDelete = $(this).data('user-isdelete');
		$.ajax({
			url: `${appData.baseurl}/user/updateUser`,
			data: {
				id: id,
				isDelete: isDelete == 1? 0: 1
			},
			type: 'post',
			success: function (message) {
				// console.log(message);
				if (message.success) {
					location.reload();
				} else {
					alert(message.message);
				}
			}
		})
	})
})