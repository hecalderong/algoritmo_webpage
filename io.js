
/***********************************************************************/
/* PARALLAX HOVER FDK *************************************************/
/***********************************************************************/

const sectionFDK = document.getElementById("sectionFDK");
const bgFDK = document.getElementById("bgFDK");
const overlayFDK = document.getElementById("overlayFDK");

const scrollContainer = document.querySelector('.content');
 
const content = document.getElementById("content");
const lastSnapSection = document.getElementById("lastSnapSection");

function updateSnapMode() {
  const triggerPoint = lastSnapSection.offsetTop + lastSnapSection.offsetHeight - (window.innerHeight * 0.0);
  const currentScroll = content.scrollTop;

  if (currentScroll >= triggerPoint) {
    content.classList.add("no-snap");
  } else {
    content.classList.remove("no-snap");
  }
}

content.addEventListener("scroll", updateSnapMode);
window.addEventListener("resize", updateSnapMode);
updateSnapMode();
 
/***********************************************************************/
/* CUSTOM CURSOR ******************************************************/
/***********************************************************************/

const Cdot = document.querySelector('.cursor-dot');
const Cring = document.querySelector('.cursor-ring');

let CmouseX = window.innerWidth / 2;
let CmouseY = window.innerHeight / 2;
let CringX = CmouseX;
let CringY = CmouseY;

/* LISTENER GLOBAL ÚNICO */
document.addEventListener('mousemove', (e) => {

  /* -------- CURSOR -------- */
  CmouseX = e.clientX;
  CmouseY = e.clientY;
  Cdot.style.transform = `translate(${CmouseX}px, ${CmouseY}px)`;

  /* -------- PARALLAX -------- */
  if(sectionFDK){

    const rectFDK = sectionFDK.getBoundingClientRect();

    if(
      e.clientX >= rectFDK.left &&
      e.clientX <= rectFDK.right &&
      e.clientY >= rectFDK.top &&
      e.clientY <= rectFDK.bottom
    ){

      const xFDK = e.clientX - rectFDK.left;
      const yFDK = e.clientY - rectFDK.top;

      const centerXFDK = rectFDK.width / 2;
      const centerYFDK = rectFDK.height / 2;

      const moveXFDK = (xFDK - centerXFDK) / centerXFDK;
      const moveYFDK = (yFDK - centerYFDK) / centerYFDK;
		
		

      bgFDK.style.transform =
        `translate(${moveXFDK * 25}px, ${moveYFDK * 25}px)`;

      overlayFDK.style.transform =
        `translate(${-moveXFDK * 40}px, ${-moveYFDK * 40}px)`;

    } else {
      bgFDK.style.transform = `translate(0px,0px)`;
      overlayFDK.style.transform = `translate(0px,0px)`;
    }
  }

});

/***********************************************************************/
/* CURSOR ANIMATION LOOP **********************************************/
/***********************************************************************/

function Canimate() {

  CringX += (CmouseX - CringX) * 0.1;
  CringY += (CmouseY - CringY) * 0.1;

  Cring.style.transform =
    `translate(${CringX}px, ${CringY}px)`;

  requestAnimationFrame(Canimate);
}

Canimate();

/***********************************************************************/
/* HOVER EFFECTS ******************************************************/
/***********************************************************************/

const hoverTargets = document.querySelectorAll(
  'a, button, input, textarea, select, label, h4, .hover-target, [data-cursor]'
);

hoverTargets.forEach(el => {

  el.addEventListener('mouseenter', () => {
    Cdot.classList.add('is-hover');
    Cring.classList.add('is-hover');
  });

  el.addEventListener('mouseleave', () => {
    Cdot.classList.remove('is-hover');
    Cring.classList.remove('is-hover');
  });

}); 
let windowWidth = window.innerWidth;	
let windowHeight = window.innerHeight;	 
/*/ luxury slow scrollY //////////////////////////////////////////////////////////////////////////////*/ 
 

