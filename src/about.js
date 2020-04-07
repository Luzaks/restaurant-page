export const about = () => {
    const aboutDiv = document.createElement('div');
    const aboutContainer = document.createElement('div');
    const headerTab = document.createElement('h2');
    let simpleHr = document.createElement('hr');
    let simpleBr = document.createElement('br');
    let simpleHrOne = document.createElement('hr');
    let simpleBrOne = document.createElement('br');
    const welcomeSpan = document.createElement('span');
    const innerWelcomeSpan = document.createElement('span');
    const welcomeDescription = document.createElement('span');

    aboutDiv.className = 'about-content';
    aboutContainer.className = 'inner-about-container';
    headerTab.className = 'tab-headers';
    innerWelcomeSpan.className = 'cursive';

    headerTab.innerHTML = 'About Us';
    innerWelcomeSpan.innerHTML = 'Le Courtier';
    welcomeSpan.innerHTML = `Be welcome to ${innerWelcomeSpan} Bistrot Restaurant.`;
    welcomeDescription.innerHTML = 'Discreetly situated in a roadside corridor of Avenida Madero in Mexico City, with a beautiful and casual design, you will find the perfect match' +
        'between fresh ingredients and imported ones for our everyday ' +
        'menu á la carte.' +
        'We invite you to discover' +
        'all the flavor of our traditional preparations and delicious dishes' +
        'of the french cuisine in an intimate and relaxed atmosphere.';

    aboutDiv.setAttribute('id', 'about');
    aboutDiv.setAttribute('data-tab-content', '');

    aboutDiv.appendChild(aboutContainer);
    aboutContainer.appendChild(headerTab);
    aboutContainer.appendChild(simpleHr);
    aboutContainer.appendChild(simpleBr);
    welcomeSpan.appendChild(innerWelcomeSpan);
    aboutContainer.appendChild(welcomeSpan);
    aboutContainer.appendChild(welcomeDescription);
    aboutContainer.appendChild(simpleBrOne);
    aboutContainer.appendChild(simpleHrOne);

    return aboutDiv;
};