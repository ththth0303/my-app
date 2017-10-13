import React from 'react';
import ListMessage from '../message-list';
import Input from '../input';

import './message-content.scss';


export default class App extends React.Component {

    render () {
        return (
           <div className="chat-right col-md-9">
                <div className="chat-main-header">
                    <div className="">
                        <h3 className="box-title">Chat Message</h3>
                    </div>
                </div>
                <ListMessage messages={this.props.messages}/>
                <Input sendMessage={this.props.sendMessage}/>
            </div>
        )
    }
}