/* HEADER */
scrollContainer.addEventListener("scroll", () => {
	let scrollPositionY = scrollContainer.scrollTop;
    const header = document.getElementById("header");
    const logo = document.getElementById("logo");
    const btnOpenNav = document.getElementById("btnOpenNav");
	const phone =  document.querySelector(".phone");
	const quate =  document.querySelector(".quate");
	

if(windowWidth > 1024){	
	
    if (scrollPositionY > 100) {
        header.classList.add("scrolled");
        logo.src = "../images/logo.png";
		logo.style.width = "70px";
		logo.style.height = "40px";
		logo.style.marginTop = "55px";
		phone.style.color = "#333";
		quate.style.color = "#333";
		const links = document.querySelectorAll("#nav h4");
		for (let i = 0; i < links.length; i++) {
			links[i].style.color = "#333";
		}
		 
    } else {
        header.classList.remove("scrolled");
        logo.src = "../images/logo.png";
		logo.style.width = "280px";
		logo.style.height = "130px";
		logo.style.marginTop = "55px";
		phone.style.color = "#fff";
		quate.style.color = "#fff";
		 
		const links = document.querySelectorAll("#nav h4");
		for (let i = 0; i < links.length; i++) {
			links[i].style.color = "#fff";
		}

		
    }
	
	
}else{
	 if (scrollPositionY > 10) {
        header.classList.add("scrolled");
        logo.src = "../images/logo.png";
		logo.style.width = "70px";
		logo.style.height = "40px";
		logo.style.marginTop = "21px";
		phone.style.color = "#333";
		quate.style.color = "#333";
		const links = document.querySelectorAll("#nav h4");
		for (let i = 0; i < links.length; i++) {
			links[i].style.color = "#333";
		}
		 btnOpenNav.style.top = "36px";
    } else {
        header.classList.remove("scrolled");
        logo.src = "../images/logo.png";
		logo.style.width = "280px";
		logo.style.height = "130px";
		logo.style.marginTop = "0px";
		phone.style.color = "#fff";
		quate.style.color = "#fff";
		 btnOpenNav.style.top = "75px";
		
		const links = document.querySelectorAll("#nav h4");
		for (let i = 0; i < links.length; i++) {
			links[i].style.color = "#fff";
		}

		
    }
	
}
	
	
});
/*///////////////////////////////////////////////////////////////////////////////*/
/* SCROLL CONSOLE change width */
scrollContainer.addEventListener("resize", () => {	
let windowWidth = window.innerWidth;
    document.getElementById("scrollConsole").innerHTML =  "<br>width: " + windowWidth;
	
	 
	 
	    document.getElementById("scrollConsole").innerHTML =  "<br>width: " + windowWidth;
	
	
}); 


/*//////////////////////////////////////////////////////////////////////////////////////*/	 
/* ========================================================================================
 START SCROLL FOR ANIMATIONS SCROLLY
======================================================================================== */
 
/* ========================================================================================
 START SCROLL FOR ANIMATIONS SCROLLY
======================================================================================== */

const brands = document.querySelector(".brands");  
const brandsStart = brands.offsetTop;  
const brandsEnd = brandsStart + windowHeight; 
const inicio = brandsStart - (windowHeight/2); 
/*for uxui */

const uxui = document.querySelector(".uxui");  
const uxuiStart = uxui.offsetTop;  
const inicio1 = uxuiStart -(windowHeight/2) ; 
const uxuiEnd = uxuiStart + windowHeight; 
/*  for live  */	
/***********************************************************************/
 

scrollContainer.addEventListener("scroll", () => {

  let scrollPositionY = scrollContainer.scrollTop;

/*  for expiriences*/	
/***********************************************************************/
  // Normalizamos el progreso entre exStart y exEnd
  let progress0 = (scrollPositionY - inicio) / (brandsEnd - inicio);
	let progressMove=0;
  // Limitamos entre 0 y 1
  progress0 = Math.max(0, Math.min(progress0, 1));
  progress0= progress0 * 100;	
	 progressMove = progress0 * 0.30;	
	if(progress0>10){
	   document.getElementById("labelOne").style.opacity="1";
	   document.getElementById("labelTwo").style.opacity="1";
	   document.getElementById("labelThree").style.opacity="1";
	   }else{
		   
	   document.getElementById("labelOne").style.opacity="0";
	   document.getElementById("labelTwo").style.opacity="0";
	   document.getElementById("labelThree").style.opacity="0";
	   }
	if(progress0>60){
	   document.getElementById("labelOne").style.opacity="0";
	   document.getElementById("labelTwo").style.opacity="0";
	   document.getElementById("labelThree").style.opacity="0";
	}
	document.getElementById("labelOne").style.marginLeft = progressMove  +"%"; 
	document.getElementById("labelTwo").style.marginRight = progressMove  +"%"; 
	document.getElementById("labelThree").style.marginLeft = progressMove  +"%";
  
  // Normalizamos el progreso entre exStart y exEnd
  let progress1 = (scrollPositionY - inicio1) / (uxuiEnd - inicio1);
	 
  // Limitamos entre 0 y 1
	progress1= -progress1 * 50;
	let changeW1 = 100+progress1;
	let changeW2 = 125+progress1;
	let changeW3 = 150+progress1;
	let changeW4 = 175+progress1;
		document.querySelector(".uxuiItem").style.width = changeW1 +"%";
		document.querySelector(".uxuiItem1").style.width = changeW2 +"%"; 
		document.querySelector(".uxuiItem2").style.width = changeW3 +"%"; 
		document.querySelector(".uxuiItem3").style.width = changeW4 +"%"; 
	 /* movetop */
	let moveTop = -progress1 -(25); 
	let realMoveTop = -moveTop;
	
	let moveTop1 = -progress1 -(50); 
	let realMoveTop1 = -moveTop1;
	
	let moveTop2 = -progress1 -(75); 
	let realMoveTop2 = -moveTop2;
	
	let moveTop3 = -progress1 -(100); 
	let realMoveTop3 = -moveTop3;
	
	if(moveTop>5){
		//document.querySelector(".uxuiItem").style.top = realMoveTop+"vh";
	   }
	if(moveTop1>5){
		//document.querySelector(".uxuiItem1").style.top = realMoveTop1+"vh";
	   }
	
	if(moveTop2>5){
		//document.querySelector(".uxuiItem2").style.top = realMoveTop2+"vh";
	   }
	if(moveTop3>5){
		//document.querySelector(".uxuiItem3").style.top = realMoveTop3+"vh";
	   }
	
  /* SCROLL CONSOLE ************************************************/
  document.getElementById("scrollConsole").innerHTML =
    "Fdx(" + scrollPositionY +") "+ 
    " <br> progres1: " + progress1+ 
    " <br> start: " + moveTop;

});
/***********************************************************************/
/* /* Slider in HERO   ************************************************/
/***********************************************************************/ 

