import React, {Component} from 'react';
import './NotFound.css'

class NotFound extends Component {
    render() {
        return(
            <section className="not-found">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>404</h1>
                            <p>Упс... Что-то пошло не так</p>
                            <a href="./" className="button button__success not-found__button">Вернуться к задачам</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default NotFound;