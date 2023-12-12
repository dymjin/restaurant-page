import './styles.css';
import * as barrel from './barrel';

const pageLoad = () => {
    const content = document.getElementById("content");

    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add("content-wrapper");

    const header = document.createElement('div');
    header.classList.add('header');
    const mainLogo = document.createElement('div');

    mainLogo.textContent = "Queen's Cottage";
    mainLogo.classList.add('main-logo');
    const woodOven = document.createElement('img');
    woodOven.setAttribute('src', '../imgs/wood_oven_final.svg');
    woodOven.classList.add('wood-oven');
    header.appendChild(woodOven);
    header.appendChild(mainLogo);

    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
    const home = document.createElement('div');
    tabs.appendChild(home);
    const menu = document.createElement('div');
    tabs.appendChild(menu);
    const contact = document.createElement('div');
    tabs.appendChild(contact);

    const contentBox = document.createElement('div');
    contentBox.setAttribute("id", "contentBox");

    contentWrapper.appendChild(header);
    contentWrapper.appendChild(tabs);
    contentWrapper.appendChild(contentBox);
    content.appendChild(contentWrapper);
    barrel.addHome();
};

export { pageLoad }