const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
let index = 0;
let timer;

/* DOTS */
slides.forEach((_,i)=>{
  const d=document.createElement('div');
  d.className='dot'+(i===0?' active':'');
  dotsContainer.appendChild(d);
});
const dots=document.querySelectorAll('.dot');

function updateDots(){
  dots.forEach((d,i)=>d.classList.toggle('active',i===index));
}

/* SLIDER */
function goTo(next){
  if(next===index)return;
  clearTimeout(timer);

  const current=slides[index];
  const nextSlide=slides[next];

  current.classList.remove('show-text');
  current.classList.add('hide-text');

  setTimeout(()=>{
    nextSlide.classList.add('incoming');

    setTimeout(()=>{
      current.classList.remove('active','hide-text');
      nextSlide.classList.remove('incoming');
      nextSlide.classList.add('active','show-text');
      index=next;
      updateDots();
      auto();
    },1300);

  },600);
}

function auto(){
  timer=setTimeout(()=>{
    goTo((index+1)%slides.length);
  },13000);
}

auto();

/* TOUCH MODE */
let startX=0;
document.addEventListener('touchstart',e=>{
  startX=e.touches[0].clientX;
},{passive:true});
document.addEventListener('touchend',e=>{
  const dx=e.changedTouches[0].clientX-startX;
  if(Math.abs(dx)>60){
    dx<0
      ? goTo((index+1)%slides.length)
      : goTo((index-1+slides.length)%slides.length);
  }
},{passive:true}); 
/*//////////////////////////////////////////////////////////////////////////////////////*/	






