// JavaScript Document
  
/* cursor custom*/
    const cursor = document.querySelector('.cursor');

  // Mueve el cursor
  document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });

  // Detecta cuando pasa sobre un enlace
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.classList.add('hover-link');
    });
    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover-link');
    });
  });

const mesActual = new Date();
const nombreMes = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(mesActual);
const fecha = new Date();
const dia = fecha.getDate();
/* poner año actual en automatico */ 
document.getElementById("year").textContent ="Fecha de última actualización: "+dia+" de "+nombreMes+" del "+ new Date().getFullYear();



 