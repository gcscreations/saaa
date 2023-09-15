import React, { useEffect, useRef } from 'react';
import {MindARThree} from 'mind-ar/dist/mindar-image-three.prod.js';
import * as THREE from 'three';

export default () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const mindarThree = new MindARThree({
      container: containerRef.current,
      imageTargetSrc: "../data/targets.mind",
      filterMinCF: 1,
      filterBeta: 10000,
      missTolerance: 0,
      warmupTolerance: 0
    });
    function Box()
    {
      const anchor1 = mindarThree.addAnchor(1);
      const geometry1 = new THREE.PlaneGeometry(1, 1);
      const material1 = new THREE.MeshBasicMaterial( {color: 0x00ffff, transparent: true, opacity: 0.5} );
      const plane1 = new THREE.Mesh( geometry1, material1 );
      anchor1.group.add(plane1);
    }
    const {renderer, scene, camera,container} = mindarThree;
    camera.aspect = container.clientWidth / container.clientHeight;

    // update the camera's frustum
    camera.updateProjectionMatrix();

    // update the size of the renderer AND the canvas
    renderer.setSize(container.clientWidth, container.clientHeight);

    // set the pixel ratio (for mobile devices)
    renderer.setPixelRatio(window.devicePixelRatio);
    const anchor = mindarThree.addAnchor(0);

    const geometry = new THREE.PlaneGeometry(1, 0.65);
    const material = new THREE.MeshBasicMaterial( {color: 0x00ffff, transparent: false, opacity: 0.5} );
    const plane = new THREE.Mesh( geometry, material );
    anchor.group.add(plane);
    Box();



    mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });

    return () => {
      renderer.setAnimationLoop(null);
      mindarThree.stop();
    }
  }, []);

  return (
    <div style={{width: "100%", height: "100%"}} ref={containerRef}>
    </div>
  )
}

