<?
$tflag=0;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['recaptcha_response'])) {
 
    
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_secret = '6LcfUcYUAAAAAHjI8BOstWaXcLAxArNqTDcT5hW0';
    $recaptcha_response = $_POST['recaptcha_response'];
 
    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
    $recaptcha = json_decode($recaptcha);

    if ($recaptcha->score >= 0.5) {
		
		if(isset($_REQUEST['otpravit']))
		{
			if(($_REQUEST['nameC']!="")&&($_REQUEST['telC']!=""))
			{
				$datetemp=date("d.m.Y H.i.s");

				$title = substr(htmlspecialchars(trim("Заказ с Союз Голос $datetemp")), 0, 1000); 

				$temp=" \n Имя: "$_REQUEST['nameC']." \n Услуга: ".$_REQUEST['annotC']." \n телефон: ".$_REQUEST['telC'];
				$mess = substr(strip_tags($temp), 0, 1000000);  
				$to = 'allexxey222@gmail.com'; 
				$from='test@tekrap.ru'; 

				mail($to, $title, $mess, 'From:'.$from);
				$tflag=2;
			}
			else
			{
				$tflag=1;
			}
		}
    } else {
		$tflag==3;
    }
 
}
?>

<!DOCTYPE html>
<html class="" lang="ru">
<head>
        <!-- <div id="p_prldr"><div class="contpre"><span class="svg_anm"></span><br>Подождите<br><small>идет загрузка</small></div></div> -->
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    
    <meta charset="utf-8">
    <!-- <meta name="viewport" content="width=800, initial-scale=1"> -->
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="img/favicon.ico">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/tabs_style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <!-- <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css"> -->
    <link href="css/all.css" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="css/slider_style.css" />
    <link rel="stylesheet" type="text/css" href="css/custom.css" />
    <script type="text/javascript" src="js/modernizr.custom.79639.js"></script>
    <noscript>
        <link rel="stylesheet" type="text/css" href="css/styleNoJS.css" />
    </noscript>
    
    
    
    <!-- preloader -->


    <!-- <script type="text/javascript">$(window).on('load', function () {
        var $preloader = $('#p_prldr'),
            $svg_anm   = $preloader.find('.svg_anm');
        $svg_anm.fadeOut();
        $preloader.delay(500).fadeOut('slow');
    });</script> -->
    <!-- preloader end -->
    <!-- <script src="js/jQuery.UniSlider.js"></script>
    <script>
        $(document).ready(function(){

          $("#slider_selector").UniSlider();


         });
   </script> -->

<script type="text/javascript">
    $(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top-130;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});
</script>



<!-- кнопка возврата на начала страницы -->
    <script type="text/javascript" > 
    function up() {  
        var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
      if(top > 0) {  
        window.scrollBy(0,((top+100)/-10));  
        t = setTimeout('up()',20);  
      } else clearTimeout(t);  
      return false;  
      } 
      </script>
    <!--  -->

    
    
    
    
   
            
        
        
            <link rel="preconnect" href="https://siteassets.parastorage.com/pages/singlePage/viewerViewModeJson" crossorigin="">
        
    


        
            <title>QUARTAMUSIC</title>
        
            <meta name="description" content="Подарочные сертификаты на запись песни. Лучшая студия звукозаписи в Москве. Большая студия, 200 кв м. Центр Москвы. Песня &quot;Под ключ&quot;-5500 руб.">
        
        
            <meta property="og:title" content="Студия звукозаписи в Москве, сертификат на запись песни &quot;под ключ&quot;">
        
            <meta property="og:description" content="Подарочные сертификаты на запись песни. Лучшая студия звукозаписи в Москве. Большая студия, 200 кв м. Центр Москвы. Песня &quot;Под ключ&quot;-5500 руб.">
        

        

        

        
            <meta property="og:type" content="website">
        

        
            <meta name="keywords" content="большая студия звукозаписи, записать голос, записать песню в студии, запись в студии, запись песни, лучшая студия звукозаписи в Москве, песня в подарок, подарочные сертификаты, спеть песню, студия звукозаписи, студия звукозаписи цена, что подарить">
        
 
        
    

    



        

        
</head>

<body class="" data-js-loaded="true">
                   
<!-- форма -->
<div id="popup1">
   <!-- Скрипт капчи v3 -->
   <script src="https://www.google.com/recaptcha/api.js?render=6LcfUcYUAAAAAKQwz7MzV5zvu8Cu_1udX6-T84bS"></script>

   <script type="text/javascript">
           grecaptcha.ready(function () {
               grecaptcha.execute('6LcfUcYUAAAAAKQwz7MzV5zvu8Cu_1udX6-T84bS', { action: 'contact' }).then(function (token) {
                   var recaptchaResponse = document.getElementById('recaptchaResponse');
                   recaptchaResponse.value = token;
               });
           });
       </script>
    <div id="telform">
        <button class="button_close"><i class="fas fa-times"></i></button>
        <div id="telforml">
        </div>
        <form action="/" method="post">

            <input placeholder="Укажите ваше имя" type=text class="telform textbox" name="nameC" required>

            <input placeholder="Укажите ваш номер телефона" type=text class="telform textbox" name="telC" required>
            <select class="textbox" name="annotC" required >
                <option>Сингл "Хит"</option>
                <option>Сингл "Две звезды"</option>
                <option>Сингл "Корпоратив"</option>
                <option>Сингл "Профессионал"</option>
              </select>
            <!-- <textarea placeholder="Выберите услугу:" class="telform message" rows="4" cols="50" name="annotC" required></textarea> -->

            <input type="submit" id="otprav" value="Отправить" class="button_send">
            <input type="hidden" name="otpravit" value="1">
            <input type="hidden" name="recaptcha_response" id="recaptchaResponse">
        </form>
    </div>

<script type="text/javascript">
$(document).ready(function () {
               $("#popup1").hide();
                    $(".button_buy").click(function () {
                        $("#popup1").show();
                    });
                  $(".button_close").click(function () {
                        $("#popup1").hide();
                });
             });
    
</script>

</div>

    
<!-- конец формы -->

    

    

    
    
    
    <!--body start html embeds start-->
    
    <!--body start html embeds end-->
    
    

    <div id="SITE_CONTAINER" style="margin: 0 auto; overflow: hidden;">
<div>
</div>
    <div data-aid="stylesContainer">
</div>
<div class="noop" style="position:relative">
<div id="FONTS_CONTAINER">
</div>
    <div id="CSS_CONTAINER">
</div>
    <div id="SITE_BACKGROUND" style="top: 0px; min-height: calc(0px + 100vh); width: 1856px; height: 11510px;" class="siteBackground">
        <div id="SITE_BACKGROUND_previous_noPrev" data-position="absolute" data-align="" data-fitting="" class="siteBackgroundprevious" style="width: 100%; height: 100%;">
        <div id="SITE_BACKGROUNDpreviousImage" class="siteBackgroundpreviousImage">
</div>
        <div id="SITE_BACKGROUNDpreviousVideo" class="siteBackgroundpreviousVideo">
</div>
        <div id="SITE_BACKGROUND_previousOverlay_noPrev" class="siteBackgroundpreviousOverlay">
</div>
</div>
        <div id="SITE_BACKGROUND_current_customBgImg1rwg" style="top: 0px; height: 100%; width: 100%; background-color: rgb(255, 255, 255); position: absolute;" data-position="absolute" data-align="top" data-fitting="fill" class="siteBackgroundcurrent">
            <div id="SITE_BACKGROUND_currentImage_customBgImg1rwg" style="position: absolute; top: 0px; height: 100%; width: 100%;" data-type="bgimage" data-height="100%" class="siteBackgroundcurrentImage" data-image-css="{&quot;backgroundSize&quot;:&quot;&quot;,&quot;backgroundPosition&quot;:&quot;&quot;,&quot;backgroundRepeat&quot;:&quot;&quot;}">
</div>
            <div id="SITE_BACKGROUNDcurrentVideo" class="siteBackgroundcurrentVideo">
</div>
            <div id="SITE_BACKGROUND_currentOverlay_customBgImg1rwg" style="position:absolute;top:0;width:100%;height:100%" class="siteBackgroundcurrentOverlay">
</div>
        </div>
    </div>
            <div id="SITE_ROOT" class="SITE_ROOT" style="width:100%;min-width:980px;padding-bottom:0;top:0" aria-hidden="false">
                <div id="masterPage" class="mesh-layout" data-mesh-layout="grid">
                <footer style="bottom:auto;left:0;margin-left:0;width:100%;min-width:980px;top:;right:;position:" class="style-jtc0m6ll_footer style-jtc0m6ll" tabindex="-1" data-site-width="980" data-fixedposition="false" data-isrunninginmobile="false" data-state=" " id="SITE_FOOTER">
                    <div style="left:0;width:100%" id="SITE_FOOTERscreenWidthBackground" class="style-jtc0m6llscreenWidthBackground">
                        <div class="style-jtc0m6ll_bg">
</div>
                    </div>
                    <div style="width:100%" id="SITE_FOOTERcenteredContent" class="style-jtc0m6llcenteredContent">
                        <div style="margin-left:calc((100% - 980px) / 2);width:980px" id="SITE_FOOTERbg" class="style-jtc0m6llbg">
                            <div class="style-jtc0m6ll_bg-center">
</div>
                        </div>
                        <div id="SITE_FOOTERinlineContent" class="style-jtc0m6llinlineContent">
                            <div id="SITE_FOOTERinlineContent-gridWrapper" data-mesh-internal="true">
                                <div id="SITE_FOOTERinlineContent-gridContainer" data-mesh-internal="true">
                                    <!-- <div id="iw11bvrp" data-align="left" data-disabled="false" data-margin="0" data-should-use-flex="true" data-width="450" data-height="28" style="width: 450px; height: 28px; min-height: 25px;" class="b3" data-state="desktop shouldUseFlex left">
                                        <a href="https://www.studiovoice.ru/-" target="_self" role="button" id="iw11bvrplink" class="b3link">
                                            <span style="margin-left:0" id="iw11bvrplabel" class="b3label">Условия соглашения/Правила активации и возврата</span>
                                        </a>
                                    </div> -->
                                        <!-- <div id="iw11hm35" d ta-align="left" data-disabled="false" data-margin="0" data-should-use-flex="true" data-width="496" data-height="28" style="width: 496px; height: 28px; min-height: 25px;" class="b3" data-state="desktop shouldUseFlex left">
                                            <a href="https://www.studiovoice.ru/---ckj0" target="_self" role="button" id="iw11hm35link" class="b3link">
                                                <span style="margin-left:0" id="iw11hm35label" class="b3label">Часто задаваемые вопросы</span>
                                            </a>
                                        </div> -->
                                            <div data-packed="true" style="width: 269px; pointer-events: none;" class="txtNew" id="WRchTxt0-16wb">
                                                <p class="font_8" style="font-size:13px; text-align:center;">
                                                    <span class="color_15">
                                                        <span style="font-size:13px;">
                                                        
                                                        </span>
                                                    </span>
                                                </p>

<p class="font_9" style="font-size:13px; text-align:center;">
<span class="color_15">
<span style="font-size:13px;">
<span style="font-family:helvetica-w01-light,helvetica-w02-light,sans-serif;">Все права защищены.</span>
</span>
</span>
</p>

