import React from 'react';
import {Route,useHistory} from 'react-router-dom';
import DashboardLayoutComponent  from '../../../components/layouts/dashboardLayout';

function PublicLayout(props) {
    const history = useHistory();
    const rememToken = localStorage.getItem("rememToken");
    if (!rememToken) {history.push("/admincp/login"); return false;}
    
    const { component: YouComponent,...remainProps } = props;
    return (
        <Route {...remainProps} render={routeprops => {
            return (
                <DashboardLayoutComponent>
                    <YouComponent {...routeprops} />
                </DashboardLayoutComponent>
            )
         }} />
    )
}
export default PublicLayout;
