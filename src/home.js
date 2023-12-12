function home() {
    const p_wrapper = document.createElement('div');
    p_wrapper.classList.add('p-wrapper');

    const p_item_1 = document.createElement('div');
    p_item_1.classList.add('p-item');
    const p_item_2 = document.createElement('div');
    p_item_2.classList.add('p-item');
    const p_item_3 = document.createElement('div');
    p_item_3.classList.add('p-item');

    const p_header_1 = document.createElement('div');
    p_header_1.textContent = "Our story";
    p_header_1.classList.add('title');
    const p_header_2 = document.createElement('div');
    p_header_2.textContent = "How we do things";
    p_header_2.classList.add('title');
    const p_header_3 = document.createElement('div');
    p_header_3.textContent = "Our promise";
    p_header_3.classList.add('title');


    const p_main_1 = document.createElement('p');
    p_main_1.classList.add('p-main');
    const p_main_2 = document.createElement('p');
    p_main_2.classList.add('p-main');
    const p_main_3 = document.createElement('p');
    p_main_3.classList.add('p-main');
    p_main_1.textContent = "Queen's cottage is a wonderful place to keep cozy and enjoy some wholesome food. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan magna vel turpis porttitor cursus. Aliquam ultrices dictum ligula, a commodo diam auctor molestie. Vivamus vitae convallis justo. Aliquam dui lorem, venenatis nec condimentum id, dapibus eu libero. Aliquam dictum elementum justo, id lobortis neque iaculis sed. Vivamus aliquet mauris dolor, a aliquam purus lobortis sit amet. Vestibulum sit amet sodales dui. Nunc id egestas ligula. Sed tempor vel mi tristique viverra. Phasellus lobortis cursus pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eget est magna. Suspendisse elementum odio sed lorem finibus porta. Nullam ut mauris tristique, efficitur quam suscipit, convallis mi.";
    p_main_2.textContent = "Sed luctus volutpat sagittis. Nam vitae porttitor dui. Sed gravida egestas ornare. Proin lacinia sollicitudin sodales. Phasellus in lacus sit amet nulla mattis porta ut nec urna. Nunc maximus lacus non nibh rhoncus mollis. Pellentesque sodales nibh velit, vulputate semper augue dignissim eleifend. Maecenas neque dolor, maximus vitae semper et, bibendum eget tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor vehicula interdum. Etiam enim est, dignissim et facilisis vitae, egestas ac leo. Duis tincidunt condimentum metus quis hendrerit. Sed id tempus risus. Nullam in lacus facilisis, posuere orci vitae, interdum dui.";
    p_main_3.textContent = "Morbi vehicula in sem et consequat. Pellentesque bibendum efficitur risus non ultrices. Cras auctor elit erat, at sagittis enim ullamcorper et. Integer bibendum lacinia leo, vitae porta massa tempus sed. Vivamus id ante eget nisl efficitur iaculis et sed erat. Nullam et odio turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In quis ipsum suscipit, vulputate turpis a, vehicula mi. Vestibulum sodales libero commodo libero rhoncus pharetra. Nulla tempus purus a finibus ultricies. Mauris auctor vulputate lacus ut porttitor. Donec luctus nec sem in malesuada.";


    p_item_1.appendChild(p_header_1);
    p_item_1.appendChild(p_main_1);

    p_item_2.appendChild(p_header_2);
    p_item_2.appendChild(p_main_2);

    p_item_3.appendChild(p_header_3);
    p_item_3.appendChild(p_main_3);

    p_wrapper.appendChild(p_item_1);
    p_wrapper.appendChild(p_item_2);
    p_wrapper.appendChild(p_item_3);

    const homeTab = document.querySelector(".tabs>div:nth-child(1)");
    homeTab.classList.add('selected-tab');

    const contentBox = document.querySelector('#contentBox');
    contentBox.appendChild(p_wrapper);
}

export { home as addHome };
