import { listHome, listAbout, listMenu, listContact, header } from './header.js';

const bodyTag = document.getElementsByTagName('body')[0];
const divContent = document.getElementById('content')[0];

bodyTag.appendChild(header());
divContent.appendChild();

listHome.addEventListener('click', () => {
    bodyTag.appendChild(header());
    divContent.appendChild();
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