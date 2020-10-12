import * as React from 'react';
import { Link } from "react-router-dom";

class TopLinks extends React.Component<any,any> {
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
            <div className="top-links section">
                <div className={`overlay ${this.state.menu}`} onClick={this.hideMenu}/>
                <div className="wrapper">
                    <ul className="links hide-md-down">
                        <li><Link to="/groepen" title="Groepen">Groepen</Link></li>
                        <li><Link to="/contact" title="Contact">Contact</Link></li>
                        <li><Link to="/faq" title="FAQ">FAQ</Link></li>
                        <li><Link to="/smoelenboek " title="Smoelenboek">Smoelenboek</Link></li>
                        <li><Link to="/microblog" title="Microblog">Microblog</Link></li>
                        <li><Link to="/over-ons" title="Over ons">Over ons</Link></li>
                    </ul>
                    <a href="#" className="icon-menu hide-md-up" onClick={this.showMenu}>
                        <div/>
                        <div/>
                        <div/>
                    </a>
                    <div className="top-right">
                        <button className="icon icon-settings"/>
                        <button className="icon icon-bell"/>
                    </div>
                </div>
                <div className={`mobile-nav ${this.state.menu}`}>
                    <ul>
                        <li><Link to="/groepen" title="Groepen">Groepen</Link></li>
                        <li><Link to="/contact" title="Contact">Contact</Link></li>
                        <li><Link to="/faq" title="FAQ">FAQ</Link></li>
                        <li><Link to="/smoelenboek " title="Smoelenboek">Smoelenboek</Link></li>
                        <li><Link to="/microblog" title="Microblog">Microblog</Link></li>
                        <li><Link to="/over-ons" title="Over ons">Over ons</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TopLinks;