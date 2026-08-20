
/***********************************************************************/
/* Custom cursor             ************************************************/
/***********************************************************************/
const Cdot = document.querySelector('.cursor-dot');
const Cring = document.querySelector('.cursor-ring');

let CmouseX = window.innerWidth / 2;
let CmouseY = window.innerHeight / 2;
let CringX = CmouseX;
let CringY = CmouseY;

// Actualizar posición real del mouse
document.addEventListener('mousemove', (e) => {
  CmouseX = e.clientX;
  CmouseY = e.clientY;

  // Punto va directo al cursor
  Cdot.style.transform = `translate(${CmouseX}px, ${CmouseY}px)`;
});

function Canimate() {
  // El aro persigue al cursor con retardo
  CringX += (CmouseX - CringX) * 0.1;
  CringY += (CmouseY - CringY) * 0.1;

  Cring.style.transform = `translate(${CringX}px, ${CringY}px)`;


const hoverTargets = document.querySelectorAll(
  'a, button,input,textarea,select,label,h4, .hover-target,[data-cursor]'
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

  requestAnimationFrame(Canimate);
}

Canimate();



let windowWidth = window.innerWidth;	 
/*///////////////////////////////////////////////////////////////////////////////*/
(function(){
  const content = document.getElementById('content');
  const height = content.getBoundingClientRect().height - window.innerHeight;

  // Variables de scroll
  let targetY = 0;
  let currentY = 0;
  const ease = 0.08;

  // Escucha scroll normal
  window.addEventListener('scroll', () => {
    targetY = window.scrollY;
  });

  function animate() {
    // Interpolación
    currentY += (targetY - currentY) * ease;
    
    // Transformar el contenedor
    content.style.transform = `translateY(-${currentY}px)`;

    requestAnimationFrame(animate);
  }

  animate();

  // Ajustar el body para que tenga altura real
  document.body.style.height = `${height + window.innerHeight}px`;
})();
/* HEADER */
window.addEventListener("scroll", () => {
	
    const header = document.getElementById("header");
    const logo = document.getElementById("logo");
    const btnOpenNav = document.getElementById("btnOpenNav");
	const phone =  document.querySelector(".phone");
	const quate =  document.querySelector(".quate");
	

if(windowWidth > 1024){	
	
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
        logo.src = "../images/logo-sw-software.png";
		logo.style.width = "200px";
		logo.style.height = "27px";
		logo.style.marginTop = "55px";
		phone.style.color = "#333";
		quate.style.color = "#333";
		const links = document.querySelectorAll("#nav h4");
		for (let i = 0; i < links.length; i++) {
			links[i].style.color = "#333";
		}
		 
    } else {
        header.classList.remove("scrolled");
        logo.src = "logo-serratosweb.png";
		logo.style.width = "300px";
		logo.style.height = "40px";
		logo.style.marginTop = "30px";
		phone.style.color = "#fff";
		quate.style.color = "#fff";
		 
		const links = document.querySelectorAll("#nav h4");
		for (let i = 0; i < links.length; i++) {
			links[i].style.color = "#fff";
		}

		
    }
	
	
}else{
	 if (window.scrollY > 10) {
        header.classList.add("scrolled");
        logo.src = "logo-sw-software.png";
		logo.style.width = "130px";
		logo.style.height = "17px";
		logo.style.marginTop = "13px";
		phone.style.color = "#333";
		quate.style.color = "#333";
		const links = document.querySelectorAll("#nav h4");
		for (let i = 0; i < links.length; i++) {
			links[i].style.color = "#333";
		}
		 btnOpenNav.style.top = "36px";
    } else {
        header.classList.remove("scrolled");
        logo.src = "logo-serratosweb.png";
		logo.style.width = "200px";
		logo.style.height = "25px";
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
window.addEventListener("resize", () => {	
let windowWidth = window.innerWidth;
    document.getElementById("scrollConsole").innerHTML =  "<br>width: " + windowWidth;
	
	 
	 
	
	
}); 

const form = document.getElementById('luxForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    business: document.getElementById('business').value.trim(),
    message: document.getElementById('message').value.trim(),
    website: document.getElementById('website').value // honeypot
  };

  const res = await fetch('mail.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    alert('Mensaje enviado correctamente');
    form.reset();
  } else {
    alert('Error al enviar');
  }
}); 
 
/*//////////////////////////////////////////////////////////////////////////////////////*/	 
/* ========================================================================================
 START SCROLL FOR ANIMATIONS SCROLLY
======================================================================================== */
//const whatIs = document.querySelector(".whatIs");  
// posición INICIAL GET
//const whatIsStart = whatIs.offsetTop; 
window.addEventListener("scroll", () => {
let ScrollPositionY = 	window.scrollY ;
	/*START whatIs*/
	 
	
/* /* SCROLL CONSOLE    ************************************************/
/***********************************************************************/
    document.getElementById("scrollConsole").innerHTML = "Scroll Y: " + ScrollPositionY ;
});
/***********************************************************************/
/* /* SCROLL CONSOLE    ************************************************/
/***********************************************************************/
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
    document.getElementById("processDesktopTitleItem1").style.borderBottom = "solid 3px #b3d143" ;
    document.getElementById("processDesktopTitleItem2").style.borderBottom = "solid 0px #b3d143" ;
    document.getElementById("processDesktopTitleItem3").style.borderBottom = "solid 0px #b3d143" ;  
    document.getElementById("processDesktopTitleItem4").style.borderBottom = "solid 0px #b3d143" ;  
    document.getElementById("processDesktopTitleItem5").style.borderBottom = "solid 0px #b3d143" ;  
    document.getElementById("processDesktopTitleItem6").style.borderBottom = "solid 0px #b3d143" ;    
	document.getElementById("processDesktopItem1").style.display = "inline-flex";
	document.getElementById("processDesktopItem2").style.display = "none";
	document.getElementById("processDesktopItem3").style.display = "none";	
	document.getElementById("processDesktopItem4").style.display = "none";	
	document.getElementById("processDesktopItem5").style.display = "none";	
	document.getElementById("processDesktopItem6").style.display = "none";	
	}
	function OpenProcess2() {
    document.getElementById("processDesktopTitleItem1").style.borderBottom = "solid 0px #b3d143" ;
    document.getElementById("processDesktopTitleItem2").style.borderBottom = "solid 3px #b3d143" ;
    document.getElementById("processDesktopTitleItem3").style.borderBottom = "solid 0px #b3d143" ;  
    document.getElementById("processDesktopTitleItem4").style.borderBottom = "solid 0px #b3d143" ;  
    document.getElementById("processDesktopTitleItem5").style.borderBottom = "solid 0px #b3d143" ;  
    document.getElementById("processDesktopTitleItem6").style.borderBottom = "solid 0px #b3d143" ;  
	document.getElementById("processDesktopItem1").style.display = "none";
	document.getElementById("processDesktopItem2").style.display = "inline-flex";
	document.getElementById("processDesktopItem3").style.display = "none";	
	document.getElementById("processDesktopItem4").style.display = "none";	
	document.getElementById("processDesktopItem5").style.display = "none";	
	document.getElementById("processDesktopItem6").style.display = "none";	
	}
	function OpenProcess3() {
    document.getElementById("processDesktopTitleItem1").style.borderBottom = "solid 0px #b3d143" ;
    document.getElementById("processDesktopTitleItem2").style.borderBottom = "solid 0px #b3d143" ;
    document.getElementById("processDesktopTitleItem3").style.borderBottom = "solid 3px #b3d143" ;  
    document.getElementById("processDesktopTitleItem4").style.borderBottom = "solid 0px #b3d143" ;  
    document.getElementById("processDesktopTitleItem5").style.borderBottom = "solid 0px #b3d143" ;  
    document.getElementById("processDesktopTitleItem6").style.borderBottom = "solid 0px #b3d143" ;  
	document.getElementById("processDesktopItem1").style.display = "none";
	document.getElementById("processDesktopItem2").style.display = "none";
	document.getElementById("processDesktopItem3").style.display = "inline-flex";	
	document.getElementById("processDesktopItem4").style.display = "none";	
	document.getElementById("processDesktopItem5").style.display = "none";	
	document.getElementById("processDesktopItem6").style.display = "none";	
	}
	function OpenProcess4() {
    document.getElementById("processDesktopTitleItem1").style.borderBottom = "solid 0px #b3d143" ;
    document.getElementById("processDesktopTitleItem2").style.borderBottom = "solid 0px #b3d143" ;
    document.getElementById("processDesktopTitleItem3").style.borderBottom = "solid 0px #b3d143" ;  
    document.getElementById("processDesktopTitleItem4").style.borderBottom = "solid 3px #b3d143" ;  
    document.getElementById("processDesktopTitleItem5").style.borderBottom = "solid 0px #b3d143" ;  
    document.getElementById("processDesktopTitleItem6").style.borderBottom = "solid 0px #b3d143" ;  
	document.getElementById("processDesktopItem1").style.display = "none";
	document.getElementById("processDesktopItem2").style.display = "none";
	document.getElementById("processDesktopItem3").style.display = "none";	
	document.getElementById("processDesktopItem4").style.display = "inline-flex";	
	document.getElementById("processDesktopItem5").style.display = "none";	
	document.getElementById("processDesktopItem6").style.display = "none";	
	}
	function OpenProcess5() {
    document.getElementById("processDesktopTitleItem1").style.borderBottom = "solid 0px #b3d143" ;
    document.getElementById("processDesktopTitleItem2").style.borderBottom = "solid 0px #b3d143" ;
    document.getElementById("processDesktopTitleItem3").style.borderBottom = "solid 0px #b3d143" ;  
    document.getElementById("processDesktopTitleItem4").style.borderBottom = "solid 0px #b3d143" ;  
    document.getElementById("processDesktopTitleItem5").style.borderBottom = "solid 3px #b3d143" ;  
    document.getElementById("processDesktopTitleItem6").style.borderBottom = "solid 0px #b3d143" ;  
	document.getElementById("processDesktopItem1").style.display = "none";
	document.getElementById("processDesktopItem2").style.display = "none";
	document.getElementById("processDesktopItem3").style.display = "none";	
	document.getElementById("processDesktopItem4").style.display = "none";	
	document.getElementById("processDesktopItem5").style.display = "inline-flex";	
	document.getElementById("processDesktopItem6").style.display = "none";	
	}
	function OpenProcess6() {
    document.getElementById("processDesktopTitleItem1").style.borderBottom = "solid 0px #b3d143" ;
    document.getElementById("processDesktopTitleItem2").style.borderBottom = "solid 0px #b3d143" ;
    document.getElementById("processDesktopTitleItem3").style.borderBottom = "solid 0px #b3d143" ;  
    document.getElementById("processDesktopTitleItem4").style.borderBottom = "solid 0px #b3d143" ;  
    document.getElementById("processDesktopTitleItem5").style.borderBottom = "solid 0px #b3d143" ;  
    document.getElementById("processDesktopTitleItem6").style.borderBottom = "solid 3px #b3d143" ;  
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
		
    document.getElementById("processMobileTitle1").style.borderBottom = "solid 3px #b3d143" ;
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
    document.getElementById("processMobileTitle2").style.borderBottom = "solid 3px #b3d143" ;
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
    document.getElementById("processMobileTitle3").style.borderBottom = "solid 3px #b3d143" ;
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
    document.getElementById("processMobileTitle4").style.borderBottom = "solid 3px #b3d143" ;
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
    document.getElementById("processMobileTitle5").style.borderBottom = "solid 3px #b3d143" ;
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
    document.getElementById("processMobileTitle6").style.borderBottom = "solid 3px #b3d143" ;
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




/***********************************************************************/
/* ovserve process    ************************************************/
/***********************************************************************/
/* ================= OBSERVER SINCRONIZADO ================= */
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const titles = entry.target.querySelectorAll(".title");

      titles.forEach(title => {
        if (entry.isIntersecting) {
          title.classList.add("show");
        } else {
          title.classList.remove("show");
        }
      });
    });
  },
  {
    threshold: 0.5
  }
);

sections.forEach(section => observer.observe(section));


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


/*man of the year*/
document.getElementById("year").textContent = new Date().getFullYear();	 