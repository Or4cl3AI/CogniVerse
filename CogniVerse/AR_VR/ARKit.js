```javascript
// Import ARKit library
import { ARKit } from 'react-native-arkit';

// Function to start AR experience
export function startARVR() {
    return (
        <ARKit
            style={{ flex: 1 }}
            debug
            planeDetection
            lightEstimation
            onPlaneDetected={console.log} // event listener for plane detection
            onPlaneUpdated={console.log} // event listener for plane updates
            onAnchorDetected={console.log} // event listener for anchor detection
            onAnchorUpdated={console.log} // event listener for anchor updates
            onAnchorRemoved={console.log} // event listener for anchor removal
        >
            <ARKit.Box
                position={{ x: 0, y: 0, z: 0 }}
                shape={{ width: 0.1, height: 0.1, length: 0.1, chamfer: 0.01 }}
            />
            <ARKit.Sphere
                position={{ x: 0.2, y: 0, z: 0 }}
                shape={{ radius: 0.05 }}
            />
            <ARKit.Cylinder
                position={{ x: 0.4, y: 0, z: 0 }}
                shape={{ radius: 0.05, height: 0.1 }}
            />
            <ARKit.Cone
                position={{ x: 0.6, y: 0, z: 0 }}
                shape={{ topR: 0, bottomR: 0.05, height: 0.1 }}
            />
            <ARKit.Pyramid
                position={{ x: 0.8, y: 0, z: 0 }}
                shape={{ width: 0.1, height: 0.1, length: 0.1 }}
            />
        </ARKit>
    );
}
```