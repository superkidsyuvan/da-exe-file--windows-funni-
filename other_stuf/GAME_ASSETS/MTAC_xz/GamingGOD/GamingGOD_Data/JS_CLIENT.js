setInterval(FRAME, 50);
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var lr = 100
var ud = 50
var VALUEtext=0.1
var character = 0
var playerSTAGE=1
var loc = ""
var lsc = 1
var mpn = 1
var mpfn = 50
var b=100
var db1=false
var db2=false
var db3=false
var db4=false
var db5=false
var db6=false
var audioba = new Audio();
var diolauge = false
var dogstage = 1
var dogBark = false
var pcx = -50
var BITstage=0
var bwe1xp = 100
var bwe1yp = 100
var bwe2xp = 700
var bwe2yp = 700
var chance = 0
var speed = 1
var mouseX = 0
var mouseY = 0
var fireBall = 0
var click_to_move=false
var e1='bwe1'
var e2='bwe1'
var menuDB = false
var settingPAGEdb = false
var map = false
var fb = new Image();
fb.id="fireBALL-1s";
var kkz=0
var kky=0
var inventoryDB=false
var shopSTATE='shop-1'
var hit1o71645918263412=false
var lhaawiwegfnnpgp=false
var item_wanted=1
var frameFORslimeJUMP=0
var movementFORslimeJUMP=0
var ljhafpde = new Image();
var ljhafpsde = new Image();
var uh_the_1_sec_timer=0
var movementDIR=0
var SLIMEY = 'slime'
var eevee_boss_x_pos = 500
var eevee_boss_y_pos = 40
var eevee_boss_activated = false
var state_fly_boss_eevee=0
var eevee_minion_x = 500
var eevee_minion_y = 250
var db7=false
var db8=false
var db9=false
var db10=false
var block_is=0
var battery=0
const d = new Date();
var day = d.getDay();
var targetX=100
var targetY=100
var stateOFopen = 'eevee_boss_enter-0'
var SaveFile = 1
var info = null
var modder_mode = true
var teach = false
var answer = 0
var doorEXIT = false
var monke10002192319123 = false
var eevee_boss_action = '...'

var atlast = document.getElementById("GAME1");

function NPCwanted(npc,xp,yp){
	if(npc==='player'){
		if(playerSTAGE===1){ctx.drawImage(atlast,0,0,50,77,lr,ud,50,77)}
		if(playerSTAGE===2){ctx.drawImage(atlast,200,0,50,77,lr,ud,50,77)}
		if(playerSTAGE===3){ctx.drawImage(atlast,346,0,50,77,lr,ud,50,77)}
		if(playerSTAGE===9){ctx.drawImage(atlast,100,0,50,77,lr,ud,50,77)}
   }
   if(npc==='robot-1' && VALUEtext==6){
   	ctx.drawImage(atlast,397,0,100,77,xp,yp,100,77)
   }
   if(npc==='robot-2' && VALUEtext==6){
   	ctx.drawImage(atlast,397,0,65,77,xp,yp,65,77)
   }
   if(npc==='noob-b-1' && VALUEtext==6){
   	ctx.drawImage(atlast,498,0,50,77,xp,yp,50,77)
   }
   if(npc==='noob-f-1' && VALUEtext==6){
   	ctx.drawImage(atlast,547,0,55,77,xp,yp,55,77)
   }
   if(npc==='diolauge'){
   	ctx.drawImage(atlast,282,83,44,97,500,500,1000,100)
   }
   if(npc==='dog-1-1' && VALUEtext==6){
   	//xp=300 | yp=400
   	ctx.drawImage(atlast,280,132,20,16,xp,yp,40,32)
   }
   if(npc==='dog-1-2' && VALUEtext==6){
   	ctx.drawImage(atlast,300,133,20,16,xp,yp,40,32)
   }
   if(npc==='dog-1-3' && VALUEtext==6){
   	ctx.drawImage(atlast,285,152,34,22,xp,yp,136,88)
   }
   if(npc==='pyrite-cloud' && VALUEtext!=null){
   	ctx.drawImage(atlast,326,135,37,12,xp,yp,148,48)
   }
   if(npc==='diolauge-2' && VALUEtext==7){
   	//reg;yp=150;xp=800;
   	ctx.drawImage(atlast,284,203,50,19,xp,yp,800,152)
   }
   if(npc==='face-1' && VALUEtext==7){
   	ctx.drawImage(atlast,286,180,23,22,xp,yp,92,88)
   }
   if(npc==='bwe1' && VALUEtext==7){
       ctx.drawImage(atlast,312,184,31,18,xp,yp,140,85);
   }
   if(npc==='bwe2' && VALUEtext==7){
       ctx.drawImage(atlast,345,253,32,19,xp,yp,140,85);
   }
   if(npc==='fireBALL-1'){
		fb.src=loc.slice(0,-21)+"Images/fireBALL-1.png";
       ctx.drawImage(fb,xp,yp,50,60)
   }
   if(npc==='shop-1' && VALUEtext==6){
	   var e = new Image();
	   e.src=loc.slice(0,-21)+"Images/shop-1.png";
	   ctx.drawImage(e,xp,yp,180,180)
   }
   if(npc==='shop-1-open' && VALUEtext==6){
       var e = new Image();
	   e.src=loc.slice(0,-21)+"Images/shop-1-open.png";
	   ctx.drawImage(e,xp,yp,180,180)
   }
   if(npc==='stove' && VALUEtext==8){
       var e = new Image();
	   e.src=loc.slice(0,-21)+"Images/mini_ant_stove_or_oven.png";
	   ctx.drawImage(e,xp,yp,80,80)
   }
   if(npc==='cink' && VALUEtext==8){
        var e = new Image();
	   e.src=loc.slice(0,-21)+"Images/sink.png";
	   ctx.drawImage(e,xp,yp,60,60)
   }
   if(npc==='table-1' && VALUEtext==8){
           var e = new Image();
	   e.src=loc.slice(0,-21)+"Images/EtableE.png";
	   ctx.drawImage(e,xp,yp,300,50)
   }
   if(npc==='chef-1' && VALUEtext==8){
       var e = new Image();
	   e.src=loc.slice(0,-21)+"Images/chef-1.png";
	   ctx.drawImage(e,xp,yp,50,68)
   }
   if(npc==='shelf-1' && VALUEtext==8){
	   var e = new Image();
	   e.src=loc.slice(0,-21)+"Images/shelf-1.png";
	   ctx.drawImage(e,xp,yp,38,36)
   }
   if(npc==='table-2' && VALUEtext==8){
	   var d = new Image();
	   d.src=loc.slice(0,-21)+"Images/table-with-chair.png";
	   ctx.drawImage(d,xp,yp,120,60)
   }	
   if(npc==='slime' && VALUEtext!=null){
		ctx.drawImage(ljhafpde,5+frameFORslimeJUMP,15,10,23,xp+movementFORslimeJUMP,yp,20,46);
	}
	if(npc==='slime-REE' && VALUEtext!=null){
		ctx.drawImage(ljhafpsde,5+frameFORslimeJUMP,15,10,23,xp+movementFORslimeJUMP,yp,20,46);
	}
	if(npc==='treeBIG' && VALUEtext!=null){
		ctx.drawImage(atlast,388,104,28,42,xp,yp,56+Math.floor(Math.random()*10)+1,84+Math.floor(Math.random()*15));
	}
	if(npc==='boss_land'){
		var d = new Image();
	   d.src=loc.slice(0,-21)+"Images/boss_land.png";
	   ctx.drawImage(d,xp,yp,808,240)
	}
	if(npc==='stone_boss'){
		var d = new Image();
	   d.src=loc.slice(0,-21)+"Images/stone_move.png";
	   ctx.drawImage(d,xp,yp,34,84)
	}
	if(npc==='eevee_boss'){
		var d = new Image();
	   d.src=loc.slice(0,-21)+"Images/EEVEE_IS_GOD_DONT_TRY_TO_RESIST.png";
	   ctx.drawImage(d,xp,yp)
	}
	if(npc==='eevee_boss_enter-0'){
		var d = new Image();
	   d.src=loc.slice(0,-21)+"Images/eevee_boss_building.png";
	   ctx.drawImage(d,xp,yp,180,180)
	}
	if(npc==='eevee_boss_enter-1'){
		var d = new Image();
	   d.src=loc.slice(0,-21)+"Images/open-1.png";
	   ctx.drawImage(d,xp,yp,180,180)
	}
	if(npc==='eevee_boss_enter-2'){
		var d = new Image();
	   d.src=loc.slice(0,-21)+"Images/open-full.png";
	   ctx.drawImage(d,xp,yp,180,180)
	}
	if(npc==='shield-1'){
		var d = new Image();
	   d.src=loc.slice(0,-21)+"Images/sheild.png";
	   ctx.drawImage(d,eevee_boss_x_pos-45,eevee_boss_y_pos-25,180,180)
	}
    if(npc==='eevee_minions'){
		var d = new Image();
	   d.src=loc.slice(0,-21)+"Images/eevee_minions.png";
	   ctx.drawImage(d,xp,yp,57,57)
	}
	if(npc==='battery'){
		var d = new Image();
	   d.src=loc.slice(0,-21)+"Images/battery.png";
	   ctx.drawImage(d,xp,yp)
	}
	if(npc=='dc02' && VALUEtext==8){
	  var d = new Image();
	  d.src=loc.slice(0,-21)+"Images/door_close_02.png";
	  ctx.drawImage(d,xp,yp,125,125)
	}
	if(npc=='do02' && VALUEtext==8){
	  var d = new Image();
	  d.src=loc.slice(0,-21)+"Images/door_open_02.png";
	  ctx.drawImage(d,xp,yp,125,125)
	}
	if(npc=='explosion'){
		var w = new Image();
		w.src=loc.slice(0,-21)+"Images/bonkable.png";
		ctx.drawImage(w,xp,yp,100,100)
	}
}

