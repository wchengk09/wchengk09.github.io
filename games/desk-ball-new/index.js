const canvas = getObj('main');
const ctx = canvas.getContext('2d');

function resizeCanvas(){
    var w = window.innerWidth;
    var h = window.innerHeight - 80;
    var k = Math.min(w / 2,h);
    canvas.style.width = k * 2 + 'px';
    canvas.style.height = k + 'px';
}

window.addEventListener('load',resizeCanvas);
window.addEventListener('resize',resizeCanvas);

function Rect(x1,x2,y1,y2,c1,c2){
    ctx.save();
    var color = ctx.createRadialGradient((x1 + x2) / 2,(y1 + y2) / 2,0,(x1 + x2) / 2,(y1 + y2) / 2,Math.max(Math.abs(x1 - x2),Math.abs(y1 - y2)));
    color.addColorStop(0,c1);
    color.addColorStop(1,c2);
    ctx.fillStyle = color;
    ctx.fillRect(Math.min(x1,x2),Math.min(y1,y2),Math.abs(x1 - x2),Math.abs(y1 - y2));
    ctx.restore();
}

function Sphere(r,x,y,c1,c2){
    ctx.save();
    var color = ctx.createRadialGradient(x,y,0,x,y,r);
    color.addColorStop(0,c1);
    color.addColorStop(1,c2);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,r,0,2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
}

class Ball{
    constructor(r,c1,c2){
        this.r = r;
        this.c1 = c1;
        this.c2 = c2;
        this.x = 500;
        this.y = 250;
    }
    pos(x,y){
        this.x = x;
        this.y = y;
    }
    draw(){
        Sphere(this.r,this.x,this.y,this.c1,this.c2);
    }
}

var balls = new Array();

function Init(){
    for (var i = 0;i < 5;i ++)
        for (var j = 0;j <= i;j ++)
        
}

function Loop(){
    ctx.clearRect(0,0,1000,500);
    Rect(20,980,20,480,'#80542F','#80542F')
    Rect(45,955,45,455,'#00dd00','#00bb00');
    Sphere(15,500,250,'#ff6666','#cc3333');
    Sphere(15,750,250,'#ff6666','#cc3333')
    requestAnimationFrame(Loop);
}

window.addEventListener('load',function(){
    Init();
    Loop();
});