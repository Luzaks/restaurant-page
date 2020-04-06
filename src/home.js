export const home = () => {
    const backgroundLayer = document.createElement('div');
    const mainTag = document.createElement('main');
    const tabContainer = document.createElement('div');
    const homeDiv = document.createElement('div');
    const spanHeader = document.createElement('span');
    const spanSlogan = document.createElement('span');
    const menuHr = document.createElement('hr');
    const simpleBr = document.createElement('br');
    const menuSlogan = document.createElement('span');

    backgroundLayer.className = 'background-layer';
    mainTag.className = 'tab-content';
    tabContainer.className = 'tabs';
    homeDiv.className = 'home';
    spanHeader.className = 'span-restaurant-description';
    spanSlogan.className = 'inner-restaurant-description';
    menuHr.className = 'menu-hr';
    menuSlogan.className = 'algerian-font';

    spanHeader.innerHTML = '&#149;Bistrot Restaurant&#149;';
    spanSlogan.innerHTML = 'dans le couloir';
    menuSlogan.innerHTML = 'Menu á la carte';


    homeDiv.setAttribute('id', 'home');
    homeDiv.setAttribute('data-tab-content', '');

    backgroundLayer.className = 'background-layer';
    mainTag.className = 'tab-content';
    tabContainer.className = 'tabs';
    backgroundLayer.appendChild(mainTag);
    mainTag.appendChild(tabContainer);
    tabContainer.appendChild(homeDiv);
    homeDiv.appendChild(spanHeader);
    homeDiv.appendChild(spanSlogan);
    homeDiv.appendChild(menuHr);
    homeDiv.appendChild(simpleBr);
    homeDiv.appendChild(menuSlogan);


    return backgroundLayer;
};