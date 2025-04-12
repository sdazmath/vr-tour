import 'aframe';
import React, { useState } from 'react';

const scenes = {
  campus1: {
    image: '/1.jpeg',
    links: [
      {
        position: '2 1 -3',
        rotation: '0 0 0',
        label: 'Library',
        target: 'campus2'
      }
    ]
  },
  campus2: {
    image: '/2.jpeg',
    links: [
      {
        position: '-2 1 -3',
        rotation: '0 0 0',
        label: 'Main ',
        target: 'campus1'
      }
    ]
  }
};

const CampusTour = () => {
  const [currentScene, setCurrentScene] = useState('campus1');

  // Update the scene when the user clicks on a link
  const handleLinkClick = (target) => {
    setCurrentScene(target);
  };

  const scene = scenes[currentScene];

  return (
    <a-scene cursor="rayOrigin: mouse">
      {/* Load assets */}
      <a-assets>
        {Object.entries(scenes).map(([key, val]) => (
          <img key={key} id={key} src={val.image} alt="" />
        ))}
      </a-assets>

      {/* Set sky to current scene image */}
      <a-sky src={`#${currentScene}`} rotation="0 -130 0"></a-sky>

      {/* Scene links - Clickable entities for navigation */}
      {scene.links.map((link, index) => (
        <a-box
          key={index}
          position={link.position}
          rotation={link.rotation}
          color="red"
          width="0.3"  // Reduce width
          height="0.3" // Reduce height
          depth="0.5"
          clickable
          event-set__mouseenter="scale: 1.2 1.2 1.2"
          event-set__mouseleave="scale: 1 1 1"
          onClick={() => handleLinkClick(link.target)} // Fix here: handle click properly
        >
          
        </a-box>
      ))}

      {/* Camera and controls */}
      <a-entity camera look-controls position="0 1.6 0"></a-entity>

      {/* Cursor */}
      <a-entity cursor="fuse: true; fuseTimeout: 1500" position="0 0 -1"></a-entity>
    </a-scene>
  );
};

export default CampusTour;
