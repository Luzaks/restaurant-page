import { listHome, listAbout, listMenu, listContact, header } from './header.js';
import { backgroundLayer, mainTag, tabContainer, backgroundContainer } from  './background-container.js';
import {home} from './home.js';
import {about} from "./about";
import {menu} from './menu.js';
import {contact} from './contact.js';


const bodyTag = document.getElementsByTagName('body')[0];
const divContent = document.getElementById('content');

bodyTag.appendChild(header());
divContent.appendChild(backgroundContainer());
const tabsContainer = document.querySelector('.tabs');
tabsContainer.appendChild(home());

listHome.addEventListener('click', () => {
    bodyTag.appendChild(header());
    divContent.appendChild(backgroundContainer());
    tabsContainer.appendChild(home());
});

listAbout.addEventListener('click', () => {
    bodyTag.appendChild(header());
    divContent.appendChild(backgroundContainer());
    tabsContainer.appendChild(about());
});

listMenu.addEventListener( 'click', () => {
    bodyTag.appendChild(header());
    divContent.appendChild(backgroundContainer());
    tabsContainer.appendChild(menu());
});

listContact.addEventListener('click', () => {
    bodyTag.appendChild(header());
    divContent.appendChild(backgroundContainer());
    tabsContainer.appendChild(contact());
});