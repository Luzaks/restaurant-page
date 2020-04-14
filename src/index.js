import {
  listHome, listAbout, listMenu, listContact, header,
} from './header';
import { backgroundContainer } from './background-container';
import { home } from './home';
import about from './about';
import menu from './menu';
import contact from './contact';


const bodyTag = document.getElementsByTagName('body')[0];
const divContent = document.getElementById('content');

bodyTag.appendChild(header());
divContent.appendChild(backgroundContainer());
const tabsContainer = document.querySelector('.tabs');
tabsContainer.appendChild(home());
tabsContainer.appendChild(about());
tabsContainer.appendChild(menu());
tabsContainer.appendChild(contact());

const removingSections = (tabContents) => {
  tabContents.forEach(tabContent => {
    tabContent.classList.remove('active');
  });
};

const tabContent = () => document.querySelectorAll('[data-tab-content]');

listHome.addEventListener('click', () => {
  const targetHome = document.querySelector(listHome.dataset.tabTarget);
  removingSections(tabContent());
  targetHome.classList.add('active');
});

listAbout.addEventListener('click', () => {
  const targetAbout = document.querySelector(listAbout.dataset.tabTarget);
  removingSections(tabContent());
  targetAbout.classList.add('active');
});

listMenu.addEventListener('click', () => {
  const targetMenu = document.querySelector(listMenu.dataset.tabTarget);
  removingSections(tabContent());
  targetMenu.classList.add('active');
});

listContact.addEventListener('click', () => {
  const targetContact = document.querySelector(listContact.dataset.tabTarget);
  removingSections(tabContent());
  targetContact.classList.add('active');
});