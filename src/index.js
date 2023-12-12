import { pageLoad } from "./pageLoad";
import * as barrel from './barrel';

const funcList = [barrel.addHome, barrel.addMenu, barrel.addContact];
pageLoad();
const tabs = document.querySelectorAll('.tabs>div');
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        while (contentBox.firstChild) {
            contentBox.removeChild(contentBox.firstChild);
        }
        funcList[index]();
        tabs.forEach(tab => tab.classList.remove('selected-tab'));
        tab.classList.add('selected-tab');
    });

    tabs[0].textContent = "Home";
    tabs[1].textContent = "Menu";
    tabs[2].textContent = "Contact";
});