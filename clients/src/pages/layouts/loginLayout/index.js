import React from 'react';
import {Route} from 'react-router-dom';

function LoginLayout(props) {
    const { component: YouComponent,...remainProps } = props;
    return (
        <Route {...remainProps} render={routeprops => {
            return (<YouComponent {...routeprops} />)
         }} />
    )
}
export default LoginLayout;