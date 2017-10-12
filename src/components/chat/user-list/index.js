import React from 'react';
import ListMessage from '../message-list';
import User from '../user';


export default class App extends React.Component {
    render () {
        return (
           <ul className="chatonline style-none ">
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
           </ul>
        )
    }
}
