
function Uni_Z1(input)
{
   var output=input;

   output = output.replace(/\u104E\u1004\u103A\u1038/g, '\u104E');
   output = output.replace(/\u102B\u103A/g, '\u105A');
   output = output.replace(/\u102D\u1036/g, '\u108E');
   output = output.replace(/\u103F/g, '\u1086');

   output = output.replace(/(\u102F[\u1036]?)\u1037/g, function($0, $1){return $1 ? $1 + '\u1094' : $0 + $1;});
   output = output.replace(/(\u1030[\u1036]?)\u1037/g, function($0, $1){return $1 ? $1 + '\u1094' : $0 + $1;});
   output = output.replace(/(\u1014[\u103A\u1032]?)\u1037/g, function($0, $1){return $1 ? $1 + '\u1094' : $0 + $1;});
   output = output.replace(/(\u103B[\u1032\u1036]?)\u1037/g, function($0, $1){return $1 ? $1 + '\u1095' : $0 + $1;});

   output = output.replace(/(\u103D[\u1032]?)\u1037/g,  function($0, $1){return $1 ? $1 + '\u1095' : $0 + $1;});
   output = output.replace(/([\u103B\u103C\u103D][\u102D\u1036]?)\u102F/g, function($0, $1){return $1 ? $1 + '\u1033' : $0 + $1;});
   output = output.replace(/((\u1039[\u1000-\u1021])[\u102D\u1036]?)\u102F/g,  function($0, $1){return $1 ? $1 + '\u1033' : $0 + $1;});
   output = output.replace(/([\u100A\u100C\u1020\u1025\u1029][\u102D\u1036]?)\u102F/g, function($0, $1){return $1 ? $1 + '\u1033' : $0 + $1;});
   output = output.replace(/([\u103B\u103C][\u103D]?[\u103E]?[\u102D\u1036]?)\u1030/g, function($0, $1){return $1 ? $1 + '\u1034' : $0 + $1;});
   // uu - 2
   output = output.replace(/((\u1039[\u1000-\u1021])[\u102D\u1036]?)\u1030/g, function($0, $1){return $1 ? $1 + '\u1034' : $0 + $1;});
   // uu - 2
   output = output.replace(/([\u100A\u100C\u1020\u1025\u1029][\u102D\u1036]?)\u1030/g, function($0, $1){return $1 ? $1 + '\u1034' : $0 + $1;});
   // uu - 2

   output = output.replace(/(\u103C)\u103E/g, function($0, $1){return $1 ? $1 + '\u1087' : $0 + $1;});
   // ha - 2


   output = output.replace(/\u1009(?=[\u103A])/g, '\u1025');
   output = output.replace(/\u1009(?=\u1039[\u1000-\u1021])/g, '\u1025');

   // E render
   output = output.replace( /([\u1000-\u1021\u1029])(\u1039[\u1000-\u1021])?([\u103B-\u103E\u1087]*)?\u1031/g, "\u1031$1$2$3");
   
   // Ra render
   output = output.replace( /([\u1000-\u1021\u1029])(\u1039[\u1000-\u1021\u1000-\u1021])?(\u103C)/g, "$3$1$2");
   
   // Kinzi
   output = output.replace(/\u1004\u103A\u1039/g, "\u1064");
   // kinzi
   output = output.replace(/(\u1064)([\u1031]?)([\u103C]?)([\u1000-\u1021])\u102D/g, "$2$3$4\u108B");
   // reordering kinzi lgt
   output = output.replace(/(\u1064)(\u1031)?(\u103C)?([\u1000-\u1021])\u102E/g, "$2$3$4\u108C");
   // reordering kinzi lgtsk
   output = output.replace(/(\u1064)(\u1031)?(\u103C)?([\u1000-\u1021])\u1036/g, "$2$3$4\u108D");
   // reordering kinzi ttt
   output = output.replace(/(\u1064)(\u1031)?(\u103C)?([\u1000-\u1021])/g, "$2$3$4\u1064");
   // reordering kinzi

   // Consonant

   output = output.replace(/\u100A(?=[\u1039\u102F\u1030])/g, "\u106B");
   // nnya - 2
   output = output.replace(/\u100A/g, "\u100A");
   // nnya

   output = output.replace(/\u101B(?=[\u102F\u1030])/g, "\u1090");
   // ra - 2
   output = output.replace(/\u101B/g, "\u101B");
   // ra

   output = output.replace(/\u1014(?=[\u1039\u103D\u103E\u102F\u1030])/g, "\u108F");
   // na - 2
   output = output.replace(/\u1014/g, "\u1014");
   // na

   // Stacked consonants
   output = output.replace(/\u1039\u1000/g, "\u1060");
   output = output.replace(/\u1039\u1001/g, "\u1061");
   output = output.replace(/\u1039\u1002/g, "\u1062");
   output = output.replace(/\u1039\u1003/g, "\u1063");
   output = output.replace(/\u1039\u1005/g, "\u1065");
   output = output.replace(/\u1039\u1006/g, "\u1066");
   // 1067
   output = output.replace(/([\u1001\u1002\u1004\u1005\u1007\u1012\u1013\u108F\u1015\u1016\u1017\u1019\u101D])\u1066/g, function($0, $1){return $1 ? $1 + '\u1067' : $0 + $1;});
   // 1067
   output = output.replace(/\u1039\u1007/g, "\u1068");
   output = output.replace(/\u1039\u1008/g, "\u1069");

   output = output.replace(/\u1039\u100F/g, "\u1070");
   output = output.replace(/\u1039\u1010/g, "\u1071");
   // 1072 omit (little shift to right)
   output = output.replace(/([\u1001\u1002\u1004\u1005\u1007\u1012\u1013\u108F\u1015\u1016\u1017\u1019\u101D])\u1071/g, function($0, $1){return $1 ? $1 + '\u1072' : $0 + $1;});
   // 1067
   output = output.replace(/\u1039\u1011/g, "\u1073");
   // \u1074 omit(little shift to right)
   output = output.replace(/([\u1001\u1002\u1004\u1005\u1007\u1012\u1013\u108F\u1015\u1016\u1017\u1019\u101D])\u1073/g, function($0, $1){return $1 ? $1 + '\u1074' : $0 + $1;});
   // 1067
   output = output.replace(/\u1039\u1012/g, "\u1075");
   output = output.replace(/\u1039\u1013/g, "\u1076");
   output = output.replace(/\u1039\u1014/g, "\u1077");
   output = output.replace(/\u1039\u1015/g, "\u1078");
   output = output.replace(/\u1039\u1016/g, "\u1079");
   output = output.replace(/\u1039\u1017/g, "\u107A");
   output = output.replace(/\u1039\u1018/g, "\u107B");
   output = output.replace(/\u1039\u1019/g, "\u107C");
   output = output.replace(/\u1039\u101C/g, "\u1085");


   output = output.replace(/\u100F\u1039\u100D/g, "\u1091");
   output = output.replace(/\u100B\u1039\u100C/g, "\u1092");
   output = output.replace(/\u1039\u100C/g, "\u106D");
   output = output.replace(/\u100B\u1039\u100B/g, "\u1097");
   output = output.replace(/\u1039\u100B/g, "\u106C");
   output = output.replace(/\u100E\u1039\u100D/g, "\u106F");
   output = output.replace(/\u100D\u1039\u100D/g, "\u106E");

   output = output.replace(/\u1009(?=\u103A)/g, "\u1025");
   // u
   output = output.replace(/\u1025(?=[\u1039\u102F\u1030])/g, "\u106A");
   // u - 2
   output = output.replace(/\u1025/g, "\u1025");
   // u
   /////////////////////////////////////

   output = output.replace(/\u103A/g, "\u1039");
   // asat

   output = output.replace(/\u103B\u103D\u103E/g, "\u107D\u108A");
   // ya wa ha
   output = output.replace(/\u103D\u103E/g, "\u108A");
   // wa ha

   output = output.replace(/\u103B/g, "\u103A");
   // ya
   output = output.replace(/\u103C/g, "\u103B");
   // ra
   output = output.replace(/\u103D/g, "\u103C");
   // wa
   output = output.replace(/\u103E/g, "\u103D");
   // ha
   output = output.replace(/\u103A(?=[\u103C\u103D\u108A])/g, "\u107D");
   // ya - 2

   output = output.replace(/(\u100A(?:[\u102D\u102E\u1036\u108B\u108C\u108D\u108E])?)\u103D/g, function($0, $1){return $1 ? $1 + '\u1087' : $0 ;});
   // ha - 2

   output = output.replace(/\u103B(?=[\u1000\u1003\u1006\u100F\u1010\u1011\u1018\u101A\u101C\u101E\u101F\u1021])/g, "\u107E");
   // great Ra with wide consonants
   output = output.replace(/\u107E([\u1000-\u1021\u108F])(?=[\u102D\u102E\u1036\u108B\u108C\u108D\u108E])/g, "\u1080$1");
   // great Ra with upper sign
   output = output.replace(/\u107E([\u1000-\u1021\u108F])(?=[\u103C\u108A])/g, "\u1082$1");
   // great Ra with under signs

   output = output.replace(/\u103B([\u1000-\u1021\u108F])(?=[\u102D \u102E \u1036 \u108B \u108C \u108D \u108E])/g, "\u107F$1");
   // little Ra with upper sign

   output = output.replace(/\u103B([\u1000-\u1021\u108F])(?=[\u103C\u108A])/g, "\u1081$1");
   // little Ra with under signs

   output = output.replace(/(\u1014[\u103A\u1032]?)\u1037/g, function($0, $1){return $1 ? $1 + '\u1094' : $0 + $1;});
   // aukmyint
   output = output.replace(/(\u1033[\u1036]?)\u1094/g, function($0, $1){return $1 ? $1 + '\u1095' : $0 + $1;});
   // aukmyint
   output = output.replace(/(\u1034[\u1036]?)\u1094/g, function($0, $1){return $1 ? $1 + '\u1095' : $0 + $1;});
   // aukmyint
   output = output.replace(/([\u103C\u103D\u108A][\u1032]?)\u1037/g, function($0, $1){return $1 ? $1 + '\u1095' : $0 + $1;});
   // aukmyint
  
  return output;

}//Uni_Z1


