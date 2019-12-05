<?
				$datetemp=date("d.m.Y H.i.s");
				$title = substr(htmlspecialchars(trim("заказ паркет $datetemp")), 0, 1000); 

				$temp=$_REQUEST['nameC']." \n комментарии: ".$_REQUEST['annotC']." \n телефон: ".$_REQUEST['telC'];
				$mess = substr(strip_tags($temp), 0, 1000000); // substr(htmlspecialchars(trim($temp)), 0, 1000000); 
				$to = 'vvl8monday@yandex.ru'; 
				$from='test@tekrap.ru'; 

				mail($to, $title, $mess, 'From:'.$from);
?>