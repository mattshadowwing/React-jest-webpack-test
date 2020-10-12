import * as React from 'react';
import { Link } from "react-router-dom";

class Nav extends React.Component<any,any> {
    public constructor(props:any) {
        super(props);
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.state = {menu: 'closed'};
    }
    public showMenu() {
        this.setState({menu: 'opened'});
    }
    public hideMenu() {
        this.setState({menu: 'closed'});
    }
    public render() {
        return (
            <div className="navigation">
                <div className={`overlay ${this.state.menu}`} onClick={this.hideMenu}/>
                <div className="section">
                    <div className="wrapper">
                        <ul className="hide-md-down">
                            <li><Link to="/">Artikelen</Link></li>
                            <li><Link to="/nieuws">Nieuws</Link></li>
                            <li><Link to="/evenementen">Evenementen</Link></li>
                            <li><Link to="/kwaliteitshandboek">Kwaliteitshandboek</Link></li>
                        </ul>
                        <a href="#" className="icon-menu hide-md-up" onClick={this.showMenu}>
                            <div/>
                            <div/>
                            <div/>
                        </a>
                        <div className="search">
                            <form>
                                <input type="text"/>
                                <button type="submit" className="icon icon-search"/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={`mobile-nav ${this.state.menu}`}>
                    <ul>
                        <li><Link to="/">Artikelen</Link></li>
                        <li><Link to="/nieuws">Nieuws</Link></li>
                        <li><Link to="/evenementen">Evenementen</Link></li>
                        <li><Link to="/kwaliteitshandboek">Kwaliteitshandboek</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;