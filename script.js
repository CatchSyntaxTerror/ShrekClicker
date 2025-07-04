const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

var pictureX = 10;
var pictureY = 10;
var pictureWidth = 150;
var pictureHeight = 200; 
var shreksClicked = 0;

function createImages(path){
    var img = new Image();
    img.src = path;
    return img;
}

var shreksSwamp = createImages('images/shreksSwamp.png');
var images = [
    createImages("images/shrek.png"),
    createImages("images/shrek1.png"),
    createImages("images/shrek2.png"),
    createImages("images/shrek3.png"),
    createImages("images/shrek4.png"),
    createImages("images/shrek5.png"),
    createImages("images/shrek6.png"),
    createImages("images/shrek7.png"),
]
var mouse = {
    x: undefined,
    y: undefined
}


window.addEventListener('click', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    if((mouse.x <= pictureX + 100 && mouse.x > pictureX + 50) || (mouse.y <= pictureY + 150 && mouse.y > pictureY + 50)){
        ranImage = Math.floor(Math.random() * images.length);
        pictureX = Math.floor(Math.random() * (CANVAS_WIDTH - 150));
        pictureY = Math.floor(Math.random() * (CANVAS_HEIGHT - 200));
        shreksClicked++;
    }
    
});

var ranImage = Math.floor(Math.random() * images.length);

ctx.font = '80px MedievalSharp';
ctx.fillStyle = '#228B22';
function animate(){   
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(shreksSwamp, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillText('Shreks Clicked: ' + shreksClicked, CANVAS_WIDTH/2 - 300, 100);
    ctx.drawImage(images[ranImage], pictureX, pictureY, pictureWidth, pictureHeight);
    requestAnimationFrame(animate);
}

animate();