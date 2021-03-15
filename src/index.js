import React from 'react';
import ReactDOM from 'react-dom';

import Signup from "./signup";
import Signin from "./signin";

import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from "react-router-dom";

class Cq extends React.Component {
	render() {
		return (
			<>
            <Link to="/signup"><p>Sign Up</p></Link>
            <Link to="/signin"><p>Sign In</p></Link>

            <Switch>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/signin" component={Signin}/>
            </Switch>
            </>
		)
	}
}

ReactDOM.render(
    <BrowserRouter>
	<Cq />,
    </BrowserRouter>,
	document.getElementById('root')
);