<p class="font_9" style="text-align:center;">&nbsp;</p>
</div>
</div>
</div>
</div>
</div>
</footer>
<div id="soapBeforePagesContainer">
<div id="soapBeforePagesContainerinlineContent-gridWrapper" data-mesh-internal="true">
<div id="soapBeforePagesContainerinlineContent-gridContainer" data-mesh-internal="true">
<div style="height: 97px; width: 1856px; left: -438px;" class="bgis3" id="hzi6licl">
<div data-align-type="center" data-fitting-type="legacy_strip_tile" data-type="bgimage" id="hzi6liclbg" class="bgis3bg" style="background-image: none;">
</div>
<div id="hzi6liclinlineContent" class="bgis3inlineContent">
</div>
</div>
</div>
</div>
</div>
<main tabindex="-1" data-is-mobile="false" data-is-mesh="true" data-site-width="980" style="left:0;margin-left:0;width:100%;min-width:980px;top:0;bottom:;right:;position:" class="pc1" data-state="" id="PAGES_CONTAINER">
<div style="left:0" id="PAGES_CONTAINERscreenWidthBackground" class="pc1screenWidthBackground">
</div>
<div style="position:relative" id="PAGES_CONTAINERcenteredContent" class="pc1centeredContent">
<div style="display:none" id="PAGES_CONTAINERbg" class="pc1bg">
</div>
<div style="position:relative" id="PAGES_CONTAINERinlineContent" class="pc1inlineContent">
<div style="width:100%">
<div data-ismobile="false" data-is-mesh-layout="true" style="height:100%;left:0;position:relative;top:;bottom:;right:" class="p1" id="mainPage">
<div style="margin-left:calc((100% - 980px) / 2);width:980px" id="mainPagebg" class="p1bg">
</div>
<div class="p1inlineContent" id="mainPageinlineContent">

    <div id="mainPageinlineContent-gridWrapper" data-mesh-internal="true">
<div id="mainPageinlineContent-gridContainer" data-mesh-internal="true">
<div data-packed="true" style="width: 835px; pointer-events: none;" class="txtNew" id="i8512m6k">
<h2 style="font-size:60px;" class="font_2">
<span style="font-family:play,sans-serif;">
<span style="font-weight:bold;">
<span style="font-size:60px;">
<span class="color_11">Quartamusic</span>
</span>
</span>
</span>
</h2>

<p style="font-size:60px;" class="font_8">
<span style="font-family:nimbus-sans-tw01con,sans-serif;">
<span style="font-weight:bold;">
<span style="font-size:60px;">
<span class="color_11">СТУДИЯ ЗВУКОЗАПИСИ</span>
</span>
</span>
</span>
</p>

<p style="font-size:60px;" class="font_8">&nbsp;</p>

<p style="font-size:60px;" class="font_8">&nbsp;</p>
</div>
<div tabindex="-1" role="region" aria-label="Home" style="left:0;margin-left:0;width:100%;min-width:initial;top:;bottom:;right:;height:20px;position:" class="AutoWidthAnchorSkin" id="ivzkb641">&nbsp;</div>
<div style="height: 525px; display: table; min-width: 10px; min-height: 10px; left: 0px; margin-left: 0px; width: 100%;" data-is-screen-width="true" class="style-jtc0m6lc" id="iwow70x0">



<!-- -----------------PICTURE------SLIDER---------------------------- -->

<div id="slider" class="sl-slider-wrapper">

                <div class="sl-slider">
                
                    <div class="sl-slide" data-orientation="horizontal" data-slice1-rotation="-25" data-slice2-rotation="-25" data-slice1-scale="2" data-slice2-scale="2">
                        <div class="sl-slide-inner">
                            <div class="bg-img bg-img-1"></div>
                            <!-- <h2>A bene placito.</h2>
                            <blockquote><p>You have just dined, and however scrupulously the slaughterhouse is concealed in the graceful distance of miles, there is complicity.</p><cite>Ralph Waldo Emerson</cite></blockquote> -->
                        </div>
                    </div>
                    
                    <div class="sl-slide" data-orientation="vertical" data-slice1-rotation="10" data-slice2-rotation="-15" data-slice1-scale="1.5" data-slice2-scale="1.5">
                        <div class="sl-slide-inner">
                            <div class="bg-img bg-img-2"></div>
                            <!-- <h2>Regula aurea.</h2>
                            <blockquote><p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p><cite>Albert Schweitzer</cite></blockquote> -->
                        </div>
                    </div>
                    
                    <div class="sl-slide" data-orientation="horizontal" data-slice1-rotation="3" data-slice2-rotation="3" data-slice1-scale="2" data-slice2-scale="1">
                        <div class="sl-slide-inner">
                            <div class="bg-img bg-img-3"></div>
                            <!-- <h2>Dum spiro, spero.</h2>
                            <blockquote><p>Thousands of people who say they 'love' animals sit down once or twice a day to enjoy the flesh of creatures who have been utterly deprived of everything that could make their lives worth living and who endured the awful suffering and the terror of the abattoirs.</p><cite>Dame Jane Morris Goodall</cite></blockquote> -->
                        </div>
                    </div>
                    
                    <div class="sl-slide" data-orientation="vertical" data-slice1-rotation="-5" data-slice2-rotation="25" data-slice1-scale="2" data-slice2-scale="1">
                        <div class="sl-slide-inner">
                            <div class="bg-img bg-img-4"></div>
                            <!-- <h2>Donna nobis pacem.</h2>
                            <blockquote><p>The human body has no more need for cows' milk than it does for dogs' milk, horses' milk, or giraffes' milk.</p><cite>Michael Klaper M.D.</cite></blockquote> -->
                        </div>
                    </div>
                    
                    <div class="sl-slide" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1">
                        <div class="sl-slide-inner">
                            <div class="bg-img bg-img-5"></div>
                            <!-- <h2>Acta Non Verba.</h2>
                            <blockquote><p>I think if you want to eat more meat you should kill it yourself and eat it raw so that you are not blinded by the hypocrisy of having it processed for you.</p><cite>Margi Clarke</cite></blockquote> -->
                        </div>
                    </div>

                    <div class="sl-slide" data-orientation="horizontal" data-slice1-rotation="-25" data-slice2-rotation="-25" data-slice1-scale="2" data-slice2-scale="2">
                        <div class="sl-slide-inner">
                            <div class="bg-img bg-img-6"></div>
                            <!-- <h2>A bene placito.</h2>
                            <blockquote><p>You have just dined, and however scrupulously the slaughterhouse is concealed in the graceful distance of miles, there is complicity.</p><cite>Ralph Waldo Emerson</cite></blockquote> -->
                        </div>
                    </div>
                    
                    <div class="sl-slide" data-orientation="vertical" data-slice1-rotation="10" data-slice2-rotation="-15" data-slice1-scale="1.5" data-slice2-scale="1.5">
                        <div class="sl-slide-inner">
                            <div class="bg-img bg-img-7"></div>
                            <!-- <h2>Regula aurea.</h2>
                            <blockquote><p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p><cite>Albert Schweitzer</cite></blockquote> -->
                        </div>
                    </div>
                    
                    <div class="sl-slide" data-orientation="horizontal" data-slice1-rotation="3" data-slice2-rotation="3" data-slice1-scale="2" data-slice2-scale="1">
                        <div class="sl-slide-inner">
                            <div class="bg-img bg-img-8"></div>
                            <!-- <h2>Dum spiro, spero.</h2>
                            <blockquote><p>Thousands of people who say they 'love' animals sit down once or twice a day to enjoy the flesh of creatures who have been utterly deprived of everything that could make their lives worth living and who endured the awful suffering and the terror of the abattoirs.</p><cite>Dame Jane Morris Goodall</cite></blockquote> -->
                        </div>
                    </div>
                    
                    <div class="sl-slide" data-orientation="vertical" data-slice1-rotation="-5" data-slice2-rotation="25" data-slice1-scale="2" data-slice2-scale="1">
                        <div class="sl-slide-inner">
                            <div class="bg-img bg-img-9"></div>
                            <!-- <h2>Donna nobis pacem.</h2>
                            <blockquote><p>The human body has no more need for cows' milk than it does for dogs' milk, horses' milk, or giraffes' milk.</p><cite>Michael Klaper M.D.</cite></blockquote> -->
                        </div>
                    </div>
                    
                    <div class="sl-slide" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1">
                        <div class="sl-slide-inner">
                            <div class="bg-img bg-img-10"></div>
                            <!-- <h2>Acta Non Verba.</h2>
                            <blockquote><p>I think if you want to eat more meat you should kill it yourself and eat it raw so that you are not blinded by the hypocrisy of having it processed for you.</p><cite>Margi Clarke</cite></blockquote> -->
                        </div>
                    </div>
                </div><!-- /sl-slider -->

                <nav id="nav-dots" class="nav-dots">
                    <span class="nav-dot-current"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </nav>

            </div><!-- /slider-wrapper -->

<script type="text/javascript" src="js/jquery.ba-cond.min.js"></script>
        <script type="text/javascript" src="js/jquery.slitslider.js"></script>
        <script type="text/javascript"> 
            $(function() {
            
                var Page = (function() {

                    var $nav = $( '#nav-dots > span' ),
                        slitslider = $( '#slider' ).slitslider( {
                            onBeforeChange : function( slide, pos ) {

                                $nav.removeClass( 'nav-dot-current' );
                                $nav.eq( pos ).addClass( 'nav-dot-current' );

                            }
                        } ),

                        init = function() {

                            initEvents();
                            
                        },
                        initEvents = function() {

                            $nav.each( function( i ) {
                            
                                $( this ).on( 'click', function( event ) {
                                    
                                    var $dot = $( this );
                                    
                                    if( !slitslider.isActive() ) {

                                        $nav.removeClass( 'nav-dot-current' );
                                        $dot.addClass( 'nav-dot-current' );
                                    
                                    }
                                    
                                    slitslider.jump( i + 1 );
                                    return false;
                                
                                } );
                                
                            } );

                        };

                        return { init : init };

                })();

                Page.init();

                /**
                 * Notes: 
                 * 
                 * example how to add items:
                 */

                /*
                
                var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');
                
                // call the plugin's add method
                ss.add($items);

                */
            
            });
        </script>



<h4 class="font_4" id="title" style="font-size:42px; text-align:center ; margin-top:20px;">
    <span style="font-weight:bold;">
    <span style="font-size:42px;">
    <span style="font-family:open sans condensed,sans-serif; text-align: center;">ЗАПИСАТЬ ПЕСНЮ В СТУДИИ ТЕПЕРЬ ЛЕГКО!</span>
    </span>
    </span>
    </h4>
<div style="text-align: center; margin-bottom: 20px;">
    <div style="border-radius: 10px; box-shadow: 0 0 6px rgba(0,0,0,.2); padding: 40px 60px; width: 750px; margin: 40px auto;">
        <p class="font_6">
                <cite style="font-weight: 550;">Не так важно, профессионал вы или любитель:<br>
                наши опытные специалисты помогут вам в записи,
                а после мы сможем скорректировать ваш вокал 
                с помощью современных технологий 
                редактирования звукозаписи.
                Главное — спеть от души.</cite><br><br>

                <span>СОЮЗ Голос предлагает вам исполнить и записать любую песню в профессиональных условиях с помощью самого современного звукозаписывающего оборудования.</span><br><br>
 
                <b>Мы поможем вам подобрать материал и найти любую фонограмму.</b>
        </p>
    </div>    
</div>
</div>

<div style="height: 299px; width: 1856px; left: -438px;" class="style-jtc0m6hn" id="i0o6opec">
<div data-align-type="center" data-fitting-type="legacy_strip_tile" data-type="bgimage" id="i0o6opecbg" class="style-jtc0m6hnbg" style="background-image: none;">
</div>
<div id="i0o6opecinlineContent" class="style-jtc0m6hninlineContent">
</div>

</div>
<div style="top:;bottom:;left:;right:;position:" class="c2" id="ivzlh2br">
<div id="ivzlh2brbg" class="c2bg">
</div>
<div class="c2inlineContent" id="ivzlh2brinlineContent" style="margin-top: 30px;">
    <h4 class="font_4" id="price-list" style="font-size:42px; text-align:center; margin-bottom: 20px;">
    <span style="font-weight:bold;">
    <span style="font-size:42px;">
    <span style="font-family:open sans condensed,sans-serif;">ВЫБЕРИ СВОЙ СИНГЛ</span>
    </span>
    </span>
    </h4>