function drawSCREEN(){
	if(VALUEtext==0){ctx.fillStyle = "#ffffff";ctx.fillRect(0,0, c.width, c.height);}
	if(VALUEtext==0.1){ctx.fillStyle="#340070";ctx.fillRect(0,0, c.width, c.height);}
	if(VALUEtext==0.2){ctx.fillStyle="#340090";ctx.fillRect(0,0, c.width, c.height);}
	if(VALUEtext==1){ctx.fillStyle = "#ff0000";ctx.fillRect(0,0, c.width, c.height);}
	if(VALUEtext==2){ctx.fillStyle = "#3399ff";ctx.fillRect(0,0, c.width, c.height);}
	if(VALUEtext==3){ctx.fillStyle = "#33cc33";ctx.fillRect(0,0, c.width, c.height);}
	if(VALUEtext==4){ctx.fillStyle = "#ff9900";ctx.fillRect(0,0, c.width, c.height);}
	if(VALUEtext==5){ctx.fillStyle = "#4b0082";ctx.fillRect(0,0, c.width, c.height);}
	if(VALUEtext==6){ctx.drawImage(atlast,12,83,236,197,0,0,1000,1000);}
	if(VALUEtext==7){ctx.fillStyle = "#808080";ctx.fillRect(0,0, c.width, c.height)}
	if(VALUEtext==8){ctx.fillStyle = "#402c20";ctx.fillRect(0,0, c.width, c.height)}
	if(VALUEtext==9){ctx.fillStyle="#1f4007";ctx.fillRect(0,0, c.width, c.height)}
	if(VALUEtext==10){ctx.drawImage(atlast,12,83,236,197,0,0,1000,1000);}
	if(VALUEtext==11){var lingrad = ctx.createLinearGradient(0,0,0,150);lingrad.addColorStop(0, '#1f4007');
	lingrad.addColorStop(1, '#08ec27');ctx.fillStyle = lingrad;ctx.fillRect(0,0,c.width,c.height);}
	if(VALUEtext==12){ctx.fillStyle="#8ec253";ctx.fillRect(0,0, c.width, c.height)}
	if(VALUEtext==13){ctx.fillStyle="#1f4007";ctx.fillRect(0,0, c.width, c.height)}
	if(map==true){ctx.drawImage(atlast,282,291,125,63,0,-45,1000,500);}
}

function BangBaVillage(){
	VALUEtext=6;
	audioba.play()
	document.getElementById('Village1Buttons').style.display='block'
}

