import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

//import { Camera } from 'three';
// const loader = new GLTFLoader();
// loader.load("3d/monk/scene.gltf", (gltf)=>{
//     scene.add(gltf.asset)
// }, undefined, (error){
//     console.error(error)})

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const spaceTexture = new THREE.TextureLoader().load("images/mway.jpg");
const moonTexture = new THREE.TextureLoader().load("images/moontexture.jpg");
//
const moonNormal = new THREE.TextureLoader().load("images/NormalMap.jpg");
const a = new THREE.Vector2(0.3, 0.5);

const scene = new THREE.Scene();
scene.background = spaceTexture;
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const decodahedron = new THREE.DodecahedronGeometry(5, 1);
const basicmaterial = new THREE.MeshBasicMaterial({
  color: "green",
  wireframe: true,
});
const material = new THREE.MeshStandardMaterial({
  color: "aqua",
  wireframe: true,
  emissive: "blue",
  emissiveIntensity: 1,
});
const material0 = new THREE.MeshStandardMaterial({
  color: "aqua",

  metalness: 3,
});
const material2 = new THREE.MeshStandardMaterial({
  map: moonTexture,
  normalMap: moonNormal,
  normalScale: a,
});
const pointLight = new THREE.PointLight("white");
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
// const controls = new OrbitControls(camera, renderer.domElement);
//const ambientLight = new THREE.AmbientLight("white");
pointLight.position.set(20, 20, 20);
const dodecahedron = new THREE.Mesh(decodahedron, material0);
const sphereGeometry = new THREE.SphereGeometry(8, 32, 32);
const sphere = new THREE.Mesh(sphereGeometry, material2);
sphere.position.set(-10, 5, 5);
const torus = new THREE.Mesh(geometry, material);
scene.add(dodecahedron);
scene.add(sphere);
scene.add(pointLight);
//scene.add(lightHelper, gridHelper);
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  torus.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  dodecahedron.rotation.y += 0.01;
  dodecahedron.rotation.z += 0.01;
  //controls.update();
}
animate();
