function contact() {
    const nothing = document.createElement('div');
    nothing.textContent = "hello world!";
    const contentBox = document.getElementById('contentBox');
    contentBox.appendChild(nothing);
}

export { contact as addContact };