/*//////////////////////////////////////////////////////////////////////////////////////*/	
/***********************************************************************/
/* SideNav menu         ************************************************/
/***********************************************************************/
function openNav(){
	 
var html = document.getElementById("page");	
var body = document.getElementById("body");	
var sideNav = document.getElementById("sideNav");	
	html.style.overflowY = "hidden";
    sideNav.style.display = "block" ; 	
    sideNav.style.zIndex = "99999" ; 
		 
	
	
function sayHi() {
  document.getElementById('audiotag').play()
}
 document.getElementById('audiotag1').play()
setTimeout(sayHi, 3000);
		
}
function closeNav(){
	var html = document.getElementById("page");	
	var body = document.getElementById("body");	
	var sideNav = document.getElementById("sideNav");	
  
	html.style.overflowY = "scroll"; 

    sideNav.style.display = "none" ; 	
    sideNav.style.zIndex = "-999" ; 
 document.getElementById('audiotag0').play()
}
function openSubMenu(){
	document.getElementById("sideNavSecondMenu").style.left = "-50%";
	document.getElementById("sideNavSecondMenuInsideOne").style.display = "block";
	document.getElementById('audiotag1').play();
}
function openSubMenu0(){
	document.getElementById("sideNavSecondMenu").style.left = "-50%";
	document.getElementById("sideNavSecondMenuInsideTwo").style.display = "block";
	document.getElementById('audiotag1').play();
}
function openSubMenu1(){
	document.getElementById("sideNavSecondMenu").style.left = "-50%";
	document.getElementById("sideNavSecondMenuInsideThree").style.display = "block";
	document.getElementById('audiotag').play();
}
function closeSubMenu(){
	document.getElementById("sideNavSecondMenu").style.left = "0%";
	
	document.getElementById("sideNavSecondMenuInsideOne").style.display = "none";
	document.getElementById("sideNavSecondMenuInsideTwo").style.display = "none";
	document.getElementById("sideNavSecondMenuInsideThree").style.display = "none";
	document.getElementById('audiotag0').play();
} 
/***********************************************************************/
/* SideNav menu         ************************************************/
/***********************************************************************/
 /** -----------------------
   ANIMACIÓN NEXT (GLOBAL)
------------------------ **/ 
/***********************************************************************/
/* menu process    ************************************************/
/***********************************************************************/
	function OpenProcess1() {
    document.getElementById("processDesktopTitleItem1").style.borderBottom = "solid 3px #0066CF" ;
    document.getElementById("processDesktopTitleItem2").style.borderBottom = "solid 0px #0066CF" ;
    document.getElementById("processDesktopTitleItem3").style.borderBottom = "solid 0px #0066CF" ;  
    document.getElementById("processDesktopTitleItem4").style.borderBottom = "solid 0px #0066CF" ;  
    document.getElementById("processDesktopTitleItem5").style.borderBottom = "solid 0px #0066CF" ;  
    document.getElementById("processDesktopTitleItem6").style.borderBottom = "solid 0px #0066CF" ;    
	document.getElementById("processDesktopItem1").style.display = "inline-flex";
	document.getElementById("processDesktopItem2").style.display = "none";
	document.getElementById("processDesktopItem3").style.display = "none";	
	document.getElementById("processDesktopItem4").style.display = "none";	
	document.getElementById("processDesktopItem5").style.display = "none";	
	document.getElementById("processDesktopItem6").style.display = "none";	
	}
	function OpenProcess2() {
    document.getElementById("processDesktopTitleItem1").style.borderBottom = "solid 0px #0066CF" ;
    document.getElementById("processDesktopTitleItem2").style.borderBottom = "solid 3px #0066CF" ;
    document.getElementById("processDesktopTitleItem3").style.borderBottom = "solid 0px #0066CF" ;  
    document.getElementById("processDesktopTitleItem4").style.borderBottom = "solid 0px #0066CF" ;  
    document.getElementById("processDesktopTitleItem5").style.borderBottom = "solid 0px #0066CF" ;  
    document.getElementById("processDesktopTitleItem6").style.borderBottom = "solid 0px #0066CF" ;  
	document.getElementById("processDesktopItem1").style.display = "none";
	document.getElementById("processDesktopItem2").style.display = "inline-flex";
	document.getElementById("processDesktopItem3").style.display = "none";	
	document.getElementById("processDesktopItem4").style.display = "none";	
	document.getElementById("processDesktopItem5").style.display = "none";	
	document.getElementById("processDesktopItem6").style.display = "none";	
	}
	function OpenProcess3() {
    document.getElementById("processDesktopTitleItem1").style.borderBottom = "solid 0px #0066CF" ;
    document.getElementById("processDesktopTitleItem2").style.borderBottom = "solid 0px #0066CF" ;
    document.getElementById("processDesktopTitleItem3").style.borderBottom = "solid 3px #0066CF" ;  
    document.getElementById("processDesktopTitleItem4").style.borderBottom = "solid 0px #0066CF" ;  
    document.getElementById("processDesktopTitleItem5").style.borderBottom = "solid 0px #0066CF" ;  
    document.getElementById("processDesktopTitleItem6").style.borderBottom = "solid 0px #0066CF" ;  
	document.getElementById("processDesktopItem1").style.display = "none";
	document.getElementById("processDesktopItem2").style.display = "none";
	document.getElementById("processDesktopItem3").style.display = "inline-flex";	
	document.getElementById("processDesktopItem4").style.display = "none";	
	document.getElementById("processDesktopItem5").style.display = "none";	
	document.getElementById("processDesktopItem6").style.display = "none";	
	}
	function OpenProcess4() {
    document.getElementById("processDesktopTitleItem1").style.borderBottom = "solid 0px #0066CF" ;
    document.getElementById("processDesktopTitleItem2").style.borderBottom = "solid 0px #0066CF" ;
    document.getElementById("processDesktopTitleItem3").style.borderBottom = "solid 0px #0066CF" ;  
    document.getElementById("processDesktopTitleItem4").style.borderBottom = "solid 3px #0066CF" ;  
    document.getElementById("processDesktopTitleItem5").style.borderBottom = "solid 0px #0066CF" ;  
    document.getElementById("processDesktopTitleItem6").style.borderBottom = "solid 0px #0066CF" ;  
	document.getElementById("processDesktopItem1").style.display = "none";
	document.getElementById("processDesktopItem2").style.display = "none";
	document.getElementById("processDesktopItem3").style.display = "none";	
	document.getElementById("processDesktopItem4").style.display = "inline-flex";	
	document.getElementById("processDesktopItem5").style.display = "none";	
	document.getElementById("processDesktopItem6").style.display = "none";	
	}
	function OpenProcess5() {
    document.getElementById("processDesktopTitleItem1").style.borderBottom = "solid 0px #0066CF" ;
    document.getElementById("processDesktopTitleItem2").style.borderBottom = "solid 0px #0066CF" ;
    document.getElementById("processDesktopTitleItem3").style.borderBottom = "solid 0px #0066CF" ;  
    document.getElementById("processDesktopTitleItem4").style.borderBottom = "solid 0px #0066CF" ;  
    document.getElementById("processDesktopTitleItem5").style.borderBottom = "solid 3px #0066CF" ;  
    document.getElementById("processDesktopTitleItem6").style.borderBottom = "solid 0px #0066CF" ;  
	document.getElementById("processDesktopItem1").style.display = "none";
	document.getElementById("processDesktopItem2").style.display = "none";
	document.getElementById("processDesktopItem3").style.display = "none";	
	document.getElementById("processDesktopItem4").style.display = "none";	
	document.getElementById("processDesktopItem5").style.display = "inline-flex";	
	document.getElementById("processDesktopItem6").style.display = "none";	
	}
	function OpenProcess6() {
    document.getElementById("processDesktopTitleItem1").style.borderBottom = "solid 0px #0066CF" ;
    document.getElementById("processDesktopTitleItem2").style.borderBottom = "solid 0px #0066CF" ;
    document.getElementById("processDesktopTitleItem3").style.borderBottom = "solid 0px #0066CF" ;  
    document.getElementById("processDesktopTitleItem4").style.borderBottom = "solid 0px #0066CF" ;  
    document.getElementById("processDesktopTitleItem5").style.borderBottom = "solid 0px #0066CF" ;  
    document.getElementById("processDesktopTitleItem6").style.borderBottom = "solid 3px #0066CF" ;  
	document.getElementById("processDesktopItem1").style.display = "none";
	document.getElementById("processDesktopItem2").style.display = "none";
	document.getElementById("processDesktopItem3").style.display = "none";	
	document.getElementById("processDesktopItem4").style.display = "none";	
	document.getElementById("processDesktopItem5").style.display = "none";	
	document.getElementById("processDesktopItem6").style.display = "inline-flex";	
	}