// JavaScript Document
function Z1_Uni(input)
{
  var output=input;

   var tallAA = "\u102B";
   var AA = "\u102C";
   var vi = "\u102D";
   // lone gyi tin
   var ii = "\u102E";
   var u = "\u102F";
   var uu = "\u1030";
   var ve = "\u1031";
   var ai = "\u1032";
   var ans = "\u1036";
   var db = "\u1037";
   var visarga = "\u1038";

   var asat = "\u103A";

   var ya = "\u103B";
   var ra = "\u103C";
   var wa = "\u103D";
   var ha = "\u103E";
   var zero = "\u1040";

   output =  output.replace( /\u106A/g, " \u1009");
   output =  output.replace( /\u106B/g, "\u100A");
   output =  output.replace( /\u1090/g, "\u101B");
   output =  output.replace( /\u1040/g, zero);

   output =  output.replace( /\u108F/g, "\u1014");
   output =  output.replace( /\u1012/g, "\u1012");
   output =  output.replace( /\u1013/g, "\u1013");
   /////////////


   output =  output.replace( /[\u103D\u1087]/g, ha);
   // ha
   output =  output.replace( /\u103C/g, wa);
   // wa
   output =  output.replace( /[\u103B\u107E\u107F\u1080\u1081\u1082\u1083\u1084]/g, ra);
   // ya yint(ra)
   output =  output.replace( /[\u103A\u107D]/g, ya);
   // ya

   output =  output.replace( /ha + ya/g, ya + ha);
   // reorder

   output =  output.replace( /\u108A/g, wa + ha);
   // wa ha

   ////////////////////// Reordering

   output =  output.replace( /(\u1031)?(\u103C)?([\u1000-\u1021])\u1064/g, "\u1064$1$2$3");
   // reordering kinzi
   output =  output.replace( /(\u1031)?(\u103C)?([\u1000-\u1021])\u108B/g, "\u1064$1$2$3\u102D");
   // reordering kinzi lgt
   output =  output.replace( /(\u1031)?(\u103C)?([\u1000-\u1021])\u108C/g, "\u1064$1$2$3\u102E");
   // reordering kinzi lgtsk
   output =  output.replace( /(\u1031)?(\u103C)?([\u1000-\u1021])\u108D/g, "\u1064$1$2$3\u1036");
   // reordering kinzi ttt

   ////////////////////////////////////////

   output =  output.replace( /\u105A/g, tallAA + asat);
   output =  output.replace( /\u108E/g, vi + ans);
   // lgt ttt
   output =  output.replace( /\u1033/g, u);
   output =  output.replace( /\u1034/g, uu);
   output =  output.replace( /\u1088/g, ha + u);
   // ha  u
   output =  output.replace( /\u1089/g, ha + uu);
   // ha  uu

   ///////////////////////////////////////

   output =  output.replace( /\u1039/g, "\u103A");
   output =  output.replace( /[\u1094\u1095]/g, db);
   // aukmyint

   ///////////////////////////////////////


   output =  output.replace( /\u1064/g, "\u1004\u103A\u1039");

   output =  output.replace( /\u104E/g, "\u104E\u1004\u103A\u1038");

   output =  output.replace( /\u1086/g, "\u103F");

   output =  output.replace( /\u1060/g, '\u1039\u1000');
   output =  output.replace( /\u1061/g, '\u1039\u1001');
   output =  output.replace( /\u1062/g, '\u1039\u1002');
   output =  output.replace( /\u1063/g, '\u1039\u1003');
   output =  output.replace( /\u1065/g, '\u1039\u1005');
   output =  output.replace( /[\u1066\u1067]/g, '\u1039\u1006');
   output =  output.replace( /\u1068/g, '\u1039\u1007');
   output =  output.replace( /\u1069/g, '\u1039\u1008');
   output =  output.replace( /\u106C/g, '\u1039\u100B');
   output =  output.replace( /\u1070/g, '\u1039\u100F');
   output =  output.replace( /[\u1071\u1072]/g, '\u1039\u1010');
   output =  output.replace( /[\u1073\u1074]/g, '\u1039\u1011');
   output =  output.replace( /\u1075/g, '\u1039\u1012');
   output =  output.replace( /\u1076/g, '\u1039\u1013');
   output =  output.replace( /\u1077/g, '\u1039\u1014');
   output =  output.replace( /\u1078/g, '\u1039\u1015');
   output =  output.replace( /\u1079/g, '\u1039\u1016');
   output =  output.replace( /\u107A/g, '\u1039\u1017');
   output =  output.replace( /\u107B/g, '\u1039\u1018');
   output =  output.replace( /\u107C/g, '\u1039\u1019');
   output =  output.replace( /\u1085/g, '\u1039\u101C');
   output =  output.replace( /\u106D/g, '\u1039\u100C');

   output =  output.replace( /\u1091/g, '\u100F\u1039\u100D');
   output =  output.replace( /\u1092/g, '\u100B\u1039\u100C');
   output =  output.replace( /\u1097/g, '\u100B\u1039\u100B');
   output =  output.replace( /\u106F/g, '\u100E\u1039\u100D');
   output =  output.replace( /\u106E/g, '\u100D\u1039\u100D');

   /////////////////////////////////////////////////////////

   output =  output.replace( /(\u103C)([\u1000-\u1021])(\u1039[\u1000-\u1021])?/g, "$2$3$1");
   // reordering ra

   output = output.replace(/(([\u1000-\u101C\u101E-\u102A\u102C\u102E-\u103F\u104C-\u109F\u0020]))(\u1040)/g, function($0, $1){return $1 ? $1 + '\u101D' : $0 + $1;});
   // zero and wa

   output =  output.replace( /(\u1040)(?=[\u1000-\u101C\u101E-\u102A\u102C\u102E-\u103F\u104C-\u109F\u0020])/g, "\u101D");
   // zero and wa

   output = output.replace(/(([\u1000-\u101C\u101E-\u102A\u102C\u102E-\u103F\u104C-\u109F\u0020]))(\u1047)/g, function($0, $1){return $1 ? $1 + '\u101B' : $0 + $1;});
   // seven and ra

   output =  output.replace( /(\u1047)( ? = [\u1000 - \u101C\u101E - \u102A\u102C\u102E - \u103F\u104C - \u109F\u0020])/g, "\u101B");
   // seven and ra

   output =  output.replace( /(\u1031)?([\u1000-\u1021])(\u1039[\u1000-\u1021])?([\u102D\u102E\u1032])?([\u1036\u1037\u1038]){0,2}([\u103B-\u103E])*([\u102F\u1030])?([\u102D\u102E\u1032])?/g, "$2$3$6$1$4$8$7$5");
   // reordering storage order

   return output;

}//Z1_Uni

