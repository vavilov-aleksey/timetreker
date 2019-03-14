import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container h-100">
                    <div className="row h-100 justify-content-between align-items-center">
                        <div className="col-12 text-center">
                            <div className="footer__text">2018</div>
                        </div>
                    </div>
                </div>
            </footer>
    )
    }
}

export default Footer;
