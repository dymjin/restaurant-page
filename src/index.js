import { pageLoad, barrel } from "./pageLoad";
import icon from '../src/wood_oven_final.svg';
import img1 from '../src/steak_img.jpg';
import img2 from '../src/gnocchi_pasta.jpg';
import img3 from '../src/lamb_kebab.jpg';

const funcList = [barrel.addHome, barrel.addMenu, barrel.addContact];
pageLoad();

const tabs = document.querySelectorAll('.tabs>div');
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        if (tab === document.querySelector('.selected-tab')) {
            return;
        }
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

export { icon, img1, img2, img3 }