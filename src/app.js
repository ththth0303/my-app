import React from 'react';
import MessageContent from 'components/chat/message-content';
import UserContent from 'components/chat/user-content';

import './app.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {id: 1, userId: 0, userName: 'th', message: 'Hello'},
                {id: 2, userId: 0, userName: 'th', message: 'Hello'},
                {id: 3, userId: 0, userName: 'th', message: 'Hello'},
                {id: 4, userId: 0, userName: 'th', message: 'Hello'},
                {id: 5, userId: 0, userName: 'th', message: 'Hello'},
                {id: 6, userId: 0, userName: 'th', message: 'Hello'}
            ],
            users:[
                {id:1, Name: 'Anh Thắng' },
                {id:2, Name: 'Anh 6969' },
                {id:3, Name: 'Anh 123' },
            ],
            user: 1,
            socket: null,
            typing: false
        }
    }

    sendMessage(content) {
        let messages = this.state.messages;
        let message = {
            id: new Date().getTime(),
            userId: this.state.user,
            userName: 'th',
            message: content.value
        }
        messages.push(message);
        this.setState({messages});
        content.value = '';
    }

    render () {
        return (
            <div className="container">
                <div className="card m-b-0">
                    <div className="chat-main-box">
                        <UserContent users={this.state.users}/>
                        <MessageContent  sendMessage={this.sendMessage.bind(this)} messages={this.state.messages}/>
                    </div>
                </div>
            </div>
        )
    }
}
