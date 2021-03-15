import React from 'react';

import "./style.css";

export default class Signin extends React.Component{
    render()
    {
        return(
            <>
            <div class="container2">
             
             <h1 class="heading">SignIN</h1>
             <form>
             <label class="lbl">Username</label><br/>
             <input type="text" class="username" placeholder="Enter Username"/>
             <br/>
             <label class="lbl">Password</label><br/>
             <input type="password" class="pass" placeholder="Enter Password"/>
             <br/>
             <br/>
             <br/>
             <button class="btn">Sign In</button>
             </form>
            </div>
            </>
        )
    }
}
