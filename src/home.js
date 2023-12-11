function home() {
    // const img = document.createElement('img');
    // img.classList.add('main-img');
    // img.setAttribute("src", "../imgs/cottage.jpg");
    const p_wrapper = document.createElement('div');
    p_wrapper.classList.add('p-wrapper');
    const p_main_1 = document.createElement('p');
    p_main_1.classList.add('p-main');
    const p_main_2 = document.createElement('p');
    p_main_2.classList.add('p-main');
    p_main_2.textContent = "Sed luctus volutpat sagittis. Nam vitae porttitor dui. Sed gravida egestas ornare. Proin lacinia sollicitudin sodales. Phasellus in lacus sit amet nulla mattis porta ut nec urna. Nunc maximus lacus non nibh rhoncus mollis. Pellentesque sodales nibh velit, vulputate semper augue dignissim eleifend. Maecenas neque dolor, maximus vitae semper et, bibendum eget tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor vehicula interdum. Etiam enim est, dignissim et facilisis vitae, egestas ac leo. Duis tincidunt condimentum metus quis hendrerit. Sed id tempus risus. Nullam in lacus facilisis, posuere orci vitae, interdum dui.";
    p_main_1.textContent = "Queen's cottage is a wonderful place to keep cozy and enjoy some wholesome food. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan magna vel turpis porttitor cursus. Aliquam ultrices dictum ligula, a commodo diam auctor molestie. Vivamus vitae convallis justo. Aliquam dui lorem, venenatis nec condimentum id, dapibus eu libero. Aliquam dictum elementum justo, id lobortis neque iaculis sed. Vivamus aliquet mauris dolor, a aliquam purus lobortis sit amet. Vestibulum sit amet sodales dui. Nunc id egestas ligula. Sed tempor vel mi tristique viverra. Phasellus lobortis cursus pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eget est magna. Suspendisse elementum odio sed lorem finibus porta. Nullam ut mauris tristique, efficitur quam suscipit, convallis mi.";
    const contentBox = document.querySelector('#contentBox');
    // contentBox.appendChild(img);
    p_wrapper.appendChild(p_main_1);
    p_wrapper.appendChild(p_main_2);
    contentBox.appendChild(p_wrapper);
}

export { home as addHome };
