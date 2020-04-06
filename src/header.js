const listHome = document.createElement('li');
const listAbout = document.createElement('li');
const listMenu = document.createElement('li');
const listContact = document.createElement('li');

export const header = () => {
    const headerTag = document.createElement('header');
    const mainHeader = document.createElement('h1');
    const menuList = document.createElement('ul');

    menuList.appendChild(listHome);
    menuList.appendChild(listAbout);
    menuList.appendChild(listMenu);
    menuList.appendChild(listContact);

    headerTag.className = 'Header';
    mainHeader.classList.add('text-header');
    menuList.classList.add('menu-container');

    listHome.classList.add('menu');
    listAbout.classList.add('menu');
    listMenu.classList.add('menu');
    listContact.classList.add('menu');

    let attHome = document.createAttribute('data-tab-target');
    attHome.value = '#home';
    listHome.setAttributeNode(attHome);
    let attAbout = document.createAttribute('data-tab-target');
    attAbout.value = '#about';
    listAbout.setAttributeNode(attAbout);
    let attMenu = document.createAttribute('data-tab-target');
    attMenu.value = '#menu';
    listMenu.setAttributeNode(attMenu);
    let attContact = document.createAttribute('data-tab-target');
    attContact.value = '#contact';
    listContact.setAttributeNode(attContact);

    mainHeader.innerHTML = 'Le Courtier';
    listHome.innerHTML = 'Home';
    listAbout.innerHTML = 'About';
    listMenu.innerHTML = 'Menu';
    listContact.innerHTML = 'Contact';

    headerTag.appendChild(mainHeader);
    headerTag.appendChild(menuList);

    return headerTag;
};

export {
    listHome,
    listAbout,
    listMenu,
    listContact
}