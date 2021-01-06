import React from 'react';


const props ={
    href:``
}

function Category(){

    return <h4>Category</h4>
}

/*  
componentDidMount = () =>{
    const url='https://api.spotify.com';
    const token= getToken();
    const config ={
        method:'GET',
        headers: {
            'Authorization: `Bearer ${token}`
        }
        
    };
   fetch(url, config)
            .then(response => response.json())
            .then(data => {
                console.log(data.categories.items[0])
                
    
            })
            .catch(err => console.log('err'));
    }
}

*/
/*
render(){
    const props ={
        href:`https://api.spotify.com`,
        id:"toplist",
        name:'Top List'
    }
    return (
        <div>
            <h1>Categories {ths.state.categories.length</h1>
            <Category name = {props.name} 
        </div>
    );
}

*/

export default Category;
