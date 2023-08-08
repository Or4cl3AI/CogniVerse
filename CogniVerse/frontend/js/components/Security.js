import React from 'react';

class Security extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            encryptionEnabled: false,
            privacyProtocol: 'None'
        };
    }

    toggleEncryption() {
        this.setState(prevState => ({
            encryptionEnabled: !prevState.encryptionEnabled
        }));
    }

    changePrivacyProtocol(protocol) {
        this.setState({
            privacyProtocol: protocol
        });
    }

    render() {
        return (
            <div id="security">
                <h2>Security Settings</h2>
                <div>
                    <label>Encryption:</label>
                    <button onClick={() => this.toggleEncryption()}>
                        {this.state.encryptionEnabled ? 'Disable' : 'Enable'}
                    </button>
                </div>
                <div>
                    <label>Privacy Protocol:</label>
                    <select value={this.state.privacyProtocol} onChange={e => this.changePrivacyProtocol(e.target.value)}>
                        <option value="None">None</option>
                        <option value="Protocol1">Protocol1</option>
                        <option value="Protocol2">Protocol2</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Security;