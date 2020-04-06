import { listHome, listAbout, listMenu, listContact, header } from './header.js';
import {home} from './home.js';

const bodyTag = document.getElementsByTagName('body')[0];
const divContent = document.getElementById('content');

bodyTag.appendChild(header());
divContent.appendChild(home());

listHome.addEventListener('click', () => {
    bodyTag.appendChild(header());
    divContent.appendChild(home());
});

listAbout.addEventListener('click', () => {
    bodyTag.appendChild(header());
});

listMenu.addEventListener( 'click', () => {
    bodyTag.appendChild(header());
});

listContact.addEventListener('click', () => {
    bodyTag.appendChild(header());
});