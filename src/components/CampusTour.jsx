import 'aframe';
import React, { useState } from 'react';

const scenes = {
  campus1: {
    image: '/entrance.jpg',
    links: [
      {
        position: '-15 1 -1',
        rotation: '0 0 0',
        label: 'Library',
        target: 'campus2'
      }
    ]
  },
  campus2: {
    image: '/entrance2.jpg',
    links: [
      {
        position: '2 2 -7',
        rotation: '0 0 0',
        label: 'Main ',
        target: 'campus3'
      }
    ]
  },
  campus3: {
    image: '/campus.jpg',
    links: [
      {
        position: '2.8 0 -7',
        rotation: '0 0 0',
        label: 'Main ',
        target: 'campus4'
      }
    ]
  },
  campus4: {
    image: '/dept.jpg',
    links: [
      {
        position: '-2 2 -6',
        rotation: '0 0 0',
        label: 'Main ',
        target: 'campus5'
      }
    ]
  },
  campus5: {
    image: '/classroom.jpg',
    links: [
      {
        position: '-6.6 2.5 -6',
        rotation: '0 0 0',
        label: 'Main ',
        target: 'campus6'
      }
    ]
  },
  campus6: {
    image: '/lab.jpg',
    links: [
      {
        position: '-6.6 2.5 -6',
        rotation: '0 0 0',
        label: 'Main ',
        target: 'campus7'
      }
    ]
  },
  campus7: {
    image: '/quad.jpg',
    links: [
      {
        position: '-4 1 -6',
        rotation: '0 0 0',
        label: 'Main ',
        target: 'campus8'
      }
    ]
  },
  campus8: {
    image: '/canteen.jpg',
    links: [
      {
        position: '-0.5 2.5 -6',
        rotation: '0 0 0',
        label: 'Main ',
        target: 'campus9'
      }
    ]
  },
  campus9: {
    image: '/quad.jpg',
    links: [
      {
        position: '8 0 5',
        rotation: '0 0 0',
        label: 'Main ',
        target: 'campus10'
      }
    ]
  },
  campus10: {
    image: '/library.jpg',
    links: [
      {
        position: '-10 2 3',
        rotation: '0 0 0',
        label: 'Main ',
        target: 'campus11'
      }
    ]
  },
  campus11: {
    image: '/tq1.png',
    links: [
      {
        position: '-8 0 5',
        rotation: '0 0 0',
        label: 'Main ',
        target: 'campus1'
      }
    ]
  },
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