function openMobileProcess1() {  
	document.getElementById("processMobileItem1").style.display = "block";	
	document.getElementById("processMobileItem2").style.display = "none";
	document.getElementById("processMobileItem3").style.display = "none";	
	document.getElementById("processMobileItem4").style.display = "none";		
	document.getElementById("processMobileItem5").style.display = "none";		
	document.getElementById("processMobileItem6").style.display = "none";	
		
    document.getElementById("processMobileTitle1").style.borderBottom = "solid 3px #0066CF" ;
    document.getElementById("processMobileTitle2").style.borderBottom = " 1px #666 solid" ;
    document.getElementById("processMobileTitle3").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle4").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle5").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle6").style.borderBottom = "1px #666 solid" ;
		
	
 
 	
	}
function openMobileProcess2() { 
	document.getElementById("processMobileItem2").style.display = "block";	
	document.getElementById("processMobileItem1").style.display = "none";
	document.getElementById("processMobileItem3").style.display = "none";	
	document.getElementById("processMobileItem4").style.display = "none";		
	document.getElementById("processMobileItem5").style.display = "none";		
	document.getElementById("processMobileItem6").style.display = "none";		
		
    document.getElementById("processMobileTitle1").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle2").style.borderBottom = "solid 3px #0066CF" ;
    document.getElementById("processMobileTitle3").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle4").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle5").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle6").style.borderBottom = "1px #666 solid" ;
		  
	}	
function openMobileProcess3() { 
	document.getElementById("processMobileItem3").style.display = "block";	
	document.getElementById("processMobileItem1").style.display = "none";
	document.getElementById("processMobileItem2").style.display = "none";	
	document.getElementById("processMobileItem4").style.display = "none";		
	document.getElementById("processMobileItem5").style.display = "none";		
	document.getElementById("processMobileItem6").style.display = "none";		
		
    document.getElementById("processMobileTitle1").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle3").style.borderBottom = "solid 3px #0066CF" ;
    document.getElementById("processMobileTitle2").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle4").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle5").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle6").style.borderBottom = "1px #666 solid" ;
		  
	}
function openMobileProcess4() { 
	document.getElementById("processMobileItem4").style.display = "block";	
	document.getElementById("processMobileItem1").style.display = "none";
	document.getElementById("processMobileItem2").style.display = "none";	
	document.getElementById("processMobileItem3").style.display = "none";		
	document.getElementById("processMobileItem5").style.display = "none";		
	document.getElementById("processMobileItem6").style.display = "none";		
		
    document.getElementById("processMobileTitle1").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle4").style.borderBottom = "solid 3px #0066CF" ;
    document.getElementById("processMobileTitle2").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle3").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle5").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle6").style.borderBottom = "1px #666 solid" ;
		  
	}