function drawPLAYER(dir){
	if(document.getElementById('GAME1').alt==="IMPORTANT FILE NEED" && modder_mode==true){
		document.getElementById('warning').style.display='block';
		document.getElementById('warnTEXT1').innerHTML='Oh Noes!: The File Location For "template-game-001.png" is incorrect. In The Settings Area, Enter The CORRECT location OR Upload The SaveFile("Location")';
		document.getElementById('uploadLOC').style.display='block';
		var audioerror = new Audio();
		var sub=loc.slice(0,-21)
		audioerror.src = sub+"Sounds/error_sound_1.wav"
		if(db3===false){db3=true;audioerror.play();setTimeout(function(){db3=false;},800);}
	}else{
	drawSCREEN();
	if(map==true){}
	if(dir==0){lr=lr-speed}
	if(dir==1){lr=lr+speed}
	if(dir==2){ud=ud-speed}
	if(dir==3){ud=ud+speed}
	if(lr>98&&lr<223&&ud>340&&ud<465){doorEXIT=true}else{doorEXIT=false}
	if(VALUEtext==8){if(doorEXIT==false){NPCwanted('dc02',98,340)}else{NPCwanted('do02',98,340)}}
	if(dogBark==false){if(dogstage===1){NPCwanted('dog-1-1',300,400);NPCwanted(shopSTATE,300,100)}else{if(dogstage===2){NPCwanted('dog-1-2',298,402);NPCwanted(shopSTATE,300,100)}}}else{NPCwanted('dog-1-3',250,350);NPCwanted(shopSTATE,300,100)}
	if(VALUEtext==9){
		NPCwanted('treeBIG',250,0)
		NPCwanted('treeBIG',520,0)
		NPCwanted('treeBIG',130,0)
		NPCwanted('treeBIG',730,0)
		NPCwanted('treeBIG',870,0)
		NPCwanted('treeBIG',211,30)
		NPCwanted('treeBIG',460,30)
		NPCwanted('treeBIG',160,30)
		NPCwanted('treeBIG',670,30)
		NPCwanted('treeBIG',830,30)
		slimeJUMP(100,300,movementDIR)
		if(ud>460){ud=20;VALUEtext=11;}
		if(lr<10){lr=985;VALUEtext=13;}
	}
	if(VALUEtext==12){
		NPCwanted('boss_land',96,100)
		NPCwanted('eevee_boss',eevee_boss_x_pos,eevee_boss_y_pos)
		if(eevee_boss_activated==true){NPCwanted('shield-1',0,0);}
		if(block_is==1){NPCwanted('stone_boss',eevee_minion_x,eevee_minion_y)}
		if(block_is==2){NPCwanted('explosion',eevee_minion_x-25,eevee_minion_y+21) }
		if(block_is==3){NPCwanted('eevee_minions',eevee_minion_x,eevee_minion_y)}
	}
	if(VALUEtext==13){
		NPCwanted(stateOFopen,500,100)
		if(battery==false){NPCwanted('battery',300,75)}
		if(lr>990){VALUEtext=9;lr=15}
	}
	if(BITstage==2){NPCwanted(e1,bwe1xp,bwe1yp);NPCwanted(e2,bwe2xp,bwe2yp);}
	if(VALUEtext!=0.1 && VALUEtext!=0.2){NPCwanted('player',null,null);}
	NPCwanted('robot-1',b,100);
	if(db4===true){NPCwanted('pyrite-cloud',375,pcx);};
	if(mpfn==258){NPCwanted('noob-b-1',50,mpfn);}else{if(mpfn==250){NPCwanted('noob-f-1',50,mpfn);}}
	if(diolauge===true){NPCwanted('diolauge',0,0);}
    if(BITstage==1){NPCwanted('diolauge-2',100,300);NPCwanted('face-1',150,212);
    ctx.fillText("May The Match Begin (Press Shift+Y to Continue)",150,350)}
	if(BITstage==3){NPCwanted('diolauge-2',100,300);NPCwanted('face-1',150,212);ctx.font='20px Arial';
	    ctx.fillText("Not Bad For A Noobie... Still Impressive (Press Shift+Y to Continue)",150,350)}
    if(fireBall==1){NPCwanted('fireBALL-1',mouseX/4,mouseY/4);}
    if(fireBall==2){NPCwanted('fireBALL-1',mouseX/2,mouseY/2);}
    if(fireBall==3){NPCwanted('fireBALL-1',mouseX/2+mouseX/4,mouseY/2+mouseY/4);}
    if(fireBall==4){NPCwanted('fireBALL-1',kkz,kky);}
    if(fireBall==0){NPCwanted('fireBALL-1',-100,-100);};
    if(lr<300+180&&lr+50>300&&ud<100+180&&ud+77>100&&VALUEtext==6){shopSTATE='shop-1-open'}else{shopSTATE='shop-1'}
    if(VALUEtext==6){if(ud<1){ud=430;VALUEtext=10;}}
	if(VALUEtext==10){if(ud>460){ud=20;VALUEtext=6;}if(ud<1){ud=430;VALUEtext=11;}}
	if(VALUEtext==11){if(ud>460){ud=20;VALUEtext=10;}if(ud<1){ud=430;VALUEtext=9;}}
    if(VALUEtext==8){
		if(hit1o71645918263412==false){hit1o71645918263412=true;ud=430;}
        NPCwanted('stove',-20,-20)
        NPCwanted('stove',40,-20)
        NPCwanted('stove',100,-20) 
        NPCwanted('stove',160,-20)
        NPCwanted('stove',220,-20)
        NPCwanted('stove',280,-20)
        NPCwanted('chef-1',450,0)
        NPCwanted('table-1',0,60);NPCwanted('table-1',300,60);NPCwanted('table-1',600,60);NPCwanted('table-1',900,60);
		NPCwanted('table-2',370,200);NPCwanted('table-2',670,300);NPCwanted('table-2',155,167);NPCwanted('table-2',840,345);
        NPCwanted('cink',370,-15)
		NPCwanted('shelf-1',500,10);NPCwanted('shelf-1',540,10);NPCwanted('shelf-1',580,10);
		if(ud<109){ud=110}
    }
    if(VALUEtext==0.1){
		ctx.font='35px Arial';
		ctx.fillStyle = "#ffffff";ctx.fillText("More Than A City",200,50)
		ctx.fillStyle = "#808080";ctx.fillRect(200,110, 200, 50)
		ctx.fillStyle = "#ffffff";ctx.fillText("Play",250,135)
		ctx.fillStyle = "#340070"
	}
  }
}