<div class="f_container">
    <div class="f_block">

        <div class="f_text" >

        <div id="f_element1" class="f_element">
            <div>
                <b>Сингл "Хит"</b>
                <br><br>
                <p style="font-size: 18px;">Предоставляет запись одной песни в профессиональной студии.</p>
                <button id="btn1" class="button_more">Подробнее</button>
            </div>
            <div style="clear: both; margin-top: 150px; padding-bottom: 20px;">
                <b style="font-size: 20px;">Вы можете записать песню сами или подарить СЕРТИФИКАТ на запись Сингла другому человеку!</b>
                <button class="button_buy">КУПИТЬ</button>
            </div>
        </div>

        <div id="f_element1_more" class="f_element">
            <b>Сингл "Хит"</b>
            <p>В сингл входит:</p>
            <p>- Запись песни на готовый минус, студия предоставляет минусовку</p>
            <p>- Аренда студии</p>
            <p>- Чистка, тюнинг и монтаж вокала</p>
            <p>- Сведение</p>
            <p>- Мастеринг</p>
            <p>- Доп услуги:</p>
            <p>Фотосъемка во время записи, с последующей обработкой фотографий</p>
            <p>Видеосъемка во время записи, с последующим монтажом видеоклипа на песню</p>
            
            <button id="btn1_more" class="button_more">Скрыть</button> 
        </div>
        </div>

    </div>
    <div class="f_block">
        <div class="f_text">
            <div id="f_element2" class="f_element">
                <div>
                    <b>Сингл "Две звезды"</b>
                    <br><br>
                    <p style="font-size: 18px;">Предоставляет запись одной песни вдвоем в профессиональной студии.</p>
                    <button id="btn2" class="button_more">Подробнее</button>
                </div>
                <div style="clear: both; margin-top: 150px; padding-bottom: 20px;">
                    <b style="font-size: 20px;">Вы можете записать песню сами или подарить СЕРТИФИКАТ на запись Сингла другому человеку!</b>
                    <button class="button_buy">КУПИТЬ</button>
                </div>
            </div>
            <div id="f_element2_more" class="f_element">
                <b>Сингл "Две звезды"</b>
                <p>В сингл входит:</p>
                <p>- Запись песни на готовый минус, студия предоставляет минусовку</p>
                <p>- Аренда студии</p>
                <p>- Чистка, тюнинг и монтаж вокала</p>
                <p>- Сведение</p>
                <p>- Мастеринг</p>
                <p>- Доп услуги:</p>
                <p>Фотосъемка во время записи, с последующей обработкой фотографий</p>
                <p>Видеосъемка во время записи, с последующим монтажом видеоклипа на песню</p>
                <button id="btn2_more" class="button_more">Скрыть</button> 
            </div>
            
             
        </div>
        
    </div>
    <div class="f_block">
        <div class="f_text">
            <div id="f_element3" class="f_element">
                <div>
                    <b>Сингл "Корпоратив"</b>
                    <br><br>
                    <p style="font-size: 18px;">Предоставляет запись одной песни трех и более человек в профессиональной студии.</p>
                    <button id="btn3" class="button_more">Подробнее</button>
                </div>
                <div style="clear: both; margin-top: 130px; padding-bottom: 20px;">
                    <b style="font-size: 20px;">Вы можете записать песню сами или подарить СЕРТИФИКАТ на запись Сингла другому человеку!</b>
                    <button class="button_buy">КУПИТЬ</button>
                </div>
            </div>
            <div id="f_element3_more" class="f_element">
                <b>Сингл "Корпоратив"</b>
                <p>В сингл входит:</p>
                <p>- Запись песни на готовый минус, студия предоставляет минусовку</p>
                <p>- Аренда студии</p>
                <p>- Чистка, тюнинг и монтаж вокала</p>
                <p>- Сведение</p>
                <p>- Мастеринг</p>
                <p>- Доп услуги:</p>
                <p>Фотосъемка во время записи, с последующей обработкой фотографий</p>
                <p>Видеосъемка во время записи, с последующим монтажом видеоклипа на песню</p>
                <button id="btn3_more" class="button_more">Скрыть</button> 
            </div>
            
             
        </div>
    </div>
    <div class="f_block">
        <div class="f_text">
            <div id="f_element4" class="f_element">
                <div>
                    <b>Сингл "Профессионал"</b>
                    <br><br>
                    <p style="font-size: 18px;">Предоставляет запись одной песни в профессиональной студии.</p>
                    <button id="btn4" class="button_more">Подробнее</button>
                </div>
                <div style="clear: both; margin-top: 150px; padding-bottom: 20px;">
                    <b style="font-size: 20px;">Вы можете записать песню сами или подарить СЕРТИФИКАТ на запись Сингла другому человеку!</b>
                    <button class="button_buy">КУПИТЬ</button>
                </div>
            </div>
            <div id="f_element4_more" class="f_element">
                <b>Сингл "Профессионал"</b>
                <p>В сингл входит:</p>
                <p>- Запись песни на готовый минус, студия предоставляет минусовку</p>
                <p>- Аренда студии</p>
                <p>- Продюсер по вокалу во время записи песни</p>
                <p>- Запись бэк вокала профессиональными вокалистами</p>
                <p>- Чистка, тюнинг и монтаж вокала</p>
                <p>- Сведение</p>
                <p>- Мастеринг</p>
                <p>- Доп услуги:</p>
                <p>Фотосъемка во время записи, с последующей обработкой фотографий</p>
                <p>Видеосъемка во время записи, с последующим монтажом видеоклипа на песню</p>
                <button id="btn4_more" class="button_more">Скрыть</button> 
            </div>
            
             
        </div>
    </div>

    <script type="text/javascript">
            $(document).ready(function () {
               $("#f_element1_more").hide();
                    $("#btn1").click(function () {
                        $("#f_element1").hide();
                        $("#f_element1_more").show()
                    });
                  $("#btn1_more").click(function () {
                        $("#f_element1_more").hide();
                        $("#f_element1").show()
                });
             });
             $(document).ready(function () {
               $("#f_element2_more").hide();
                    $("#btn2").click(function () {
                        $("#f_element2").hide();
                        $("#f_element2_more").show()
                    });
                  $("#btn2_more").click(function () {
                        $("#f_element2_more").hide();
                        $("#f_element2").show()
                });
             });
             $(document).ready(function () {
               $("#f_element3_more").hide();
                    $("#btn3").click(function () {
                        $("#f_element3").hide();
                        $("#f_element3_more").show()
                    });
                  $("#btn3_more").click(function () {
                        $("#f_element3_more").hide();
                        $("#f_element3").show()
                });
             });
             $(document).ready(function () {
               $("#f_element4_more").hide();
                    $("#btn4").click(function () {
                        $("#f_element4").hide();
                        $("#f_element4_more").show()
                    });
                  $("#btn4_more").click(function () {
                        $("#f_element4_more").hide();
                        $("#f_element4").show()
                });
             });
    </script>
</div> 
    <div id="ivzlh2brinlineContent-gridWrapper" data-mesh-internal="true">
<div id="ivzlh2brinlineContent-gridContainer" data-mesh-internal="true">
<!-- <div data-svg-id="8c499b57756f467797db93a89b4c36ce.svg" data-svg-type="shape" data-display-mode="legacyFit" data-strokewidth="0" data-viewbox="0 0 125.5 160" data-preserve-viewbox="ignore" style="width: 130px; height: 130px;" class="style-jtc0m6f3" id="i852wj11">
<div id="i852wj11link" class="style-jtc0m6f3link">
<div style="stroke-width:0;fill-opacity:0.76;stroke:rgba(255, 255, 255, 1);stroke-opacity:1;fill:rgba(0, 0, 0, 1)" class="style-jtc0m6f3_i852wj11 style-jtc0m6f3_non-scaling-stroke style-jtc0m6f3svg" id="i852wj11svg">
<svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 125.5 160" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.5 160" role="img">
    <g>
        <path d="M100.1 95.6c10.5-10.1 17-24.3 17-40C117.2 24.9 92.2 0 61.6 0S6 24.9 6 55.6C6 72 13.2 86.8 24.6 97L0 139.6l23.4 1.3 13.4 19 25.9-46.6 26 46.7 13.4-19 23.4-1.3-25.4-44.1zm-66.7 40.8l-3.9-6-8 .2 14-26c4.1 2.2 8.6 3.9 13.3 5l-15.4 26.8zm28.2-32.2C34.8 104.2 13 82.4 13 55.6S34.8 6.9 61.6 6.9s48.6 21.8 48.6 48.6c0 26.9-21.8 48.7-48.6 48.7zM96 130.3l-3.9 6-15.7-27.2c4.6-1.3 9-3.1 13.1-5.5l14.5 27-8-.3zM61.6 13.9c-23 0-41.7 18.7-41.7 41.7s18.7 41.7 41.7 41.7 41.7-18.7 41.7-41.7-18.7-41.7-41.7-41.7zm22.7 36.8L78.9 56c-2.2 2.1-3.6 6.3-3 9.4l1.3 7.4c.5 3-1.3 4.3-4 2.9l-6.7-3.5c-2.7-1.4-7.1-1.4-9.8 0L50 75.6c-2.7 1.4-4.5.1-4-2.9l1.3-7.4c.5-3-.9-7.2-3-9.4l-5.4-5.3c-2.2-2.1-1.5-4.2 1.5-4.7l7.5-1.1c3-.4 6.6-3 8-5.8l3.3-6.8c1.4-2.7 3.6-2.7 4.9 0l3.3 6.8c1.4 2.7 4.9 5.3 8 5.8l7.5 1.1c2.9.5 3.6 2.6 1.4 4.8z">
</path>
    </g>
</svg>
</div>
</div>
</div> -->
<!-- <div style="width: 112px; height: 112px;" title="" data-is-responsive="false" data-display-mode="full" data-content-padding-horizontal="0" data-content-padding-vertical="0" data-exact-height="112" class="ca1" id="Clprt1-vor">
<div style="width: 112px; height: 112px;" id="Clprt1-vorlink" class="ca1link">
<wix-image style="width:112px;height:112px;top:0;left:0" data-has-bg-scroll-effect="" data-image-info="{&quot;imageData&quot;:{&quot;type&quot;:&quot;Image&quot;,&quot;id&quot;:&quot;c19mt&quot;,&quot;metaData&quot;:{&quot;pageId&quot;:&quot;mainPage&quot;,&quot;isPreset&quot;:false,&quot;schemaVersion&quot;:&quot;2.0&quot;,&quot;isHidden&quot;:false},&quot;title&quot;:&quot;&quot;,&quot;uri&quot;:&quot;84770f_d177278414264494b9d827d654ae4dbf.png&quot;,&quot;description&quot;:&quot;&quot;,&quot;width&quot;:54,&quot;height&quot;:72,&quot;alt&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;full&quot;},&quot;containerId&quot;:&quot;Clprt1-vor&quot;,&quot;displayMode&quot;:&quot;full&quot;}" id="Clprt1-vorimg" class="ca1img" data-src="https://static.wixstatic.com/media/84770f_d177278414264494b9d827d654ae4dbf.png/v1/fill/w_76,h_101,al_c,lg_1/84770f_d177278414264494b9d827d654ae4dbf.png" data-is-svg="false">
<img id="Clprt1-vorimgimage" style="object-position:50% 50%;width:112px;height:112px;object-fit:contain" alt="" data-type="image" itemprop="image" src="Studio_voice/84770f_d177278414264494b9d827d654ae4dbf.png">
</wix-image>
</div>
</div> -->
<!-- <div style="width: 82px; height: 82px;" title="" data-is-responsive="false" data-display-mode="full" data-content-padding-horizontal="0" data-content-padding-vertical="0" data-exact-height="82" class="ca1" id="i852rwes">
<div style="width: 82px; height: 82px;" id="i852rweslink" class="ca1link">
<wix-image style="width:82px;height:82px;top:0;left:0" data-has-bg-scroll-effect="" data-image-info="{&quot;imageData&quot;:{&quot;type&quot;:&quot;Image&quot;,&quot;id&quot;:&quot;c1xih&quot;,&quot;metaData&quot;:{&quot;pageId&quot;:&quot;mainPage&quot;,&quot;isPreset&quot;:false,&quot;schemaVersion&quot;:&quot;2.0&quot;,&quot;isHidden&quot;:false},&quot;title&quot;:&quot;&quot;,&quot;uri&quot;:&quot;31b50e7b811ffb7116a7b27d34e42ec0.png&quot;,&quot;description&quot;:&quot;&quot;,&quot;width&quot;:200,&quot;height&quot;:200,&quot;alt&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;full&quot;},&quot;containerId&quot;:&quot;i852rwes&quot;,&quot;displayMode&quot;:&quot;full&quot;}" id="i852rwesimg" class="ca1img" data-src="https://static.wixstatic.com/media/31b50e7b811ffb7116a7b27d34e42ec0.png/v1/fill/w_82,h_82,al_c,usm_0.66_1.00_0.01/31b50e7b811ffb7116a7b27d34e42ec0.png" data-is-svg="false">
<img id="i852rwesimgimage" style="object-position:50% 50%;width:82px;height:82px;object-fit:contain" alt="" data-type="image" itemprop="image" src="Studio_voice/31b50e7b811ffb7116a7b27d34e42ec0.png">
</wix-image>
</div>
</div> -->
<!-- <div data-svg-id="8463f60718194af748c49dddbe45b668_svgshape.v1.HollowCircle.svg" data-svg-type="shape" data-display-mode="legacyFit" data-strokewidth="4" data-viewbox="0 0 200 200" data-preserve-viewbox="ignore" style="width: 126px; height: 126px; visibility: inherit;" class="style-jtc0m6f3" id="i8524z6m">
<div id="i8524z6mlink" class="style-jtc0m6f3link">
<div style="stroke-width:4;fill-opacity:0;stroke:rgba(0, 0, 0, 1);stroke-opacity:1;fill:rgba(255, 255, 255, 1)" class="style-jtc0m6f3_i8524z6m style-jtc0m6f3_non-scaling-stroke style-jtc0m6f3svg" id="i8524z6msvg">
<svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-3.278688524590166 -3.278688524590166 206.55737704918033 206.55737704918033" role="img">
    <g>
        <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z">
