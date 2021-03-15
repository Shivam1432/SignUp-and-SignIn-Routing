import React from 'react';

import "./style.css";


export default class Signup extends React.Component{
    render()
    {
        return(
            <>
            <div class="container1">
             <h1 class="heading">SignUp</h1>
             <form>
             <label class="lbl">Username</label><br/>
             <input type="text" class="username" placeholder="Enter Username"/>
             <br/>
             <label class="lbl">Email</label><br/>
             <input type="email" class="email" placeholder="Enter your email"/>
             <br/>
             <label class="lbl">Password</label><br/>
             <input type="password" class="pass" placeholder="Enter Password"/>
             <br/>
             <br/>
             <br/>
             <button class="btn">Sign Up</button>
             </form>
            </div>
            </>
        )
    }
}