function locationa(){
	if(document.getElementById('locationsa').value=="BACK_IN_TIME" && document.getElementById('GAME1').alt=="IMPORTANT FILE YES"){
		VALUEtext=7;
		BITstage=1;
		drawSCREEN();
		drawPLAYER("null");
	    NPCwanted('diolauge-2',100,300);
	    NPCwanted('face-1',150,212);
	    ctx.font='30px Arial';
	    ctx.fillText("May The Match Begin (Press Shift+Y to Continue)",150,350)
	}else{
if(document.getElementById('locationsa').value=="E_R_R_O_R_D_I_E" && document.getElementById('GAME1').alt=="IMPORTANT FILE YES"){ document.getElementById("banafieurwrg").style.display='block';
	}else{
	loc = document.getElementById('locationsa').value
	document.getElementById('GAME1').src = loc
	document.getElementById('GAME1').alt="IMPORTANT FILE YES"}
	for (let i = 0; i < document.getElementsByClassName("item-slots").length; i++) {
		document.getElementsByClassName("item-slots")[i].src=loc.slice(0,-21)+"Images/inventory-slot.gif"
    }}
    document.getElementById('aliufgvnigrakuwetfkcegyaesfygcbuyfav').src=loc.slice(0,-21)+"Images/666.gif"
	document.getElementById('iuawrfhnaieucgrawieawueg').src=loc.slice(0,-21)+"Images/left-arrow-reg.png"
	document.getElementById('kauhncaiuwgcbiavlaiefvid').src=loc.slice(0,-21)+"Images/left-arrow-reg.png"
	document.getElementById('item-to-buy-right-now').src=loc.slice(0,-21)+"Images/red_disc.gif"
	document.getElementById("UserDailyId").innerHTML="UserDailyId (for daily check-in verification): "+day.toString()+"191935235"+day.toString()+"10385"
	ljhafpde.src=loc.slice(0,-21)+"Images/Swilm.png"
	ljhafpsde.src=loc.slice(0,-21)+"Images/Swilm2.png";
}

function stopAudioBa(){
	audioba.pause();
	document.getElementById('Village1Buttons').style.display='none'
}

function saveFILE(file){
	if(file==='loca'){
		locationa();
		var a = document.createElement("a");
		var sub=loc.slice(0,-21)
        a.href = window.URL.createObjectURL(new Blob([loc+" "+day], {type: "text/plain"}));
        a.download = "Location.txt";
        a.click();
        document.getElementById('sucess').style.display='block'
        document.getElementById('textinfo3').innerHTML="File Downloaded! Make Sure To Save File To This Location: "+sub+" And Make Sure To Rename To: Location.txt"
	}
	var josn = file.slice(-10,0)
	var can = false
	var abc = null
	if(josn=="1" || josn=="2" || josn=="3"){
	    can=true
	    if(josn=="1"){
	        abc = './GamingGOD_Data/SAVEFILE_1.json'
	    }
	    if(josn=="2"){
	        abc = './GamingGOD_Data/SAVEFILE_2.json'
	    }
	    if(josn=="3"){
	        abc = './GamingGOD_Data/SAVEFILE_3.json'
	    }
	}
	if(file==".json READ1"){
        readTextFile("./SAVEFILES/SAVEFILE_1.json", function(text){
            var info = JSON.parse(text);
            VALUEtext = info[0];
    		stateOFopen = info[1];
    		lr = info[2];
    		ud = info[3];
    		battery = info[4];
        });
	}
}

function clicktomove(){
    if(document.getElementById('click-to-move').innerHTML=='Click To Move - Off'){
      document.getElementById('click-to-move').innerHTML='Click To Move - On';
      click_to_move=true;
      return;
    };
    if(document.getElementById('click-to-move').innerHTML=='Click To Move - On'){
      document.getElementById('click-to-move').innerHTML='Click To Move - Off';
      click_to_move=false;
      return;
    };
}

function dogBarks(){
	if(dogBark==false){	
	    dogBark=true;
		drawSCREEN();
		drawPLAYER("null")
		NPCwanted('dog-1-3',250,350);
		var x = new Audio();
		var sub=loc.slice(0,-21)
	    x.src = sub+'Sounds/Dog_Bark_Sound_1.wav'
	    x.play();
	    setTimeout(function(){
	    	dogBark=false;
	    },500);
	}
}

function slimeJUMP(x,y,move){
	    while(frameFORslimeJUMP!=200 && db5==false){
		    NPCwanted(SLIMEY,x,y);
		    db5=true;
		    setTimeout(function(){
			    frameFORslimeJUMP=frameFORslimeJUMP+10;
			    if(movementDIR==1){movementFORslimeJUMP=movementFORslimeJUMP+10;SLIMEY='slime';};
			    if(movementDIR==2){movementFORslimeJUMP=movementFORslimeJUMP-10;SLIMEY='slime-REE';};
			    db5=false;
		    },50);
	    };
	    if(frameFORslimeJUMP==200){
		    frameFORslimeJUMP=0;
		    return true;
	    };
	    NPCwanted(SLIMEY,x,y);
}