function openMobileProcess5() { 
	document.getElementById("processMobileItem5").style.display = "block";	
	document.getElementById("processMobileItem1").style.display = "none";
	document.getElementById("processMobileItem2").style.display = "none";	
	document.getElementById("processMobileItem3").style.display = "none";		
	document.getElementById("processMobileItem4").style.display = "none";		
	document.getElementById("processMobileItem6").style.display = "none";		
		
    document.getElementById("processMobileTitle1").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle5").style.borderBottom = "solid 3px #0066CF" ;
    document.getElementById("processMobileTitle2").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle3").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle4").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle6").style.borderBottom = "1px #666 solid" ;
		  
	}
function openMobileProcess6() { 
	document.getElementById("processMobileItem6").style.display = "block";	
	document.getElementById("processMobileItem1").style.display = "none";
	document.getElementById("processMobileItem2").style.display = "none";	
	document.getElementById("processMobileItem3").style.display = "none";		
	document.getElementById("processMobileItem4").style.display = "none";		
	document.getElementById("processMobileItem5").style.display = "none";		
		
    document.getElementById("processMobileTitle1").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle6").style.borderBottom = "solid 3px #0066CF" ;
    document.getElementById("processMobileTitle2").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle3").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle4").style.borderBottom = "1px #666 solid" ;
    document.getElementById("processMobileTitle5").style.borderBottom = "1px #666 solid" ;
		  
	}	
function scrollToProcess(id) {
  const target = document.getElementById(id);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 700;

  let start = null;

  function animation(currentTime) {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const progress = Math.min(timeElapsed / duration, 1);

    // easing elegante (easeInOutCubic)
    const ease =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
} 



 /** -----------------------
   ANIMACIÓN NEXT (GLOBAL)
------------------------ **/
document.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (!link) return;

    const url = link.getAttribute("href");
    if (!url) return;

    // ===== IGNORAR LINKS ESPECIALES =====
    if (
        url.startsWith("#") ||
        url.startsWith("mailto:") ||
        url.startsWith("tel:") ||
        link.hasAttribute("download") ||
        link.hasAttribute("data-no-transition") ||
        link.target === "_blank"
    ) return;


    // ===== DETECTAR BOTS (SEO CRÍTICO) =====
    const ua = navigator.userAgent.toLowerCase();
    const isBot =
        ua.includes("googlebot") ||
        ua.includes("bingbot") ||
        ua.includes("yandex") ||
        ua.includes("duckduckbot") ||
        ua.includes("baiduspider") ||
        ua.includes("slurp");

    // ===== PERMITIR BOT Y ACCIONES NATIVAS =====
    if (isBot || e.ctrlKey || e.metaKey || e.shiftKey) {
        return; // ❗ NO preventDefault
    }

    // ===== HUMANO NORMAL → ANIMACIÓN =====
    e.preventDefault();
    goNext(url);
});
function goNext(url) {
    const nextBox = document.getElementById("next");

    // fallback seguridad
    if (!nextBox) {
        window.location.href = url;
        return;
    }

    // reset animación
    nextBox.classList.remove("activeNext");
    void nextBox.offsetWidth; // fuerza repaint

    // activa animación
    nextBox.classList.add("activeNext");

    // navega al final
    setTimeout(() => {
        window.location.href = url;
    }, 2500); // debe coincidir con CSS
} 

/***********************************************************************/
/* cards Clip path ******************************************************/
/***********************************************************************/
 
