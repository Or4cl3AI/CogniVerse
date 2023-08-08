import React from 'react';
import { ARKit, ARCore, AFrame } from '../../AR_VR';

class ImmersiveExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arvr: null,
        };
    }

    componentDidMount() {
        this.startImmersiveExperience();
    }

    startImmersiveExperience() {
        // Choose AR/VR library based on device capabilities
        if (ARKit.isSupported()) {
            this.setState({ arvr: new ARKit() });
        } else if (ARCore.isSupported()) {
            this.setState({ arvr: new ARCore() });
        } else {
            this.setState({ arvr: new AFrame() });
        }
    }

    render() {
        return (
            <div id="immersiveExperience">
                {this.state.arvr && this.state.arvr.render()}
            </div>
        );
    }
}

export default ImmersiveExperience;