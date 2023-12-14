function contact() {
    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact-wrapper');

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
    input_1.setAttribute('pattern', '[a-zA-Z]{3,16}');
    input_1.toggleAttribute("autofocus", true);
    contact_form_p_1.appendChild(label_1);
    contact_form_p_1.appendChild(input_1);

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
    contact_form_p_2.appendChild(label_2);
    contact_form_p_2.appendChild(input_2);

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
    contact_form_p_3.appendChild(label_3);
    contact_form_p_3.appendChild(input_3);
    contact_form_p_3.appendChild(charCount);

    //disabled for display purposes
    const submit_btn = document.createElement('button');
    submit_btn.setAttribute('type', 'submit');
    submit_btn.setAttribute('formmethod', 'get');
    submit_btn.textContent = 'Submit';
    submit_btn.addEventListener('click', (e) => {
        e.preventDefault();
    });

    contact_form.appendChild(contact_form_p_1);
    contact_form.appendChild(contact_form_p_2);
    contact_form.appendChild(contact_form_p_3);
    contact_form.appendChild(submit_btn);
    contact_form_wrapper.appendChild(contact_form_title);
    contact_form_wrapper.appendChild(contact_form);



    contactWrapper.appendChild(contact_form_wrapper);

    const contentBox = document.getElementById('contentBox');
    contentBox.appendChild(contactWrapper);
}

export { contact as addContact };