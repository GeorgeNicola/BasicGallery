$(function(){

function imgClick(){
	$(".galleryContainer").addClass("blurEffect");
	$(".darkScreen").fadeIn(400);
	$("#galleryImgPhoto").fadeIn(400);
}

function imgClickOut(){
	$(".galleryContainer").removeClass("blurEffect");
	$(".darkScreen").fadeOut(400);
	$("#galleryImgPhoto").fadeOut(400);
}



$(".galleryItem img").click(function(){ 
	let src = this.src;
	$('#galleryImgPhoto').attr('src',src);
	imgClick();
})

$(".darkScreen").click(function(){ 
    imgClickOut();
})




})