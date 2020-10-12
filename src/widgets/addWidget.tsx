import * as React from 'react';
import { Link } from 'react-router-dom';

const AddWidget = () => (
    <div className="widget">
        <div className="widget-box">
            <div className="widget-content">
                <div className="widget-footer">
                    <Link to='/'>
                        <div className="text">
                            <span>Widget toevoegen</span>
                        </div>
                        <div className="icon icon-plus"/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default AddWidget;