(function () {
  const scrollContainerFdz = document.querySelector(".content");
  const stackFdz = document.querySelector(".js-stackFdz");
  const slidesFdz = [...document.querySelectorAll(".js-slideFdz")];

  if (!scrollContainerFdz || !stackFdz || !slidesFdz.length) return;

  const clampFdz = (vFdz, aFdz, bFdz) => Math.max(aFdz, Math.min(bFdz, vFdz));

  slidesFdz.forEach((slideFdz, iFdz) => {
    const bgFdz = slideFdz.querySelector(".bgFdz");
    const cardImgFdz = slideFdz.querySelector(".cardFdz img");
    const numFdz = slideFdz.querySelector(".numFdz");
    const line1Fdz = slideFdz.querySelector(".labelFdz span");
    const line2Fdz = slideFdz.querySelector(".labelFdz b");
    const cardFdz = slideFdz.querySelector(".cardFdz");

    bgFdz.style.backgroundImage = `url("${slideFdz.dataset.bgFdz}")`;
    cardImgFdz.src = slideFdz.dataset.cardFdz;
    numFdz.textContent = slideFdz.dataset.numFdz;
    line1Fdz.textContent = slideFdz.dataset.line1Fdz;
    line2Fdz.textContent = slideFdz.dataset.line2Fdz;
    cardFdz.style.setProperty("--frameFdz", slideFdz.dataset.frameFdz || "#ffffff");

    slideFdz.style.zIndex = String(iFdz + 1);
  });

  const nFdz = slidesFdz.length;
  const stageVhFdz = 140;

  stackFdz.style.setProperty("--nFdz", nFdz);
  stackFdz.style.setProperty("--stageFdz", stageVhFdz + "vh");

  function renderFdz() {
    const containerScrollTopFdz = scrollContainerFdz.scrollTop;
    const stackTopFdz = stackFdz.offsetTop;
    const stackHeightFdz = stackFdz.offsetHeight;
    const viewportHeightFdz = scrollContainerFdz.clientHeight;
    const totalScrollFdz = stackHeightFdz - viewportHeightFdz;

    const relativeScrollFdz = containerScrollTopFdz - stackTopFdz;
    const gFdz = totalScrollFdz <= 0
      ? 0
      : clampFdz(relativeScrollFdz / totalScrollFdz, 0, 1);

    const tFdz = gFdz * (nFdz - 1);
    const idxFdz = Math.floor(tFdz);
    const localFdz = tFdz - idxFdz;

    slidesFdz.forEach((slideFdz, iFdz) => {
      const maskFdz = slideFdz.querySelector(".slideMaskFdz");
      if (!maskFdz) return;

      if (iFdz === 0) {
        maskFdz.style.clipPath = "inset(0% 0 0 0)";
        maskFdz.style.transform = "translate3d(0,0,0)";
        return;
      }

      if (iFdz < idxFdz + 1) {
        maskFdz.style.clipPath = "inset(0% 0 0 0)";
        maskFdz.style.transform = "translate3d(0,0,0)";
      } else if (iFdz === idxFdz + 1) {
        const topFdz = (1 - localFdz) * 100;
        maskFdz.style.clipPath = `inset(${topFdz}% 0 0 0)`;
        maskFdz.style.transform = `translate3d(0, ${(1 - localFdz) * 18}px, 0)`;
      } else {
        maskFdz.style.clipPath = "inset(100% 0 0 0)";
        maskFdz.style.transform = "translate3d(0,18px,0)";
      }
    });
  }

  let tickingFdz = false;

  function onScrollFdz() {
    if (!tickingFdz) {
      requestAnimationFrame(() => {
        renderFdz();
        tickingFdz = false;
      });
      tickingFdz = true;
    }
  }

  scrollContainerFdz.addEventListener("scroll", onScrollFdz, { passive: true });
  window.addEventListener("resize", renderFdz);
  renderFdz();
})(); 

/***********************************************************************/
/* cluster software window ******************************************************/
/***********************************************************************/
const windowFdy = document.getElementById("windowFdy");
const codeEl = document.getElementById("codeFdy");
const cursor = document.getElementById("cursorFdy");

const searchOverlay = document.getElementById("searchOverlayFdy");
const searchText = document.getElementById("searchTextFdy");
const results = document.getElementById("resultsFdy");


const phrase = "páginas web en Cucuta, Colombia";

const codeLines = [
{t:'// Web Developers\n',c:'commentFdy'},
{t:'const ',c:'keywordFdy'},
{t:'Enginners = "ALGORITMO Agencia Marketing S.A.S.";\n\n',c:'stringFdy'},
{t:'let ',c:'keywordFdy'},
{t:'UX = "Is Loaded";\n\n',c:'functionFdy'},
{t:'var ',c:'keywordFdy'},
{t:'UI = "Is Working";\n\n',c:'functionFdy'},
{t:'Technologies ',c:'keywordFdy'},
{t:'SEO = "Optimum";\n\n',c:'stringFdy'},
{t:'environment ',c:'keywordFdy'},
{t:'SEM = "Advanced";\n\n',c:'functionFdy'},
{t:'function ',c:'keywordFdy'},
{t:'init()',c:'functionFdy'},
{t:' {\n',c:''},
{t:'  renderFunction();\n',c:''},
{t:'}\n\n',c:''},
{t:'init();',c:'functionFdy'}
];

let token=0,char=0,typing;

function resetScene(){

windowFdy.classList.remove("fadeAllFdy");

codeEl.innerHTML="";
searchText.innerHTML="";
results.classList.remove("showFdy");
searchOverlay.classList.remove("showFdy");

token=0;
char=0;

}

function startTyping(){

resetScene();

typing=setInterval(type,25);

}

