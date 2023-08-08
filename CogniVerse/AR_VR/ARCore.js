```javascript
// Import ARCore library
import { AR } from 'expo';

// Function to start ARCore experience
export function startARCore() {
    // Check if AR is supported by the device
    AR.isSupported().then(isSupported => {
        if (isSupported) {
            // Start AR session
            AR.startAsync().then(() => {
                console.log('ARCore session started successfully');
            }).catch(error => {
                console.error('Error starting ARCore session: ', error);
            });
        } else {
            console.log('ARCore is not supported by this device');
        }
    }).catch(error => {
        console.error('Error checking AR support: ', error);
    });
}
```