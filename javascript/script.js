// JavaScript Document

function banner_close(){
	$("#banner").addClass("banner_close");
};

var health01 = 100;
var health02 = 75;
var health03 = 50;
var health04 = 25;
var health05 = 0;

function buttonA(){
	health01 = 0;
	health02 = 76;
	health03 = 42;
	health04 = 32;
	health05 = 100;
	reloadhealth();
};

function buttonB(){
	health01 = 38;
	health02 = 82;
	health03 = 10;
	health04 = 0;
	health05 = 5;
	reloadhealth();
};

function buttonC(){
	health01 = 0;
	health02 = 0;
	health03 = 36;
	health04 = 10;
	health05 = 60;
	reloadhealth();
};

/**체력 리로드**/
reloadhealth();
function reloadhealth(){
	var health01R = (Math.floor(60+(132 * (((health01 * (-1)))+100)/ 100)).toString(16));
	var health01G = (Math.floor(94+(158 * (health01 / 100))).toString(16));
	var health02R = (Math.floor(60+(132 * (((health02 * (-1)))+100)/ 100)).toString(16));
	var health02G = (Math.floor(94+(158 * (health02 / 100))).toString(16));
	var health03R = (Math.floor(60+(132 * (((health03 * (-1)))+100)/ 100)).toString(16));
	var health03G = (Math.floor(94+(158 * (health03 / 100))).toString(16));
	var health04R = (Math.floor(60+(132 * (((health04 * (-1)))+100)/ 100)).toString(16));
	var health04G = (Math.floor(94+(158 * (health04 / 100))).toString(16));
	var health05R = (Math.floor(60+(132 * (((health05 * (-1)))+100)/ 100)).toString(16));
	var health05G = (Math.floor(94+(158 * (health05 / 100))).toString(16));
	var doa01 = health01==0?{"opacity":"0.5"}:{"opacity":"1"};
	var doa02 = health02==0?{"opacity":"0.5"}:{"opacity":"1"};
	var doa03 = health03==0?{"opacity":"0.5"}:{"opacity":"1"};
	var doa04 = health04==0?{"opacity":"0.5"}:{"opacity":"1"};
	var doa05 = health05==0?{"opacity":"0.5"}:{"opacity":"1"};
	$(".character>td>img").eq(0).css(doa01);
	$(".character>td>img").eq(1).css(doa02);
	$(".character>td>img").eq(2).css(doa03);
	$(".character>td>img").eq(3).css(doa04);
	$(".character>td>img").eq(4).css(doa05);
	$("#health01").css({"background-color":"#"+health01R+health01G+"54"});
	$("#health02").css({"background-color":"#"+health02R+health02G+"54"});
	$("#health03").css({"background-color":"#"+health03R+health03G+"54"});
	$("#health04").css({"background-color":"#"+health04R+health04G+"54"});
	$("#health05").css({"background-color":"#"+health05R+health05G+"54"});
	document.getElementById("health01").innerHTML = health01 +"%";
	document.getElementById("health02").innerHTML = health02 +"%";
	document.getElementById("health03").innerHTML = health03 +"%";
	document.getElementById("health04").innerHTML = health04 +"%";
	document.getElementById("health05").innerHTML = health05 +"%";
};

function watchSta(){
	$(".table").css({"margin-left":"0px"});
	setTimeout(function(){
		closeSta();},5000);
};

function closeSta(){
	$(".table").css({"margin-left":"-2000px"});
};

staStart();

function staStart(){
	/**포지션 초기화**/
	document.getElementById("pos01").innerHTML = "미선택";
	document.getElementById("pos02").innerHTML = "미선택";
	document.getElementById("pos03").innerHTML = "미선택";
	document.getElementById("pos04").innerHTML = "미선택[PLAYER]";
	document.getElementById("pos05").innerHTML = "미선택";
	document.getElementById("pos01").bgColor = "#eeeeee";
	document.getElementById("pos02").bgColor = "#eeeeee";
	document.getElementById("pos03").bgColor = "#eeeeee";
	document.getElementById("pos04").bgColor = "#eeeeee";
	document.getElementById("pos05").bgColor = "#eeeeee";
	/**이미지 초기화**/
	document.getElementById("char01").src = "images/캐릭터00.png";
	document.getElementById("char02").src = "images/캐릭터00.png";
	document.getElementById("char03").src = "images/캐릭터00.png";
	document.getElementById("char04").src = "images/캐릭터00.png";
	document.getElementById("char05").src = "images/캐릭터00.png";
	/**체력**/
	document.getElementById("health01").innerHTML = health01 +"%";
	document.getElementById("health02").innerHTML = health02 +"%";
	document.getElementById("health03").innerHTML = health03 +"%";
	document.getElementById("health04").innerHTML = health04 +"%";
	document.getElementById("health05").innerHTML = health05 +"%";
};

/**

var testvar = 1;

reload();

function reload(){
	setInterval(function(){reloadpos01();},2000);
};

function reloadpos01(){
	testvar = testvar+=1;
	var x = document.getElementById("pos01").innerHTML = testvar;
};

**/