import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';


class Callback extends Component {
    componentDidMount() {

    

        
        const hash = this.props.location ? this.props.location.hash : '';
        if (hash) {
           
            const parsedString = queryString.parse(hash);
            

            const token = {
                token: parsedString.access_token,
                expiration: new Date().getTime() + parsedString.expires_in * 1000 
            };
            
            localStorage.setItem('token', JSON.stringify(token));
        }
      if(this.props.history){
        window.location.href = 'http://localhost:3000/';
      }
    }

    render() {
        return null;
    }
}
 
export default withRouter(Callback);