var _curFont=getcookie("leikpyar_converter_font")||1;var _enabled=getcookie("leikpyar_converter_enable")||2;var _origFont;var  _html;var _title;window.onload=leikpyar_init;

function $(_s){
	return document.getElementById(_s);
}

function leikpyar_init(){
	if(!/[\u1000-\u109F]/.test(document.body.innerHTML)) return; //non-burmese characters
	if(/(?:action=edit|mail\.google\.com)/.test(location.href)) return; //un-supported sites
	if(/[\u1004\u100A\u1014]\u1039/.test(document.body.innerHTML) && !/[\u1004\u100A\u1014]\u103A/.test(document.body.innerHTML)){ //Zawgyi-One
		_origFont=1;
	}else if(/[\u1004\u100A\u1014]\u103A/.test(document.body.innerHTML)){ //Unicode 5.1
		_origFont=2;
	}
	addStyle({css:'.converter span{vertical-align:middle;font-family:Arial;}.converter{top:20px;right:0;z-index:99999;padding:5px;text-align:center;position:absolute;border:#87CEFA solid 1px;background-color:#e5ecf9;filter:alpha(opacity=80);-moz-opacity:0.8;opacity:0.8;font-family:Arial;}'});
	_switch_font(_curFont);
}

function _switch_font(_opt){
	if($("leikpyar_converter")) document.body.removeChild($("leikpyar_converter"));
	if(_enabled==2){
		setcookie("leikpyar_converter_font",_curFont=_opt,1000);
		if(_curFont!=_origFont){
			_convertFont();
			addStyle({id:"leikpyar_converter_style",css:'*{font-family:'+(_curFont==2?'Myanmar3,Parabaik,Padauk':'Zawgyi-One')+' !important;}'});
		}else if(_html && _title){
			document.getElementsByTagName("head")[0].removeChild($("leikpyar_converter_style"));document.body.innerHTML=_html;document.title=_title; 
		}
	}
	var  txtdiv = document.createElement("div");txtdiv.id="leikpyar_converter";txtdiv.className='converter';txtdiv.innerHTML = '<span style="cursor:pointer;" onclick="_deactivate(\'leikpyar_converter\');">[X]&nbsp;<\/span><span>Choose Font Here &nbsp;<\/span><span><select  onchange="_switch_font(this.value);"><option value=1'+(_curFont==1?' selected':'')+'>Zawgyi-One<\/option><option value=2'+(_curFont==2?' selected':'')+'>Unicode5.1<\/option><\/select><\/span>';
	//<span style="cursor:pointer;" onclick="setcookie("leikpyar_converter_enable","'+(_enabled?'1':'2')+'",1000)">&nbsp;['+(_enabled==2?'DISABLE':'ENABLE')+']<\/span>
	document.body.appendChild(txtdiv);
}

