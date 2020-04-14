const homeDiv = document.createElement('div');

export const home = () => {
  const spanHeader = document.createElement('span');
  const spanSlogan = document.createElement('span');
  const menuHr = document.createElement('hr');
  const simpleBr = document.createElement('br');
  const menuSlogan = document.createElement('span');


  homeDiv.className = 'home';
  spanHeader.className = 'span-restaurant-description';
  spanSlogan.className = 'inner-restaurant-description';
  menuHr.className = 'menu-hr';
  menuSlogan.className = 'algerian-font';
  homeDiv.classList.add('active');

  spanHeader.innerHTML = '&#149;Bistrot Restaurant&#149;';
  spanSlogan.innerHTML = 'dans le couloir';
  menuSlogan.innerHTML = 'Menu á la carte';


  homeDiv.setAttribute('id', 'home');
  const contentHome = document.createAttribute('data-tab-content');
  homeDiv.setAttributeNode(contentHome);
  homeDiv.classList.add('active');

  homeDiv.appendChild(spanHeader);
  homeDiv.appendChild(spanSlogan);
  homeDiv.appendChild(menuHr);
  homeDiv.appendChild(simpleBr);
  homeDiv.appendChild(menuSlogan);


  return homeDiv;
};

export {
  homeDiv,
};