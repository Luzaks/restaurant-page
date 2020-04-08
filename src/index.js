import { listHome, listAbout, listMenu, listContact, header } from './header.js';
import { backgroundLayer, mainTag, tabContainer, backgroundContainer } from  './background-container.js';
import {homeDiv, home} from './home.js';
import {about} from "./about";
import {menu} from './menu.js';
import {contact} from './contact.js';


const bodyTag = document.getElementsByTagName('body')[0];
const divContent = document.getElementById('content');

bodyTag.appendChild(header());
divContent.appendChild(backgroundContainer());
const tabsContainer = document.querySelector('.tabs');
tabsContainer.appendChild(home());
tabsContainer.appendChild(about());
tabsContainer.appendChild(menu());
tabsContainer.appendChild(contact());

listHome.addEventListener('click', () => {
    const targetHome = document.querySelector(listHome.dataset.tabTarget);
    const tabContents = document.querySelectorAll('[data-tab-content]');
    tabContents.forEach(tabContents => {
        tabContents.classList.remove('active');
    });
    targetHome.classList.add('active');
});

listAbout.addEventListener('click', () => {
    const targetAbout = document.querySelector(listAbout.dataset.tabTarget);
    const tabContents = document.querySelectorAll('[data-tab-content]');
    tabContents.forEach(tabContents => {
        tabContents.classList.remove('active');
    });
    targetAbout.classList.add('active');
});

listMenu.addEventListener( 'click', () => {
    const targetMenu = document.querySelector(listMenu.dataset.tabTarget);
    const tabContents = document.querySelectorAll('[data-tab-content]');
    tabContents.forEach(tabContents => {
        tabContents.classList.remove('active');
    });
    targetMenu.classList.add('active');
});

listContact.addEventListener('click', () => {
    const targetContact = document.querySelector(listContact.dataset.tabTarget);
    const tabContents = document.querySelectorAll('[data-tab-content]');
    tabContents.forEach(tabContents => {
        tabContents.classList.remove('active');
    });
    targetContact.classList.add('active');

});