function _convertFont(){
	_html=document.body.innerHTML;
	_title=document.title;
	if(/&#[0-9]{1,4};/.test(_html)) _html=_html.replace(/&#([0-9]{1,4});/g,function($0,$1){return String.fromCharCode($1);});
	var a2=_html.split(/[\u1000-\u109F]+/);var _tmp=a2[0];
	var b2=_html.split(/[^\u1000-\u109F]+/);
	if(_curFont-_origFont==1){
		b2 = Z1_Uni(b2.join('||')).split("||");
		_tmp2= Z1_Uni(_title);
	}else{
		b2=Uni_Z1(b2.join('||')).split("||");
		_tmp2=Uni_Z1(_title);
	}
	if(isIE){for(var i=0;i<b2.length-1;i++) _tmp+=b2[i]+a2[i+1];_tmp+=b2[i];}
	else{for(var i=1;i<b2.length-1;i++) _tmp+=b2[i]+a2[i];}
	document.body.innerHTML=_tmp;
	document.title=_tmp2;
}

function addStyle(_opt){
	var ss1 = document.createElement('style');
	ss1.setAttribute("type", "text/css");
	if(_opt.id) ss1.setAttribute("id", _opt.id);
	if (ss1.styleSheet) {
	    ss1.styleSheet.cssText = _opt.css;
	}else {
	    var tt1 = document.createTextNode(_opt.css);
	    ss1.appendChild(tt1);
	}
	var hh1 = document.getElementsByTagName('head')[0];
	hh1.appendChild(ss1);
}

var isGecko= /Gecko/.test(navigator.userAgent);
var isIE= /MSIE/.test(navigator.userAgent);

function _deactivate(_s){
	$(_s).style.display="none";
	$(_s).visible=false;
}

function setcookie(_s,_val,_day) {
	var expires = '';
	if (_day) {
		var _date = new  Date();
		_date.setTime(_date.getTime()+(_day*86400000));
		expires = "; expires="+_date.toGMTString();
	}
	document.cookie = _s+"="+_val+expires+"; path=/";
}

function getcookie(_s) {
	var _t = _s + "=";
	var _ck = document.cookie.split(';');
	for(var i=0;i < _ck.length;i++) {
		var _c = _ck[i];
		while (_c.charAt(0)==' ') _c = _c.substring(1,_c.length);
		if (_c.indexOf(_t) == 0) return _c.substring(_t.length,_c.length);
	}
	return null;
}
