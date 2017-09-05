if($(window).width() > 750) {

	// $('#body').each(function() {
	// 	'use strict';
	//     var link=    $('<div class="option"><i class="option-switcher-btn fa fa-gear hidden-xs"></i><div class="option-switcher animated"><div class="themes-dropdown"><div class="dropdown"><a class="btn dropdown-toggle" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Premium Themes <span class="badge badge-warning">categories</span> </a> <div class="dropdown-menu" id="ajaxContent" aria-labelledby="dropdownMenuLink"> </div></div>	</div><div class="option-swticher-header"><div class="option-switcher-heading">Theme Option</div><div class="theme-close"><i class="fa fa-close"></i></div>	</div><div class="option-swticher-body"><span class="subtitle">Color Options</span>	<ul class="list-unstyled color-options"><li class="theme-default theme-active" data-color="default" data-logo="default-logo"></li><li class="theme-color1" data-color="color-option1" data-logo="logo1"></li><li class="theme-color2" data-color="color-option2" data-logo="logo2"></li><li class="theme-color3" data-color="color-option3" data-logo="logo3"></li>	<li class="theme-color4" data-color="color-option4" data-logo="logo4"></li>	</ul><span class="subtitle">Layout style</span>	<div class="no-col-space"><a href="javascript:void(0);" class="btn-u active-switcher-btn wide-layout-btn">Wide</a>	<a href="javascript:void(0);" class="btn-u boxed-layout-btn">Boxed</a></div><div class="bg-patern">	<span class="subtitle">Background pattern</span><ul class="list-unstyled"><li class="pattern-default pattern-active"></li><li class="pattern1"></li> <li class="pattern2"></li>	<li class="pattern3"></li>	</ul></div>	<span class="subtitle">Header style</span><div class="no-col-space"><a href="javascript:void(0);" class="btn-u static-header">Static</a><a href="javascript:void(0);" class="btn-u fixed-header">Fixed</a></div></div><a href="#" class="btn-purchase"><i class="fa fa-shopping-cart"></i> Buy This Theme</a> <div class="card" id="adv">    </div>	</div>	</div>');
	//   $('#body').prepend(link);
	// });

	//Load Options Data
	$(window).on('load', function(){
		'use strict';
		var url = 'http://themes.iamabdus.com/options/data.json';
		var dataformat = {
				format: 'json'
		};
		function getContent(data) {
				//loop through each of the single JSON object obtained from the JSON file.
				var htmlString = '';
				var promo = '';
				$.each(data , function(key , value){ // First Level
						$.each(value.themes , function(k , val ){  // The contents inside themes
									htmlString += '<a class="dropdown-item" href="'+ val.link +'">'+ val.title +' <span class="badge badge-category">'+ val.category +'</span>';
									htmlString += '<div class="project-promo">';
								htmlString += '<img class="img-full" src="'+ val.thumbnail +'" alt="project">';
								htmlString += '</div>';
								htmlString += '</a>';
						});

						$.each(value.advertisement , function(k , v ){  // The contents inside advertisement
								promo += '<a href="'+ v.link +'">';
								promo += '<img class="card-img" src="'+ v.image +'" alt="'+ v.title +'">';
								promo += '</a>';
						});

				});
				$( '#ajaxContent' ).append(htmlString);
				$( '#adv' ).append(promo);
		}
		// call the jquery ajax function
		$.getJSON(url, dataformat, getContent);
	});
}
//option Switcher
var panel = jQuery('.option-switcher');

$(document).on('click', '.option-switcher-btn' , function() {
	'use strict';
	jQuery(this).hide(100);
	jQuery('.option-switcher').addClass('fadeInRight').removeClass('fadeOutRight').show();
});

jQuery('.option-switcher-btn').click(function () {
	'use strict';
	jQuery(this).hide(100);
	jQuery('.option-switcher').addClass('fadeInRight').removeClass('fadeOutRight').show();
});

jQuery('.theme-close').click(function () {
	'use strict';
	jQuery('.option-switcher').removeClass('fadeInRight').addClass('fadeOutRight').hide(1000);
	jQuery('.option-switcher-btn').show(1000);
});

jQuery('.color-options li').click(function () {
	'use strict';
	var color = jQuery(this).attr('data-color');
	var data_logo = jQuery(this).attr('data-logo');
	setColor(color, data_logo);
	jQuery('.color-options li').removeClass('theme-active');
	jQuery(this).addClass('theme-active');
});

