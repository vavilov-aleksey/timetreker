import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'


import iconLogo from '../../images/content/icon-logo.png';

import './Header.css';
import {authorizationApi, createTasks} from "../../Redmine/api";
import {authorized} from "../../action/authorization/authorized";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenu: false,
            headerNav1: true,
            headerNav2: false
        };

    }

    render() {
        const {authorizationUser, authorized} = this.props.authorization;
        const {totalCount} = this.props.countTasks;

        const HeaderLink = () => {
            return (
                <nav className="nav">
                    <ul className="header__menu">
                        <li><Link className={this.state.headerNav1 ? 'active' : ''} onClick={this.onLink.bind(this, 1)} to='/'>
                            <svg className="icon icon-task">
                                <use xlinkHref="#icon-task"></use>
                            </svg>
                            Задачи <span>({totalCount})</span>
                        </Link></li>
                        <li><Link className={this.state.headerNav2 ? 'active' : ''} onClick={this.onLink.bind(this, 2)} to='/statistics'>
                            <svg className="icon icon-statistics">
                                <use xlinkHref="#icon-statistics"></use>
                            </svg>
                            Статистика
                        </Link></li>
                    </ul>
                </nav>
            )
        };


        return (
            <header className="header">
                <div className="container">
                    <div className={this.state.mobileMenu ? 'active nav-bar' : 'nav-bar'}>
                        <Link to='/' className="header__logo">
                            <img src={iconLogo} alt=""/>
                            <span>TimeTracker</span>
                        </Link>
                        {authorized ?
                            <React.Fragment>
                                <HeaderLink/>
                                <div className="nav__rightNav">
                                    <div className="header__profile">
                                        <p>{authorizationUser.login}</p>
                                    </div>
                                    <Link to='/login' className='header__link-exit' onClick={this.delAuth.bind(this)}>
                                        <svg className="icon icon-exit">
                                            <use xlinkHref="#icon-exit"></use>
                                        </svg>
                                    </Link>
                                </div>
                            </React.Fragment>
                            : ''
                        }
                    </div>
                    <div className={this.state.mobileMenu ? 'active hamburger' : 'hamburger'}
                         onClick={this.onMenu.bind(this)}><span></span></div>
                </div>
            </header>
        )
    }

    delAuth = (event) => {
        this.props.delAuth();
        localStorage.removeItem('authorization');
    };

    onMenu = () => {
        this.setState({mobileMenu: !this.state.mobileMenu})
    };

    onLink = (numberLink) => {
        if(numberLink === 1){
            this.setState({headerNav1: true, headerNav2: false});
        } else {
            this.setState({headerNav2: true, headerNav1: false});
        }

        !this.state.mobileMenu ? this.setState({mobileMenu: !this.state.mobileMenu}) : this.setState({mobileMenu: !this.state.mobileMenu})
    }
}

const mapStateToProps = state => ({
    authorization: state.authorization,
    countTasks: state.tasks.tasksList
});

const mapDispatchToProps = (dispatch) => (
    {
        delAuth: () => dispatch(authorized(false))
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(Header);
