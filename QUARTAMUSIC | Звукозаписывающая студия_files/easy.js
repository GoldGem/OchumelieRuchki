// JavaScript Document
(function($){
	$.fn.Eslider = function(opt){
	var es = $(this);
	var eWidth = es.width();
	var eHeight = es.height();
	var eZindex = 250;
	var timer = '';
	var previx = 0;
	var pagix = 0;
	var esVar = 0;
	var clicker = 0;
	var esItemTwo = es.children('.all-slider').children('.e-cont').children('.e-item');
	
	$.data(es, "test", opt);
	if($.data(es, "test").slidespeed == null){
	slidespeed = 6000;	
	}else{
	slidespeed = $.data(es, "test").slidespeed;
	}
	if($.data(es, "test").addPagination == null){
	addPagination = false;	
	}else{
	addPagination = $.data(es, "test").addPagination;
	}
	if($.data(es, "test").addPrevNext == null){
	addPrevNext = false;	
	}else{
	addPrevNext = $.data(es, "test").addPrevNext;
	}
	if($.data(es, "test").esNum == null){
	esNum = 6;	
	}else{
	esNum = $.data(es, "test").esNum;
	}
	if($.data(es, "test").esFeatZone == null){
	esFeatZone = false;	
	}else{
	esFeatZone = $.data(es, "test").esFeatZone;
	}
	if($.data(es, "test").esPaddingFeat == null){
	esPaddingFeat = 75;	
	}else{
	esPaddingFeat = $.data(es, "test").esPaddingFeat;
	}
	
	if(slidespeed<3000){
	slidespeed=4000;	
	}
	
	
	
	
	var number = 0;
	esItemTwo.each(function(i){
	var num = i + 1;
	var myLeft = eWidth * i;
	$(this).attr('rel', num);
	$(this).children('.item-box').attr('num','1');
	$(this).css({'position':'absolute','width':eWidth + 'px','height':eHeight + 'px','left':myLeft + 'px','top':'0'});
	number=num;
	});
	es.children('.all-slider').children('.e-cont').clone().appendTo('.all-slider');
	es.children('.all-slider').children('.e-cont').last().addClass('e-container').removeClass('e-cont');
	var lastNum = esItemTwo.last().attr('rel');
	var contWidth = lastNum * eWidth;
	es.children('.all-slider').children('.e-cont').css({'width':contWidth + 'px','height':eHeight + 'px','position':'absolute','left':'-' + eWidth + 'px','top':'0','z-index':'100'});
	es.children('.all-slider').children('.e-container').css({'width':contWidth + 'px','height':eHeight + 'px','position':'absolute','left':'0','top':'0','z-index':'250'});
    var esItem = es.children('.all-slider').children('.e-container').children('.e-item');
	myFunction();
	
    function myFunction(){
	var esItemRels = es.children('.all-slider').children('.e-container').children('.item-active').attr('rel');
	if(esItemRels == null){
	es.children('.all-slider').children('.e-cont').children('.e-item[rel="2"]').addClass('item-active-two');
	es.children('.all-slider').children('.e-container').children('.e-item[rel="1"]').addClass('item-active').css({'width': eWidth + 'px','height': eHeight + 'px'});
	esVar = 1;
	}else{
	
	if(previx==0){
	
	
	$('.item-active .item-box').each(function(i){
	if(i === 0){
	$(this).css({'left':'0','top':'0','display':'block'});
	}else{
	$(this).remove();	
	}
	});
	var esItemRel = esVar+1;
	if(esItemRel > number){
	esItemRel = 1;	
	}
	var nextRel = esItemRel+1;
	if(nextRel > number){
	nextRel = 1;	
	}
	if(esItemRel === number){
	var noll = 0;	
	}else{
	var noll = esItemRel;	
	}
	var nextLeft = eWidth * noll;
	var esItemRelTwo = esVar;
	if(esItemRelTwo === number){
	esItemRelTwo=0;	
	}
	var nextLeftTwo = eWidth * esItemRelTwo;
	$('.item-active').removeClass('item-active');
	$('.item-active-two').removeClass('item-active-two');
	es.children('.all-slider').children('.e-cont').children('.e-item[rel="'+ nextRel +'"]').addClass('item-active-two');
	es.children('.all-slider').children('.e-cont').css({'left':'-'+ nextLeft + 'px'});
	es.children('.all-slider').children('.e-container').children('.e-item[rel="'+ esItemRel +'"]').addClass('item-active');
	es.children('.all-slider').children('.e-container').css({'left':'-'+ nextLeftTwo + 'px'});
	es.children('.all-slider').children('.e-container').children('.e-item').children('.item-box').css({'left':'0px','top':'0px','display':'block','width':eWidth + 'px','height':eHeight + 'px'});
	esVar = esItemRel;
	clicker=0;
	$('.pagination li.li-active').removeClass('li-active');
	$('.pagination li a[rel="'+ esVar +'"]').parent().addClass('li-active');
	$('.futured-zone div.li-active').removeClass('li-active');
	$('.futured-zone .feat-img a[rel="'+ esVar +'"]').parent().addClass('li-active');
	var featWidth = $('.futured-zone').width();
	var featLiW = $('.futured-zone .feat-img').width();
	var featLiR = $('.futured-list .li-active a').attr('rel');
	var featYmnLeft = esPaddingFeat * featLiR;
    if(featYmnLeft>featWidth){
	var featMin = featYmnLeft-featWidth;
	$('.futured-list').attr('lefting',featMin);
	$('.futured-list').animate({'left':'-'+ featMin +'px'}, 1000);	
	}else{
	$('.futured-list').attr('lefting','0');	
	$('.futured-list').animate({'left':'0px'}, 1000);
	}
	}else{
	
	var prevM = previx+1;
	if(prevM>number){
	prevM = 1;	
	}
	var extra = previx-1;
	if(previx === number){
	nol = 0;	
	}else{
	nol = previx;	
	}
	var leftYes = extra * eWidth;
	var leftYesTwo = nol * eWidth;
	$('.item-active .item-box').each(function(i){
	if(i == 0){
	}else{
	$(this).remove();	
	}
	});
	var esItemRel = es.children('.all-slider').children('.e-cont').children('.item-active-two').attr('rel');
	$('.item-active').removeClass('item-active');
	$('.item-active-two').removeClass('item-active-two');
	es.children('.all-slider').children('.e-cont').children('.e-item[rel="'+ prevM +'"]').addClass('item-active-two');
	es.children('.all-slider').children('.e-cont').css({'left':'-'+ leftYesTwo + 'px'});
	es.children('.all-slider').children('.e-container').children('.e-item[rel="'+ previx +'"]').addClass('item-active');
	es.children('.all-slider').children('.e-container').css({'left':'-'+ leftYes + 'px'});
	es.children('.all-slider').children('.e-container').children('.e-item').children('.item-box').css({'left':'0','top':'0','display':'block','width':eWidth + 'px','height':eHeight + 'px'});
	esVar = previx;
	previx=0;
	clicker=0;
	$('.pagination li.li-active').removeClass('li-active');
	$('.pagination li a[rel="'+ esVar +'"]').parent().addClass('li-active');
	$('.futured-zone div.li-active').removeClass('li-active');
	$('.futured-zone .feat-img a[rel="'+ esVar +'"]').parent().addClass('li-active');
	var featWidth = $('.futured-zone').width();
	var featLiW = $('.futured-zone .feat-img').width();
	var featLiR = $('.futured-list .li-active a').attr('rel');
	var featYmnLeft = esPaddingFeat * featLiR;
    if(featYmnLeft>featWidth){
	var featMin = featYmnLeft-featWidth;
	$('.futured-list').attr('lefting',featMin);
	$('.futured-list').animate({'left':'-'+ featMin +'px'}, 1000);	
	}else{
	$('.futured-list').attr('lefting','0');	
	$('.futured-list').animate({'left':'0px'}, 1000);	
	}
	}
	}
	itemBoxCon();
	clearInterval(timer);
    timer = '';
	timer = setInterval(animeSlise, slidespeed);
	}
	
    if(addPrevNext === true){
	es.append('<a class="prev-link"></a><a class="next-link"></a>');
	}
	if(addPagination === true){
	es.append('<ul class="pagination"></ul>');
	esItem.each(function(i){
	var next = i + 1;
	if(i === 0){
	es.children('ul').append('<li class="li-active"><a rel="'+ next +'">'+ next +'</a></li>');	
	}else{
	es.children('ul').append('<li><a rel="'+ next +'">'+ next +'</a></li>');
	}
	});
	}
	
	
	if(esFeatZone === true){
	es.append('<div class="futured-box"><div class="futured-zone"><div class="futured-list" lefting="0"></div></div></div>');
	esItem.each(function(i){
	var next = i + 1;
	var leftFeatLi = esPaddingFeat * i;
	var imgUrl = $('.e-cont .e-item[rel='+ next +'] .item-position img').attr('src');
	var imgAlt = $('.e-cont .e-item[rel='+ next +'] .item-position img').attr('alt');
	if(i === 0){
	es.children('.futured-box').children('.futured-zone').children('.futured-list').append('<div class="feat-img li-active" style="left:'+ leftFeatLi +'px"><a rel="'+ next +'"><img src="'+ imgUrl +'" alt="'+ imgAlt +'"/></a></div>');	
	}else{
	es.children('.futured-box').children('.futured-zone').children('.futured-list').append('<div class="feat-img" style="left:'+ leftFeatLi +'px"><a rel="'+ next +'"><img src="'+ imgUrl +'" alt="'+ imgAlt +'"/></a></div>');
	}
	});
	var featAct = $('.futured-list .feat-img').last().children('a').attr('rel');;
	var obw = esPaddingFeat * featAct;
	$('.futured-list').css({'width':obw +'px'});
	
	$('.futured-box').append('<a class="prevFeat-link"></a><a class="nextFeat-link"></a>');
	
	$('.futured-box .nextFeat-link').click(function(){
	var featNextWidth = $('.futured-zone').width();
	var NextFeatW = $('.futured-list').width();
	var NextL = $('.futured-list').attr('lefting');
	var obwW = parseInt(featNextWidth)+parseInt(NextL);
	if(obwW===NextFeatW){
	}else{
	var NextLeftMinus = parseInt(NextL)+parseInt(esPaddingFeat);
	$('.futured-list').attr('lefting',NextLeftMinus);
	$('.futured-list').animate({'left':'-'+ NextLeftMinus +'px'}, 1000);		
	}
	});
	
	$('.futured-box .prevFeat-link').click(function(){
	var PrevL = $('.futured-list').attr('lefting');
	if(PrevL===0){
	}else{
	var lastLeft = PrevL-esPaddingFeat;
	$('.futured-list').attr('lefting',lastLeft);
	$('.futured-list').animate({'left':'-'+ lastLeft +'px'}, 1000);		
	}
	});
	}
	
	
	
	es.children('.next-link').click(function(){
	if(clicker===0){
	animeSlise();
	}
	});
	
	es.children('.prev-link').click(function(){
	if(clicker===0){
	var prevMinus = esVar-1;
	if(prevMinus < 1){
	prevMinus = number;	
	}
	var prev = (prevMinus - 1) * eWidth;
	es.children('.all-slider').children('.e-cont').css({'left':'-' + prev +'px'});
	previx=prevMinus;
    animeSlise();
	}
	});
	
	
	
	$('.pagination li a').click(function(){
	if(clicker===0){
	var gomeo = es.children('.all-slider').children('.e-container').children('.item-active').attr('rel');
	var pag = $(this).attr('rel');
	if(gomeo === pag){
	}else{
	var pagMinus = pag-1;
	var pagLeft = pagMinus * eWidth;
	es.children('.all-slider').children('.e-cont').css({'left':'-' + pagLeft +'px'});
	esVar=pagMinus;
	animeSlise();
	}
	}
	});
	
	$('.futured-zone .futured-list .feat-img a').click(function(){
	if(clicker===0){
	var gomeoTwo = es.children('.all-slider').children('.e-container').children('.item-active').attr('rel');
	var feat = $(this).attr('rel');
	if(gomeoTwo === feat){
	}else{
	var featMinus = feat-1;
	var featLeft = featMinus * eWidth;
	es.children('.all-slider').children('.e-cont').css({'left':'-' + featLeft +'px'});
	esVar=featMinus;
	animeSlise();
	}
	}	
	});
	
	
	

	
	function animeSlise(){
	clicker = 1;
	if(esNum===10){
	var animSpeed = 500;	
	}else{
	var animSpeed = 500;		
	}
    animSlideFunc();
	clearInterval(timer);
    timer = '';
	timer = setInterval(myFunction, animSpeed);
	}
	
	
	function animSlideFunc(){
	if(esNum===10){
	var des = 's-left';	
	}else{
	var des = 'jalyzi';	
	}
	var anims = new Array('fade-standart');
	var randAnim = anims;
	
	
	
	if(randAnim=='jalyzi'){
	var	slice = $('.item-active').children('.item-box');
	var i = 0;
	var timeBuff = 0;
	slice.each(function(){
	if(esNum===5){
	var box = $(this);
	if(i==19){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (2000));
	}
	if(i==18){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (1500));
	}
	if(i==17){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (1000));
	}
	if(i==16){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (500));
	}
	if(i==15){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (5));
	}
	if(i==14){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (2000));
	}
	if(i==13){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (1500));
	}
	if(i==12){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (1000));
	}
	if(i==11){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (500));
	}
	if(i==10){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (5));
	}
	if(i==9){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (2000));
	}
	if(i==8){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (1500));
	}
	if(i==7){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (1000));
	}
	if(i==6){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (500));
	}
	if(i==5){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (5));
	}
	if(i==4){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (2000));
	}
	if(i==3){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (1500));
	}
	if(i==2){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (1000));
	}
	if(i==1){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (500));
	}
	if(i==0){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (5));
	}
	i++;	
	}else{
	if(esNum===10){
	var box = $(this);
	if(i==39){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (2250));
	}
	if(i==38){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (2000));
	}
	if(i==37){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (1750));
	}
	if(i==36){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (1500));
	}
	if(i==35){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (1250));
	}
	if(i==34){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (1000));
	}
	if(i==33){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (750));
	}
	if(i==32){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (500));
	}
	if(i==31){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (250));
	}
	if(i==30){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (5));
	}
	if(i==29){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (2250));
	}
	if(i==28){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (2000));
	}
	if(i==27){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (1750));
	}
	if(i==26){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (1500));
	}
	if(i==25){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (1250));
	}
	if(i==24){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (1000));
	}
	if(i==23){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (750));
	}
	if(i==22){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (500));
	}
	if(i==21){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (250));
	}
	if(i==20){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (5));
	}
	if(i==19){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (2250));
	}
	if(i==18){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (2000));
	}
	if(i==17){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (1750));
	}
	if(i==16){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (1500));
	}
	if(i==15){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (1250));
	}
	if(i==14){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (1000));
	}
	if(i==13){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (750));
	}
	if(i==12){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (500));
	}
	if(i==11){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (250));
	}
	if(i==10){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (5));
	}
	if(i==9){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (2250));
	}
	if(i==8){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (2000));
	}
	if(i==7){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (1750));
	}
	if(i==6){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (1500));
	}
	if(i==5){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (1250));
	}
	if(i==4){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (1000));
	}
	if(i==3){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (750));
	}
	if(i==2){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (500));
	}
	if(i==1){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (250));
	}
	if(i==0){
	setTimeout(function(){ box.animate({ width:'0px'}, 750)}, (5));
	}
	i++;	
	}else{
	var box = $(this);
	if(i==23){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (2250));
	}
	if(i==22){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (1800));
	}
	if(i==21){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (1350));
	}
	if(i==20){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (900));
	}
	if(i==19){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (450));
	}
	if(i==18){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (5));
	}
	if(i==17){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (2250));
	}
	if(i==16){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (1800));
	}
	if(i==15){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (1350));
	}
	if(i==14){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (900));
	}
	if(i==13){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (450));
	}
	if(i==12){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (5));
	}
	if(i==11){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (2250));
	}
	if(i==10){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (1800));
	}
	if(i==9){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (1350));
	}
	if(i==8){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (900));
	}
	if(i==7){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (450));
	}
	if(i==6){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (5));
	}
	if(i==5){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (2250));
	}
	if(i==4){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (1800));
	}
	if(i==3){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (1350));
	}
	if(i==2){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (900));
	}
	if(i==1){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (450));
	}
	if(i==0){
	setTimeout(function(){ box.animate({ width:'0px'}, 800)}, (5));
	}
	i++;
	}
	}
	});
	}
	
	
	if(randAnim=='fade-music'){
	var	slice = $('.item-active').children('.item-box');
	var i = 0;
	var timeBuff = 0;
	slice.each(function(){
	if(esNum===5){
	var box = $(this);
	if(i==19){
	setTimeout(function(){ box.fadeOut(500)}, (2450));
	}
	if(i==18){
	setTimeout(function(){ box.fadeOut(500)}, (2100));
	}
	if(i==17){
	setTimeout(function(){ box.fadeOut(500)}, (1750));
	}
	if(i==16){
	setTimeout(function(){ box.fadeOut(500)}, (1400));
	}
	if(i==15){
	setTimeout(function(){ box.fadeOut(500)}, (1050));
	}
	if(i==14){
	setTimeout(function(){ box.fadeOut(500)}, (2100));
	}
	if(i==13){
	setTimeout(function(){ box.fadeOut(500)}, (1750));
	}
	if(i==12){
	setTimeout(function(){ box.fadeOut(500)}, (1400));
	}
	if(i==11){
	setTimeout(function(){ box.fadeOut(500)}, (1050));
	}
	if(i==10){
	setTimeout(function(){ box.fadeOut(500)}, (700));
	}
	if(i==9){
	setTimeout(function(){ box.fadeOut(500)}, (1750));
	}
	if(i==8){
	setTimeout(function(){ box.fadeOut(500)}, (1400));
	}
	if(i==7){
	setTimeout(function(){ box.fadeOut(500)}, (1050));
	}
	if(i==6){
	setTimeout(function(){ box.fadeOut(500)}, (700));
	}
	if(i==5){
	setTimeout(function(){ box.fadeOut(500)}, (350));
	}
	if(i==4){
	setTimeout(function(){ box.fadeOut(500)}, (1400));
	}
	if(i==3){
	setTimeout(function(){ box.fadeOut(500)}, (1050));
	}
	if(i==2){
	setTimeout(function(){ box.fadeOut(500)}, (700));
	}
	if(i==1){
	setTimeout(function(){ box.fadeOut(500)}, (350));
	}
	if(i==0){
	setTimeout(function(){ box.fadeOut(500)}, (5));
	}
	i++;	
	}else{
	if(esNum===10){
	var box = $(this);
	if(i==39){
	setTimeout(function(){ box.fadeOut(500)}, (2400));
	}
	if(i==38){
	setTimeout(function(){ box.fadeOut(500)}, (2200));
	}
	if(i==37){
	setTimeout(function(){ box.fadeOut(500)}, (2000));
	}
	if(i==36){
	setTimeout(function(){ box.fadeOut(500)}, (1800));
	}
	if(i==35){
	setTimeout(function(){ box.fadeOut(500)}, (1600));
	}
	if(i==34){
	setTimeout(function(){ box.fadeOut(500)}, (1400));
	}
	if(i==33){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==32){
	setTimeout(function(){ box.fadeOut(500)}, (1000));
	}
	if(i==31){
	setTimeout(function(){ box.fadeOut(500)}, (800));
	}
	if(i==30){
	setTimeout(function(){ box.fadeOut(500)}, (600));
	}
	if(i==29){
	setTimeout(function(){ box.fadeOut(500)}, (2200));
	}
	if(i==28){
	setTimeout(function(){ box.fadeOut(500)}, (2000));
	}
	if(i==27){
	setTimeout(function(){ box.fadeOut(500)}, (1800));
	}
	if(i==26){
	setTimeout(function(){ box.fadeOut(500)}, (1600));
	}
	if(i==25){
	setTimeout(function(){ box.fadeOut(500)}, (1400));
	}
	if(i==24){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==23){
	setTimeout(function(){ box.fadeOut(500)}, (1000));
	}
	if(i==22){
	setTimeout(function(){ box.fadeOut(500)}, (800));
	}
	if(i==21){
	setTimeout(function(){ box.fadeOut(500)}, (600));
	}
	if(i==20){
	setTimeout(function(){ box.fadeOut(500)}, (500));
	}
	if(i==19){
	setTimeout(function(){ box.fadeOut(500)}, (2000));
	}
	if(i==18){
	setTimeout(function(){ box.fadeOut(500)}, (1800));
	}
	if(i==17){
	setTimeout(function(){ box.fadeOut(500)}, (1600));
	}
	if(i==16){
	setTimeout(function(){ box.fadeOut(500)}, (1400));
	}
	if(i==15){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==14){
	setTimeout(function(){ box.fadeOut(500)}, (1000));
	}
	if(i==13){
	setTimeout(function(){ box.fadeOut(500)}, (800));
	}
	if(i==12){
	setTimeout(function(){ box.fadeOut(500)}, (600));
	}
	if(i==11){
	setTimeout(function(){ box.fadeOut(500)}, (500));
	}
	if(i==10){
	setTimeout(function(){ box.fadeOut(500)}, (400));
	}
	if(i==9){
	setTimeout(function(){ box.fadeOut(500)}, (1800));
	}
	if(i==8){
	setTimeout(function(){ box.fadeOut(500)}, (1600));
	}
	if(i==7){
	setTimeout(function(){ box.fadeOut(500)}, (1400));
	}
	if(i==6){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==5){
	setTimeout(function(){ box.fadeOut(500)}, (1000));
	}
	if(i==4){
	setTimeout(function(){ box.fadeOut(500)}, (800));
	}
	if(i==3){
	setTimeout(function(){ box.fadeOut(500)}, (600));
	}
	if(i==2){
	setTimeout(function(){ box.fadeOut(500)}, (500));
	}
	if(i==1){
	setTimeout(function(){ box.fadeOut(500)}, (400));
	}
	if(i==0){
	setTimeout(function(){ box.fadeOut(500)}, (200));
	}
	i++;	
	}else{
	var box = $(this);
	if(i==23){
	setTimeout(function(){ box.fadeOut(500)}, (2700));
	}
	if(i==22){
	setTimeout(function(){ box.fadeOut(500)}, (2400));
	}
	if(i==21){
	setTimeout(function(){ box.fadeOut(500)}, (2100));
	}
	if(i==20){
	setTimeout(function(){ box.fadeOut(500)}, (1800));
	}
	if(i==19){
	setTimeout(function(){ box.fadeOut(500)}, (1500));
	}
	if(i==18){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==17){
	setTimeout(function(){ box.fadeOut(500)}, (2400));
	}
	if(i==16){
	setTimeout(function(){ box.fadeOut(500)}, (2100));
	}
	if(i==15){
	setTimeout(function(){ box.fadeOut(500)}, (1800));
	}
	if(i==14){
	setTimeout(function(){ box.fadeOut(500)}, (1500));
	}
	if(i==13){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==12){
	setTimeout(function(){ box.fadeOut(500)}, (900));
	}
	if(i==11){
	setTimeout(function(){ box.fadeOut(500)}, (2100));
	}
	if(i==10){
	setTimeout(function(){ box.fadeOut(500)}, (1800));
	}
	if(i==9){
	setTimeout(function(){ box.fadeOut(500)}, (1500));
	}
	if(i==8){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==7){
	setTimeout(function(){ box.fadeOut(500)}, (900));
	}
	if(i==6){
	setTimeout(function(){ box.fadeOut(500)}, (600));
	}
	if(i==5){
	setTimeout(function(){ box.fadeOut(500)}, (1800));
	}
	if(i==4){
	setTimeout(function(){ box.fadeOut(500)}, (1500));
	}
	if(i==3){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==2){
	setTimeout(function(){ box.fadeOut(500)}, (900));
	}
	if(i==1){
	setTimeout(function(){ box.fadeOut(500)}, (600));
	}
	if(i==0){
	setTimeout(function(){ box.fadeOut(500)}, (300));
	}
	i++;
	}
	}
	});
	}
	
	
	
	
	
	if(randAnim=='fade-standart'){
	var	slice = $('.item-active').children('.item-box');
	var i = 0;
	var timeBuff = 0;
	slice.each(function(){
	var box = $(this);
	setTimeout(function(){ box.fadeOut(500)}, (1));
	i++;
	});
	}
	
	
	
	if(randAnim=='raspad'){
	var	slice = $('.item-active').children('.item-box');
	var i = 0;
	var timeBuff = 0;
	slice.each(function(){
	if(esNum===5){
	var box = $(this);
	if(i==19){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (400));
	}
	if(i==18){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (800));
	}
	if(i==17){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1200));
	}
	if(i==16){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1600));
	}
	if(i==15){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (2000));
	}
	if(i==14){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (200));
	}
	if(i==13){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (600));
	}
	if(i==12){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1000));
	}
	if(i==11){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1400));
	}
	if(i==10){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1800));
	}
	if(i==9){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (300));
	}
	if(i==8){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (700));
	}
	if(i==7){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1100));
	}
	if(i==6){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1500));
	}
	if(i==5){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1900));
	}
	if(i==4){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (100));
	}
	if(i==3){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (500));
	}
	if(i==2){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (900));
	}
	if(i==1){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1300));
	}
	if(i==0){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1700));
	}
	i++;	
	}else{
	if(esNum===10){
	var box = $(this);
	if(i==39){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (240));
	}
	if(i==38){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (480));
	}
	if(i==37){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (720));
	}
	if(i==36){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (960));
	}
	if(i==35){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1200));
	}
	if(i==34){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1440));
	}
	if(i==33){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1680));
	}
	if(i==32){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1920));
	}
	if(i==31){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (2160));
	}
	if(i==30){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (2400));
	}
	if(i==29){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (120));
	}
	if(i==28){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (360));
	}
	if(i==27){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (600));
	}
	if(i==26){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (840));
	}
	if(i==25){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1080));
	}
	if(i==24){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1320));
	}
	if(i==23){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1560));
	}
	if(i==22){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1800));
	}
	if(i==21){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (2040));
	}
	if(i==20){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (2280));
	}
	if(i==19){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (180));
	}
	if(i==18){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (420));
	}
	if(i==17){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (660));
	}
	if(i==16){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (900));
	}
	if(i==15){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1140));
	}
	if(i==14){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1380));
	}
	if(i==13){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1620));
	}
	if(i==12){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1860));
	}
	if(i==11){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (2100));
	}
	if(i==10){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (2340));
	}
	if(i==9){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (60));
	}
	if(i==8){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (300));
	}
	if(i==7){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (540));
	}
	if(i==6){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (780));
	}
	if(i==5){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1020));
	}
	if(i==4){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1260));
	}
	if(i==3){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1500));
	}
	if(i==2){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1740));
	}
	if(i==1){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1980));
	}
	if(i==0){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (2220));
	}
	i++;	
	}else{
	var box = $(this);
	if(i==23){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (400));
	}
	if(i==22){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (800));
	}
	if(i==21){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1200));
	}
	if(i==20){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1600));
	}
	if(i==19){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (2000));
	}
	if(i==18){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (2400));
	}
	if(i==17){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (200));
	}
	if(i==16){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (600));
	}
	if(i==15){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1000));
	}
	if(i==14){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1400));
	}
	if(i==13){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1800));
	}
	if(i==12){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (2200));
	}
	if(i==11){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (300));
	}
	if(i==10){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (700));
	}
	if(i==9){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1100));
	}
	if(i==8){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1500));
	}
	if(i==7){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1900));
	}
	if(i==6){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (2300));
	}
	if(i==5){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (100));
	}
	if(i==4){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (500));
	}
	if(i==3){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (900));
	}
	if(i==2){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1300));
	}
	if(i==1){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (1700));
	}
	if(i==0){
	setTimeout(function(){ box.animate({ left:'-1000px'}, 600)}, (2100));
	}
	i++;
	}
	}
	});
	}
	
	
	
	if(randAnim=='wtora'){
	var	slice = $('.item-active').children('.item-box');
	var i = 0;
	var timeBuff = 0;
	slice.each(function(){
	if(esNum===5){
	var box = $(this);
	if(i==19){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (5));
	}
	if(i==18){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (600));
	}
	if(i==17){
	setTimeout(function(){ box.animate({ width:'0px'}, 495)}, (1200));
	}
	if(i==16){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (1800));
	}
	if(i==15){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (2400));
	}
	if(i==14){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (5));
	}
	if(i==13){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (600));
	}
	if(i==12){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (1200));
	}
	if(i==11){
	setTimeout(function(){ box.animate({ width:'0px'}, 495)}, (1800));
	}
	if(i==10){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (2400));
	}
	if(i==9){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (5));
	}
	if(i==8){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (600));
	}
	if(i==7){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (1200));
	}
	if(i==6){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (1800));
	}
	if(i==5){
	setTimeout(function(){ box.animate({ width:'0px'}, 495)}, (2400));
	}
	if(i==4){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (5));
	}
	if(i==3){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (600));
	}
	if(i==2){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (1200));
	}
	if(i==1){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (1800));
	}
	if(i==0){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (2400));
	}
	i++;	
	}else{
	if(esNum===10){
	var box = $(this);
	if(i==39){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (5));
	}
	if(i==38){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (300));
	}
	if(i==37){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (600));
	}
	if(i==36){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (900));
	}
	if(i==35){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (1200));
	}
	if(i==34){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (1500));
	}
	if(i==33){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (1800));
	}
	if(i==32){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (2100));
	}
	if(i==31){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (2400));
	}
	if(i==30){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (2700));
	}
	if(i==29){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (5));
	}
	if(i==28){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (300));
	}
	if(i==27){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (600));
	}
	if(i==26){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (900));
	}
	if(i==25){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (1200));
	}
	if(i==24){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (1500));
	}
	if(i==23){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (1800));
	}
	if(i==22){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (2100));
	}
	if(i==21){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (2400));
	}
	if(i==20){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (2700));
	}
	if(i==19){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (5));
	}
	if(i==18){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (300));
	}
	if(i==17){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (600));
	}
	if(i==16){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (900));
	}
	if(i==15){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (1200));
	}
	if(i==14){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (1500));
	}
	if(i==13){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (1800));
	}
	if(i==12){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (2100));
	}
	if(i==11){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (2400));
	}
	if(i==10){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (2700));
	}
	if(i==9){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (5));
	}
	if(i==8){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (300));
	}
	if(i==7){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (600));
	}
	if(i==6){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (900));
	}
	if(i==5){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (1200));
	}
	if(i==4){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (1500));
	}
	if(i==3){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (1800));
	}
	if(i==2){
	setTimeout(function(){ box.animate({ width:'0px'}, 300)}, (2100));
	}
	if(i==1){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (2400));
	}
	if(i==0){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (2700));
	}
	i++;	
	}else{
	var box = $(this);
	if(i==23){
	setTimeout(function(){ box.animate({ width:'0px'}, 495)}, (5));
	}
	if(i==22){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (450));
	}
	if(i==21){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (900));
	}
	if(i==20){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (1350));
	}
	if(i==19){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (1800));
	}
	if(i==18){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (2250));
	}
	if(i==17){
	setTimeout(function(){ box.animate({ width:'0px'}, 495)}, (5));
	}
	if(i==16){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (450));
	}
	if(i==15){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (900));
	}
	if(i==14){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (1350));
	}
	if(i==13){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (1800));
	}
	if(i==12){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (2250));
	}
	if(i==11){
	setTimeout(function(){ box.animate({ width:'0px'}, 495)}, (5));
	}
	if(i==10){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (450));
	}
	if(i==9){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (900));
	}
	if(i==8){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (1350));
	}
	if(i==7){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (1800));
	}
	if(i==6){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (2250));
	}
	if(i==5){
	setTimeout(function(){ box.animate({ width:'0px'}, 495)}, (5));
	}
	if(i==4){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (450));
	}
	if(i==3){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (900));
	}
	if(i==2){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (1350));
	}
	if(i==1){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (1800));
	}
	if(i==0){
	setTimeout(function(){ box.animate({ width:'0px'}, 500)}, (2250));
	}
	i++;
	}
	}
	});
	}

	
	
	
	if(randAnim=='fade-wtora'){
	var	slice = $('.item-active').children('.item-box');
	var i = 0;
	var timeBuff = 0;
	slice.each(function(){
	if(esNum===5){
		var box = $(this);
	if(i==19){
	setTimeout(function(){ box.fadeOut(600)}, (2400));
	}
	if(i==18){
	setTimeout(function(){ box.fadeOut(600)}, (1800));
	}
	if(i==17){
	setTimeout(function(){ box.fadeOut(600)}, (1200));
	}
	if(i==16){
	setTimeout(function(){ box.fadeOut(600)}, (600));
	}
	if(i==15){
	setTimeout(function(){ box.fadeOut(600)}, (5));
	}
	if(i==14){
	setTimeout(function(){ box.fadeOut(600)}, (2400));
	}
	if(i==13){
	setTimeout(function(){ box.fadeOut(600)}, (1800));
	}
	if(i==12){
	setTimeout(function(){ box.fadeOut(600)}, (1200));
	}
	if(i==11){
	setTimeout(function(){ box.fadeOut(600)}, (600));
	}
	if(i==10){
	setTimeout(function(){ box.fadeOut(600)}, (5));
	}
	if(i==9){
	setTimeout(function(){ box.fadeOut(600)}, (2400));
	}
	if(i==8){
	setTimeout(function(){ box.fadeOut(600)}, (1800));
	}
	if(i==7){
	setTimeout(function(){ box.fadeOut(600)}, (1200));
	}
	if(i==6){
	setTimeout(function(){ box.fadeOut(600)}, (600));
	}
	if(i==5){
	setTimeout(function(){ box.fadeOut(600)}, (5));
	}
	if(i==4){
	setTimeout(function(){ box.fadeOut(600)}, (2400));
	}
	if(i==3){
	setTimeout(function(){ box.fadeOut(600)}, (1800));
	}
	if(i==2){
	setTimeout(function(){ box.fadeOut(600)}, (1200));
	}
	if(i==1){
	setTimeout(function(){ box.fadeOut(600)}, (600));
	}
	if(i==0){
	setTimeout(function(){ box.fadeOut(600)}, (5));
	}
	i++;	
	}else{
	if(esNum===10){
	var box = $(this);
	if(i==39){
	setTimeout(function(){ box.fadeOut(500)}, (2700));
	}
	if(i==38){
	setTimeout(function(){ box.fadeOut(500)}, (2400));
	}
	if(i==37){
	setTimeout(function(){ box.fadeOut(500)}, (2100));
	}
	if(i==36){
	setTimeout(function(){ box.fadeOut(500)}, (1800));
	}
	if(i==35){
	setTimeout(function(){ box.fadeOut(500)}, (1500));
	}
	if(i==34){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==33){
	setTimeout(function(){ box.fadeOut(500)}, (900));
	}
	if(i==32){
	setTimeout(function(){ box.fadeOut(500)}, (600));
	}
	if(i==31){
	setTimeout(function(){ box.fadeOut(500)}, (300));
	}
	if(i==30){
	setTimeout(function(){ box.fadeOut(500)}, (5));
	}
	if(i==29){
	setTimeout(function(){ box.fadeOut(500)}, (2700));
	}
	if(i==28){
	setTimeout(function(){ box.fadeOut(500)}, (2400));
	}
	if(i==27){
	setTimeout(function(){ box.fadeOut(500)}, (2100));
	}
	if(i==26){
	setTimeout(function(){ box.fadeOut(500)}, (1800));
	}
	if(i==25){
	setTimeout(function(){ box.fadeOut(500)}, (1500));
	}
	if(i==24){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==23){
	setTimeout(function(){ box.fadeOut(500)}, (900));
	}
	if(i==22){
	setTimeout(function(){ box.fadeOut(500)}, (600));
	}
	if(i==21){
	setTimeout(function(){ box.fadeOut(500)}, (300));
	}
	if(i==20){
	setTimeout(function(){ box.fadeOut(500)}, (5));
	}
	if(i==19){
	setTimeout(function(){ box.fadeOut(500)}, (2700));
	}
	if(i==18){
	setTimeout(function(){ box.fadeOut(500)}, (2400));
	}
	if(i==17){
	setTimeout(function(){ box.fadeOut(500)}, (2100));
	}
	if(i==16){
	setTimeout(function(){ box.fadeOut(500)}, (1800));
	}
	if(i==15){
	setTimeout(function(){ box.fadeOut(500)}, (1500));
	}
	if(i==14){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==13){
	setTimeout(function(){ box.fadeOut(500)}, (900));
	}
	if(i==12){
	setTimeout(function(){ box.fadeOut(500)}, (600));
	}
	if(i==11){
	setTimeout(function(){ box.fadeOut(500)}, (300));
	}
	if(i==10){
	setTimeout(function(){ box.fadeOut(500)}, (5));
	}
	if(i==9){
	setTimeout(function(){ box.fadeOut(500)}, (2700));
	}
	if(i==8){
	setTimeout(function(){ box.fadeOut(500)}, (2400));
	}
	if(i==7){
	setTimeout(function(){ box.fadeOut(500)}, (2100));
	}
	if(i==6){
	setTimeout(function(){ box.fadeOut(500)}, (1800));
	}
	if(i==5){
	setTimeout(function(){ box.fadeOut(500)}, (1500));
	}
	if(i==4){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==3){
	setTimeout(function(){ box.fadeOut(500)}, (900));
	}
	if(i==2){
	setTimeout(function(){ box.fadeOut(500)}, (600));
	}
	if(i==1){
	setTimeout(function(){ box.fadeOut(500)}, (300));
	}
	if(i==0){
	setTimeout(function(){ box.fadeOut(500)}, (5));
	}
	i++;		
	}else{
	var box = $(this);
	if(i==23){
	setTimeout(function(){ box.fadeOut(800)}, (2500));
	}
	if(i==22){
	setTimeout(function(){ box.fadeOut(800)}, (2000));
	}
	if(i==21){
	setTimeout(function(){ box.fadeOut(800)}, (1500));
	}
	if(i==20){
	setTimeout(function(){ box.fadeOut(800)}, (1000));
	}
	if(i==19){
	setTimeout(function(){ box.fadeOut(800)}, (500));
	}
	if(i==18){
	setTimeout(function(){ box.fadeOut(800)}, (5));
	}
	if(i==17){
	setTimeout(function(){ box.fadeOut(800)}, (2500));
	}
	if(i==16){
	setTimeout(function(){ box.fadeOut(800)}, (2000));
	}
	if(i==15){
	setTimeout(function(){ box.fadeOut(800)}, (1500));
	}
	if(i==14){
	setTimeout(function(){ box.fadeOut(800)}, (1000));
	}
	if(i==13){
	setTimeout(function(){ box.fadeOut(800)}, (500));
	}
	if(i==12){
	setTimeout(function(){ box.fadeOut(800)}, (5));
	}
	if(i==11){
	setTimeout(function(){ box.fadeOut(800)}, (2500));
	}
	if(i==10){
	setTimeout(function(){ box.fadeOut(800)}, (2000));
	}
	if(i==9){
	setTimeout(function(){ box.fadeOut(800)}, (1500));
	}
	if(i==8){
	setTimeout(function(){ box.fadeOut(800)}, (1000));
	}
	if(i==7){
	setTimeout(function(){ box.fadeOut(800)}, (500));
	}
	if(i==6){
	setTimeout(function(){ box.fadeOut(800)}, (5));
	}
	if(i==5){
	setTimeout(function(){ box.fadeOut(800)}, (2500));
	}
	if(i==4){
	setTimeout(function(){ box.fadeOut(800)}, (2000));
	}
	if(i==3){
	setTimeout(function(){ box.fadeOut(800)}, (1500));
	}
	if(i==2){
	setTimeout(function(){ box.fadeOut(800)}, (1000));
	}
	if(i==1){
	setTimeout(function(){ box.fadeOut(800)}, (500));
	}
	if(i==0){
	setTimeout(function(){ box.fadeOut(800)}, (5));
	}
	i++;
	}
	}
	});
	}
	
	
	
	
	if(randAnim=='fade-zmeya'){
	var	slice = $('.item-active').children('.item-box');
	var i = 0;
	var timeBuff = 0;
	slice.each(function(){
	if(esNum===5){
		var box = $(this);
	if(i==19){
	setTimeout(function(){ box.fadeOut(600)}, (800));
	}
	if(i==18){
	setTimeout(function(){ box.fadeOut(600)}, (700));
	}
	if(i==17){
	setTimeout(function(){ box.fadeOut(600)}, (600));
	}
	if(i==16){
	setTimeout(function(){ box.fadeOut(600)}, (500));
	}
	if(i==15){
	setTimeout(function(){ box.fadeOut(600)}, (400));
	}
	if(i==14){
	setTimeout(function(){ box.fadeOut(600)}, (900));
	}
	if(i==13){
	setTimeout(function(){ box.fadeOut(600)}, (1700));
	}
	if(i==12){
	setTimeout(function(){ box.fadeOut(600)}, (1600));
	}
	if(i==11){
	setTimeout(function(){ box.fadeOut(600)}, (1500));
	}
	if(i==10){
	setTimeout(function(){ box.fadeOut(600)}, (300));
	}
	if(i==9){
	setTimeout(function(){ box.fadeOut(600)}, (1000));
	}
	if(i==8){
	setTimeout(function(){ box.fadeOut(600)}, (1800));
	}
	if(i==7){
	setTimeout(function(){ box.fadeOut(600)}, (1900));
	}
	if(i==6){
	setTimeout(function(){ box.fadeOut(600)}, (2000));
	}
	if(i==5){
	setTimeout(function(){ box.fadeOut(600)}, (200));
	}
	if(i==4){
	setTimeout(function(){ box.fadeOut(600)}, (1100));
	}
	if(i==3){
	setTimeout(function(){ box.fadeOut(600)}, (1200));
	}
	if(i==2){
	setTimeout(function(){ box.fadeOut(600)}, (1300));
	}
	if(i==1){
	setTimeout(function(){ box.fadeOut(600)}, (1400));
	}
	if(i==0){
	setTimeout(function(){ box.fadeOut(600)}, (100));
	}
	i++;	
	}else{
	if(esNum===10){
		var box = $(this);
	if(i==39){
	setTimeout(function(){ box.fadeOut(500)}, (780));
	}
	if(i==38){
	setTimeout(function(){ box.fadeOut(500)}, (720));
	}
	if(i==37){
	setTimeout(function(){ box.fadeOut(500)}, (660));
	}
	if(i==36){
	setTimeout(function(){ box.fadeOut(500)}, (600));
	}
	if(i==35){
	setTimeout(function(){ box.fadeOut(500)}, (540));
	}
	if(i==34){
	setTimeout(function(){ box.fadeOut(500)}, (480));
	}
	if(i==33){
	setTimeout(function(){ box.fadeOut(500)}, (420));
	}
	if(i==32){
	setTimeout(function(){ box.fadeOut(500)}, (360));
	}
	if(i==31){
	setTimeout(function(){ box.fadeOut(500)}, (300));
	}
	if(i==30){
	setTimeout(function(){ box.fadeOut(500)}, (240));
	}
	if(i==29){
	setTimeout(function(){ box.fadeOut(500)}, (840));
	}
	if(i==28){
	setTimeout(function(){ box.fadeOut(500)}, (1980));
	}
	if(i==27){
	setTimeout(function(){ box.fadeOut(500)}, (1920));
	}
	if(i==26){
	setTimeout(function(){ box.fadeOut(500)}, (1860));
	}
	if(i==25){
	setTimeout(function(){ box.fadeOut(500)}, (1800));
	}
	if(i==24){
	setTimeout(function(){ box.fadeOut(500)}, (1740));
	}
	if(i==23){
	setTimeout(function(){ box.fadeOut(500)}, (1680));
	}
	if(i==22){
	setTimeout(function(){ box.fadeOut(500)}, (1620));
	}
	if(i==21){
	setTimeout(function(){ box.fadeOut(500)}, (1560));
	}
	if(i==20){
	setTimeout(function(){ box.fadeOut(500)}, (180));
	}
	if(i==19){
	setTimeout(function(){ box.fadeOut(500)}, (900));
	}
	if(i==18){
	setTimeout(function(){ box.fadeOut(500)}, (2040));
	}
	if(i==17){
	setTimeout(function(){ box.fadeOut(500)}, (2100));
	}
	if(i==16){
	setTimeout(function(){ box.fadeOut(500)}, (2160));
	}
	if(i==15){
	setTimeout(function(){ box.fadeOut(500)}, (2220));
	}
	if(i==14){
	setTimeout(function(){ box.fadeOut(500)}, (2280));
	}
	if(i==13){
	setTimeout(function(){ box.fadeOut(500)}, (2340));
	}
	if(i==12){
	setTimeout(function(){ box.fadeOut(500)}, (2400));
	}
	if(i==11){
	setTimeout(function(){ box.fadeOut(500)}, (1500));
	}
	if(i==10){
	setTimeout(function(){ box.fadeOut(500)}, (120));
	}
	if(i==9){
	setTimeout(function(){ box.fadeOut(500)}, (960));
	}
	if(i==8){
	setTimeout(function(){ box.fadeOut(500)}, (1020));
	}
	if(i==7){
	setTimeout(function(){ box.fadeOut(500)}, (1080));
	}
	if(i==6){
	setTimeout(function(){ box.fadeOut(500)}, (1140));
	}
	if(i==5){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==4){
	setTimeout(function(){ box.fadeOut(500)}, (1260));
	}
	if(i==3){
	setTimeout(function(){ box.fadeOut(500)}, (1320));
	}
	if(i==2){
	setTimeout(function(){ box.fadeOut(500)}, (1380));
	}
	if(i==1){
	setTimeout(function(){ box.fadeOut(500)}, (1440));
	}
	if(i==0){
	setTimeout(function(){ box.fadeOut(500)}, (60));
	}
	i++;	
	}else{
	var box = $(this);
	if(i==23){
	setTimeout(function(){ box.fadeOut(500)}, (1000));
	}
	if(i==22){
	setTimeout(function(){ box.fadeOut(500)}, (900));
	}
	if(i==21){
	setTimeout(function(){ box.fadeOut(500)}, (800));
	}
	if(i==20){
	setTimeout(function(){ box.fadeOut(500)}, (700));
	}
	if(i==19){
	setTimeout(function(){ box.fadeOut(500)}, (500));
	}
	if(i==18){
	setTimeout(function(){ box.fadeOut(500)}, (400));
	}
	if(i==17){
	setTimeout(function(){ box.fadeOut(500)}, (1100));
	}
	if(i==16){
	setTimeout(function(){ box.fadeOut(500)}, (2200));
	}
	if(i==15){
	setTimeout(function(){ box.fadeOut(500)}, (2100));
	}
	if(i==14){
	setTimeout(function(){ box.fadeOut(500)}, (2000));
	}
	if(i==13){
	setTimeout(function(){ box.fadeOut(500)}, (1900));
	}
	if(i==12){
	setTimeout(function(){ box.fadeOut(500)}, (300));
	}
	if(i==11){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==10){
	setTimeout(function(){ box.fadeOut(500)}, (2300));
	}
	if(i==9){
	setTimeout(function(){ box.fadeOut(500)}, (2400));
	}
	if(i==8){
	setTimeout(function(){ box.fadeOut(500)}, (2500));
	}
	if(i==7){
	setTimeout(function(){ box.fadeOut(500)}, (1800));
	}
	if(i==6){
	setTimeout(function(){ box.fadeOut(500)}, (200));
	}
	if(i==5){
	setTimeout(function(){ box.fadeOut(500)}, (1300));
	}
	if(i==4){
	setTimeout(function(){ box.fadeOut(500)}, (1400));
	}
	if(i==3){
	setTimeout(function(){ box.fadeOut(500)}, (1500));
	}
	if(i==2){
	setTimeout(function(){ box.fadeOut(500)}, (1600));
	}
	if(i==1){
	setTimeout(function(){ box.fadeOut(500)}, (1700));
	}
	if(i==0){
	setTimeout(function(){ box.fadeOut(500)}, (100));
	}
	i++;
	}
	}
	});
	}
	
	if(randAnim=='fade-center'){
	var	slice = $('.item-active').children('.item-box');
	var i = 0;
	var timeBuff = 0;
	slice.each(function(){
		if(esNum===5){
	var box = $(this);
	if(i==19){
	setTimeout(function(){ box.fadeOut(1000)}, (1800));
	}
	if(i==18){
	setTimeout(function(){ box.fadeOut(1000)}, (1200));
	}
	if(i==17){
	setTimeout(function(){ box.fadeOut(1000)}, (600));
	}
	if(i==16){
	setTimeout(function(){ box.fadeOut(1000)}, (5));
	}
	if(i==15){
	setTimeout(function(){ box.fadeOut(1000)}, (5));
	}
	if(i==14){
	setTimeout(function(){ box.fadeOut(1000)}, (1200));
	}
	if(i==13){
	setTimeout(function(){ box.fadeOut(1000)}, (600));
	}
	if(i==12){
	setTimeout(function(){ box.fadeOut(1000)}, (5));
	}
	if(i==11){
	setTimeout(function(){ box.fadeOut(1000)}, (5));
	}
	if(i==10){
	setTimeout(function(){ box.fadeOut(1000)}, (600));
	}
	if(i==9){
	setTimeout(function(){ box.fadeOut(1000)}, (600));
	}
	if(i==8){
	setTimeout(function(){ box.fadeOut(1000)}, (5));
	}
	if(i==7){
	setTimeout(function(){ box.fadeOut(1000)}, (5));
	}
	if(i==6){
	setTimeout(function(){ box.fadeOut(1000)}, (600));
	}
	if(i==5){
	setTimeout(function(){ box.fadeOut(1000)}, (1200));
	}
	if(i==4){
	setTimeout(function(){ box.fadeOut(1000)}, (5));
	}
	if(i==3){
	setTimeout(function(){ box.fadeOut(1000)}, (5));
	}
	if(i==2){
	setTimeout(function(){ box.fadeOut(1000)}, (600));
	}
	if(i==1){
	setTimeout(function(){ box.fadeOut(1000)}, (1200));
	}
	if(i==0){
	setTimeout(function(){ box.fadeOut(1000)}, (1800));
	}
	i++;		
	}else{
	if(esNum===10){
	var box = $(this);
	if(i==39){
	setTimeout(function(){ box.fadeOut(500)}, (2400));
	}
	if(i==38){
	setTimeout(function(){ box.fadeOut(500)}, (2000));
	}
	if(i==37){
	setTimeout(function(){ box.fadeOut(500)}, (1600));
	}
	if(i==36){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==35){
	setTimeout(function(){ box.fadeOut(500)}, (800));
	}
	if(i==34){
	setTimeout(function(){ box.fadeOut(500)}, (400));
	}
	if(i==33){
	setTimeout(function(){ box.fadeOut(500)}, (5));
	}
	if(i==32){
	setTimeout(function(){ box.fadeOut(500)}, (400));
	}
	if(i==31){
	setTimeout(function(){ box.fadeOut(500)}, (800));
	}
	if(i==30){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==29){
	setTimeout(function(){ box.fadeOut(500)}, (2000));
	}
	if(i==28){
	setTimeout(function(){ box.fadeOut(500)}, (1600));
	}
	if(i==27){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==26){
	setTimeout(function(){ box.fadeOut(500)}, (800));
	}
	if(i==25){
	setTimeout(function(){ box.fadeOut(500)}, (400));
	}
	if(i==24){
	setTimeout(function(){ box.fadeOut(500)}, (5));
	}
	if(i==23){
	setTimeout(function(){ box.fadeOut(500)}, (400));
	}
	if(i==22){
	setTimeout(function(){ box.fadeOut(500)}, (800));
	}
	if(i==21){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==20){
	setTimeout(function(){ box.fadeOut(500)}, (1600));
	}
	if(i==19){
	setTimeout(function(){ box.fadeOut(500)}, (1600));
	}
	if(i==18){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==17){
	setTimeout(function(){ box.fadeOut(500)}, (800));
	}
	if(i==16){
	setTimeout(function(){ box.fadeOut(500)}, (400));
	}
	if(i==15){
	setTimeout(function(){ box.fadeOut(500)}, (5));
	}
	if(i==14){
	setTimeout(function(){ box.fadeOut(500)}, (400));
	}
	if(i==13){
	setTimeout(function(){ box.fadeOut(500)}, (800));
	}
	if(i==12){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==11){
	setTimeout(function(){ box.fadeOut(500)}, (1600));
	}
	if(i==10){
	setTimeout(function(){ box.fadeOut(500)}, (2000));
	}
	if(i==9){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==8){
	setTimeout(function(){ box.fadeOut(500)}, (800));
	}
	if(i==7){
	setTimeout(function(){ box.fadeOut(500)}, (400));
	}
	if(i==6){
	setTimeout(function(){ box.fadeOut(500)}, (5));
	}
	if(i==5){
	setTimeout(function(){ box.fadeOut(500)}, (400));
	}
	if(i==4){
	setTimeout(function(){ box.fadeOut(500)}, (800));
	}
	if(i==3){
	setTimeout(function(){ box.fadeOut(500)}, (1200));
	}
	if(i==2){
	setTimeout(function(){ box.fadeOut(500)}, (1600));
	}
	if(i==1){
	setTimeout(function(){ box.fadeOut(500)}, (2000));
	}
	if(i==0){
	setTimeout(function(){ box.fadeOut(500)}, (2400));
	}
	i++;	
	}else{
	var box = $(this);
	if(i==23){
	setTimeout(function(){ box.fadeOut(1000)}, (2400));
	}
	if(i==22){
	setTimeout(function(){ box.fadeOut(1000)}, (1800));
	}
	if(i==21){
	setTimeout(function(){ box.fadeOut(1000)}, (1200));
	}
	if(i==20){
	setTimeout(function(){ box.fadeOut(1000)}, (600));
	}
	if(i==19){
	setTimeout(function(){ box.fadeOut(1000)}, (5));
	}
	if(i==18){
	setTimeout(function(){ box.fadeOut(1000)}, (600));
	}
	if(i==17){
	setTimeout(function(){ box.fadeOut(1000)}, (1800));
	}
	if(i==16){
	setTimeout(function(){ box.fadeOut(1000)}, (1200));
	}
	if(i==15){
	setTimeout(function(){ box.fadeOut(1000)}, (600));
	}
	if(i==14){
	setTimeout(function(){ box.fadeOut(1000)}, (5));
	}
	if(i==13){
	setTimeout(function(){ box.fadeOut(1000)}, (600));
	}
	if(i==12){
	setTimeout(function(){ box.fadeOut(1000)}, (1200));
	}
	if(i==11){
	setTimeout(function(){ box.fadeOut(1000)}, (1200));
	}
	if(i==10){
	setTimeout(function(){ box.fadeOut(1000)}, (600));
	}
	if(i==9){
	setTimeout(function(){ box.fadeOut(1000)}, (5));
	}
	if(i==8){
	setTimeout(function(){ box.fadeOut(1000)}, (600));
	}
	if(i==7){
	setTimeout(function(){ box.fadeOut(1000)}, (1200));
	}
	if(i==6){
	setTimeout(function(){ box.fadeOut(1000)}, (1800));
	}
	if(i==5){
	setTimeout(function(){ box.fadeOut(1000)}, (600));
	}
	if(i==4){
	setTimeout(function(){ box.fadeOut(1000)}, (5));
	}
	if(i==3){
	setTimeout(function(){ box.fadeOut(1000)}, (600));
	}
	if(i==2){
	setTimeout(function(){ box.fadeOut(1000)}, (1200));
	}
	if(i==1){
	setTimeout(function(){ box.fadeOut(1000)}, (1800));
	}
	if(i==0){
	setTimeout(function(){ box.fadeOut(1000)}, (2400));
	}
	i++;
	}
	}
	});
	}
	
	
	if(randAnim=='mozaika'){
	var	slice = $('.item-active').children('.item-box');
	var i = 0;
	var timeBuff = 0;
	slice.each(function(){
	if(esNum===5){
		var box = $(this);
	if(i==19){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (100));
	}
	if(i==18){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (200));
	}
	if(i==17){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (300));
	}
	if(i==16){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (400));
	}
	if(i==15){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (500));
	}
	if(i==14){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (200));
	}
	if(i==13){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (300));
	}
	if(i==12){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (400));
	}
	if(i==11){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (500));
	}
	if(i==10){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (600));
	}
	if(i==9){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (300));
	}
	if(i==8){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (400));
	}
	if(i==7){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (500));
	}
	if(i==6){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (600));
	}
	if(i==5){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (700));
	}
	if(i==4){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (400));
	}
	if(i==3){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (500));
	}
	if(i==2){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (600));
	}
	if(i==1){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (700));
	}
	if(i==0){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (800));
	}
	i++;	
	}else{
	if(esNum===10){
	var box = $(this);
	if(i==39){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (100));
	}
	if(i==38){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (200));
	}
	if(i==37){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (300));
	}
	if(i==36){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (400));
	}
	if(i==35){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (500));
	}
	if(i==34){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (600));
	}
	if(i==33){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (700));
	}
	if(i==32){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (800));
	}
	if(i==31){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (900));
	}
	if(i==30){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (1000));
	}
	if(i==29){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (200));
	}
	if(i==28){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (300));
	}
	if(i==27){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (400));
	}
	if(i==26){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (500));
	}
	if(i==25){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (600));
	}
	if(i==24){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (700));
	}
	if(i==23){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (800));
	}
	if(i==22){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (900));
	}
	if(i==21){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (1000));
	}
	if(i==20){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (1100));
	}
	if(i==19){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (300));
	}
	if(i==18){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (400));
	}
	if(i==17){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (500));
	}
	if(i==16){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (600));
	}
	if(i==15){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (700));
	}
	if(i==14){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (800));
	}
	if(i==13){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (900));
	}
	if(i==12){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (1000));
	}
	if(i==11){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (1100));
	}
	if(i==10){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (1200));
	}
	if(i==9){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (400));
	}
	if(i==8){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (500));
	}
	if(i==7){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (600));
	}
	if(i==6){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (700));
	}
	if(i==5){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (800));
	}
	if(i==4){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (900));
	}
	if(i==3){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (1000));
	}
	if(i==2){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (1100));
	}
	if(i==1){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (1200));
	}
	if(i==0){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 1500)}, (1300));
	}
	i++;		
	}else{
	var box = $(this);
	if(i==23){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (100));
	}
	if(i==22){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (200));
	}
	if(i==21){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (300));
	}
	if(i==20){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (400));
	}
	if(i==19){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (500));
	}
	if(i==18){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (600));
	}
	if(i==17){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (200));
	}
	if(i==16){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (300));
	}
	if(i==15){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (400));
	}
	if(i==14){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (500));
	}
	if(i==13){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (600));
	}
	if(i==12){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (700));
	}
	if(i==11){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (300));
	}
	if(i==10){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (400));
	}
	if(i==9){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (500));
	}
	if(i==8){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (600));
	}
	if(i==7){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (700));
	}
	if(i==6){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (800));
	}
	if(i==5){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (400));
	}
	if(i==4){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (500));
	}
	if(i==3){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (600));
	}
	if(i==2){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (700));
	}
	if(i==1){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (800));
	}
	if(i==0){
	setTimeout(function(){ box.animate({ width:'0px', height:'0px'}, 2500)}, (900));
	}
	i++;
	}
	}
	});
	}

	
	if(randAnim=='sliceleft'){
	var	slice = $('.item-active').children('.item-box');
	var i = 0;
	var timeBuff = 0;
	slice.each(function(){
	var box = $(this);
	setTimeout(function(){ box.animate({ left:'-5000px'}, 4000)}, (100 + timeBuff));	
	timeBuff += 50;
	i++;
	});
	}
	
	if(randAnim=='slicetop'){
	var	slice = $('.item-active').children('.item-box');
	var i = 0;
	var timeBuff = 0;
	slice.each(function(){
	var box = $(this);
	setTimeout(function(){ box.animate({ top:'-5000px'}, 4000)}, (100 + timeBuff));	
	timeBuff += 50;
	i++;
	});
	}
	
	
	if(randAnim=='rain'){
	var	slice = $('.item-active').children('.item-box');
	var i = 0;
	slice.each(function(){
	var box = $(this);
	var rain = new Array('100','200','300','400','500','600','700','800','900','1000','1100');
	var ranRain = rain[Math.floor(Math.random()*(anims.length))];
	setTimeout(function(){ box.fadeOut(400)}, (ranRain));
	i++;
	});
	}
	
	if(randAnim=='fade'){
	var	slice = $('.item-active').children('.item-box');
	var i = 0;
	var timeBuff = 0;
	slice.each(function(){
	var box = $(this);
	setTimeout(function(){ box.fadeOut(200)}, (100 + timeBuff));	
	timeBuff += 50;
	i++;
	});
	}
	
	if(randAnim=='s-left'){
	var	slice = $('.item-active').children('.item-box');
	var i = 0;
	var timeBuff = 0;
	slice.each(function(){
	var box = $(this);
	setTimeout(function(){ box.animate({ left:'-1000px'}, 5000)}, (5));	
	i++;
	});
	}
	
	
	if(randAnim=='line'){
	var	slice = $('.item-active').children('.item-box');
	var i = 0;
	var timeBuff = 0;
	slice.each(function(){
	var esNumT=esNum+esNum;
	var esNumG=esNumT+esNum;
	var box = $(this);
	if(i<esNum){
	setTimeout(function(){ box.animate({ left:'-5000px'}, 4000)}, (100));
	}else{
	if(i<esNumT){
	setTimeout(function(){ box.animate({ left:'-5000px'}, 4000)}, (500));
	}else{
	if(i<esNumG){
	setTimeout(function(){ box.animate({ left:'-5000px'}, 4000)}, (900));
	}else{
	setTimeout(function(){ box.animate({ left:'-5000px'}, 4000)}, (1300));
	}
	}
	}
	i++;	
	});
	}	
	}
	
	function itemBoxCon(){
	var esItemAct = es.children('.all-slider').children('.e-container').children('.item-active');
	var myCl = esItemAct.children('.item-box').last().clone();
	if(esNum===5){
	var esN = 19;	
	}else{
	if(esNum===10){
	var esN = 39;	
	}else{
	var esN = 23;
	}
	}
	
	}
	
	
	
$.fn.Eslider.defaults = {
slidespeed: 5000, //Speed of slide animation, 1000 = 1second.
addPagination: true, //Add pagination links based on content? true/false
addPrevNext: true //Add pagination links based on content? true/false
};
	}
	
})(jQuery);