function type(){

if(token>=codeLines.length){

clearInterval(typing);

setTimeout(startSearch,3000);

return;
}

const line=codeLines[token];

if(char===0){

const span=document.createElement("span");
span.className=line.c;
codeEl.appendChild(span);

}

const span=codeEl.lastChild;

span.textContent+=line.t.charAt(char);

char++;

if(char>=line.t.length){

char=0;
token++;

}

}

function startSearch(){

cursor.style.display="none";

searchOverlay.classList.add("showFdy");

let i=0;

const typeSearch=setInterval(()=>{

searchText.textContent+=phrase.charAt(i);

i++;

if(i>=phrase.length){

clearInterval(typeSearch);

setTimeout(()=>{

results.classList.add("showFdy");

setTimeout(fadeAll,5000);

},600);

}

},40);

}

function fadeAll(){

windowFdy.classList.add("fadeAllFdy");

setTimeout(()=>{

cursor.style.display="inline-block";
startTyping();

},900);

}

startTyping();
 

/*******************************************/
    const speedFDJ = 3000;
    const gapFDJ = 0;

    function getVisibleCardsFDJ() {
      const widthFDJ = window.innerWidth;
      if (widthFDJ < 767) return 2;
      if (widthFDJ < 1024) return 4;
      return 6;
    }
 
   function startCarouselFDJ(carouselFDJ) {
      let indexFDJ = 0;

      setInterval(() => {
        const cardsFDJ = carouselFDJ.querySelectorAll(".carousel-cardFDJ");
        if (!cardsFDJ.length) return;

        const visibleCardsFDJ = getVisibleCardsFDJ();
        const maxIndexFDJ = cardsFDJ.length - visibleCardsFDJ;
        const cardWidthFDJ = cardsFDJ[0].offsetWidth + gapFDJ;

        indexFDJ++;

        if (indexFDJ > maxIndexFDJ) {
          indexFDJ = 0;
        }

        carouselFDJ.scrollTo({
          left: indexFDJ * cardWidthFDJ,
          behavior: "smooth"
        });
      }, speedFDJ);
    }

    function startCarouselReverseFDJ(carouselFDJ) {
      let indexFDJ = 0;

      setInterval(() => {
        const cardsFDJ = carouselFDJ.querySelectorAll(".carousel-cardFDJ");
        if (!cardsFDJ.length) return;

        const visibleCardsFDJ = getVisibleCardsFDJ();
        const maxIndexFDJ = cardsFDJ.length - visibleCardsFDJ;
        const cardWidthFDJ = cardsFDJ[0].offsetWidth + gapFDJ;

        indexFDJ--;

        if (indexFDJ < 0) {
          indexFDJ = maxIndexFDJ;
        }

        carouselFDJ.scrollTo({
          left: indexFDJ * cardWidthFDJ,
          behavior: "smooth"
        });
      }, speedFDJ);
    }

    const carousel1FDJ = document.getElementById("carousel1FDJ");
    const carousel2FDJ = document.getElementById("carousel2FDJ");
    const carousel3FDJ = document.getElementById("carousel3FDJ");
    const carousel4FDJ = document.getElementById("carousel4FDJ");

    startCarouselFDJ(carousel1FDJ);
    startCarouselReverseFDJ(carousel2FDJ);
    startCarouselFDJ(carousel3FDJ);
    startCarouselReverseFDJ(carousel4FDJ);

    window.addEventListener("resize", () => {
      const carouselsFDJ = [carousel1FDJ, carousel2FDJ, carousel3FDJ, carousel4FDJ];

      carouselsFDJ.forEach((carouselFDJ) => {
        const cardsFDJ = carouselFDJ.querySelectorAll(".carousel-cardFDJ");
        if (!cardsFDJ.length) return;

        carouselFDJ.scrollTo({
          left: 0,
          behavior: "smooth"
        });
      });
    });


/***********************************************************************/
/* ovserve process    ************************************************/
/***********************************************************************/
/* ================= OBSERVER SINCRONIZADO ================= */
 const sections = document.querySelectorAll(".observe");
const observer = new IntersectionObserver(
  entries => {
	  
    entries.forEach(entry => {
      const titles = entry.target.querySelectorAll(".title");
      const titles1 = entry.target.querySelectorAll(".title1");
     // const imgs = entry.target.querySelectorAll(".imgEntry");
		
      titles.forEach(title => {
        if (entry.isIntersecting) {
          title.classList.add("show");
        } else {
          title.classList.remove("show");
        }
      });
		
		  titles1.forEach(title1 => {
        if (entry.isIntersecting) {
          title1.classList.add("show");
        } else {
          title1.classList.remove("show");
        }
      });
		
      
    });
  },
  {
    threshold: 0.5
  }
);
sections.forEach(section => observer.observe(section));
  
/*man of the year*
document.getElementById("year").textContent = new Date().getFullYear();	 */