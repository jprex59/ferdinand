/***************************Verouillage********************************* */
const lock = document.querySelector('.lock');
const unlock = document.querySelector('.unlock');
const verouillé = document.querySelector('.verouillé');

/****************************Container_Home********************************** */

const container_home = document.querySelector('.container_home');
const settings = document.querySelector('.settings');
const menu = document.querySelector('.menu');
const gps = document.querySelector('.gps');
const home = document.querySelector('.home');
const contact = document.querySelector('.contact');
const cadre = document.querySelector('.cadre');
const bluetooth = document.querySelector('.bluetooth');
const radio = document.querySelector('.radio');
const musique = document.querySelector('.musique');
const meteo = document.querySelector('.meteo');
const vocal = document.querySelector('.vocal');


/******************************container_home*************************/

/**************************container_menu_...*************************/
const container_menu = document.querySelector('.container_menu');
const menu_home = document.querySelector('.menu_home');
const menu_gps = document.querySelector('.menu_gps');
const menu_contact = document.querySelector('.menu_contact');
const menu_meteo = document.querySelector('.menu_meteo');
const menu_vocal = document.querySelector('.menu_vocal');
const menu_settings = document.querySelector('.menu_settings');
const menu_radio = document.querySelector('.menu_radio');
const menu_bluetooth = document.querySelector('.menu_bluetooth');
const menu_musique = document.querySelector('.menu_musique');
const containerSettings = document.querySelector('.containerSettings');

/***************************************Enlever les elements qui font buguer quand je clic pour ouvrir le menu*******************************************/

verouillé.addEventListener('mouseover', () => {
  lock.classList.add('open');
  unlock.classList.add('open');
});

verouillé.addEventListener('mouseout', () => {
    lock.classList.remove('open');
    unlock.classList.remove('open');
 });

verouillé.addEventListener('click', () => {
    lock.style.display = 'none';
    unlock.style.display = 'none';
    verouillé.style.display = 'none';
    container_home.style.display = 'flex';
    container_menu.style.display = 'block';
});

menu_home.addEventListener('click', () => {
    container_menu.classList.remove('open');
    container_home.style.display = 'flex';
    containerSettings.style.display = 'none';
    menu_bluetooth.style.display = 'none';
    menu_gps.style.display = 'none';
    menu_radio.style.display = 'none';
    menu_musique.style.display = 'none';
    menu_contact.style.display = 'none';
    menu_settings.style.display = 'none';
    menu_meteo.style.display = 'none';
    menu_vocal.style.display = 'none';

});

settings.addEventListener('click', () => {
    containerSettings.style.display = 'flex';
    container_home.style.display = 'none';
    container_menu.style.display = 'flex';
    cadre.style.justifyContent = 'flex-start';
    container_menu.classList.add('open');
    container_menu.style.width = '10%';
    menu_home.style.display = 'block';
    menu_settings.style.display = 'block';
});

bluetooth.addEventListener('click', () => {
    container_home.style.display = 'none';
    container_menu.style.display = 'flex';
    cadre.style.justifyContent = 'flex-start';
    container_menu.classList.add('open');
    container_menu.style.width = '10%';
    menu_bluetooth.style.display = 'block';
    menu_home.style.display = 'block';
});

radio.addEventListener('click', () => {
    container_home.style.display = 'none';
    container_menu.style.display = 'flex';
    cadre.style.justifyContent = 'flex-start';
    container_menu.classList.add('open');
    container_menu.style.width = '10%';
    menu_radio.style.display = 'block';
    menu_home.style.display = 'block';
});

vocal.addEventListener('click', () => {
    container_home.style.display = 'none';
    container_menu.style.display = 'flex';
    cadre.style.justifyContent = 'flex-start';
    container_menu.classList.add('open');
    container_menu.style.width = '10%';
    menu_vocal.style.display = 'block';
    menu_home.style.display = 'block';
});

gps.addEventListener('click', () => {
    container_home.style.display = 'none';
    container_menu.style.display = 'flex';
    cadre.style.justifyContent = 'flex-start';
    container_menu.classList.add('open');
    container_menu.style.width = '10%';
    menu_gps.style.display = 'block';
    menu_home.style.display = 'block';
});

contact.addEventListener('click', () => {
    container_home.style.display = 'none';
    container_menu.style.display = 'flex';
    cadre.style.justifyContent = 'flex-start';
    container_menu.classList.add('open');
    container_menu.style.width = '10%';
    menu_contact.style.display = 'block';
    menu_home.style.display = 'block';
});

musique.addEventListener('click', () => {
    container_home.style.display = 'none';
    container_menu.style.display = 'flex';
    cadre.style.justifyContent = 'flex-start';
    container_menu.classList.add('open');
    container_menu.style.width = '10%';
    menu_musique.style.display = 'block';
    menu_home.style.display = 'block';
});
meteo.addEventListener('click', () => {
    container_home.style.display = 'none';
    container_menu.style.display = 'flex';
    cadre.style.justifyContent = 'flex-start';
    container_menu.classList.add('open');
    container_menu.style.width = '10%';
    menu_meteo.style.display = 'block';
    menu_home.style.display = 'block';
});