</path>
    </g>
</svg>
</div>
</div>
</div> -->
<!-- <div style="width: 137px; height: 92px;" title="" data-is-responsive="false" data-display-mode="full" data-content-padding-horizontal="0" data-content-padding-vertical="0" data-exact-height="92" class="ca1" id="Clprt0-rbh">
<div style="width: 137px; height: 92px;" id="Clprt0-rbhlink" class="ca1link">
<wix-image style="width:137px;height:92px;top:0;left:0" data-has-bg-scroll-effect="" data-image-info="{&quot;imageData&quot;:{&quot;type&quot;:&quot;Image&quot;,&quot;id&quot;:&quot;calc&quot;,&quot;metaData&quot;:{&quot;pageId&quot;:&quot;mainPage&quot;,&quot;isPreset&quot;:true,&quot;schemaVersion&quot;:&quot;2.0&quot;,&quot;isHidden&quot;:false},&quot;title&quot;:&quot;&quot;,&quot;uri&quot;:&quot;84770f_97be20c85471454d8e25c3b0bae2ad13.png&quot;,&quot;description&quot;:&quot;&quot;,&quot;width&quot;:82,&quot;height&quot;:61,&quot;alt&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;full&quot;},&quot;containerId&quot;:&quot;Clprt0-rbh&quot;,&quot;displayMode&quot;:&quot;full&quot;}" id="Clprt0-rbhimg" class="ca1img" data-src="https://static.wixstatic.com/media/84770f_97be20c85471454d8e25c3b0bae2ad13.png/v1/fill/w_115,h_85,al_c,lg_1/84770f_97be20c85471454d8e25c3b0bae2ad13.png" data-is-svg="false">
<img id="Clprt0-rbhimgimage" style="object-position:50% 50%;width:137px;height:92px;object-fit:contain" alt="" data-type="image" itemprop="image" src="Studio_voice/84770f_97be20c85471454d8e25c3b0bae2ad13.png">
</wix-image>
</div>
</div> -->
<!-- <div data-svg-id="8463f60718194af748c49dddbe45b668_svgshape.v1.HollowCircle.svg" data-svg-type="shape" data-display-mode="legacyFit" data-strokewidth="4" data-viewbox="0 0 200 200" data-preserve-viewbox="ignore" style="width: 126px; height: 126px; visibility: inherit;" class="style-jtc0m6f3" id="comp-k06tlcc6">
<div id="comp-k06tlcc6link" class="style-jtc0m6f3link">
<div style="stroke-width:4;fill-opacity:0;stroke:rgba(0, 0, 0, 1);stroke-opacity:1;fill:rgba(255, 255, 255, 1)" class="style-jtc0m6f3_comp-k06tlcc6 style-jtc0m6f3_non-scaling-stroke style-jtc0m6f3svg" id="comp-k06tlcc6svg">
<svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-3.278688524590166 -3.278688524590166 206.55737704918033 206.55737704918033" role="img">
    <g>
        <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z">
</path>
    </g>
</svg>
</div>
</div>
</div> -->
<!-- <div data-svg-id="16c9b1bb60694743b04cea7d12bce024.svg" data-svg-type="color" data-display-mode="fit" data-viewbox="0 0 200 200" data-preserve-viewbox="ignore" style="top:;bottom:;left:;right:;width:64px;height:65px;position:" class="style-k06tmukt1" id="comp-k06tmucw">
<div id="comp-k06tmucwlink" class="style-k06tmukt1link">
<div style="opacity:1" class="style-k06tmukt1_comp-k06tmucw style-k06tmukt1_non-scaling-stroke style-k06tmukt1svg" id="comp-k06tmucwsvg">
<svg preserveAspectRatio="xMidYMid meet" data-bbox="42.5 42 115 116" viewBox="42.5 42 115 116" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img">
    <g>
        <path d="M101.8 77.3H97c-2.6 0-4.7 2.2-4.7 4.9v11.6c0 2.7 2.1 4.9 4.7 4.9h4.8c7.8 0 11.7-3.6 11.7-10.7 0-3.5-.9-6.2-2.7-8-1.8-1.8-4.8-2.7-9-2.7z" fill="#2a222e" data-color="1">
</path>
        <path d="M148.9 42H51.1c-4.8 0-8.6 4-8.6 9v98c0 5 3.9 9 8.6 9h97.8c4.8 0 8.6-4 8.6-9V51c0-5-3.9-9-8.6-9zm-28 62c-4.1 4-10 5.9-17.7 5.9H97c-2.6 0-4.7 2.2-4.7 4.9v16c0 2.7-2.1 4.9-4.7 4.9h-3.9c-2.6 0-4.7-2.2-4.7-4.9V70.9c0-2.7 2.1-4.9 4.7-4.9h19.6c7.9 0 13.8 2 17.8 5.9 4 4 6 9.3 6 16.1 0 6.7-2.1 12-6.2 16z" fill="#2a222e" data-color="1">
</path>
    </g>
</svg>
</div>
</div>
</div> -->
<!-- <div data-packed="true" style="width: 161px; pointer-events: none;" class="txtNew" id="WRchTxt3-dec">
<p style="text-align:center; font-size:18px;" class="font_7">
<span style="font-size:18px;">
<span style="font-family:open sans condensed,sans-serif;">Высокое качество</span>
</span>
</p>

<p style="text-align:center;" class="font_7">&nbsp;</p>
</div>
<div data-packed="true" style="width: 148px; pointer-events: none;" class="txtNew" id="WRchTxt1-efs">
<p style="text-align:center; font-size:18px;" class="font_7">
<span style="font-size:18px;">
<span style="font-family:open sans condensed,sans-serif;">Уютная атмосфера</span>
</span>
</p>
</div>
<div data-packed="true" style="width: 164px; pointer-events: none;" class="txtNew" id="WRchTxt2-1azv">
<p style="text-align:center; font-size:18px;" class="font_7">
<span style="font-size:18px;">
<span style="font-family:open sans condensed,sans-serif;">Дружелюбный</span>
</span>
</p>

<p style="text-align:center; font-size:18px;" class="font_7">
<span style="font-size:18px;">
<span style="font-family:open sans condensed,sans-serif;">коллектив</span>
</span>
</p>

<p style="text-align:center;" class="font_7">&nbsp;</p>
</div>
<div data-packed="true" style="width: 167px; pointer-events: none;" class="txtNew" id="WRchTxt0-yxh">
<p style="text-align:center; font-size:18px;" class="font_7">
<span style="font-size:18px;">
<span style="font-family:open sans condensed,sans-serif;">WiFi сеть</span>
</span>
</p>
</div>
<div data-packed="true" style="width: 167px; pointer-events: none;" class="txtNew" id="comp-k06to3i0">
<p class="font_7" style="font-size:18px; text-align:center;">
<span style="font-size:18px;">
<span style="font-family:open sans condensed,sans-serif;">Парковка</span>
</span>
</p>
</div> -->



<!-- <div data-packed="false" style="width: 800px; min-height: 159px; pointer-events: none;" data-min-height="159" class="txtNew" id="i16f3r4t">

   

<h4 class="font_4" id="price-list" style="font-size:42px; text-align:center; margin-bottom: 20px;">
<span style="font-weight:bold;">
<span style="font-size:42px;">
<span style="font-family:open sans condensed,sans-serif;">УСЛУГИ</span>
</span>
</span>
</h4>


<h4 class="font_4" style="font-size:24px; text-align:center;">
<span style="font-size:24px;">
        <table style="font-family:play,sans-serif;" widith="100%" cellspacing="0" cellpadding="0" margin="0" align="center" >
            <tbody>
            <tr>
            <td align="left">Студия А (без работы звукорежиссёра)</td>
            <td style="text-align: right;" valign="top">&nbsp; 1 500 руб./час</td>
            </tr>
            <tr>
            <td align="left">Студия В&nbsp;(без работы звукорежиссёра)</td>
            <td style="text-align: right;" valign="top">&nbsp; &nbsp;1 000 руб./час</td>
            </tr>
            <tr>
            <td align="left">Студия С&nbsp;(без работы звукорежиссёра)</td>
            <td style="text-align: right;" valign="top">&nbsp; &nbsp;750 руб./час</td>
            </tr>
            <tr>
            <td align="left">Работа звукорежиссёра</td>
            <td style="text-align: right;" valign="top">&nbsp;1 000 руб./час</td>
            </tr>
            <tr>
            <td align="left">Аранжировка</td>
            <td style="text-align: right;" valign="top">&nbsp;от 25 000 руб.</td>
            </tr>
            <tr>
            <td align="left">Сведение</td>
            <td style="text-align: right;" valign="top">&nbsp;от 15 000 руб./песня</td>
            </tr>
            <tr>
            <td align="left">Песня под ключ(запись,редакция,сведение)</td>
            <td style="text-align: right;" valign="top">&nbsp;от 50 000 руб.</td>
            </tr>
            <tr>
            <td align="left">Написание песен</td>
            <td style="text-align: right;" valign="top">&nbsp;от 20 000 руб.</td>
            </tr>
            <tr>
            <td align="left">Написание текстов</td>
            <td style="text-align: right;" valign="top">&nbsp;от 10 000 руб.</td>
            </tr>
            <tr>
            <td align="left">Редакция треков</td>
            <td style="text-align: right;" valign="top">&nbsp;от 2 000 руб./за 1 песню</td>
            </tr>
            <tr>
            <td align="left">Съёмка в студии</td>
            <td style="text-align: right;" valign="top">&nbsp;3 000 руб./час</td>
            </tr>
            <tr>
            <td align="left">Запись песни на минус</td>
            <td style="text-align: right;" valign="top">&nbsp;6 500 руб./песня</td>
            </tr>
            <tr>
            <td valign="top"></td>
            <td style="text-align: right;" valign="top"></td>
            </tr>
            <tr>
            <td align="left">Выпуск песни в популярных сборниках</td>
            <td style="text-align: right;" valign="top">&nbsp;договорная</td>
            </tr>
            <tr>
            <td align="left">Выпуск альбома</td>
            <td style="text-align: right;" valign="top">&nbsp;договорная</td>
            </tr>
            </tbody>
            </table>
</span>
</h4>


</span>
</h4>
</div> -->
</div>
</div>
</div>

</div>

<div class="style-jtc0m6kh" id="i1ahe98y">