function FRAME(){
	drawSCREEN()
	drawPLAYER("null")
    if(uh_the_1_sec_timer<=21){
		uh_the_1_sec_timer=uh_the_1_sec_timer+1;
		if(VALUEtext==13){
			NPCwanted(stateOFopen,500,100)
			if(battery==false){NPCwanted('battery',300,75)}	
			if(lr>556&&lr<620&&ud>191&&ud<270){
				var aiwufaleiufg = document.getElementById("description").innerHTML
				if(aiwufaleiufg=="Battery"){
					document.getElementById("use-item-button-inventory").style.background='#00FFFF'
					document.getElementById("use-item-button-inventory").style.color='#ffffff'
				}
			}else{
				document.getElementById("use-item-button-inventory").style.background='#ffffff'
				document.getElementById("use-item-button-inventory").style.color='#000000'
			}
			drawPLAYER("null")
		}
		if(VALUEtext==0.1){
		ctx.font='35px Arial';
		ctx.fillStyle = "#ffffff";ctx.fillText("More Than A City",200,50)
		ctx.fillStyle = "#808080";ctx.fillRect(200,110, 200, 50)
		ctx.fillStyle = "#ffffff";ctx.fillText("Play",250,135)
		ctx.fillStyle = "#340070"
		}
		if(VALUEtext==0.2){
			ctx.fillStyle = "#808080";ctx.fillRect(200,110, 500, 50)
			ctx.fillStyle = "#ffffff";ctx.fillText("Save_File_1 [OPEN]",250,135)
			ctx.fillStyle = "#808080";ctx.fillRect(200,210, 500, 50)
			ctx.fillStyle = "#ffffff";ctx.fillText("Save_File_2 [OPEN]",250,235)
			ctx.fillStyle = "#808080";ctx.fillRect(200,310, 500, 50)
			ctx.fillStyle = "#ffffff";ctx.fillText("Save_File_3 [OPEN]",250,335)
			ctx.fillStyle = "#340090"
		}
		if(VALUEtext==9){
		    if(frameFORslimeJUMP==0){
		      movementDIR = Math.floor(Math.random()*3)
		      if(movementFORslimeJUMP<550){
		          var rand = Math.floor(Math.random()*3)
		          if(rand==1 || rand==2 || rand==3){
		              movementDIR=1
		          }
		      }
              if(movementFORslimeJUMP>620){
                 var rand = Math.floor(Math.random()*3)
		          if(rand==1 || rand==2 || rand==3){
		              movementDIR=2
		          } 
              }
		    }
		    if(movementDIR==2){chance=1}
		    if(movementDIR==1){chance=0}
			drawSCREEN();
			drawPLAYER("null")
			slimeJUMP(100,300,movementDIR);
		}
		if(VALUEtext==12){
			if(eevee_boss_activated===true){
				while(state_fly_boss_eevee!=30 && db6==false){
					db6=true
					eevee_boss_y_pos=eevee_boss_y_pos-1
					state_fly_boss_eevee=state_fly_boss_eevee+1
					setTimeout(function(){
						db6=false
					},48)
				}
                if(state_fly_boss_eevee==30){
                    var rand = Math.floor(Math.random()*3)
					if(eevee_boss_action=='...' || eevee_boss_action=='pillarDOOM'){
		              if(rand==1){
						  eevee_boss_action='pillarDOOM'
                          while(eevee_boss_x_pos!=lr && db7==false){
                              db7=true
                              eevee_boss_x_pos += (lr-eevee_boss_x_pos)/10
                              setTimeout(function(){
                                  db7=false
                              },48)
                          }
						  if(monke10002192319123==false){
							  eevee_minion_y=5
							  block_is=1
							  monke10002192319123=true
						  }
						  while(eevee_minion_y<=ud && db8==false){ 
							  db8=true
                              eevee_minion_y += (ud-eevee_minion_y)/10
                              setTimeout(function(){
                                  db8=false
                              },48)
						  }
						  var eeeeeee = Math.round(eevee_minion_y)
						  if(eeeeeee==ud&&block_is==1&&db10==false){
								block_is=2
								db10=true
								NPCwanted('explosion',eevee_minion_x-25,eevee_minion_y+32)
								setTimeout(function(){
									db10=false
									db8=false
									db7=false
									monke10002192319123=false
									block_is=0
									eevee_boss_action='...'
								},108)
						  }else{
							NPCwanted('stone_boss',eevee_minion_x,eevee_minion_y)
						}
					  }                      
					}
					if(eevee_boss_action=='...' || eevee_boss_action=='minionATK'){
						if(rand==2){
							if(monke10002192319123==false){
								monke10002192319123=true
								targetY=Math.floor(Math.random()*481)
								targetX=Math.floor(Math.random()*981)
								eevee_minion_x=Math.floor(Math.random()*981)
								eevee_minion_y=Math.floor(Math.random()*481)
							}
							eevee_boss_action='minionATK'
							block_is=3
							while(eevee_minion_y!=targetY && db8==false){ 
								db8=true
								eevee_minion_y += (targetY-eevee_minion_y)/10
								setTimeout(function(){
									db8=false
								},48)
							}
							var eeeeeee = Math.round(eevee_minion_y)
							if(eeeeeee==targetY){
								while(eevee_minion_x!=targetX && db7==false){ 
									db7=true
									eevee_minion_x += (targetX-eevee_minion_x)/10
									setTimeout(function(){
										db7=false
									},48)
								}
							}
							var eeee3eee = Math.round(eevee_minion_x)
							if(eeee3eee==targetX){
								eevee_boss_action='...'
								db7=false
								db8=false
								block_is=0
								monke10002192319123=false
							}
						}
					}
					if(eevee_boss_action=='...' || eevee_boss_action=='help_am_energy_gone'){
						if(rand==3){
							eevee_boss_action='help_am_energy_gone'
							while(eevee_boss_y_pos!=40 && db8==false){
								db8=true
								eevee_boss_y_pos=eevee_boss_y_pos+1
								setTimeout(function(){
									db8=false
								},48)
							}
						}
					}
                }
			}
		}
		if(VALUEtext==12){
		    if(eevee_boss_activated===false){
		        if(kkz < eevee_boss_x_pos + 103 && kkz + 50 > eevee_boss_x_pos && kky < eevee_boss_y_pos + 145 && kky + 60 > eevee_boss_y_pos){
					console.log('activated');
					eevee_boss_activated=true;
					FRAME();
				};
		    }else{}
		}
		if(BITstage==2 && VALUEtext==7){
			var ewidth = 140
	    	var eheight = 85
	         var fwidth = 52
	         var fheight = 72
             if(kkz < bwe1xp + ewidth && kkz + fwidth > bwe1xp && kky < bwe1yp + ewidth && kky + fheight > bwe1yp){
	                if(e1=='bwe2'){e1='null';}
	             	if(e1=='bwe1'){e1='bwe2';}
	         }
	        if(kkz < bwe2xp + ewidth && kkz + fwidth > bwe2xp && kky < bwe2yp + ewidth && kky + fheight > bwe2yp){
	               if(e2=='bwe2'){e2='null';}
	             	if(e2=='bwe1'){e2='bwe2';}
			};
			if(e2=='null' && e1=='null'){
					BITstage=3;
			}
	    };

		if(BITstage==3 && VALUEtext==7){
					drawSCREEN();
		drawPLAYER("null");
	    NPCwanted('diolauge-2',100,300);
	    NPCwanted('face-1',150,212);
	    ctx.font='20px Arial';
	    ctx.fillText("Not Bad For A Noobie... Still Impressive (Press Shift+Y to Continue)",150,350)
		}
		return false;
		slimeJUMP(100,300,movementDIR);
	}else{
	uh_the_1_sec_timer=0;
  };
  if(VALUEtext==12){
			if(eevee_boss_activated===false){
				if(eevee_boss_x_pos==500){
					eevee_boss_x_pos=505
					drawSCREEN();
			drawPLAYER("null")
				}else{
				eevee_boss_x_pos=500
				drawSCREEN();
			drawPLAYER("null")
			}
		}
	}
  if(VALUEtext==6 && lsc==1){
		drawSCREEN();
		drawPLAYER("null");
		b=105;
		mpfn=250;
		dogstage=1;
		NPCwanted('robot-1',b,100);
		drawSCREEN();
		drawPLAYER("null");
		NPCwanted('noob-f-1',50,mpfn);
		NPCwanted(shopSTATE,300,100);
		drawSCREEN();
		if(dogBark==false){NPCwanted('dog-1-1',300,400);}else{NPCwanted('dog-1-3',250,390);}
		if(db4===true){NPCwanted('pyrite-cloud',375,pcx);};
		drawPLAYER("null");
		lsc=2;
		return true;
	}
	if(VALUEtext==6 && lsc==2){
		drawSCREEN();
		drawPLAYER("null");
		b=100;
		mpfn=258;
		dogstage=2;
		NPCwanted('robot-1',b,100);
		drawSCREEN();
		drawPLAYER("null");
		NPCwanted('noob-b-1',50,mpfn);
		NPCwanted(shopSTATE,300,100);
		drawSCREEN();
		if(dogBark==false){NPCwanted('dog-1-2',298,402);}else{NPCwanted('dog-1-3',250,390);}
		if(db4===true){NPCwanted('pyrite-cloud',375,pcx);};
		drawPLAYER("null");
		lsc=1
		return true;
	}
	if(VALUEtext==7 && BITstage==2){
	    bwe1xp = Math.floor(Math.random()*100)+1;
	    bwe1yp = Math.floor(Math.random()*100)+1;
	    bwe2xp = Math.floor(Math.random()*200)+1;
	    bwe2yp = Math.floor(Math.random()*240)+1;
	   	drawSCREEN();
		drawPLAYER("null");
		NPCwanted(e1,bwe1xp,bwe1yp)
	    NPCwanted(e2,bwe2xp,bwe2yp)
	}
}
function button(){
	var audioe = new Audio();
	var sub=loc.slice(0,-21)
	audioe.src = sub+'Sounds/button_click_1.wav'
	audioe.play();
}

