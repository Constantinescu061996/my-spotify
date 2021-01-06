import React ,{ Component }from "react";
import "./Login.css";

class  Login extends Component {
    constructor(props){
        super(props);
        let initialV = '';
        if (localStorage.getItem('clientId')) {
            initialV = localStorage.getItem('clientId');
        }
        this.state = {
        value: initialV
        }
    }
    
    
    onChangeHandler=(event) =>{
        const otherValue = event.target.value;
        
        this.setState({...this.state, value: otherValue});
        
    }
    onClickHendler = () =>{
        localStorage.setItem('clientId', this.state.value);
        const encodedClientId = encodeURIComponent(this.state.value);
        const encodedRedirectURI = encodeURIComponent('http://localhost:3000/callback');
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${encodedClientId}&redirect_uri=${encodedRedirectURI}&response_type=token`
    }
    
    render(){
    
    return(
    <div>
    
    <h1></h1>
        <input  className="login"
                type="text" placeholder="Client ID" 
                name="client-id" 
                value={this.state.value} 
                onChange={this.onChangeHandler}>
        </input>
        <button 
            className="btn-primary" type='button'
            onClick={this.onClickHendler}
        >
            Login
        </button>
    </div>
    )
    }
}

export default Login;