<div class="style-jtc0m6kh_left style-jtc0m6kh_shd">
</div>
<div class="style-jtc0m6kh_right style-jtc0m6kh_shd">
</div>
<div id="i1ahe98ybg" class="style-jtc0m6khbg">
</div>
<div class="style-jtc0m6khinlineContent" id="i1ahe98yinlineContent">
<div id="i1ahe98yinlineContent-gridWrapper" data-mesh-internal="true">
<div id="i1ahe98yinlineContent-gridContainer" data-mesh-internal="true">
<div data-packed="true" style="width: 580px; pointer-events: none;" class="txtNew" id="i1ah7ivh">
<h2 style="font-size:34px; text-align:justify;" class="font_2">
<span style="font-size:34px;">
<span style="font-family:open sans condensed,sans-serif;">Заказывая у нас песню “СИНГЛ” <button style="margin: 0;" class="button_buy">ЗАКАЗАТЬ</button>, вы получаете полный спектр услуг, которые включают в себя:</span>
</span>
</h2>
</div>
</div>
</div>
</div>
</div>
<div style="top:;bottom:;left:;right:;position:" class="c2" id="ivzlixma">
<div id="ivzlixmabg" class="c2bg">
</div>
<div class="c2inlineContent" id="ivzlixmainlineContent">

    <div id="ivzlixmainlineContent-gridWrapper" data-mesh-internal="true">
<div id="ivzlixmainlineContent-gridContainer" data-mesh-internal="true">
<div data-svg-id="8463f60718194af748c49dddbe45b668_svgshape.v1.HollowCircle.svg" data-svg-type="shape" data-display-mode="legacyFit" data-strokewidth="4" data-viewbox="0 0 200 200" data-preserve-viewbox="ignore" style="top:;bottom:;left:;right:;width:179px;height:243px;position:" class="style-jtc0m6f3" id="ilcui5h1_0">
<div id="ilcui5h1_0link" class="style-jtc0m6f3link">
<div style="stroke-width:4;fill-opacity:0.5;stroke:rgba(0, 0, 0, 1);stroke-opacity:1;fill:rgba(255, 255, 255, 1)" class="style-jtc0m6f3_ilcui5h1_0 style-jtc0m6f3_non-scaling-stroke style-jtc0m6f3svg" id="ilcui5h1_0svg">
<svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-2.285714285714292 -38.85714285714286 204.57142857142858 277.7142857142857" role="img">
    <g>
        <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z">
</path>
    </g>
</svg>
</div>
</div>
</div>
<div data-packed="true" style="width: 131px; pointer-events: none;" class="txtNew" id="ilcui5h1">
<h2 style="font-size:18px; text-align:center;" class="font_2">
<font face="helvetica-w01-light, helvetica-w02-light, sans-serif">Аренду студии без ограничения по времени!</font>
</h2>
</div>
<div data-svg-id="8463f60718194af748c49dddbe45b668_svgshape.v1.HollowCircle.svg" data-svg-type="shape" data-display-mode="legacyFit" data-strokewidth="4" data-viewbox="0 0 200 200" data-preserve-viewbox="ignore" style="top:;bottom:;left:;right:;width:179px;height:243px;position:" class="style-jtc0m6f3" id="ilcul4y4">
<div id="ilcul4y4link" class="style-jtc0m6f3link">
<div style="stroke-width:4;fill-opacity:0.5;stroke:rgba(0, 0, 0, 1);stroke-opacity:1;fill:rgba(255, 255, 255, 1)" class="style-jtc0m6f3_ilcul4y4 style-jtc0m6f3_non-scaling-stroke style-jtc0m6f3svg" id="ilcul4y4svg">
<svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-2.285714285714292 -38.85714285714286 204.57142857142858 277.7142857142857" role="img">
    <g>
        <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z">
</path>
    </g>
</svg>
</div>
</div>
</div>
<div data-packed="true" style="width: 168px; pointer-events: none;" class="txtNew" id="ilculd7u">
<p style="font-size:18px; text-align:center;" class="font_8">
<span style="font-size:18px;">Работу звукорежиссера</span>
</p>
</div>
<div data-svg-id="8463f60718194af748c49dddbe45b668_svgshape.v1.HollowCircle.svg" data-svg-type="shape" data-display-mode="legacyFit" data-strokewidth="4" data-viewbox="0 0 200 200" data-preserve-viewbox="ignore" style="top:;bottom:;left:;right:;width:179px;height:243px;position:" class="style-jtc0m6f3" id="ilcum5v6">
<div id="ilcum5v6link" class="style-jtc0m6f3link">
<div style="stroke-width:4;fill-opacity:0.5;stroke:rgba(0, 0, 0, 1);stroke-opacity:1;fill:rgba(255, 255, 255, 1)" class="style-jtc0m6f3_ilcum5v6 style-jtc0m6f3_non-scaling-stroke style-jtc0m6f3svg" id="ilcum5v6svg">
<svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-2.285714285714292 -38.85714285714286 204.57142857142858 277.7142857142857" role="img">
    <g>
        <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z">
</path>
    </g>
</svg>
</div>
</div>
</div>
<div data-packed="true" style="width: 168px; pointer-events: none;" class="txtNew" id="ilcumior">
<p style="font-size:18px; text-align:center;" class="font_8">Работу продюсера по вокалу</p>
</div>
<div data-svg-id="8463f60718194af748c49dddbe45b668_svgshape.v1.HollowCircle.svg" data-svg-type="shape" data-display-mode="legacyFit" data-strokewidth="4" data-viewbox="0 0 200 200" data-preserve-viewbox="ignore" style="top:;bottom:;left:;right:;width:179px;height:243px;position:" class="style-jtc0m6f3" id="ilcum7uf">
<div id="ilcum7uflink" class="style-jtc0m6f3link">
<div style="stroke-width:4;fill-opacity:0.5;stroke:rgba(0, 0, 0, 1);stroke-opacity:1;fill:rgba(255, 255, 255, 1)" class="style-jtc0m6f3_ilcum7uf style-jtc0m6f3_non-scaling-stroke style-jtc0m6f3svg" id="ilcum7ufsvg">
<svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-2.285714285714292 -38.85714285714286 204.57142857142858 277.7142857142857" role="img">
    <g>
        <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z">
</path>
    </g>
</svg>
</div>
</div>
</div>
<div data-packed="true" style="width: 168px; pointer-events: none;" class="txtNew" id="ilcunel6">
<p style="font-size:18px; text-align:center;" class="font_8">Запись вокала</p>
</div>
<div data-svg-id="8463f60718194af748c49dddbe45b668_svgshape.v1.HollowCircle.svg" data-svg-type="shape" data-display-mode="legacyFit" data-strokewidth="4" data-viewbox="0 0 200 200" data-preserve-viewbox="ignore" style="top:;bottom:;left:;right:;width:179px;height:243px;position:" class="style-jtc0m6f3" id="ilcv6ia50">
<div id="ilcv6ia5link" class="style-jtc0m6f3link">
<div style="stroke-width:4;fill-opacity:0.5;stroke:rgba(0, 0, 0, 1);stroke-opacity:1;fill:rgba(255, 255, 255, 1)" class="style-jtc0m6f3_ilcv6ia5 style-jtc0m6f3_non-scaling-stroke style-jtc0m6f3svg" id="ilcv6ia5svg">
<svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-2.285714285714292 -38.85714285714286 204.57142857142858 277.7142857142857" role="img">
    <g>
        <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z">
</path>
    </g>
</svg>
</div>
</div>
</div>
<div data-packed="true" style="width: 168px; pointer-events: none;" class="txtNew" id="ilcupd490">
<p style="font-size:18px; text-align:center;" class="font_8">
<span style="font-size:18px;">Тюнинг вокала. Исправление фальшивых нот</span>
</p>
</div>
<div data-svg-id="8463f60718194af748c49dddbe45b668_svgshape.v1.HollowCircle.svg" data-svg-type="shape" data-display-mode="legacyFit" data-strokewidth="4" data-viewbox="0 0 200 200" data-preserve-viewbox="ignore" style="top:;bottom:;left:;right:;width:179px;height:243px;position:" class="style-jtc0m6f3" id="ilcv6ia5">
<div id="ilcv6ia5link" class="style-jtc0m6f3link">
<div style="stroke-width:4;fill-opacity:0.5;stroke:rgba(0, 0, 0, 1);stroke-opacity:1;fill:rgba(255, 255, 255, 1)" class="style-jtc0m6f3_ilcv6ia5 style-jtc0m6f3_non-scaling-stroke style-jtc0m6f3svg" id="ilcv6ia5svg">
<svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-2.285714285714292 -38.85714285714286 204.57142857142858 277.7142857142857" role="img">
    <g>
        <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z">
</path>
    </g>
</svg>
</div>
</div>
</div>
<div data-packed="true" style="width: 168px; pointer-events: none;" class="txtNew" id="ilcupd49">
<p style="font-size:18px; text-align:center;" class="font_8">
<span style="font-size:18px;">Мастеринг</span>
</p>
</div>
<div data-svg-id="8463f60718194af748c49dddbe45b668_svgshape.v1.HollowCircle.svg" data-svg-type="shape" data-display-mode="legacyFit" data-strokewidth="4" data-viewbox="0 0 200 200" data-preserve-viewbox="ignore" style="top:;bottom:;left:;right:;width:179px;height:243px;position:" class="style-jtc0m6f3" id="ilcv6hlr">
<div id="ilcv6hlrlink" class="style-jtc0m6f3link">
<div style="stroke-width:4;fill-opacity:0.5;stroke:rgba(0, 0, 0, 1);stroke-opacity:1;fill:rgba(255, 255, 255, 1)" class="style-jtc0m6f3_ilcv6hlr style-jtc0m6f3_non-scaling-stroke style-jtc0m6f3svg" id="ilcv6hlrsvg">
<svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-2.285714285714292 -38.85714285714286 204.57142857142858 277.7142857142857" role="img">
    <g>
        <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z">
</path>
    </g>
</svg>
</div>
</div>
</div>
<div data-packed="true" style="width: 168px; pointer-events: none;" class="txtNew" id="ilcuvci1">
<p style="font-size:17px; text-align:center;" class="font_8">
<span style="font-size:17px;">Больше никаких финансовых затрат! </span>
</p>
<br>
<p style="font-size:17px; text-align:center;" class="font_8">
<span style="font-size:17px;">Вы получаете готовый продукт!</span>
</p>
</div>
<div data-svg-id="8463f60718194af748c49dddbe45b668_svgshape.v1.HollowCircle.svg" data-svg-type="shape" data-display-mode="legacyFit" data-strokewidth="4" data-viewbox="0 0 200 200" data-preserve-viewbox="ignore" style="top:;bottom:;left:;right:;width:179px;height:243px;position:" class="style-jtc0m6f3" id="ilcun8lk">
<div id="ilcun8lklink" class="style-jtc0m6f3link">
<div style="stroke-width:4;fill-opacity:0.5;stroke:rgba(0, 0, 0, 1);stroke-opacity:1;fill:rgba(255, 255, 255, 1)" class="style-jtc0m6f3_ilcun8lk style-jtc0m6f3_non-scaling-stroke style-jtc0m6f3svg" id="ilcun8lksvg">
<svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-2.285714285714292 -38.85714285714286 204.57142857142858 277.7142857142857" role="img">
    <g>
        <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z">
</path>
    </g>
</svg>
</div>
</div>
</div>
<div data-packed="true" style="width: 168px; pointer-events: none;" class="txtNew" id="ilcuobm8">
<p style="font-size:18px; text-align:center;" class="font_8">
<span style="font-size:18px;">Сведение с фонограммой</span>
</p>
</div>
</div>
</div>
</div>
</div>
<div style="transform-origin:center center;top:;bottom:;left:;right:;width:965px;height:29px;position:" class="hl2" id="i1ah4z3q">
<div id="i1ah4z3qcont" class="hl2cont">
<div id="i1ah4z3qline" class="hl2line">
</div>
</div>
</div>
<div style="top:;bottom:;left:;right:;position:" class="c2" id="ivzln83v">
<div id="ivzln83vbg" class="c2bg">
</div>
<div class="c2inlineContent" id="ivzln83vinlineContent" style="margin-top: 20px;">

    <div id="ivzln83vinlineContent-gridWrapper" data-mesh-internal="true">
        <div id="ivzln83vinlineContent-gridContainer" data-mesh-internal="true">
            <div data-packed="true" style="width: 504px; pointer-events: none;" class="txtNew" id="iqauqbfn">
