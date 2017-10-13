import React from 'react';

export default class App extends React.Component {
    render () {
        return (
            <li className="user">
                <a href="javascript:void(0)">
                    <img src="http://thuvienhinhanh.net/wp-content/uploads/2016/05/anh-avatar-dep-den-chat-cap-cho-facebook-tuong-doc-dao-nhat1.jpg" alt="user-img" className="img-circle" />
                    <div className="name">
                        <span>{this.props.user.Name}</span><br></br>
                        <small className="text-success">online</small>
                    </div>
                </a>
            </li>
        )
    }
}
