function home() {
    const img = document.createElement('img');
    img.classList.add('main-img');
    img.setAttribute("src", "../imgs/cottage.jpg");
    const p_main = document.createElement('p');
    p_main.classList.add('p-main');
    p_main.textContent = "Queen's cottage is a wonderful place to keep cozy and enjoy some wholesome food.";
    const contentBox = document.querySelector('#contentBox');
    contentBox.appendChild(img);
    contentBox.appendChild(p_main);
}

export { home as addHome };