var setColor = function (color, data_logo) {
	'use strict';
	jQuery('#option_color').attr('href', 'css/' + color + '.css');
	if(data_logo === 'logo1'){
		jQuery('.navbar-brand img').attr('src', 'img/logo1' + '.png');
	}
	else if(data_logo === 'logo2'){
		jQuery('.navbar-brand img').attr('src', 'img/logo2' + '.png');
	}
	else if(data_logo === 'logo3'){
		jQuery('.navbar-brand img').attr('src', 'img/logo3' + '.png');
	}
	else if(data_logo === 'logo4'){
		jQuery('.navbar-brand img').attr('src', 'img/logo4' + '.png');
	}
	else if(data_logo === 'default-logo'){
		jQuery('.navbar-brand img').attr('src', 'img/logo' + '.png');
	}
}

	//Boxed Layout
	var boxed = jQuery('.boxed-layout-btn');
	var wide = jQuery('.wide-layout-btn');

	if(jQuery('body').hasClass('boxed')){
		boxed.addClass('active-switcher-btn');
		jQuery('.bg-patern').css({'display':'block'});
		wide.removeClass('active-switcher-btn');
	} else {
		boxed.removeClass('active-switcher-btn');
		jQuery('.bg-patern').css({'display':'none'});
		wide.addClass('active-switcher-btn');
	}
	jQuery('.boxed-layout-btn').click(function(){
		'use strict';
		jQuery(this).addClass('active-switcher-btn');
		jQuery('.wide-layout-btn').removeClass('active-switcher-btn');
		jQuery('body').addClass('boxed default');
		if(!jQuery('.main-wrapper').hasClass('home_transparent-wrapper')) {
			jQuery('.main-slider').addClass('container');
		}
		jQuery('.bg-patern').css({'display':'block'});
	});
	jQuery('.wide-layout-btn').click(function(){
		'use strict';
		jQuery(this).addClass('active-switcher-btn');
		jQuery('.boxed-layout-btn').removeClass('active-switcher-btn');
		jQuery('body').removeClass('boxed default').attr('class', '');
		jQuery('.main-slider').removeClass('container');
		jQuery('.bg-patern').css({'display':'none'});
	});

	//Background option
	jQuery('.bg-patern li.pattern-default').click(function () {
		'use strict';
		jQuery('.bg-patern li').removeClass('pattern-active');
		jQuery('.bg-patern li.pattern-default').addClass('pattern-active');
		jQuery('body').addClass('default')
		.removeClass('pattern-01 pattern-02 pattern-03 pattern-04 pattern-05 pattern-06 pattern-07');
	});
	jQuery('.bg-patern li.pattern1').click(function () {
		'use strict';
		jQuery('.bg-patern li').removeClass('pattern-active');
		jQuery('.bg-patern li.pattern1').addClass('pattern-active');
		jQuery('body').addClass('pattern-01')
		.removeClass('default pattern-02 pattern-03 pattern-04 pattern-05 pattern-06 pattern-07');
	});
	jQuery('.bg-patern li.pattern2').click(function () {
		'use strict';
		jQuery('.bg-patern li').removeClass('pattern-active');
		jQuery('.bg-patern li.pattern2').addClass('pattern-active');
		jQuery('body').addClass('pattern-02')
		.removeClass('default pattern-01 pattern-03 pattern-04 pattern-05 pattern-06 pattern-07');
	});
	jQuery('.bg-patern li.pattern3').click(function () {
		'use strict';
		jQuery('.bg-patern li').removeClass('pattern-active');
		jQuery('.bg-patern li.pattern3').addClass('pattern-active');
		jQuery('body').addClass('pattern-03')
		.removeClass('default pattern-01 pattern-02 pattern-04 pattern-05 pattern-06 pattern-07');
	});
	jQuery('.bg-patern li.pattern4').click(function () {
		'use strict';
		jQuery('.bg-patern li').removeClass('pattern-active');
		jQuery('.bg-patern li.pattern4').addClass('pattern-active');
		jQuery('body').addClass('pattern-04')
		.removeClass('default pattern-01 pattern-02 pattern-03 pattern-05 pattern-06 pattern-07');
	});
	jQuery('.bg-patern li.pattern5').click(function () {
		'use strict';
		jQuery('.bg-patern li').removeClass('pattern-active');
		jQuery('.bg-patern li.pattern5').addClass('pattern-active');
		jQuery('body').addClass('pattern-05')
		.removeClass('default pattern-01 pattern-02 pattern-03 pattern-04 pattern-06 pattern-07');
	});
	jQuery('.bg-patern li.pattern6').click(function () {
		'use strict';
		jQuery('.bg-patern li').removeClass('pattern-active');
		jQuery('.bg-patern li.pattern6').addClass('pattern-active');
		jQuery('body').addClass('pattern-06')
		.removeClass('default pattern-01 pattern-02 pattern-03 pattern-04 pattern-05 pattern-07');
	});
	jQuery('.bg-patern li.pattern7').click(function () {
		'use strict';
		jQuery('.bg-patern li').removeClass('pattern-active');
		jQuery('.bg-patern li.pattern7').addClass('pattern-active');
		jQuery('body').addClass('pattern-07')
		.removeClass('default pattern-01 pattern-02 pattern-03 pattern-04 pattern-05 pattern-06');
	});


	//Header option

	var fixed = jQuery('.fixed-header');
	var stat = jQuery('.static-header');

	if(jQuery('.navbar').hasClass('navbar-sticky')){
		fixed.addClass('active-switcher-btn ');
		stat.removeClass('active-switcher-btn');
	} else {
		fixed.removeClass('active-switcher-btn');
		stat.addClass('active-switcher-btn');
	}

	jQuery('.fixed-header').click(function(){
		'use strict';
		jQuery(this).addClass('active-switcher-btn');
		jQuery('.static-header').removeClass('active-switcher-btn');
		jQuery('body').removeClass('static');
	});
	jQuery('.static-header').click(function(){
		'use strict';
		jQuery(this).addClass('active-switcher-btn');
		jQuery('.fixed-header').removeClass('active-switcher-btn');
		jQuery('body').addClass('static');
	});
