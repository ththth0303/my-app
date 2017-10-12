import React from 'react';

import './item.scss';

export default class App extends React.Component {
    render () {
        return (
            <li>
                <div className="chat-img"><img src="../assets/images/users/1.jpg" alt="user" /></div>
                <div className="chat-content">
                <h5>James Anderson</h5>
                <div className="box bg-light-info">Lorem Ipsum is simply dummy text of the printing & type setting industry.</div>
                </div>
                <div className="chat-time">10:56 am</div>
            </li>
        )
    }
}
