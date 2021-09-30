import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import './User.css'

const User = (props) => {
    const{id,name,email,website}=props.user
    const url = `/user/${id}`
    const history= useHistory()
    const handleVisite =()=>{
        history.push(url)

    }
    return (
        <div className="user">
            <h4>{name}</h4>
            <h5>{email}</h5>
            <p>{website}</p>
            <Link to={url}>Viste here</Link>
            <br />
            <button onClick={handleVisite}>Visite another</button>
            
        </div>
    );
};

export default User;