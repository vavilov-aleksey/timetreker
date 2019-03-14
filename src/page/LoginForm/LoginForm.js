import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {authorization} from "../../action/authorization";
import {authorizationError} from "../../action/authorization/authorizationError";

import iconAvatar from '../../images/content/icon-avatar.png';
import './LoginForm.css'

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            disabledBtn: true
        };
    }

    render() {
        const {hasError} = this.props;

        return (
            <section className="authorization">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="authorization-title">
                                <img src={iconAvatar} alt=""/>
                                <h1>Авторизация</h1>
                            </div>
                            <form className={!hasError ? 'authorization-form' : 'authorization-form error'}
                                  onSubmit={this.handleSubmit.bind(this)}>
                                <input required
                                       type='text'
                                       name='username'
                                       onChange={this.onChangeUsername.bind(this)}
                                       placeholder='Имя пользователя'
                                       ref={(input) => this.username = input}
                                />
                                <div className="authorization-form__forgot">
                                    <input
                                        required
                                        type='password'
                                        name='password'
                                        onChange={this.onChangePassword.bind(this)}
                                        placeholder='Пароль'
                                        ref={(input) => this.password = input}
                                    />
                                </div>
                                <p hidden={!hasError}>Неверное имя пользователя или пароль</p>
                                <button
                                    disabled={this.state.disabledBtn}
                                    className={this.state.disabledBtn ?
                                        'button authorization-form__button' :
                                        'button authorization-form__button button__success'}>
                                    Войти
                                    <svg className="icon icon-arrow">
                                        <use xlinkHref="#icon-arrow"></use>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    onChangeUsername = (event) => {
        this.props.hasError ? this.props.changeError(false) : '';
        !this.password.value ? this.setState({disabledBtn: true}) : this.setState({disabledBtn: false})
    };

    onChangePassword = (event) => {
        this.props.hasError ? this.props.changeError(false) : '';
        !this.username.value ? this.setState({disabledBtn: true}) : this.setState({disabledBtn: false})
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const username = this.username.value;
        const password = this.password.value;
        const key = 'login';
        const authorization = {username, password, key};

        this.props.fetchData(authorization);
    }
}

const mapStateToProps = state => {
    return {
        hasError: state.authorization.authorizationError,
        isLoading: state.authorization.authorizationLoading
    }
};

const mapDispatchToProps = (dispatch) => (
    {
        fetchData: (data) => dispatch(authorization(data)),
        changeError: error => dispatch(authorizationError(error))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);