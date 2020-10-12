import * as React from 'react';
import Logo from './header/logo';
import TopLinks from './header/topLinks';
import Nav from './header/nav';

class Header extends React.Component {
    public render() {
        return (
            <header>
                <TopLinks/>
                <Logo/>
                <Nav/>
            </header>
        );
    }
}

export default Header;