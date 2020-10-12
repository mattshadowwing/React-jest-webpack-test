import * as React from 'react';
import logo from './../../assets/logo.png';

class Logo extends React.Component {
    public render() {
        return (
            <div className="logo section">
                <div className="wrapper">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        );
    }
}

export default Logo;