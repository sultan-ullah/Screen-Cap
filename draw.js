let image = document.getElementById("target");
let canvas = document.getElementById("canvas");

const draw = (left, top, width, height) => {
    
    // get canvas context and set width and height
    let ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    
    // draw the cropped image and turn the canvas into an image
    ctx.drawImage(image, left, top, width, height, 0, 0, width, height);
    document.write('<img src="'+ canvas.toDataURL("croppedImage/png") +'"/>');
    image.hidden = 1;
}
