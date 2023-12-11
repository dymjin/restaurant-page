function menu() {
    const anything = document.createElement('div');
    anything.textContent = "hello!";
    const contentBox = document.getElementById('contentBox');
    contentBox.appendChild(anything);
}

export { menu as addMenu };