function loadingTRANSITION(){
    var iisus = new Audio();
	var sub=loc.slice(0,-21)
	iisus.src = sub+"Sounds/whoosh_sound.wav"
    iisus.play()
    document.getElementById('transSCREEN').style.display='block';
    document.getElementById('transSCREEN').style.opacity=0;
    setTimeout(function(){
        document.getElementById('transSCREEN').style.opacity=0.25;
        setTimeout(function(){
            document.getElementById('transSCREEN').style.opacity=0.5;
            setTimeout(function(){
                document.getElementById('transSCREEN').style.opacity=0.75;
                setTimeout(function(){
                    document.getElementById('transSCREEN').style.opacity=1;
                    setTimeout(function(){
                        document.getElementById('transSCREEN').style.opacity=0.75;
                        setTimeout(function(){
                            document.getElementById('transSCREEN').style.opacity=0.5;
                            setTimeout(function(){
                                document.getElementById('transSCREEN').style.opacity=0.25;
                                setTimeout(function(){
                                  document.getElementById('transSCREEN').style.opacity=0;
                                },250);
                            },250);
                        },250);
                    },750);
                },250);
            },250);
        },250);
    },250);
    document.getElementById('transSCREEN').style.display='none';
}

function menuBUTTON(request){
    button();
    loadingTRANSITION();
    setTimeout(function(){
        if(request==1 && settingPAGEdb==false){
            document.getElementById('settingPAGE').style.display='block';
			settingPAGEdb=true;
			return;
        }else{
			if(request==1 && settingPAGEdb==true){
				document.getElementById('settingPAGE').style.display='none';
				settingPAGEdb=false;
				return;
			}
		}
        if(request==3 && map==false){
        	 document.getElementById('settingPAGE').style.display='none';map=true;return;
        }else{if(request==3 && map==true){
            document.getElementById('settingPAGE').style.display='none';map=false;return;
        }}
        if(request==4 && inventoryDB==false){
        	 document.getElementById('inventory').style.display='block';inventoryDB=true;return;
        }else{if(request==4 && inventoryDB==true){
            document.getElementById('inventory').style.display='none';inventoryDB=false;return;
        }}
		if(request==0){
			document.getElementById('settingPAGE').style.display='none';
		}
    },1200)
}

function walking(sprint){
	if(VALUEtext===6){
		if(db2===false){
			db2=true
			var audiof = new Audio();
	        var sub=loc.slice(0,-21)
	        audiof.src = sub+'Sounds/Walking_Sound_2.wav'
	        audiof.play();
	        setTimeout(function(){
	        	db2=false
	        },700)
	   if(sprint.code=="ShiftLeft"){speed=10;};
		}}else{
		if(db1===false){
		  	if(sprint.code=="ShiftLeft"){speed=10;};
			db1=true
			var audioe = new Audio();
	        var sub=loc.slice(0,-21)
	        audioe.src = sub+'Sounds/Walking_Sound_1.wav'
	        audioe.play();
	        setTimeout(function(){
	        	db1=false
	        },500)
		}
	}
}

function pyrite_cloud(){
	db4=true
		while(pcx!=50){
		setTimeout(function(){
			pcx=pcx+1;
			drawPLAYER("null");
			NPCwanted('pyrite-cloud',375,pcx);
		},500);
		if(pcx<=50){
			db4=false;
			pcx=0;
			drawPLAYER("null");
			NPCwanted('pyrite-cloud',375,pcx);
			break;
		};
		};
		if(pcx<=50){
			db4=false;
			pcx=0;
			drawPLAYER("null");
			NPCwanted('pyrite-cloud',375,pcx);
		};
		if(pcx>50){
			pyrite_cloud();
		}
}

function whatISshowYES(){
    if(item_wanted==1){document.getElementById('item-to-buy-right-now').src=loc.slice(0,-21)+"Images/red_disc.gif";
    document.getElementById('ITEM').innerHTML="Red Disc"}
    if(item_wanted==0){document.getElementById('item-to-buy-right-now').src=loc.slice(0,-21)+"Images/brown_disc.gif";
    document.getElementById('ITEM').innerHTML="Brown Disc"}
    if(item_wanted==2){document.getElementById('item-to-buy-right-now').src=loc.slice(0,-21)+"Images/grey_disc.gif";
    document.getElementById('ITEM').innerHTML="Grey Disc"}
    if(item_wanted==3){document.getElementById('item-to-buy-right-now').src=loc.slice(0,-21)+"Images/blue_disc.gif";
    document.getElementById('ITEM').innerHTML="Blue Disc"}
    if(item_wanted==4){document.getElementById('item-to-buy-right-now').src=loc.slice(0,-21)+"Images/corndog.png";
    document.getElementById('ITEM').innerHTML="Corn dog"}
}