<p style="font-size:36px; margin-top: 20px;" class="font_8">
<span style="font-weight:bold;">
<span style="font-size:36px;">О нас СОЮЗ Голос</span>
</span>
</p>
</div>
<div data-packed="true" style="width: 912px; pointer-events: none;" class="txtNew" id="iqavdicp">
<div>
<p class="font_8">
<span style="font-family:play,sans-serif;">
<span style="font-size:24px; text-align:justify;">СОЮЗ Голос – это звукозаписывающий комплекс с прекрасными акустическими характеристиками, оборудованием самого высокого класса и дружной командой профессионалов.</span>

</span>
</p>
</div>
<div>
<p class="font_8">
<span style="font-family:play,sans-serif;">
<span style="font-size:24px; text-align:justify;">Студия работает с компаниями, продюсерами и артистами разных музыкальных направлений и жанров.</span>

</span>
</p>
</div>
<div>
<p class="font_8">
<span style="font-family:play,sans-serif;">
<span style="font-size:24px; text-align:justify;">Записи, созданные на студии звучат на радио и ТВ. Многие песни сделаны для видео клипов.</span>

</span>
</p>
</div>
</div>
<div data-packed="true" style="width: 912px; pointer-events: none;" class="txtNew" id="iqausgih">
<h2 style="font-size:24px; text-align:justify;" class="font_8">
<span style="font-size:24px;">
<span style="font-family:play,sans-serif;">
<div id="component-2">
    <p>СОЮЗ Голос одна из самых оснащённых студий страны. В нашем парке микрофонов 3хTelefunken ELA-M 251 в которые поют Элтон Джон, Стиви Уандер, Кристина Агилера, Марай Керри и многие другие мировые звёзды, Neumann 149, винтажные Neumann 87, стерео микрофоны Neumann SM2 и Neumann SM69 F.E.T.</p>
    <p style="font-size:"><b>Мы предлагаем полный спектр услуг по работе со звуком как для профессиональных, так и для начинающих музыкантов и артистов.</b></p>
    <p style="text-align: justify;">Услугами наших специалистов пользуются такие артисты, как Сергей Лазарев, Тимати и Blackstar Inc., Geegun, DJ Smash, «Гости из будущего», Н. Кочеткова, Кнара, А. Зацепин, К. Кокс (ВИА Сливки), Григорий Лепс, Анна Седокова, Сосо Павлиашвили, Стас Пьеха, Борис Моисеев, Виктория Дайнеко. Участники проекта "Голос", "Главная сцена"и многие другие.</p>
    <p style="text-align: justify; font-size:"><b>Теперь опыт наших профессионалов доступен и для Вас.
    <br>Все технологии записи такие же как и у профессиональных артистов.</b></p>
    <p style="text-align: justify;">При всём вышеперечисленном СОЮЗ Голос является самой демократичной студией Москвы в отношении цен на запись!</p>
</div>
</span>
</span>

</h2>
</div>

</div>

</div>

</div>
<div style="transform-origin:center center;top:;bottom:;left:;right:;width:965px;height:29px;position:;margin-top: 50px;" class="hl2" id="i1ah4z3q1">
<div class="hl2cont">
<div class="hl2line">
</div>
</div>
</div>
</div>
<div style="margin: 0 auto; width: 980px;">
<h4 class="font_4" id="our_guests" style="font-size:42px; text-align:left; margin-bottom: 30px; margin-left: 30px;">
    <span style="font-weight:bold;">
    <span style="font-size:42px;">
    <span style="font-family:open sans condensed,sans-serif;">НАШИ ГОСТИ</span>
    </span>
    </span>
</h4>
</div>
<div class="f_container" style="margin: 0 auto 60px; width: 980px; text-align: center; font-size: 20px;">
    <div class="f_part">
        <div class="f_block2"><img src="img/guest1.jpg"></div>
        <b>Авраам Руссо</b>
    </div>
    <div class="f_part">
        <div class="f_block2"><img src="img/guest2.jpg"></div>
        <b>Александр<br>Добронравов</b>
    </div>
    <div class="f_part">
        <div class="f_block2"><img src="img/guest3.jpg"></div>
        <b>Александр Маршал</b>
    </div>
    <div class="f_part">
        <div class="f_block2"><img src="img/guest4.jpg"></div>
        <b>Вахтанг</b>
    </div>
    <div class="f_part">
        <div class="f_block2"><img src="img/guest5.jpg"></div>
        <b>Виктор Дробыш</b>
    </div>
    <div class="f_part">
        <div class="f_block2"><img src="img/guest6.jpg"></div>
        <b>Дина Гарипова</b>
    </div>
    <div class="f_part">
        <div class="f_block2"><img src="img/guest7.jpg"></div>
        <b>Жасмин</b>
    </div>
    <div class="f_part">
        <div class="f_block2"><img src="img/guest8.jpg"></div>
        <b>Зара</b>
    </div>
    <div class="f_part">
        <div class="f_block2"><img src="img/guest9.jpg"></div>
        <b>Макс Покровский</b>
    </div>
    <div class="f_part">
        <div class="f_block2"><img src="img/guest10.jpg"></div>
        <b>Паскаль и<br> К. Арсенев</b>
    </div>
    <div class="f_part">
        <div class="f_block2"><img src="img/guest11.jpg"></div>
        <b>Ян Марти</b>
    </div>
    <div class="f_part">
        <div class="f_block2"><img src="img/guest12.jpg"></div>
        <b>Юлия Михальчик</b>
    </div>
    <div style="transform-origin:center center;top:;bottom:;left:;right:;width:965px;height:29px;position:;margin-top: 50px;" class="hl2" id="i1ah4z3q3">
<div class="hl2cont">
<div class="hl2line">
</div>
</div>
</div>
</div>
<h4 class="font_4" id="studio_tabs" style="font-size:42px; text-align:center; margin-bottom: 30px;">
    <span style="font-weight:bold;">
    <span style="font-size:42px;">
    <span style="font-family:open sans condensed,sans-serif;">СТУДИИ</span>
    </span>
    </span>
    </h4>
<div id="tabs" class="font_8">
    <div class="tabs">
        <input id="tab1" type="radio" name="tabs" checked>
        <label for="tab1" title="Студия A"><i class="fas fa-music"></i>&nbsp;&nbsp;Студия A</label>
     
        <input id="tab2" type="radio" name="tabs">
        <label for="tab2" title="Студия B"><i class="fas fa-music"></i>&nbsp;&nbsp;Студия B</label>
     
        <input id="tab3" type="radio" name="tabs">
        <label for="tab3" title="Студия C"><i class="fas fa-music"></i>&nbsp;&nbsp;Студия C</label>
     
        <section id="content-tab1">
        <div class="single-box">
           
            <div class="left_box"><br>
            <h3 class="category-title">Студия А</h3>    
            <img class="alignleft size-medium wp-image-230" title="Студия А" src="http://quartamusic.com/wp-content/uploads/2011/12/1-570x380.jpg" alt="" width="320" height="213"><p></p>
            <p><img class="alignleft size-medium wp-image-233" title="Студия А" src="http://quartamusic.com/wp-content/uploads/2011/12/4-570x380.jpg" alt="" width="320" height="213"></p>
            <p><img class="alignleft size-medium wp-image-231" title="Студия А" src="http://quartamusic.com/wp-content/uploads/2011/12/2-570x380.jpg" alt="" width="320" height="213"></p>
            <p><img class="alignleft size-medium wp-image-234" title="Студия А" src="http://quartamusic.com/wp-content/uploads/2011/12/5-570x380.jpg" alt="" width="320" height="213"></p>
            <p></p></div>
            <div class="right_box"><br>
            <strong>Консоль:</strong><br>
            • Euphonix CS2000 — 96ти канальная полностью автоматизированная<br>
            аналоговая консоль с цифровым управлением.<br>
            • 5 x ES 108 (40 каналов динамической обработки euphonix).<br>
            <strong>Цифровые рабочие станции:</strong><br>
            • PYRAMIX Virtual Studio<br>
            • Digidesign Pro Tools HD3<br>
            <strong>Конвертеры:</strong><br>
            • 2x Merging Sphynx 2 (8/8 ADDA)<br>
            • 2x Apogee DA 16X<br>
            <strong>Интерфейсы ввода-вывода:</strong><br>
            • 2x Mykerinos DSP<br>
            • 2x AES/EBU DSD I/O CARD<br>
            • Digidesign digital I/O 16<br>
            • M-Audio midisport 8×8<br>
            <strong>Мониторы:</strong><br>
            • Quested HQ 210<br>
            • Quested S 7<br>
            • Yamaha NS 10M studio<br>
            <strong>Мониторные усилители:</strong><br>
            • Quested AP 800<br>
            • Studer<br>
            <strong>Предусилители:</strong><br>
            • Sphynx 2 — 8-ми канальный дистанционно управляемый предусилитель<br>
            • Universal audio 2108<br>
            • Universal audio 6176<br>
            • 4x Digilab SPM-102 SE<br>
            <strong>Динамическая обработка:</strong><br>
            • API 2500 stereo bus compressor<br>
            • Manley Vari Mu stereo valve compressor<br>
            • 2x Empirical Labs Distressor EL 8<br>
            • 2x Digilab Turbo-Soft mono compressor<br>
            • SPL Deesser<br>
            <strong>Эквалайзеры:</strong><br>
            • Avalon AD 2055 stereo parametric<br>
            • Tube-Tech PE -1C program equalizer<br>
            • 2x Digilab SPE 100F pultec type<br>
            • Digilab SPX 250 Hi spectral processor<br>
            • Digilab SPX 200 Low spectral processor<br>
            • DBX 120 A Subharmonic Synth.<br>
            <strong>Процессоры эффектов:</strong><br>
            • T.C. Electronic System 6000 (MD-4)<br>
            • Lexicon 960 LS<br>
            • Yamaha REV 7<br>
            </div>
         </div>
        </section>  
        <section id="content-tab2">
            <div class="single-box">
                
                <div class="left_box"><br>
                <h3 class="category-title">Студия B</h3>    
                <img class="alignleft size-medium wp-image-236" title="Студия B" src="http://quartamusic.com/wp-content/uploads/2011/12/studiya-b_2-570x380.jpg" alt="" width="320" height="213"><br>
                <img class="alignleft size-medium wp-image-235" title="Студия B" src="http://quartamusic.com/wp-content/uploads/2011/12/studiya-b_1-570x380.jpg" alt="" width="320" height="213"></div>
                <p>&nbsp;</p>
                <div class="right_box"><br>
                <strong>Консоль:</strong><br>
                • Studer 963 — 20/4/4<br>
                <strong>Конвертеры:</strong><br>
                • DCS ADC 905<br>
                • Apogee Rosetta 800<br>
                <strong>Цифровой интерфейс:</strong><br>
                • Lynx AES 16<br>
                <strong>Мониторы:</strong><br>
                • KRK V-8<br>
                • Yamaha NS 10M Studio<br>
                <strong>Предусилитель:</strong><br>
                • API 7600 Channel Strip<br>
                <strong>Динамическая обработка:</strong><br>
                • Digilab Turbo-Soft mono compressor<br>
                • DBX 120 A Subharmonic Synth.<br>
                • Universal Audio UAD ultra pack<br>
                <strong>Процессоры эффектов:</strong><br>
                • Roland 3030D<br>
                • T.C. Electronic M2000<br>
                </div>
            </div>
        </section> 
        <section id="content-tab3">
            <div class="single-box">
            
                <div class="left_box"><br>
                <h3 class="category-title">Студия С</h3>
                <img class="alignleft size-medium wp-image-238" title="Студия C" src="http://quartamusic.com/wp-content/uploads/2011/12/studio_c_2-570x380.jpg" alt="" width="320" height="213"><img class="alignleft size-medium wp-image-237" title="Студия C" src="http://quartamusic.com/wp-content/uploads/2011/12/studio_c_1-570x380.jpg" alt="" width="320" height="213"><p></p>
                <p></p></div>
                <div class="right_box"><br>
                <p><strong>Мониторный пульт:</strong><br>
                • Digilab CRM 426<br>
                <strong>Конвертер:</strong><br>
                • Apogee Rosetta 800<br>
                <strong>Цифровой интерфейс:</strong><br>
                • Lynx AES16<br>
                <strong>Мониторы:</strong><br>
                • Harbeth M 20<br>
                • Sony 7506 — Headphones<br>
                <strong>Предусилитель:</strong><br>
                • Manley tube mono mic-pre<br>
                <strong>Компрессор:</strong><br>
                • Digilab Turbo-Soft SPL 300 – Studio soft vocal compressor<br>
                <strong>Синтезаторы и звуковыые модули:</strong><br>
                • Kurzweil PC2R<br>
                • Novation Supernova II Pro X<br>
                • Roland V-Synth XT<br>
                • Roland Fantom<br>
                • M-Audio Keystation Pro 88 USB MIDI Keyboard</p>
                <p></p></div>
            </div>
        </section>  
    </div>
