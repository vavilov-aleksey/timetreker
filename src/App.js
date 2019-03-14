import React, {Component} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Header from "./Component/Header/Header";
import NotFound from "./page/NotFound/NotFound";
import Statistics from "./page/Statistics/Statistics";
import Home from "./page/Home/Home";
import LoginForm from "./page/LoginForm/LoginForm";
import Footer from "./Component/Footer/Footer";
import svg from './images/svgSprite.svg';
import {connect} from 'react-redux';
import {authorization} from "./action/authorization";
import {tasks} from "./action/tasks";
import {statistics} from "./action/statistics";


class App extends Component {
    componentDidMount(){
        const key = 'key';
        this.props.fetchData({key});
        this.props.fetchTasks();
        this.props.fetchTime();
    }

    render(){
        const {authorized} = this.props;

        return(
            <React.Fragment>
                <div data-iconspath={svg} className="hidden-svg-document"></div>
                <Header/>
                <Switch>
                    <Route exact path='/' render={() => (
                        authorized ? (
                            <Home/>
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path='/statistics' render={() => (
                        authorized ? (
                            <Statistics/>
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    {/*<Route path='/login' component={LoginForm}/>*/}
                    <Route exact path='/login' render={() => (
                        authorized ? (
                            <Redirect to="/"/>
                        ) : (
                            <LoginForm/>
                        )
                    )}/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        authorized: state.authorization.authorized
    }
};

const mapDispatchToProps = (dispatch) => (
    {
        fetchData: (data) => dispatch(authorization(data)),
        fetchTasks: () => dispatch(tasks()),
        fetchTime: () => dispatch(statistics())
    }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
