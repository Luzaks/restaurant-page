const backgroundLayer = document.createElement('div');
const mainTag = document.createElement('main');
const tabContainer = document.createElement('div');

backgroundLayer.className = 'background-layer';
mainTag.className = 'tab-content';
tabContainer.className = 'tabs';

const backgroundContainer = () => {
    backgroundLayer.appendChild(mainTag);
    mainTag.appendChild(tabContainer);

    return backgroundLayer;
};

export {
    backgroundLayer,
    mainTag,
    tabContainer,
    backgroundContainer
}