</div>
<h4 class="font_4" id="soft" style="font-size:42px; text-align:center; margin-top: 80px; margin-bottom: 30px;">
    <span style="font-weight:bold;">
    <span style="font-size:42px;">
    <span style="font-family:open sans condensed,sans-serif;">ОБОРУДОВАНИЕ</span>
    </span>
    </span>
    </h4>
    <div id="tabs_eq" class="font_8">
        <div class="tabs">
            <input id="tab1_eq" type="radio" name="tabs_eq" checked>
            <label for="tab1_eq" title="Студия A"><i class="fas fa-microphone-alt"></i>&nbsp;&nbsp;Микрофоны</label>
         
            <input id="tab2_eq" type="radio" name="tabs_eq">
            <label for="tab2_eq" title="Студия B"><i class="fas fa-volume-up"></i>&nbsp;&nbsp;Гитарное усиление</label>
         
            <section id="content-tab1_eq">
            <div id="div-content-tab1_eq" class="font_7">
                  <h3>Микрофоны</h3>
                  <p>• Telefunken ELA 251 AC<br>
                • Telefunken ELA 251 E (2 шт.)<br>
                • MKL 100 (4 шт.)<br>
                • Neumann U87 (2 шт.)<br>
                • Neumann SM69 F.E.T<br>
                • Neumann SM2<br>
                • Sennheiser MD421 (3 шт.)<br>
                • AKG C451 (2 шт.)<br>
                • AKG D 112<br>
                • Electro-Voice Re-20<br>
                • Shure SM57 (2 шт.)<br>
                • Oktava ML51<span style="color: #000000;"><strong><br>
                </strong></span></p>
            </div>
            </section>  
            <section id="content-tab2_eq">
                <div id="div-content-tab2_eq" class="font_7">
                  <h3>Гитарное усиление</h3>
                  <p>• VOX AC30CCH 30 Watt head.<br>
                • VOX V212BNX 2×12 opened back cabinet with Celestion AlNiCo «Blue» speakers.<br>
                • Marshall JTM45 head<br>
                • Hughes &amp; Kettner CC 412 A 30 4х12 cabinet with Celestion Vintage30 speakers<br>
                • Roland Jazz Chorus JC-120<br>
                • Ampeg B2Re bass head<br>
                • Ampeg Classic 4×10 cabinet<br>
                • Ampeg B15R bass combo («Blue Diamond» series)</p>
                </div>
            </section>
        </div>
        <div style="transform-origin:center center;top:;bottom:;left:;right:;width:965px;height:29px;position:; margin-bottom: 50px;" class="hl2" id="i1ah4z3q2">
            <div id="contact" class="hl2cont">
            <div id="contact" class="hl2line">
            </div>
            </div>
            </div>
    </div>
    <div class="map">
               <div data-packed="true" style="width: 424px; pointer-events: none; display: flex; flex-direction: row;" class="txtNew" id="i0ohnuqm">
                <section id="content-tab2_eq">
                        <div style="font-size:20px; text-align:justify;width: 500px; margin-left: 50px;" class="font_2">
                          <h3 style="text-align: center; margin-bottom: 20px;" class="font_2">Контакты</h3>
                          <p style="flex-wrap: nowrap; margin-bottom: 5px;"> <b>Адрес: </b></p>
                            <p style="margin-bottom: 5px;">Ленинский проспект, д. 106/1</p>
                            <p style="margin-bottom: 5px;"><b >Телефон:</b></p>
                            <p style="margin-bottom: 5px;">+7 (495) 722-0234 - студия СОЮЗ Голос</p>
                            <p>+7 (495) 720-7046 - директор студии Валерий Костин</p>
                            
                            <a href="https://vk.com/quartamusicstudio"><i class="fab fa-vk" href="http://quartamusic.livejournal.com/" style="font-size: 70px;margin-top: 90px; margin-left: 10px;color:#4a76a8;"></i></a>
                            <a href="https://twitter.com/#!/ValeryKostin"><i class="fab fa-twitter" style="font-size: 70px; margin-left: 50px;color:#1da1f2;"></i></a>
                            <a href="http://www.youtube.com/user/KostinQM/videos"><i class="fab fa-youtube" style="font-size: 70px; margin-left: 50px;color:#db4437 ;"></i></a>
                            <a href="http://quartamusic.livejournal.com/"><i class="fas fa-pen-square" style="font-size: 70px; margin-left: 50px;color:#004359 ;"></i></a>
                        </div>
                    </section>
                    <div style="margin-top: 10px;margin-left: 20px ;">
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0b07fe240dfacba2c0be6e0ea69cacbe63ba68a4bc95525cabe916b0efc1372d&amp;width=350&amp;height=350&amp;lang=ru_RU&amp;scroll=true"></script>
        </div>
        </div>
   </div>

    




<div id="mainPageinlineContent-wedge-43" data-mesh-internal="true">
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<header data-is-mobile="false" data-state="fixedPosition" data-site-width="980" data-header-top="0" style="position:fixed;margin-top:0;top:0;left:0;margin-left:0;width:100%;min-width:980px;bottom:;right:;z-index:50" class="style-jtc0m683" id="SITE_HEADER">
    <div id="SITE_HEADERcenterArea" class="style-jtc0m683centerArea">
        <div class="style-jtc0m683_left style-jtc0m683_ln">
</div>
        <div class="style-jtc0m683_center style-jtc0m683_ln">
</div>
        <div class="style-jtc0m683_right style-jtc0m683_ln">
</div>
    </div>
    <div style="left:0;width:100%" id="SITE_HEADERscreenWidthBackground" class="style-jtc0m683screenWidthBackground">
        <div class="style-jtc0m683_bg">
</div>
    </div>
    <div id="SITE_HEADERcenteredContent" class="style-jtc0m683centeredContent">
        <div style="margin-left:calc((100% - 980px) / 2);width:980px" id="SITE_HEADERbg" class="style-jtc0m683bg">
</div>
        <div id="SITE_HEADERinlineContent" class="style-jtc0m683inlineContent">
        <div id="SITE_HEADERinlineContent-gridWrapper" data-mesh-internal="true">
        <div id="SITE_HEADERinlineContent-gridContainer" data-mesh-internal="true">
        <div data-packed="true" style="width: 166px; pointer-events: none;" class="txtNew" id="ig2tt1dv">
            <h2 style="font-size:16px;" class="font_2">
                <span style="font-family:play,sans-serif;">
                    <span style="font-size:16px;">
                        <span style="letter-spacing:0em;">
                            <span style="color:#363636;">
                                <object height="0">
                                    <a class="auto-generated-link" data-auto-recognition="true" data-content="Quartamusic@mail.ru" href="mailto:Quartamusic@mail.ru" data-type="mail">Qu<span style="color: #ff0000;">art</span>amusic@mail.ru</a>
                                </object>
                            </span>
                        </span>
                    </span>
                </span>
            </h2>
        </div>
        <div data-packed="true" style="width: 149px; pointer-events: none;left: 425px;" class="txtNew" id="ig2trhdp">
            <h2 style="font-size:16px;" class="font_2">
                <span style="font-size:16px;">
                    <span style="letter-spacing:0em;">
                        <span style="font-family:play,sans-serif;">
                            <span style="color:#363636;">+7(495)722-0234</span>
                        </span>
                    </span>
                </span>
            </h2>
        </div>
        <div data-packed="true" style="width: 141px; pointer-events: none;left:700px;" class="txtNew" id="ig2ttom5">
            <h2 style="font-size:16px;" class="font_2">
                <span style="font-size:16px;">
                    <span style="color:#363636;">
                        <span style="font-family:play,sans-serif;">&nbsp;с 11.00 до 22.00</span>
                    </span>
                </span>
            </h2>
        </div>
        <!-- <div id="ixd6ci31" data-align="left" data-disabled="false" data-margin="0" data-should-use-flex="true" data-width="166" data-height="32" style="width: 166px; height: 32px; min-height: 22px;" class="style-jtc0m67t" data-state="desktop shouldUseFlex left">
             <a href="https://www.studiovoice.ru/activ" target="_self" role="button" id="ixd6ci31link" class="style-jtc0m67tlink">
                <span style="margin-left:0" id="ixd6ci31label" class="style-jtc0m67tlabel">Активация</span>
            </a>
        </div> -->
        <div style="width: 221px; height: 76px;left: 45px;" class="ImageButton_1" data-state="supports_opacity transition_fade   " id="i0p6st1t">
            <a href="#" onclick="return up()" target="_self" data-keep-roots="true" data-anchor="c1ruo" title="" style="width:221px;height:76px" id="i0p6st1tlink" class="ImageButton_1link">
                <div class="ImageButton_1_correct-positioning">
                    <wix-image style="width:221px;height:76px;top:0;left:20px" data-has-bg-scroll-effect="" data-image-info="{&quot;imageData&quot;:{&quot;alt&quot;:&quot;&quot;,&quot;type&quot;:&quot;Image&quot;,&quot;id&quot;:&quot;c_defaultImage10mm&quot;,&quot;metaData&quot;:{&quot;pageId&quot;:&quot;masterPage&quot;,&quot;isPreset&quot;:false,&quot;schemaVersion&quot;:&quot;2.0&quot;,&quot;isHidden&quot;:false},&quot;title&quot;:&quot;studiovoice_final.ai.png&quot;,&quot;uri&quot;:&quot;souz_golos1.svg&quot;,&quot;description&quot;:&quot;&quot;,&quot;width&quot;:1759,&quot;height&quot;:1007,&quot;displayMode&quot;:&quot;full&quot;},&quot;containerId&quot;:&quot;i0p6st1t&quot;,&quot;displayMode&quot;:&quot;full&quot;}" id="i0p6st1tdefaultImage" class="ImageButton_1defaultImage" data-is-svg="true">
                        <img id="i0p6st1tdefaultImageimage" style="object-position:10% 10%;width:351px;height:106px;object-fit:contain" alt="" data-type="image" itemprop="image" src="img/souz_golos1.svg">
                    </wix-image>
                </div>
                <div class="ImageButton_1_correct-positioning">
                    <wix-image style="width:221px;height:76px;top:0;left:0" data-has-bg-scroll-effect="" data-image-info="{&quot;imageData&quot;:{&quot;alt&quot;:&quot;&quot;,&quot;type&quot;:&quot;Image&quot;,&quot;id&quot;:&quot;c_hoverImage4m2&quot;,&quot;metaData&quot;:{&quot;pageId&quot;:&quot;masterPage&quot;,&quot;isPreset&quot;:false,&quot;schemaVersion&quot;:&quot;2.0&quot;,&quot;isHidden&quot;:false},&quot;title&quot;:&quot;studiovoice_final.ai.png&quot;,&quot;uri&quot;:&quot;souz_golos1.svg&quot;,&quot;description&quot;:&quot;&quot;,&quot;width&quot;:1759,&quot;height&quot;:1007,&quot;displayMode&quot;:&quot;full&quot;},&quot;containerId&quot;:&quot;i0p6st1t&quot;,&quot;displayMode&quot;:&quot;full&quot;}" id="i0p6st1thoverImage" class="ImageButton_1hoverImage" data-is-svg="true">
                        <img id="i0p6st1thoverImageimage" style="object-position:50% 50%;width:221px;height:76px;object-fit:contain" alt="" data-type="image" itemprop="image" src="img/souz_golos1.svg">
                    </wix-image>
                </div>
                <div class="ImageButton_1_correct-positioning">
                    <wix-image style="width:221px;height:76px;top:0;left:0" data-has-bg-scroll-effect="" data-image-info="{&quot;imageData&quot;:{&quot;alt&quot;:&quot;&quot;,&quot;type&quot;:&quot;Image&quot;,&quot;id&quot;:&quot;c_activeImage1622&quot;,&quot;metaData&quot;:{&quot;pageId&quot;:&quot;masterPage&quot;,&quot;isPreset&quot;:false,&quot;schemaVersion&quot;:&quot;2.0&quot;,&quot;isHidden&quot;:false},&quot;title&quot;:&quot;studiovoice_final.ai.png&quot;,&quot;uri&quot;:&quot;souz_golos1.svg&quot;,&quot;description&quot;:&quot;&quot;,&quot;width&quot;:1759,&quot;height&quot;:1007,&quot;displayMode&quot;:&quot;full&quot;},&quot;containerId&quot;:&quot;i0p6st1t&quot;,&quot;displayMode&quot;:&quot;full&quot;}" id="i0p6st1tactiveImage" class="ImageButton_1activeImage" data-is-svg="true">
                        <img id="i0p6st1tactiveImageimage" style="object-position:50% 50%;width:221px;height:76px;object-fit:contain" alt="" data-type="image" itemprop="image" src="img/souz_golos1.svg">
                    </wix-image>
                </div>
            </a>
        </div>
        <div data-border-width="1px" style="transform-origin:center 0.5px;top:;bottom:;left:;right:;width:1474px;height:5px;position:" class="hl3" id="ig2pih8t">
            
        </div>
        <div data-border-width="1px" style="transform-origin:center 0.5px;top:;bottom:;left:;right:;width:575px;height:5px;position:" class="hl3" id="ig2pj479">
