import React, {Component} from 'react'
import BtnTimer from "../BtnTimer/BtnTimer";
import {addComment} from "../../Redmine/api";
import posed from 'react-pose';

import './TaskList.css'

const Form = posed.form({
  closed: {height: 0},
  open: {height: 'auto'}
});


class TaskList extends Component {
  state = {
    isForm: this.props.task.isForm,
    isLoadForm: false,
    btnSubmit: false,
    taskId: this.props.task.id
  };

  // updateForm = (value, time) => {
  //     this.setState({ isForm: value, time: time })
  // };

  render() {
    const task = this.props.task;
    return (
      <div className="exercise__row">
        <div className="exercise__information">
          <div className="exercise__block">
            <div className="exercise__date">{task.id}</div>
            <div className="exercise__project">{task.project.name}</div>
          </div>
          <div className="exercise__target">{task.subject}</div>
          {<BtnTimer task={task} updateForm={this.updateForm}/>}
        </div>
        <Form pose={task.isForm ? 'open' : 'closed'} className="exercise__form" onSubmit={this.onChangeForm} >
            <textarea className="exercise__comment" onChange={this.onTextForm}/>
            <button type="submit"
                    className={this.state.btnSubmit ? 'button button__success exercise__button btn-submit' : 'button button__success exercise__button'}>
              {this.state.isLoadForm ?
                <svg className="icon icon-load">
                  <use xlinkHref="#icon-load"/>
                </svg> :
                <svg className="icon icon-check">
                  <use xlinkHref="#icon-check"/>
                </svg>
              }
            </button>
        </Form>
      </div>
    )
  }

  onClickForm = (task, event) => {
    this.setState({isForm: !this.state.isForm})
  };

  onTextForm = (event) => {
    this.setState({formText: event.target.value})
  };

  // Доделать. Загрузка должна пропадать после успешного выполнения
  onChangeForm = (event, task = this.state.taskId, time) => {
    event.preventDefault();
    console.log(this.state.taskId);
    addComment(this.state.formText, task, time)
      .then(response => {
        console.log('load');
        this.setState({isLoadForm: true, btnSubmit: true});
        if (response.status === 200 || response.status === 201) {
          this.setState({isLoadForm: false});
        }
      })
    // this.setState({btnSubmit: true});
    // setTimeout(()=>{this.setState({isForm: !this.state.isForm, btnSubmit: false})}, 1000);
  }
}


export default TaskList