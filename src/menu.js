import {listMenu} from "./header";

export const menu = () => {

    const menuContainer = document.createElement('div');
    const innerMenuContainer = document.createElement('div');
    const menuHeader = document.createElement('h2');
    const tableMenu = document.createElement('table');

    menuHeader.innerHTML = 'Menu à la carte';

    tableMenu.innerHTML = `<tr>
                                    <th></th>
                                    <th>Price</th>
                                </tr>
                                <tr>
                                    <td class="cursive"> Provence</td>
                                </tr>
                                <tr>
                                    <td>St Roman d'Esclans</td>
                                    <td>30 €</td>
                                </tr>
                                <tr>
                                    <td>Domaine de Réal</td>
                                    <td>34 €</td>
                                </tr>
                                <tr>
                                    <td class="cursive">Côteaux Varois en Provence</td>
                                </tr>
                                <tr>
                                    <td>Château La Calisse</td>
                                    <td>38 €</td>
                                </tr>
                                <tr>
                                    <td>Domaine La Margillière "Bastide"</td>
                                    <td>36 €</td>
                                </tr>
                                <tr>
                                    <td class="cursive"> Bandol</td>
                                </tr>
                                <tr>
                                    <td>Château Pibarnon</td>
                                    <td>95 €</td>
                                </tr>
                                <tr>
                                    <td>Château Salette</td>
                                    <td>48 €</td>
                                </tr>
                                <tr>
                                    <td class="cursive"> Palette</td>
                                </tr>
                                <tr>
                                    <td>Château Simone</td>
                                    <td>125 €</td>
                                </tr>
                                <tr>
                                    <td class="cursive"> Corse</td>
                                </tr>
                                <tr>
                                    <td>Close Venturi</td>
                                    <td>46 €</td>
                                </tr>`;

    menuContainer.setAttribute('id', 'menu');
    menuContainer.setAttribute('class', 'menu-content');
    let contentMenu = document.createAttribute('data-tab-content');
    menuContainer.setAttributeNode(contentMenu);


    innerMenuContainer.className = 'inner-menu-content';
    menuHeader.className = ' tab-headers';

    menuContainer.appendChild(innerMenuContainer);
    innerMenuContainer.appendChild(menuHeader);
    innerMenuContainer.appendChild(tableMenu);
    return menuContainer;
};