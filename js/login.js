$(function () {
	$('#loginBtn').on('click', function () {
		var result = $('#loginForm').serilizeToJson();
		if (!$.trim(result.username)) {
			alert('请输入用户名');
			return;
		}
		if (!$.trim(result.password)) {
			alert('请输入密码');
			return;
		}

		$.ajax({
			url: `${appData.baseurl}/employee/employeeLogin`,
			type: 'post',
			data: result,
			success: function (message) {
				// console.log(message);
				if (message.success) {
					alert('登录成功');
					location.href = 'user.html';
				} else {
					alert('登录失败');
				}
			}
		})
	})
})