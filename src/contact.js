import {listContact} from "./header";

export const contact = () => {
    const contactDiv = document.createElement('div');
    const innerContactDiv = document.createElement('div');
    const contactHeader = document.createElement('h2');
    const simpleHrOne = document.createElement('hr');
    const simpleHr = document.createElement('hr');
    const simpleBrOne = document.createElement('br');
    const simpleBr = document.createElement('br');
    const contactSpanOne  = document.createElement('span');
    const contactSpanTwo  = document.createElement('span');
    const contactSpanThree  = document.createElement('span');

    contactDiv.setAttribute('id', 'contact');
    contactDiv.setAttribute('class', 'contact-content');
    let contentContact = document.createAttribute('data-tab-content');
    contactDiv.setAttributeNode(contentContact);
    innerContactDiv.className = 'inner-contact-container';
    contactHeader.className = 'tab-headers';

    contactHeader.innerHTML = 'Contact';
    contactSpanOne.innerHTML = 'Isabel la Católica 29, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX.';
    contactSpanTwo.innerHTML = '+5536480000';
    contactSpanThree.innerHTML = 'lecourtier@org.com';

    contactDiv.appendChild(innerContactDiv);
    innerContactDiv.appendChild(contactHeader);
    innerContactDiv.appendChild(simpleHrOne);
    innerContactDiv.appendChild(simpleBrOne);
    innerContactDiv.appendChild(contactSpanOne);
    innerContactDiv.appendChild(contactSpanTwo);
    innerContactDiv.appendChild(contactSpanThree);
    innerContactDiv.appendChild(simpleBr);
    innerContactDiv.appendChild(simpleHr);

    return contactDiv;
};