import React from 'react';
import ListMessage from '../message-list';
import Input from '../input';

import './message-content.scss';


export default class App extends React.Component {
    render () {
        return (
           <div className="chat-right-aside">
                <div className="chat-main-header">
                    <div className="p-20 b-b">
                        <h3 className="box-title">Chat Message</h3>
                    </div>
                </div>
                <ListMessage />
                <Input />
            </div>
        )
    }
}
