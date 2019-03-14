import React, {Component} from 'react';
import './Home.css'
import TaskList from "../../Component/TaskList/TaskList";
import {createTasks, timeEntries} from "../../Redmine/api";
import DialTimer from "../../Component/DialTimer/DialTimer";
import {connect} from 'react-redux'
import {tasks} from '../../action/tasks'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnPlay: true,
        };
    }

    render() {
        const {tasksLoading, tasksList} = this.props.tasks;
        const tasks = tasksList.tasks ? tasksList.tasks : [];
        const {statisticsDay} = this.props.statistics;

        return (
            <section className="exercise">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 order-last order-lg-first">
                            {tasksLoading ?
                                <h2>Loading...</h2>
                             :
                                tasks.map((task, i) => {
                                        return (
                                            <TaskList task={task} key={i}/>
                                        )
                                    }
                                )
                            }
                        </div>
                        <div className="col-lg-3">
                            <div className="diagram-wrapper">
                                <DialTimer dates={statisticsDay} dataType={'За этот день'} dataIcon={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks,
    statistics: state.statistics
});

const mapDispatchToProps = (dispatch) => (
    {
        // fetchTasks: () => dispatch(tasks())
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);