window.addEventListener('keypress',e => {
	if(e.keyCode===119){
		playerSTAGE=9;drawPLAYER(2);walking(e);
	};
	if(e.keyCode===97){
		playerSTAGE=3;drawPLAYER(0);walking(e);
	};
	if(e.keyCode===100){
		playerSTAGE=1; drawPLAYER(1);walking(e);
	};
	if(e.keyCode===115){
		playerSTAGE=2; drawPLAYER(3);walking(e);
	};
	if(e.keyCode===80){if(db4==false){
		pyrite_cloud()
	}};
	if(e.keyCode===89 && BITstage==1){
	  BITstage=2;
	  drawSCREEN();
	  drawPLAYER("null");
	  NPCwanted('bwe1',100,100);
	  NPCwanted('bwe1',700,700);
	};
	if(e.keyCode===32){
		if(lr<300+180&&lr+50>300&&ud<100+180&&ud+77>100&&VALUEtext==6){
		    if(teach==true){mathQUESTION(1);}
			VALUEtext=8
			drawSCREEN();
		drawPLAYER("null");
				shopSTATE='shop-1';
				hit1o71645918263412=false;
		};
		if(VALUEtext==8&&ud>=109&&ud<=120&&lr>=450&&lr<=476){
			var iisus = new Audio();
	var sub=loc.slice(0,-21)
	iisus.src = sub+"Sounds/whoosh_sound.wav"
    iisus.play()
	lhaawiwegfnnpgp=true;
			document.getElementById('shop1valeight').style.display='block';
		};
		if(lr>98&&lr<223&&ud>340&&ud<465&&VALUEtext==8){
			if(teach==true){mathQUESTION(2);}
			VALUEtext=6
			lr=370
			ud=200
		}
		if(lr>556&&lr<620&&ud>191&&ud<270&&VALUEtext==13&&stateOFopen=='eevee_boss_enter-2'){
			VALUEtext=12
			lr=35
			ud=216
		}
		if(VALUEtext==13){
			if(lr < 425 && battery==0){
				battery=1
				FRAME()
				var item_slot = null
				var item_places = 0
				for (let i = 0; i < document.getElementsByClassName("item-slots").length; i++) {
					if (document.getElementsByClassName("item-slots")[i].alt=="slot-item-gif?"){
						item_slot=i
						document.getElementsByClassName("item-slots")[i].alt="slot-item-gif!"
						break
					}else{
						item_places=item_places+1
					}
    			}
				if(item_places==3){
					battery=0
				}else{
					document.getElementsByClassName("item")[item_places].src=loc.slice(0,-21)+"Images/battery.png"
					battery=item_places
					battery=battery+1
				}
			}
		}
	};
	if(e.keyCode===60){
		if(lhaawiwegfnnpgp==true){
			button();
			document.getElementById('iuawrfhnaieucgrawieawueg').src=loc.slice(0,-21)+"Images/left-arrow-press.png";
			setTimeout(function(){
				document.getElementById('iuawrfhnaieucgrawieawueg').src=loc.slice(0,-21)+"Images/left-arrow-reg.png";		
				if(item_wanted==0){
				   	document.getElementById('iuawrfhnaieucgrawieawueg').src=loc.slice(0,-21)+"Images/arrow-disabled.png";
				}else{item_wanted=item_wanted-1;}
				whatISshowYES();
			},50);
		}
	}
	if(e.keyCode===62){
		if(lhaawiwegfnnpgp==true){
			button();
			document.getElementById('kauhncaiuwgcbiavlaiefvid').src=loc.slice(0,-21)+"Images/left-arrow-press.png"
			setTimeout(function(){
				document.getElementById('kauhncaiuwgcbiavlaiefvid').src=loc.slice(0,-21)+"Images/left-arrow-reg.png"
				if(item_wanted==4){
				   	document.getElementById('kauhncaiuwgcbiavlaiefvid').src=loc.slice(0,-21)+"Images/arrow-disabled.png";
				}else{item_wanted=item_wanted+1;}
				whatISshowYES()
			},50)
		}
	}
	if(e.keyCode==70 && fireBall==0){
	    fireBall=1;
	   	var x = new Audio();
		var y=loc.slice(0,-21)
		x.src = y+"Sounds/fire_start.wav"
		x.play()
	   	drawSCREEN();
		drawPLAYER("null");
	    NPCwanted('fireBALL-1',mouseX/4,mouseY/4);
	    kkz=mouseX/4
	    kky=mouseY/4
	    setTimeout(function(){
	      fireBall=2;
	      drawSCREEN();
	   	drawPLAYER("null");
	      NPCwanted('fireBALL-1',mouseX/2,mouseY/2);
	      kkz=mouseX/2
	      kky=mouseY/2
	      setTimeout(function(){
	          fireBall=3;
	          drawSCREEN();
		drawPLAYER("null");
	         NPCwanted('fireBALL-1',mouseX/2+mouseX/4,mouseY/2+mouseY/4);
	         setTimeout(function(){
	             fireBall=4;
	             kkz = mouseX
	             kky = mouseY
	             NPCwanted('fireBALL-1',kkz,kky);
	   	    	setTimeout(function(){
                	drawSCREEN();
	   	     		drawPLAYER("null");
					kkz=-100
					kky=-100
					ctx.drawImage(fb,kkz,kky,1,1)
					drawSCREEN();
	   	     		drawPLAYER("null");
					fireBall=0;
					drawSCREEN();
	   	     		drawPLAYER("null");
	   	     	},300);
	         },300);
	      },350);
	    },300);
	};
	if(e.keyCode==102){
	    if(c.requestFullscreen){c.requestFullscreen();}else{if(c.webkitRequestFullscreen){c.webkitRequestFullscreen();}else{
        if(c.msRequestFullscreen){c.msRequestFullscreen();}}}
	}
	if(e.keyCode==105){
		menuBUTTON(4)
	}
	console.log(e.keyCode)
});

