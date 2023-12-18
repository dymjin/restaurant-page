function menu() {
    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menu-wrapper');

    const menu_item_1 = document.createElement('div');
    const text_wrapper_1 = document.createElement('div');
    const menu_title_1 = document.createElement('div');
    menu_title_1.textContent = "Roast beef with assorted sides";
    const menu_description_1 = document.createElement('div');
    menu_description_1.textContent = "Donec id velit quis metus gravida eleifend. Nullam consequat fermentum metus et volutpat. Morbi vehicula gravida diam ultricies finibus. Quisque et mollis ipsum. Donec ac metus sit amet ex gravida scelerisque. Morbi tristique luctus augue, vel tincidunt enim. Aliquam erat volutpat. Sed dictum interdum purus, sit amet faucibus eros sodales quis. Sed vitae dignissim turpis.";
    const menu_img_1 = document.createElement('img');
    menu_img_1.setAttribute("src", "../imgs/steak_img.jpg");

    const menu_item_2 = document.createElement('div');
    const text_wrapper_2 = document.createElement('div');
    const menu_title_2 = document.createElement('div');
    menu_title_2.textContent = "Gnocchi seafood pasta";
    const menu_description_2 = document.createElement('div');
    menu_description_2.textContent = "Pellentesque ut fermentum ante. Mauris sed elit ut sem ornare blandit. In convallis, ipsum eget tempus laoreet, leo dolor gravida leo, sed porta leo felis sit amet lacus. Nullam pellentesque, risus quis blandit egestas, mi arcu sagittis risus, et tempus orci ipsum a tortor. Donec tristique nisl et dapibus condimentum. Sed ante libero, eleifend in consequat sed, condimentum sit amet orci. Sed nec nunc augue.";
    const menu_img_2 = document.createElement('img');
    menu_img_2.setAttribute("src", "../imgs/gnocchi_pasta.jpg");

    const menu_item_3 = document.createElement('div');
    const text_wrapper_3 = document.createElement('div');
    const menu_title_3 = document.createElement('div');
    menu_title_3.textContent = "Lamb kebab with rice";
    const menu_description_3 = document.createElement('div');
    menu_description_3.textContent = "Praesent fringilla ligula ipsum, in lobortis lorem maximus ac. Donec ut diam hendrerit, laoreet diam a, fringilla risus. Donec consectetur et eros ut dapibus. Aenean semper turpis nec est blandit, id posuere felis consectetur. Donec dapibus eget velit nec mollis. Duis eu massa et augue malesuada mattis. Ut convallis lectus ex, id ultricies mauris blandit vel. Praesent facilisis lorem sit amet mi accumsan, eu gravida arcu malesuada. Pellentesque eu lorem auctor turpis porta viverra. Duis scelerisque efficitur est facilisis eleifend. Cras mattis scelerisque dolor vitae egestas. Aenean dapibus interdum maximus. Praesent tincidunt arcu odio. Maecenas vitae aliquet ipsum. Nunc ullamcorper velit elementum lacus imperdiet luctus. Morbi id rhoncus diam.";
    const menu_img_3 = document.createElement('img');
    menu_img_3.setAttribute("src", "../imgs/lamb_kebab.jpg");

    [menu_title_1, menu_title_2, menu_title_3].forEach(title => title.classList.add('title'));
    [menu_img_1, menu_img_2, menu_img_3].forEach(img => img.classList.add('menu-img'));
    [text_wrapper_1, text_wrapper_2, text_wrapper_3].forEach((wrapper, index) => {
        wrapper.classList.add('text-wrapper');
        wrapper.appendChild([menu_title_1, menu_title_2, menu_title_3][index]);
        wrapper.appendChild([menu_description_1, menu_description_2, menu_description_3][index]);
    });

    [menu_item_1, menu_item_2, menu_item_3].forEach((item, index) => {
        item.classList.add('menu-item');
        item.appendChild([text_wrapper_1, text_wrapper_2, text_wrapper_3][index]);
        item.appendChild([menu_img_1, menu_img_2, menu_img_3][index]);
        menuWrapper.appendChild(item)
    });

    const contentBox = document.querySelector('#contentBox');
    contentBox.appendChild(menuWrapper);
}

export { menu as addMenu };