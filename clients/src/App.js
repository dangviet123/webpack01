import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { ROUTE_PUBLIC,ROUTE_LOGIN,ROUTE_ADMINCP } from '../src/routes';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
//import DateFnsUtils from '@date-io/date-fns';
import MomentUtils from "@date-io/moment";
import "moment/locale/vi";
import CssBaseline from '@material-ui/core/CssBaseline';
import PublicLayout from './pages/layouts/pubicLayout';
import LoginLayout from './pages/layouts/loginLayout';
import AdminLayout from './pages/layouts/dashboardLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ThemeProvider } from '@material-ui/core';
import theme from './Theme';

function App(props) {
  const renderRoutesPublic = (routes) => {
    let xHtml = null;
    xHtml = routes.map((route,index) => {
      const { exact,component,name,path } = route;
      return (<PublicLayout  key={index} exact={exact} path={path} component={component} name={name} />);
    });
    return xHtml;
  }

  const renderRoutesLogin= (routes) => {
    let xHtml = null;
    xHtml = routes.map((route,index) => {
      const { exact,component,name,path } = route;
      return (<LoginLayout key={index} exact={exact} path={path} component={component} name={name} />);
    });
    return xHtml;
  }

  const renderRoutesAdmin= (routes) => {
    let xHtml = null;
    xHtml = routes.map((route,index) => {
      const { exact,component,name,path } = route;
      return (<AdminLayout key={index} exact={exact} path={path} component={component} name={name}  />);
    });
    return xHtml;
  }

  return (
      <div className="app">
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={props.history}>
              <CssBaseline />
              <ToastContainer />
              <MuiPickersUtilsProvider utils={MomentUtils} locale="vi">
              <Suspense fallback={<div></div>}>
                <Switch >
                    {renderRoutesPublic(ROUTE_PUBLIC)}
                    {renderRoutesLogin(ROUTE_LOGIN)}
                    {renderRoutesAdmin(ROUTE_ADMINCP)}
                </Switch>
              </Suspense>
              </MuiPickersUtilsProvider>
            </ConnectedRouter>
        </ThemeProvider>
      </div>
  );
}
export default App;