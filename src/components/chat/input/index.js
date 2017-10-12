import React from 'react';

export default class App extends React.Component {
    render () {
        return (
           <div className="">
               <div className="">
                   <div className="">
                        <textarea placeholder="Type your message here" className="form-control b-0"></textarea>
                   </div>
                   <div className="text-right">
                        <button type="button" className="btn btn-info btn-circle btn-lg"><i className="fa fa-paper-plane-o"></i> </button>
                   </div>
               </div>
           </div>
        )
    }
}