</div>
        <div id="DrpDwnMn0-sbf" class="hidden-during-prewarmup ddm2" style="width: 738px; height: 31px; overflow-x: visible;left: 300px;" data-stretch-buttons-to-menu-width="true" data-same-width-buttons="false" data-num-items="7" data-menuborder-y="0" data-menubtn-border="0" data-ribbon-els="0" data-label-pad="0" data-ribbon-extra="0" data-drophposition="center" data-dropalign="left" dir="ltr" data-state="left notMobile" data-dropmode="dropDown">
            <nav>
                <ul style="text-align:center;padding-left: 50px;" aria-label="Site navigation" role="navigation" id="menu" class="ddm2itemsContainer">
                    <li data-direction="ltr" data-listposition="left" data-data-id="bmic7u" class="ddm2repeaterButton" data-state="menu selected idle link notMobile" id="DrpDwnMn0-sbf0" data-original-gap-between-text-and-btn="0" style="width: 80px; height: 30px; position: relative; box-sizing: border-box; overflow: visible;" aria-hidden="false">
                        <a href="#price-list" id="studio_scroll">


                            <div class="ddm2repeaterButton_gapper">
                                <div style="text-align:center" id="DrpDwnMn0-sbf0bg" class="ddm2repeaterButtonbg">
                                    <p style="line-height: 31px;" id="DrpDwnMn0-sbf0label" class="ddm2repeaterButtonlabel">Услуги</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li data-direction="ltr" data-listposition="center" data-data-id="bmi67f" class="ddm2repeaterButton" data-state="menu  idle link notMobile" id="DrpDwnMn0-sbf1" data-original-gap-between-text-and-btn="0" style="width: 60px; height: 31px; position: relative; box-sizing: border-box; overflow: visible;" aria-hidden="false">
                        <a role="button" tabindex="0" aria-haspopup="false" data-listposition="center" href="#iqauqbfn" target="_self" data-keep-roots="true" data-anchor="cbym" id="DrpDwnMn0-sbf1linkElement" class="ddm2repeaterButtonlinkElement">

                            <div class="ddm2repeaterButton_gapper">
                                <div style="text-align:center" id="DrpDwnMn0-sbf1bg" class="ddm2repeaterButtonbg">
                                    <p style="line-height: 31px;" id="DrpDwnMn0-sbf1label" class="ddm2repeaterButtonlabel" data-align="center">О нас</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li data-direction="ltr" data-listposition="center" data-data-id="bmiw83" class="ddm2repeaterButton" data-state="menu  idle link notMobile" id="DrpDwnMn0-sbf4" data-original-gap-between-text-and-btn="0" style="width: 120px; height: 31px; position: relative; box-sizing: border-box; overflow: visible;" aria-hidden="false">
                        <a role="button" tabindex="0" aria-haspopup="false" data-listposition="center" href="#our_guests" target="_self" data-keep-roots="true" data-anchor="ciiv" id="DrpDwnMn0-sbf4linkElement" class="ddm2repeaterButtonlinkElement">
                            <div class="ddm2repeaterButton_gapper">
                                <div style="text-align:center" id="DrpDwnMn0-sbf4bg" class="ddm2repeaterButtonbg">
                                    <p style="line-height: 31px;" id="DrpDwnMn0-sbf4label" class="ddm2repeaterButtonlabel">Знаменитости</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li data-direction="ltr" data-listposition="center" data-data-id="bmin2n" class="ddm2repeaterButton" data-state="menu  idle link notMobile" id="DrpDwnMn0-sbf2" data-original-gap-between-text-and-btn="0" style="width: 90px; height: 31px; position: relative; box-sizing: border-box; overflow: visible;" aria-hidden="false">
                        <a role="button" tabindex="0" aria-haspopup="false" data-listposition="center" href="#studio_tabs" target="_self" data-keep-roots="true" data-anchor="cy5l" id="DrpDwnMn0-sbf2linkElement" class="ddm2repeaterButtonlinkElement">
                            <div class="ddm2repeaterButton_gapper">
                                <div style="text-align:center" id="DrpDwnMn0-sbf2bg" class="ddm2repeaterButtonbg">
                                    <p style=" line-height: 31px;" id="DrpDwnMn0-sbf2label" class="ddm2repeaterButtonlabel">Студии</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li data-direction="ltr" data-listposition="center" data-data-id="bmi1xl" class="ddm2repeaterButton" data-state="menu  idle link notMobile" id="DrpDwnMn0-sbf3" data-original-gap-between-text-and-btn="0" style="width: 125px; height: 31px; position: relative; box-sizing: border-box; overflow: visible;" aria-hidden="false">
                        <a role="button" tabindex="0" aria-haspopup="false" data-listposition="center" href="#soft" target="_self" data-keep-roots="true" data-anchor="c24t4" id="DrpDwnMn0-sbf3linkElement" class="ddm2repeaterButtonlinkElement">
                            <div class="ddm2repeaterButton_gapper">
                                <div style="text-align:center" id="DrpDwnMn0-sbf3bg" class="ddm2repeaterButtonbg">
                                    <p style="line-height: 31px;" id="DrpDwnMn0-sbf3label" class="ddm2repeaterButtonlabel">Оборудование</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li data-direction="ltr" data-listposition="center" data-data-id="bmiw83" class="ddm2repeaterButton" data-state="menu  idle link notMobile" id="DrpDwnMn0-sbf4" data-original-gap-between-text-and-btn="0" style="width: 100px; height: 31px; position: relative; box-sizing: border-box; overflow: visible;" aria-hidden="false">
                        <a role="button" tabindex="0" aria-haspopup="false" data-listposition="center" href="#i0ohnuqm" target="_self" data-keep-roots="true" data-anchor="ciiv" id="DrpDwnMn0-sbf4linkElement" class="ddm2repeaterButtonlinkElement">
                            <div class="ddm2repeaterButton_gapper">
                                <div style="text-align:center" id="DrpDwnMn0-sbf4bg" class="ddm2repeaterButtonbg">
                                    <p style="line-height: 31px;" id="DrpDwnMn0-sbf4label" class="ddm2repeaterButtonlabel">Контакты</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    
                    <!-- <li data-direction="ltr" data-listposition="center" data-data-id="bmi129k" class="ddm2repeaterButton" data-state="menu  idle link notMobile" id="DrpDwnMn0-sbf5" data-original-gap-between-text-and-btn="0" style="width: 100px; height: 31px; position: relative; box-sizing: border-box; overflow: visible;" aria-hidden="false">
                        <a role="button" tabindex="0" aria-haspopup="false" data-listposition="center" href="https://www.studiovoice.ru/dostavka" target="_self" id="DrpDwnMn0-sbf5linkElement" class="ddm2repeaterButtonlinkElement">
                            <div class="ddm2repeaterButton_gapper">
                                <div style="text-align:left" id="DrpDwnMn0-sbf5bg" class="ddm2repeaterButtonbg">
                                    <p style="line-height: 31px;" id="DrpDwnMn0-sbf5label" class="ddm2repeaterButtonlabel">Доставка/Оплата</p>
                                </div>
                            </div>
                        </a>
                    </li> -->
                    <li data-direction="ltr" data-listposition="right" data-data-id="dataItem-jy05i3m5" class="ddm2repeaterButton" data-state="menu  idle link notMobile" id="DrpDwnMn0-sbf6" data-original-gap-between-text-and-btn="0" style="height: 0px; overflow: hidden; position: absolute;" aria-hidden="true">
                        <a role="button" tabindex="-1" aria-haspopup="false" data-listposition="right" href="https://www.studiovoice.ru/peredacha-dannyh" target="_self" id="DrpDwnMn0-sbf6linkElement" class="ddm2repeaterButtonlinkElement">
                            <div class="ddm2repeaterButton_gapper">
                                <div style="text-align:center" id="DrpDwnMn0-sbf6bg" class="ddm2repeaterButtonbg">
                                    <p style="line-height: 31px;" id="DrpDwnMn0-sbf6label" class="ddm2repeaterButtonlabel">Передача данных</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <!-- <li data-listposition="right" class="ddm2repeaterButton" data-state="menu  idle header notMobile"
                        id="DrpDwnMn0-sbf__more__" data-original-gap-between-text-and-btn="0"
                        style="width: 62px; height: 31px; position: relative; box-sizing: border-box; overflow: visible;"
                        aria-hidden="false">
                        <a role="button" tabindex="0" aria-haspopup="true" data-listposition="right" id="DrpDwnMn0-sbf__more__linkElement"
                            class="ddm2repeaterButtonlinkElement">
                            <div class="ddm2repeaterButton_gapper">
                                <div style="text-align:center" id="DrpDwnMn0-sbf__more__bg" class="ddm2repeaterButtonbg">
                                    <p style="line-height: 31px;" id="DrpDwnMn0-sbf__more__label" class="ddm2repeaterButtonlabel">More</p>
                                </div>
                            </div>
                        </a>
                    </li> -->
                </ul>
                <div id="DrpDwnMn0-sbfmoreButton" class="ddm2moreButton">
</div>
                <nav style="visibility: hidden; right: auto; top: 31px; bottom: auto; left: 521px;" data-drophposition="center" data-dropalign="left" id="DrpDwnMn0-sbfdropWrapper" class="ddm2dropWrapper">
                    <ul style="visibility: hidden; right: auto; left: 521px;" id="DrpDwnMn0-sbfmoreContainer" class="ddm2moreContainer" data-hover="5">
</ul>
                </nav>
            </nav>
        </div>
        </div>
        </div>
        </div>
    </div>
    </header>
    <div id="SITE_HEADER-placeholder" style="height:117px;display:block">
</div>
</div>
</div>
<!-- <div id="aspectCompsContainer" class="siteAspectsContainer">
    <div style="position:absolute" id="popoverLayer">
</div>
    <div style="top:;bottom:;left:;right:;position:;overflow:hidden;visibility:hidden" data-has-iframe="true" class="s_DtaksTPAWidgetSkin" id="tpaWorker_3">
        <iframe scrolling="no" allow="autoplay; camera; microphone; geolocation; vr" allowtransparency="true" allowfullscreen="" name="tpaWorker_3" style="display:none;position:absolute;z-index:" title="Yandex.Metrica" aria-label="Yandex.Metrica" id="tpaWorker_3iframe" class="s_DtaksTPAWidgetSkiniframe" src="Studio_voice/tracking_code.asc" frameborder="0">
</iframe>
        <div id="tpaWorker_3overlay" class="s_DtaksTPAWidgetSkinoverlay">
</div>
    </div>
</div> -->
       
</div>
</div>
    
        <!-- No Footer -->
    

    
    
    
    
    
    
    
    <!--body end html embeds start-->
    
    <!--body end html embeds end-->
    
    

    





</body>
</html>