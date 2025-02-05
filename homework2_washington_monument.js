// Import THREE
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
// Import OrbitControls
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

// Set up the scene, camera, and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
camera.position.set(0, 0, 200);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ORIGIN GUIDELINES X, Y, Z
/*
const axesHelper = new THREE.AxesHelper(55); // 20 is the length of the lines
scene.add(axesHelper);
*/

// Green Triangle side
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const points = [
  new THREE.Vector3(-17.5, 0, -17.5), 
  new THREE.Vector3(-17.5, 0, 17.5),
  new THREE.Vector3(0, 55, 0),
  new THREE.Vector3(-17.5, 0, -17.5),
];
const geometry = new THREE.BufferGeometry().setFromPoints(points);

// Create the line-based triangle
const line = new THREE.Line(geometry, material);
scene.add(line);

// Creates the mesh for the wall of the shape
const mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );


// Cyan Side
const material2 = new THREE.MeshBasicMaterial( { color: new THREE.Color(252 / 255, 114 / 255, 8 / 255) } );
const points2 = [
   new THREE.Vector3(17.5, 0, 17.5),
  new THREE.Vector3(17.5, 0, -17.5),
  new THREE.Vector3(0, 55, 0),
  new THREE.Vector3(17.5, 0, 17.5),
  
 
];
const geometry2 = new THREE.BufferGeometry().setFromPoints(points2);

// Create the line-based triangle
const line2 = new THREE.Line(geometry2, material2);
scene.add(line2);

// Creates the mesh for the wall of the shape
const mesh2 = new THREE.Mesh( geometry2, material2 ) ;
scene.add( mesh2 );

//Yellow Side Triangle
const material3 = new THREE.MeshBasicMaterial( { color: 0xfced00 } );
const points3 = [
   new THREE.Vector3(17.5, 0, -17.5),
  new THREE.Vector3(-17.5, 0, -17.5),
  new THREE.Vector3(0, 55, 0),
  new THREE.Vector3(17.5, 0, 17.5),
   
 
];
const geometry3 = new THREE.BufferGeometry().setFromPoints(points3);

// Create the line-based triangle
const line3 = new THREE.Line(geometry3, material3);
scene.add(line3);

// Creates the mesh for the wall of the shape
const mesh3 = new THREE.Mesh( geometry3, material3 ) ;
scene.add( mesh3 );


//DARK Blue Side Triangle
const material4 = new THREE.MeshBasicMaterial( { color: new THREE.Color(55 / 255, 100 / 255, 242 / 255) } );
const points4 = [
  new THREE.Vector3(-17.5, 0, 17.5),
  new THREE.Vector3(17.5, 0, 17.5),
  new THREE.Vector3(0, 55, 0),
  new THREE.Vector3(-17.5, 0, -17.5),
];
const geometry4 = new THREE.BufferGeometry().setFromPoints(points4);

// Create the line-based triangle
const line4 = new THREE.Line(geometry4, material4);
scene.add(line4);

// Creates the mesh for the wall of the shape
const mesh4 = new THREE.Mesh( geometry4, material4 ) ;
scene.add( mesh4 );


//SKYBLUE Rectangle side Bottom triangle
const material5 = new THREE.MeshBasicMaterial( {color: 'skyblue'} );
const points5 = [
	new THREE.Vector3(-17.5, 0, -17.5),
  new THREE.Vector3(-17.5, -500, -17.5),
  new THREE.Vector3(-17.5, -500, 17.5),
  new THREE.Vector3(-17.5, 0, 17.5)
];
const geometry5 = new THREE.BufferGeometry().setFromPoints(points5);

// Create the line-based triangle
const line5 = new THREE.Line(geometry5, material5);
scene.add(line5);

// Creates the mesh for the wall of the shape
const mesh5 = new THREE.Mesh( geometry5, material5 ) ;
scene.add( mesh5 );

//SKYBLUE Rectangle side Top triangle
const material6 = new THREE.MeshBasicMaterial( {color: 'skyblue'} );
const points6 = [
	new THREE.Vector3(-17.5, 0, -17.5),
  new THREE.Vector3(-17.5, -500, 17.5),
  new THREE.Vector3(-17.5, 0, 17.5),
  new THREE.Vector3(17.5, 0, -17.5)
];
const geometry6 = new THREE.BufferGeometry().setFromPoints(points6);

// Create the line-based triangle
const line6 = new THREE.Line(geometry6, material6);
scene.add(line5);

// Creates the mesh for the wall of the shape
const mesh6 = new THREE.Mesh( geometry6, material6 ) ;
scene.add( mesh6 );

//RED Rectangle Side Bottom Triangle
const material7 = new THREE.MeshBasicMaterial( {color: 'red'} );
const points7 = [
	new THREE.Vector3(-17.5, 0, 17.5),
  new THREE.Vector3(-17.5, -500, 17.5),
  new THREE.Vector3(17.5, -500, 17.5),
  new THREE.Vector3(17.5, 0, 17.5)
];
const geometry7 = new THREE.BufferGeometry().setFromPoints(points7);

