window.addEventListener('mouseover', (event) => {
    console.log(console.dir(event.target));
    if (event.target.tagName != "HTML") {
        event.target.classList.add('myStyle');
    }
});

window.addEventListener('mouseout', (event) => {
    event.target.classList.remove('myStyle');
});