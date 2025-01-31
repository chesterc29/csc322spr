// Import THREE
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
// Import OrbitControls
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

// Set up the scene, camera, and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 40;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const points = [
   new THREE.Vector3(-20, 0, 0),
  new THREE.Vector3(0, 20, 12),
  new THREE.Vector3(20, 0, 0),
  new THREE.Vector3(-20, 0, 0),
  new THREE.Vector3(0, 0, 15),
  new THREE.Vector3(20, 0, 0),
  new THREE.Vector3(0, 20, 12),
   new THREE.Vector3(0, 0, 15),
];
const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);
scene.add(line);

// Add directional light for better visualization
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Set up animation
var animate = function () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

// Set up OrbitControls for camera interaction
var controls = new OrbitControls(camera, renderer.domElement);

// Start the animation
animate();