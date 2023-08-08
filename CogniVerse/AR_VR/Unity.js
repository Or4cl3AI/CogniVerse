// Importing Unity library
const Unity = require('unity-webgl');

// Function to start Unity AR/VR experience
function startUnityARVR() {
    // Create a new Unity instance
    let unityInstance = UnityLoader.instantiate("unityContainer", "Build/UnityBuild.json", {onProgress: UnityProgress});

    // Start the Unity instance
    unityInstance.SendMessage('ARVRManager', 'StartARVR');
}

// Function to stop Unity AR/VR experience
function stopUnityARVR() {
    // Stop the Unity instance
    unityInstance.SendMessage('ARVRManager', 'StopARVR');
}

// Export the functions
module.exports = {
    startUnityARVR,
    stopUnityARVR
};