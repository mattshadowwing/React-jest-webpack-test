import * as React from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/accordion';
import Fetcher from '../widgets/fetcher';
import AddWidget from '../widgets/addWidget';
import Telephone from './telephone';
import Widget from '../widgets/widget';

class Index extends React.Component {
    public render() {
        $( () => {
            $( ".accordion, .widget-accordion" ).accordion({
                collapsible: true,
                animate: 500,
                active: 0,
                heightStyle: "content"
            });
        } );
        return (
            <div className="index section">
                <div className="wrapper">
                    <Widget>
                        <div className="accordion">
                            <h5>Accordion 1</h5>
                            <div>
                                <p>
                                    Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
                                    ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
                                    amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
                                    odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
                                </p>
                            </div>
                            <h5>Accordion 2</h5>
                            <div>
                                <p>
                                    Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
                                    purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor
                                    velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In
                                    suscipit faucibus urna.
                                </p>
                            </div>
                            <h5>Accordion 3</h5>
                            <div>
                                <p>
                                    Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis.
                                    Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero
                                    ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis
                                    lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.
                                </p>
                            </div>
                        </div>
                    </Widget>
                    <Widget widgetTitle="Evenementen" link="#" iconClass="calendar">
                        <Fetcher json="evenementen"/>
                    </Widget>
                    <Widget widgetTitle="Nieuws" link="#" iconClass="newsletter">
                        <Fetcher json="nieuws"/>
                    </Widget>
                    <AddWidget/>
                    <Widget widgetTitle="Direct Naar" link="#" iconClass="window">
                        <div className="data direct-naar">
                            <ul>
                                <li>
                                    <span className="image"><img src={require(`./../assets/images.png`)} alt="image"/></span>
                                    <span className="title">Youforce</span>
                                </li>
                                <li>
                                    <span className="image"><img src={require(`./../assets/Bitmap.png`)} alt="image"/></span>
                                    <span className="title">MIP-meldingen</span>
                                </li>
                                <li>
                                    <span className="image"><img src={require(`./../assets/Bitmap 3.png`)} alt="image"/></span>
                                    <span className="title">Topdesk</span>
                                </li>
                            </ul>
                        </div>
                    </Widget>
                    <Widget widgetTitle="Blogs" link="#" iconClass="pen">
                        <div className="data blog">
                            <ul>
                                <li>
                                    <span className="image"><img src={require(`./../assets/Oval 2 2.png`)} alt="image"/></span>
                                    <div className="dateTime">
                                        <div className="title">Jacob Cobijn</div>
                                        <div className="date">12/04/2016</div>
                                    </div>
                                    <span className="likes"><img src={require(`./../assets/comments.png`)} alt="image"/></span>
                                    <div className="blog-post">
                                        <div className="post-title">Samenleving</div>
                                        <span className="post-content">Het hebben van een partner die positief in het leven staat, is mogelijk goed voor de….</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Widget>
                    <Widget widgetTitle="Kwaliteitshandboek" link="#" linkText="Naar kwaliteitshandboek" iconClass="chart">
                        <div className="data kwaliteitshandboek">
                            <ul>
                                <li>
                                    <div className="title">Klachtenprocedure</div>
                                    <div className="date">bijgewerk / 18-04-2016</div>
                                </li>
                                <li>
                                    <div className="title">Periodieke test gebruikersgroepen </div>
                                    <div className="date">bijgewerk / 10-02-2016</div>
                                </li>
                                <li>
                                    <div className="title">Dienstrichtlijn tweede niveau</div>
                                    <div className="date">bijgewerk / 09-05-2015</div>
                                </li>
                            </ul>
                        </div>
                    </Widget>
                    <Widget widgetTitle="Peilingen" iconClass="chart">
                        <p>Er zijn geen peilingen beschikbaar.</p>
                    </Widget>
                    <Widget widgetTitle="Mijn links" iconClass="window">
                        <div className="data mijn-links">
                            <ul>
                                <li>
                                    <span className="title">Zorggroep.nl</span>
                                </li>
                                <li>
                                    <span className="title">zorgvisie.nl</span>
                                </li>
                                <li>
                                    <span className="title">medicalfacts.nl</span>
                                </li>
                            </ul>
                        </div>
                    </Widget>
                    <Telephone/>
                    <Widget widgetTitle="Microblog" link="#" linkText="Toon meer" iconClass="pen">
                        <div className="data microblog">
                            <ul>
                                <li>
                                    <form>
                                        <div className="form-group">
                                            <textarea className="form-control" name="blog-post"/>
                                        </div>
                                        <span className="attach"><img src={require(`./../assets/Bitmap 2.png`)} alt="image"/></span>
                                        <button type="submit" className="btn">Plaats</button>
                                    </form>
                                </li>
                                <li className="microblog-content">
                                    <span className="image"><img src={require(`./../assets/profile.png`)} alt="image"/></span>
                                    <div className="dateTime">
                                        <div className="title">Ria de Vries</div>
                                        <div className="date">12/09/2016 - 11:10</div>
                                    </div>
                                    <span className="likes"><img src={require(`./../assets/Bitmap 4.png`)} alt="image"/></span>
                                    <div className="blog-post">
                                        <p className="post-content">Nieuwe campagne CuraNed gisteren van start gegaan</p>
                                        <p className="post-image"><img src={require(`./../assets/unnamed.png`)} alt="image"/></p>
                                        <p className="post-reactions">Lees meer en reacties (0)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Widget>
                    <Widget widgetTitle="Mijn Groepen" link="#" iconClass="group">
                        <div className="data mijn-groepen">
                            <ul>
                                <li>
                                    <span className="image"><img src={require(`./../assets/Oval 2.png`)} alt="image"/></span>
                                    <span className="title">HRM</span>
                                </li>
                                <li>
                                    <span className="image"><img src={require(`./../assets/Oval 2 Copy 2.png`)} alt="image"/></span>
                                    <span className="title">Marketing &amp; Communicatie</span>
                                </li>
                            </ul>
                        </div>
                    </Widget>
                </div>
            </div>
        );
    }
}

export default Index;