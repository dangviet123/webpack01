import React from 'react';
import {Route} from 'react-router-dom';
import PubicLayoutComponent  from '../../../components/layouts/pubicLayout';

function PublicLayout(props) {
    const { component: YouComponent,...remainProps } = props;
    return (
        <Route  {...remainProps} render={routeprops => {
            return (
                <PubicLayoutComponent>
                    <YouComponent {...routeprops} />
                </PubicLayoutComponent>
            )
         }} />
    )
}
export default PublicLayout;
