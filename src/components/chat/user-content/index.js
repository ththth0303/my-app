import React from 'react';
import UserList from '../user-list';

import './user-content.scss';


export default class App extends React.Component {
    render () {
        return (
            <div className='col-md-3 chat-left'>
                <div className="chat-left-inner">
                    <div className="form-material">
                        <input className="form-control p-20" type="text" placeholder="Search Contact" />
                    </div>
                    <UserList users={this.props.users}/>
                </div>
            </div>
        )
    }
}