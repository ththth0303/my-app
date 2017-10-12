import React from 'react';
import Item from '../message';

import './message-list.scss'


export default class App extends React.Component {
    render () {
        return (
            <ul className="chat-list">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </ul>
        )
    }
}
