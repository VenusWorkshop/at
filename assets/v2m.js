var i=0;
var galleryData = "";
$("[gallery]").each(
  function(){
	i++;
	galleryData = "data-gallery"+((i<10)?("0"+i):i);
	$("["+galleryData+"][v]").attr("dg",galleryData);
	$(this).click(
		function(){
			var galleryAttr = "data-gallery"+$(this).attr("gallery");
			console.log(galleryAttr);
			setTimeout(function(){
				var mp4Node = $("#blueimp-gallery [title$='[预览]']");
				mp4Node.each(
					function(){
						$(this).css('visibility','hidden');
						var div = $(this).parent("div");
						var video = $("<video></video>");
						video.attr("controls","controls");
						video.attr("class","slide-content");
						video.attr("poster",$(this).attr("src"));var search = "[v]"+"["+galleryAttr+"]"+"[title='"+$(this).attr("title")+"']";

						console.log(search);
						video.attr("src",$(search).attr("v"));
						div.append(video);
						$("[class=prev]").click(function(){
							video[0].pause();
						});
						$("[class=next]").click(function(){
							video[0].pause();
						});
					}
				);
			},500);
		}
	);
  }
);


var isSubmit = false;
var SubmitMsg = function(){
if(isSubmit)
	return;
var PostForm = {"at_client":$("#at_client").val()};
	PostForm["at_client"] = $("#at_client").val();
	PostForm["at_company"] = $("#at_company").val();
	PostForm["at_content"] = $("#at_content").val();
$.ajax({
	type: 'POST',
	url: "http://www.lofs.pw/at/a/R.php",
	data: PostForm,
	success: function(data){
		isSubmit = true;
		alert("提交成功！");
		window.location.href = 'index.html';
	},
	dataType: "text"});
}
 var d = new Date(),
 nowYear = +d.getFullYear();
 inputNow = nowYear;
 
var PostForm = {};
	PostForm["Year"] = inputNow;
var content = "";
$.ajax({
	type: 'POST',
	url: "http://www.lofs.pw/at/a/R.php?g=copyright",
	data: PostForm,
	success: function(data){
		content = data;
		$("#Copyright").html(content+"Copyright &copy; "+inputNow+".Anti Tired Techno All rights reserved.");
	},
	dataType: "text"});
 