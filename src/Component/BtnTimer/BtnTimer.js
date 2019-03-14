import React, {Component} from 'react';
import {connect} from 'react-redux'
import {authorization} from "../../action/authorization";
import {authorizationError} from "../../action/authorization/authorizationError";
import {tasksListStop, tasksListPlay, tasksListPause} from "../../action/tasks/tasksList";
import Timer from 'react-compound-timer';
import TaskList from "../TaskList/TaskList";
import './BtnTimer.css'

const TimeTask = ({time, timeStart}) => {
  let t = ((time / 1000) * 0.0277777777777778) / 100;
  t = t + timeStart;
  t = t.toFixed(2);
  return (
    <span>{t}</span>
  )
};


class BtnTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePLay: {},
      timeStop: {},
      timeDiff: {}
    };
  }


  onPlay = () => {
    this.props.taskPlay(this.props.task.id);
  };

  onPause = () => {
    this.props.taskPause(this.props.task.id);
  };

  onStop = () => {
    this.props.taskStop(this.props.task.id);
  };

  render() {
    const {play, pause, stop, spent_hours} = this.props.task;

    return (
      <Timer initialTime={0}
             lastUnit="h"
             startImmediately={false}
             onStart={() => this.onPlay()}
             onPause={() => this.onPause()}
             onStop={() => this.onStop()}
      >
        {({start, pause, stop, timerState, getTime}) => (
          <div className="exercise__tracker">
            <div className="exercise__icons">
              <svg onClick={start}
                   className={timerState === 'PAUSED' ? 'icon icon-play pause' : 'icon icon-play'}
                   hidden={timerState === 'PLAYING'}>
                <use xlinkHref="#icon-play"/>
              </svg>
              <svg onClick={pause}
                   className="icon icon-pause"
                   hidden={timerState === 'INITED' || timerState === 'PAUSED' || timerState === 'STOPPED'}>
                <use xlinkHref="#icon-pause"/>
              </svg>

              <div onClick={timerState === 'INITED' ? () => {} : stop}
                   className={timerState === 'INITED' ? 'disabled' : ''}>
                <svg className='icon icon-stop'>
                  <use xlinkHref="#icon-stop"/>
                </svg>
              </div>
            </div>
            <span className={timerState !== 'PLAYING' ? 'exercise__time disabled' : 'exercise__time'}>
                    <TimeTask timeStart={spent_hours} time={getTime()}/>
                    <span className="popup"><Timer.Hours/>&nbsp;:&nbsp;<Timer.Minutes/>&nbsp;:&nbsp;<Timer.Seconds/></span>
            </span>
          </div>
        )}
      </Timer>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => (
  {
    taskPlay: data => dispatch(tasksListPlay(data)),
    taskPause: data => dispatch(tasksListPause(data)),
    taskStop: data => dispatch(tasksListStop(data)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(BtnTimer);