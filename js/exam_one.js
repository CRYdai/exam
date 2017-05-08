$(document).ready(function() {
	//<tr/>居中
	$("#tab tr").attr("align", "center");
	//				增加
	$("#but").click(function() {
		var one = $(".A").val();
		var tow = $(".B").val();
		var three = $(".C").val();
		$("#tab").append("<tr><td>" + one + "</td><td>" + tow + "</td><td>" + three + "</td><td class='del'><button class='del' style='width: 100%;'>删除</button></td><td class='bji'><button id='bji' style='width: 100%;'>编辑</button></td></tr>");
		//									删除
		$(".del").click(function() {
			$(this).parent().parent().remove();
		});
		//隔行取色
		$("table tr:odd").css("background-color", "#D5D5D5");
	})
	//	编辑
	$("body").on("click", "#bji", function() {
		str = $(this).val() == "编辑" ? "确定" : "编辑";
		$(this).val(str);

		$(this).parent().siblings("td:not(.del)").each(function() {
			var aa = $(this).find(":text");
			if(!aa.length) {
				$(this).html("<input type='text' value='" + $(this).text() + "'>");
			} else {
				$(this).html(aa.val());
			}
		});

	});

})