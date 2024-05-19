var canvas = getObj('mainCanvas');
var renderer = new THREE.WebGLRenderer({canvas: canvas}); 
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 1, 50) ;
camera.position.z = 0;
camera.position.x = 0;
camera.position.y = 4.2;
camera.lookAt(new THREE.Vector3(0, 0, 0));
var light = new THREE.PointLight(0xffffff,700);
light.position.set(0, 10, 0);
scene.add(light);
light.castShadow = true;//表示这个光是可以产生阴影的

function Cube(x1,x2,y1,y2,z1,z2,color){
    x1 *= 1.0;
    y1 *= 1.0;
    z1 *= 1.0;
    const geometry = new THREE.BoxGeometry(Math.abs(x1 - x2),Math.abs(y1 - y2),Math.abs(z1 - z2));
    const material = new THREE.MeshLambertMaterial({color: color});
    const cube = new THREE.Mesh(geometry,material);
    cube.position.set((x1 + x2) / 2,(y1 + y2) / 2,(z1 + z2) / 2);
    scene.add(cube);
}

function Sphere(r,x,y,z,color){
    const geometry = new THREE.SphereGeometry(r,32,32);
    const material = new THREE.MeshLambertMaterial({color: color});
    var sphere = new THREE.Mesh(geometry,material);
    sphere.position.set(x,y,z);
    scene.add(sphere);
    return sphere;
}

// function Circle(s,t,)

// Desk
Cube(5,-5,0,0.1,2.5,-2.5,0x00aa00);
Cube(-4.5,-0.25,0,0.1,2,2.5,0x00aa00);
Cube(-4.5,-0.25,0,0.1,-2,-2.5,0x00aa00);
Cube(-5.3,5.3,0,0.3,-2.5,-2.8,0x887142);
Cube(-5.3,5.3,0,0.3,2.5,2.8,0x887142);
Cube(-5.3,-5,0,0.3,-2.5,2.5,0x887142);
Cube(5.3,5,0,0.3,-2.5,2.5,0x887142);

// Wall
Cube(-100,100,-5,-5.1,-100,100,0xffffff);

// Balls
Sphere(0.3,0,0.3,0,0xaa3333);

renderer.render(scene, camera);