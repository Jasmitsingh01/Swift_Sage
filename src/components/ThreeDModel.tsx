import { useEffect } from 'react'
import * as THREE from 'three' 
function ThreeDModel() {
     useEffect(()=>{
    const canvas=document.getElementById('canvas');

    const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, canvas?.clientWidth! / canvas?.clientHeight! , 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    canvas:canvas!
});
renderer.setSize( canvas?.clientWidth!, canvas?.clientHeight! );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 'red' } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 5;
renderer.setAnimationLoop(animate)
function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}
animate()
            
   })

  return (
    <canvas id='canvas'></canvas>
  )
}

export default ThreeDModel