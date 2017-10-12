import React from 'react';
import UserList from '../user-list';

import './user-content.scss';


export default class App extends React.Component {
    render () {
        return (
            <div className='chat-left-aside'>
                <div className="open-panel"><i className="ti-angle-right"></i></div>
                <div className="chat-left-inner">
                    <div className="form-material">
                        <input className="form-control p-20" type="text" placeholder="Search Contact" />
                    </div>
                    <UserList />
                </div>
            </div>
        )
    }
}