// Create the line-based triangle
const line7 = new THREE.Line(geometry7, material7);
scene.add(line7);

// Creates the mesh for the wall of the shape
const mesh7 = new THREE.Mesh( geometry7, material7 ) ;
scene.add( mesh7 );

//RED Rectangle Side Top Triangle
const material8 = new THREE.MeshBasicMaterial( {color: 'red'} );
const points8 = [
	new THREE.Vector3(17.5, -500, 17.5),
  new THREE.Vector3(17.5, 0, 17.5),
  new THREE.Vector3(-17.5, -0, 17.5),
  new THREE.Vector3(-17.5, -500, 17.5),
];
const geometry8 = new THREE.BufferGeometry().setFromPoints(points8);

// Create the line-based triangle
const line8 = new THREE.Line(geometry8, material8);
scene.add(line8);

// Creates the mesh for the wall of the shape
const mesh8 = new THREE.Mesh( geometry8, material8 ) ;
scene.add( mesh8 );


//PURPLE Rectangle Side Bottom Triangle
const material9 = new THREE.MeshBasicMaterial( {color: 'purple'} );
const points9 = [
	new THREE.Vector3(17.5, 0, 17.5),
  new THREE.Vector3(17.5, -500, 17.5),
  new THREE.Vector3(17.5, -500, -17.5),
  new THREE.Vector3(17.5, 0, -17.5)
];
const geometry9 = new THREE.BufferGeometry().setFromPoints(points9);

// Create the line-based triangle
const line9 = new THREE.Line(geometry9, material9);
scene.add(line9);

// Creates the mesh for the wall of the shape
const mesh9 = new THREE.Mesh( geometry9, material9 ) ;
scene.add( mesh9 );

//PURPLE Rectangle Side Top Triangle
const material10 = new THREE.MeshBasicMaterial( {color: 'purple'} );
const points10 = [
	new THREE.Vector3(17.5, -500, -17.5),
  new THREE.Vector3(17.5, 0, -17.5),
  new THREE.Vector3(17.5, 0, 17.5),
  new THREE.Vector3(17.5, -500, 17.5)
];
const geometry10 = new THREE.BufferGeometry().setFromPoints(points10);

// Create the line-based triangle
const line10 = new THREE.Line(geometry10, material10);
scene.add(line10);

// Creates the mesh for the wall of the shape
const mesh10 = new THREE.Mesh( geometry10, material10 ) ;
scene.add( mesh10 );

//LIME Rectangle Side Bottom Triangle
const material11 = new THREE.MeshBasicMaterial( {color: new THREE.Color(195 / 255, 252 / 255, 8 / 255)} );
const points11 = [
	new THREE.Vector3(17.5, 0, -17.5),
  new THREE.Vector3(17.5, -500, -17.5),
  new THREE.Vector3(-17.5, -500, -17.5),
  new THREE.Vector3(-17.5, 0, -17.5)
];
const geometry11 = new THREE.BufferGeometry().setFromPoints(points11);

// Create the line-based triangle
const line11 = new THREE.Line(geometry11, material11);
scene.add(line11);

// Creates the mesh for the wall of the shape
const mesh11 = new THREE.Mesh( geometry11, material11 ) ;
scene.add( mesh11 );

//LIME Rectangle Side TOP Triangle
const material12 = new THREE.MeshBasicMaterial( {color: new THREE.Color(195 / 255, 252 / 255, 8 / 255)} );
const points12 = [
	new THREE.Vector3(-17.5, -500, -17.5),
  new THREE.Vector3(-17.5, 0, -17.5),
  new THREE.Vector3(17.5, 0, -17.5),
  new THREE.Vector3(17.5, -500, -17.5)
];
const geometry12 = new THREE.BufferGeometry().setFromPoints(points12);

// Create the line-based triangle
const line12 = new THREE.Line(geometry12, material12);
scene.add(line12);

// Creates the mesh for the wall of the shape
const mesh12 = new THREE.Mesh( geometry12, material12 ) ;
scene.add( mesh12 );


// Add directional light for better visualization
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

const modelGroup = new THREE.Group();
modelGroup.add(mesh, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8, mesh9, mesh10, mesh11, mesh12); //GROUP ALL MESH
modelGroup.add(line, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12); //GROUP ALL LINES
scene.add(modelGroup);

// Set up animation
var animate = function () {
  requestAnimationFrame(animate);
  
  modelGroup.rotation.y += 0.01;
  
  renderer.render(scene, camera);
};

// Set up OrbitControls for camera interaction
var controls = new OrbitControls(camera, renderer.domElement);

// Start the animation
animate();