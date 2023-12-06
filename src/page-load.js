import './styles.css';

export default function pageLoad() {
    const header = document.createElement('h1');
    header.classList.add('header');
    header.textContent = "Queen's cottage";
    const img = document.createElement('img')
    img.classList.add('main-img');
    img.setAttribute("src", "../imgs/cottage.jpg")
    const p_main = document.createElement('p')
    p_main.classList.add('p-main');
    p_main.textContent = "Queen's cottage is a wonderful place to keep cozy and enjoy some wholesome food.";
    const content = document.querySelector('#content');
    content.appendChild(header);
    content.appendChild(img);
    content.appendChild(p_main);
}