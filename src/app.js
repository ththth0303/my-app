import React from 'react';
import MessageContent from 'components/chat/message-content';
import UserContent from 'components/chat/user-content';

import './app.scss';

export default class App extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="card m-b-0">
                    <div className="chat-main-box">
                        <UserContent />
                        <MessageContent />
                    </div>
                </div>
            </div>
        )
    }
}
