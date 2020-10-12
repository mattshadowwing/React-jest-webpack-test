import * as React from 'react';
import { Link } from 'react-router-dom';
class Widget extends React.Component<any,any> {
    public constructor(props:any) {
        super(props);
        this.closeWidget = this.closeWidget.bind(this);
        this.state = {hide: false};
    }
    public closeWidget() {
        this.setState({hide: true});
    }
    public render() {
        return (
            <div>
                {this.state.hide === false &&
                <div className="widget">
                    <div className={`widget-box ${this.props.widgetTitle ? `widget-accordion` : ``}`}>
                        {this.props.widgetTitle &&
                        <div className="widget-header">
                            <div className={`icon icon-${this.props.iconClass}`}/>
                            <h5 className="title">
                                {this.props.widgetTitle}
                            </h5>
                            <div className="toggle">
                                <div className="icon icon-toggle"/>
                            </div>
                            <div className="close">
                                <div className="icon icon-close" onClick={this.closeWidget}/>
                            </div>
                        </div>
                        }
                        <div className="widget-content">
                            <div className="content">
                                {this.props.children}
                            </div>
                            {this.props.link &&
                            <div className="widget-footer">
                                <Link to={this.props.link}>
                                    <div className="text">
                                        {this.props.linkText &&
                                        <span>{this.props.linkText}</span>
                                        }
                                        {!this.props.linkText &&
                                        <span>Meer {this.props.widgetTitle}</span>
                                        }
                                    </div>
                                    <div className="icon icon-arrow-right"/>
                                </Link>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            }
            </div>
        );
    }
}
export default Widget;