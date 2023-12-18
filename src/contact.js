function contact() {
    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact-wrapper');

    // contact form start
    const contact_form_wrapper = document.createElement('div');
    contact_form_wrapper.classList.add('contact-form-wrapper');

    const contact_form_title = document.createElement('div');
    contact_form_title.classList.add('title');
    contact_form_title.textContent = 'Send us a message';

    const contact_form = document.createElement('form');
    contact_form.setAttribute("action", "");
    contact_form.classList.add('contact-form');

    const contact_form_p_1 = document.createElement('p');
    const label_1 = document.createElement('label');
    label_1.textContent = 'Name';
    label_1.setAttribute('for', 'name');
    const input_1 = document.createElement('input');
    input_1.setAttribute("type", "text");
    input_1.setAttribute("id", "name");
    input_1.setAttribute("name", "username");
    input_1.setAttribute('pattern', '[a-zA-Z]{2,30}');
    input_1.toggleAttribute("autofocus", true);

    const contact_form_p_2 = document.createElement('p');
    const label_2 = document.createElement('label');
    label_2.textContent = 'Email';
    label_2.setAttribute('for', 'email');
    const input_2 = document.createElement('input');
    input_2.setAttribute("type", "email");
    input_2.setAttribute("id", "email");
    input_2.setAttribute("name", "usermail");
    input_2.setAttribute('pattern', '[a-zA-Z0-9]{3,16}@(gmail)\.(com)');
    input_2.toggleAttribute('required', true);

    const contact_form_p_3 = document.createElement('p');
    const label_3 = document.createElement('label');
    label_3.textContent = 'Message';
    label_3.setAttribute('for', 'message');
    const input_3 = document.createElement('textarea');
    input_3.setAttribute("id", "message");
    input_3.setAttribute("name", "usermsg");
    input_3.setAttribute('minlength', 1);
    input_3.setAttribute('maxlength', 500);
    input_3.setAttribute('rows', 8);
    input_3.setAttribute('cols', 40);
    input_3.toggleAttribute('required', true);
    const charCount = document.createElement('div');
    let currentChars = 0;
    const maxChars = input_3.getAttribute('maxlength');
    input_3.addEventListener('input', () => {
        currentChars = input_3.value.length;
        charCount.textContent = `${currentChars} / ${maxChars}`;
    });
    charCount.textContent = `${currentChars} / ${maxChars}`;

    //disabled for display purposes
    const submit_btn = document.createElement('button');
    submit_btn.setAttribute('type', 'submit');
    submit_btn.setAttribute('formmethod', 'get');
    submit_btn.textContent = 'Submit';
    submit_btn.addEventListener('click', (e) => {
        e.preventDefault();
    });

    [contact_form_p_1, contact_form_p_2, contact_form_p_3].forEach((item, index) => {
        item.appendChild([label_1, label_2, label_3][index]);
        item.appendChild([input_1, input_2, input_3][index]);
        contact_form_p_3.appendChild(charCount);
        contact_form.appendChild(item);
    });
    contact_form.appendChild(submit_btn);

    contact_form_wrapper.appendChild(contact_form_title);
    contact_form_wrapper.appendChild(contact_form);
    // contact form end

    //contact social start
    const contact_socials_wrapper = document.createElement('div');
    contact_socials_wrapper.classList.add('contact-socials-wrapper');
    const contact_socials_title = document.createElement('div');
    contact_socials_title.classList.add('title');
    contact_socials_title.textContent = "Stay in touch with us";
    const contact_socials_icons = document.createElement('div');
    contact_socials_icons.classList.add('contact-socials-icons');
    const instagram_icon = document.createElement('span');
    instagram_icon.classList.add('fa-instagram');
    const facebook_icon = document.createElement('span');
    facebook_icon.classList.add('fa-facebook');
    const snapchat_icon = document.createElement('span');
    snapchat_icon.classList.add('fa-snapchat');
    const twitter_icon = document.createElement('span');
    twitter_icon.classList.add('fa-twitter');
    const tiktok_icon = document.createElement('span');
    tiktok_icon.classList.add('fa-tiktok');
    const whatsapp_icon = document.createElement('span');
    whatsapp_icon.classList.add('fa-whatsapp');
    const pinterest_icon = document.createElement('span');
    pinterest_icon.classList.add('fa-pinterest');

    [instagram_icon, facebook_icon, snapchat_icon, twitter_icon, tiktok_icon, whatsapp_icon, pinterest_icon].forEach(item => {
        item.classList.add('fa-brands');
        contact_socials_icons.appendChild(item);
    })
    contact_socials_wrapper.appendChild(contact_socials_title);
    contact_socials_wrapper.appendChild(contact_socials_icons);
    // contact social end

    //contact map start
    const contact_map_wrapper = document.createElement('div');
    contact_map_wrapper.classList.add('contact-map-wrapper');
    const contact_map_title = document.createElement('div');
    contact_map_title.classList.add('title');
    contact_map_title.textContent = "Find us here";
    const contact_map_p = document.createElement('p');
    contact_map_p.textContent = "Realtown, Real Place, Real Country, Enjoy your stay!";
    const map_wrapper = document.createElement('div');
    map_wrapper.classList.add('google-map');
    const map = document.createElement('iframe');
    map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13885.412473399574!2d23.624500155194262!3d-29.535209152939952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e83316e5d831069%3A0xb0243a8901ad895b!2sLeeuberg!5e0!3m2!1sen!2sza!4v1702560066857!5m2!1sen!2sza');
    map.classList.add('contact-map');
    map.setAttribute('width', 200);
    map.setAttribute('heigth', 450);
    map.setAttribute('allowfullscreen', '');
    map.setAttribute('loading', 'lazy');
    map.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    map_wrapper.appendChild(map);
    [contact_map_title, contact_map_p, map_wrapper].forEach(item => contact_map_wrapper.appendChild(item));
    // contact map end

    [contact_form_wrapper, contact_socials_wrapper, contact_map_wrapper].forEach(item => contactWrapper.appendChild(item));

    const contentBox = document.getElementById('contentBox');
    contentBox.appendChild(contactWrapper);
}

export { contact as addContact };