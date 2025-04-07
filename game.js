import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Alap beállítások
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Föld
const groundGeometry = new THREE.PlaneGeometry(50, 50);
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x555555, side: THREE.DoubleSide });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// Busz (kocka mint placeholder)
const busGeometry = new THREE.BoxGeometry(2, 1, 1);
const busMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const bus = new THREE.Mesh(busGeometry, busMaterial);
bus.position.y = 0.5;
scene.add(bus);

// Akadályok
const obstacles = [];
function createObstacle() {
    const obstacleGeometry = new THREE.BoxGeometry(1, 1, 1);
    const obstacleMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const obstacle = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
    obstacle.position.set(10, 0.5, Math.random() * 6 - 3);
    scene.add(obstacle);
    obstacles.push(obstacle);
}
setInterval(createObstacle, 2000);

// Kamera beállítások
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);
const controls = new OrbitControls(camera, renderer.domElement);

// Játékvezérlés
let speed = 0.1;
window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && bus.position.z > -3) bus.position.z -= speed;
    if (event.key === "ArrowDown" && bus.position.z < 3) bus.position.z += speed;
});

// Játék ciklus
function animate() {
    requestAnimationFrame(animate);
    
    obstacles.forEach(obs => {
        obs.position.x -= 0.1;
        if (obs.position.x < -10) {
            scene.remove(obs);
        }
    });
    
    renderer.render(scene, camera);
}
animate();
