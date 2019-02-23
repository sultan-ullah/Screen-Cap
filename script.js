// x1 = 0;
// x2 = 0;
// y1 = 0;
// y2 = 0;
// var myDiv = document.querySelector("#div");
// function reCalc() {
//     var x3 = Math.min(x1,x2);
//     var x4 = Math.max(x1,x2);
//     var y3 = Math.min(y1,y2);
//     var y4 = Math.max(y1,y2);
//     myDiv.style.left = x3 + 'px';
//     myDiv.style.top = y3 + 'px';
//     myDiv.style.width = x4 - x3 + 'px';
//     myDiv.style.height = y4 - y3 + 'px';
// }

// window.addEventListener('mousedown', (e) => {
//     myDiv.hidden = 0;
//     x1 = e.clientX;
//     y1 = e.clientY;
//     reCalc();
// });

// window.addEventListener('mousemove', (e) => {
//     x2 = e.clientX;
//     y2 = e.clientY;
//     reCalc();
// });

// window.addEventListener('mouseup', (e) => {
//     // myDiv.hidden = 1;
//     html2canvas(document.querySelector("#div")).then(function(canvas) {
//         document.body.appendChild(canvas);
//     });
//     hidden = 1;
// });

window.addEventListener('mouseover', (event) => {
    console.log(console.dir(event.target));
    if (event.target.tagName != "HTML") {
        event.target.classList.add('myStyle');
    }
    
});



window.addEventListener('mouseout', (event) => {
    event.target.classList.remove('myStyle');
    
});

window.addEventListener('click', (event) => {
        event.target.classList.remove('myStyle');
        html2canvas(event.target).then(function(canvas) {
        document.querySelector('#image').appendChild(canvas);
    });
});