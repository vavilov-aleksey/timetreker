import React, {Component} from 'react';
import DialTimer from "../../Component/DialTimer/DialTimer";
import './Statistics.css'
import {connect} from 'react-redux'

class Statistics extends Component {

    render() {
        const {statisticsDay, statisticsWeek, statisticsMonth} = this.props.statistics;

        return (
            <section className="statistics">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-4"><DialTimer dates={statisticsDay} dataType={'За этот день'}/></div>
                        <div className="col-lg-3 col-md-4"><DialTimer dates={statisticsWeek} dataType={'За эту неделю'}/></div>
                        <div className="col-lg-3 col-md-4"><DialTimer dates={statisticsMonth} dataType={'За этот месяц'}/></div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    statistics: state.statistics
});

export default connect(mapStateToProps)(Statistics);