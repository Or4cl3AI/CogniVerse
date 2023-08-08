```javascript
// Import A-Frame library
import 'aframe';

// Function to start AR/VR experiences
function startARVR() {
    // Create a scene
    let scene = document.createElement('a-scene');
    scene.setAttribute('embedded', '');
    scene.setAttribute('arjs', 'sourceType: webcam;');

    // Create a box
    let box = document.createElement('a-box');
    box.setAttribute('position', '0 0.5 -3');
    box.setAttribute('rotation', '0 45 0');
    box.setAttribute('color', '#4CC3D9');

    // Add the box to the scene
    scene.appendChild(box);

    // Add the scene to the body
    document.body.appendChild(scene);
}

// Export the startARVR function
export default startARVR;
```