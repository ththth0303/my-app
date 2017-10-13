import React from 'react';
import ListMessage from '../message-list';
import User from '../user';


export default class App extends React.Component {
    render () {
        return (
           <ul className="user-list clearfix">
                {this.props.users.map(item => 
                    <User key={item.id} user={item}/>
                )}
           </ul>
        )
    }
}
