$(document).ready(function() {
	$("#button").click(function() {
		//		AJAX 提交
		$.ajax({
			type: "POST",
			url: "user.php",
			async: true,
			data: {
				place: $("#formID").serialize()
			}, // 要提交的表单 
			success: function(data) {
				if(data.dataType == 1) {
					alert('请求成功');
				} else {
					alert('请求失败');
				}
			}
			error: function() {
				alert("请求失败");
			}
		});
		//		邮箱验证
		if($("#email").val() == "") {
			alert("邮箱不能为空!")
			$("#email").focus();
			return false;
		}
		if(!$("#email").val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) {
			alert("邮箱格式不正确");
			$("#email").focus();
			return false;
		}
		return true;
		//		手机号码验证
		if($("#input_munber").val() == "") {
			alert("手机号码不能为空！");
			$("#input_munber").focus();
			return false;
		}

		if(!$("#input_munber").val().match(/1[3|5|7|8|]\d{9}/)) {
			alert("手机号码格式不正确！");
			$("#input_munber").focus();
			return false;
		}
		return true;
	})
})