document.getElementById('uploadLOC').addEventListener('change',()=>{
	var fr = new FileReader();
	fr.readAsText(document.getElementById('uploadLOC').files[0]);
	fr.onload = function(){
		loca = fr.result;
		loc = loca.slice(0,-2)
		document.getElementById('GAME1').alt="IMPORTANT FILE YES"
		document.getElementById('GAME1').src=loc
		console.log(loc)
	    audioba.src = loc.slice(0,-21)+"Sounds/BangBaVillageBackgroundMusic.wav"
		for (let i = 0; i < document.getElementsByClassName("item-slots").length; i++){
		    document.getElementsByClassName("item-slots")[i].src=loc.slice(0,-21)+"Images/inventory-slot.gif";}
    	document.getElementById('aliufgvnigrakuwetfkcegyaesfygcbuyfav').src=loc.slice(0,-21)+"Images/666.gif"
		document.getElementById('iuawrfhnaieucgrawieawueg').src=loc.slice(0,-21)+"Images/left-arrow-reg.png"
		document.getElementById('kauhncaiuwgcbiavlaiefvid').src=loc.slice(0,-21)+"Images/left-arrow-reg.png"
		document.getElementById('item-to-buy-right-now').src=loc.slice(0,-21)+"Images/red_disc.gif"
		ljhafpde.src=loc.slice(0,-21)+"Images/Swilm.png";
		ljhafpsde.src=loc.slice(0,-21)+"Images/Swilm2.png";
	}
});
document.getElementById('uploadLOC2').addEventListener('change',()=>{
	var fr = new FileReader();
	fr.readAsText(document.getElementById('uploadLOC').files[0]);
	fr.onload = function(){
		loca = fr.result;
		loc = loca.slice(0,-21)
		document.getElementById('GAME1').alt="IMPORTANT FILE YES"
		document.getElementById('GAME1').src=loc
	}
});

document.getElementById('myCanvas').addEventListener('mousemove',function(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
    console.log(mouseX+","+mouseY)
});

document.getElementById('MENU_POP_UP').addEventListener('click',function(){
   button();
   if(menuDB==true){
       menuDB=false;
       document.getElementById('MENU_POP').style.display='block';
       return true;
   }else{
        menuDB=true;
       document.getElementById('MENU_POP').style.display='none';
       return false;
   }
});

document.getElementsByClassName("item")[1].addEventListener('click',function(){
	inventory_selection(1)	
})

document.getElementsByClassName("item")[2].addEventListener('click',function(){
	inventory_selection(2)				
})

document.getElementsByClassName("item")[0].addEventListener('click',function(){
	inventory_selection(0)			
})

function inventory_selection(item){
	if(battery>1){
		var c = battery-1
		if(item==c){
			document.getElementById("islots").src=loc.slice(0,-21)+"Images/battery.png"
			document.getElementById("description").innerHTML="Battery"
		}
	}else{
		document.getElementById("islots").src=""
		document.getElementById("description").innerHTML="No Item Selected..."
	}
}	

function useITEM(){
	if(document.getElementById("description").innerHTML=="Battery"){
		if(lr>556&&lr<620&&ud>191&&ud<270&&stateOFopen!='eevee_boss_enter-2'){
			document.getElementById("use-item-button-inventory").style.background='#ffffff'
			document.getElementById("use-item-button-inventory").style.color='#000000'
			document.getElementById("description").innerHTML="No Item Selected"
			document.getElementById("islots").src=" "
			for (let i = 0; i < document.getElementsByClassName("item-slots").length; i++) {
				if (i==battery-1){
					document.getElementsByClassName("item-slots")[i].alt="slot-item-gif?"	
					document.getElementsByClassName("item")[i].src=" "
					break
				}
    		}
			setTimeout(function(){
				stateOFopen='eevee_boss_enter-1'
				setTimeout(function(){
					stateOFopen='eevee_boss_enter-2'
				}, 250);
			}, 250);
		}
	}
}

 function EEVEEBOSS(){
	if(stateOFopen!='eevee_boss_enter-2'){
		document.getElementById('warning').style.display='block';
		document.getElementById('warnTEXT1').innerHTML='Oops! Looks like someone did not unlock this!';
		document.getElementById('uploadLOC').style.display='none';
		var audioerror = new Audio();
		var sub=loc.slice(0,-21)
		audioerror.src = sub+"Sounds/error_sound_1.wav"
		if(db3===false){db3=true;audioerror.play();setTimeout(function(){db3=false;},800);}	
	}else{
		VALUEtext=12
		lr=100
		ud=100
		eevee_boss_activated=false
		eevee_boss_x_pos=500
		eevee_boss_y_pos=40
	}
 }

document.getElementById('myCanvas').addEventListener('click',function(){
    if(click_to_move==true){
        button();
        lr = event.clientX
        ud = event.clientY 
        drawSCREEN();
        drawPLAYER();
        return true;
    }
    if(VALUEtext==0.1&&mouseX>200&&mouseX<400&&mouseY<160&&mouseY>110){
        button();
        VALUEtext=0.2
		return
    }
	if(VALUEtext==0.2){
		if(mouseX>200&&mouseX<500&&mouseY<160&&mouseY>110){
			button();
			SaveFile=1
			saveFILE(".json READ1")
		}
		if(mouseX>200&&mouseX<500&&mouseY<260&&mouseY>210){
			button();
			SaveFile=2
			saveFILE(".json READ2")
		}
		if(mouseX>200&&mouseX<500&&mouseY<360&&mouseY>310){
			button();
			SaveFile=3
			saveFILE(".json READ3")
		}
	}
});

function modderMODE(){
    if(modder_mode==true){
        modder_mode=false
        return
    }else{
        modder_mode=true
        return
    }
}

function teacherMODE(){
if(teach==false){
   teach=true
   document.getElementById("teacher-mode").innerHTML="TEACHER MODE - On"
   return true
}
if(teach==true){
   teach=false
   document.getElementById("teacher-mode").innerHTML="TEACHER MODE - Off"
   return false
}
}

function mathQUESTION(question){
    document.getElementById("MATHquestion").style.display='block'
    if(question==1){
        document.getElementById("MATHquestionPARA").innerHTML="12x12"
        answer=144
    }
    if(question==1){
        document.getElementById("MATHquestionPARA").innerHTML="2+x=13 | What is the Value of X?"
        answer=11
    }
}

function checkANSWER(){
    var sleirhglb = document.getElementById("akdbfapweoufhpawiu").value
    var wliurghgf = answer.toString()
    if(sleirhglb==wliurghgf){
        document.getElementById("MATHquestion").style.display='none'
    }
}

window.addEventListener("error",function(){
  	document.getElementById('warning').style.display='block';
    document.getElementById('warnTEXT1').innerHTML='Error occured while trying to do action, Error: '+Core.Client.message;
	document.getElementById('uploadLOC').style.display='none';
	var audioerror = new Audio();
	var sub=loc.slice(0,-21);
	audioerror.src = sub+"Sounds/error_sound_1.wav";
	return true;  
});

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

