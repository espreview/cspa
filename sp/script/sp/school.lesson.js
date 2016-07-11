function showMap(point) {
	if(!GBrowserIsCompatible()) {
		return;
	}
	if (!point) {
		return;
	}
	var map = new GMap2(document.getElementById("googlemap"));
	map.setCenter(point, 16);
	var marker = new GMarker(point);
	map.addOverlay(marker);
	map.addControl(new GLargeMapControl());
	map.addControl(new GMapTypeControl());
}

function setHref(obj,point) {
	var url = "//maps.google.com/maps?q="+point.toUrlValue()+"&markers="+point.toUrlValue()+"&zoom=16";
	obj.attr('href',url);
}

$(function(){
	$('#schoolLessonList .morelist').click(function() {
		$('#schoolLessonList li').fadeIn();
		$(this).hide();
	});
});

$(function(){
	$('#schoolLessonList .more').click(function() {
		$('#schoolLessonList li').fadeIn();
		$(this).hide();
	});
});

$(function(){
	$('#schoolLessonListAll .morelistpast').click(function() {
		$('#schoolLessonListAll .past').fadeIn();
		$('#schoolLessonListAll .morelistpastclose').show();
		$(this).hide();
	});
	$('#schoolLessonListAll .morelistpastclose').click(function() {
		$('#schoolLessonListAll .past').fadeOut();
		$('#schoolLessonListAll .morelistpast').show();
		$(this).hide();
	});
	$('#schoolLessonListAll .morelistfuture').click(function() {
		$('#schoolLessonListAll .future').fadeIn();
		$('#schoolLessonListAll .morelistfutureclose').show();
		$(this).hide();
	});
	$('#schoolLessonListAll .morelistfutureclose').click(function() {
		$('#schoolLessonListAll .future').fadeOut();
		$('#schoolLessonListAll .morelistfuture').show();
		$(this).hide();
		location.href = "#all";
	});
});

$(function(){
	$('#schoolLessonListAll .morepast').click(function() {
		$('#schoolLessonListAll .past').fadeIn();
		$('#schoolLessonListAll .morepastclose').show();
		$(this).hide();
	});
	$('#schoolLessonListAll .morepastclose').click(function() {
		$('#schoolLessonListAll .past').fadeOut();
		$('#schoolLessonListAll .morepast').show();
		$(this).hide();
	});
	$('#schoolLessonListAll .morefuture').click(function() {
		$('#schoolLessonListAll .future').fadeIn();
		$('#schoolLessonListAll .morefutureclose').show();
		$(this).hide();
	});
	$('#schoolLessonListAll .morefutureclose').click(function() {
		$('#schoolLessonListAll .future').fadeOut();
		$('#schoolLessonListAll .morefuture').show();
		$(this).hide();
		location.href = "#all";
	});
});

$(function(){
   // #縺ｧ蟋九∪繧九い繝ｳ繧ｫ繝ｼ繧偵け繝ｪ繝�け縺励◆蝣ｴ蜷医↓蜃ｦ逅�
   $('a[href^=#]').click(function() {
      // 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ騾溷ｺｦ
      var speed = 400; // 繝溘Μ遘�
      // 繧｢繝ｳ繧ｫ繝ｼ縺ｮ蛟､蜿門ｾ�
      var href= $(this).attr("href");
      // 遘ｻ蜍募�繧貞叙蠕�
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 遘ｻ蜍募�繧呈焚蛟､縺ｧ蜿門ｾ�
      var position = target.offset().top;
      // 繧ｹ繝�繝ｼ繧ｹ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

$(document).ready(function(){
//	setAlled($('[name=internetReservation]').val());
});

$(function(){
	$('.setfullRadio').change(setall);
	$('#past_show').click(pastFadeIn);
	$('#past_hide').click(pastFadeOut);
//	setAlled($('[name=internetReservation]').val());

});

function pastFadeIn() {
	$('#datetime .past').fadeIn();
	$('#past_hide').show();
	$(this).hide();
}

function pastFadeOut() {
	$('#datetime .past').fadeOut();
	$('#past_show').show();
	$(this).hide();

}

function setall() {
	var obj = $(this);
	var schoolId = obj.attr('schoolid');
	var menu = obj.attr('menu');
	var ym = obj.attr('ym');
	var myPageUrl = obj.attr('myPageUrl');
	var url = obj.attr('url');
	var internetReservation = obj.attr('value');

	var target = obj.attr('target');

	var data = {
		schoolId: schoolId,
		menu: menu,
		ym: ym,
		myPageUrl: myPageUrl,
		internetReservation: internetReservation
	};

	var loading = obj.closest('.switch').find('.full_loading');
	loading.show();
	var ret = $.ajax({
				url: url,
				type: 'post',
				data: data,
				success: function(html) {
					$('#' + target).html(html);
					$('.setfullRadio').change(setall);
					$('#past_show').click(pastFadeIn);
					$('#past_hide').click(pastFadeOut);
					$('a.more').click(showMore);
					loading.hide();

				}
			});

}

function setAlled(val) {
	if(val=='true'){
		$('#lesson_reserve').attr('checked',true);
	} else {
		$('#lesson_all').attr('checked',true);
	}
}