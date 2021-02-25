import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { startChecking } from '../actions/auth';
import LoginPage from '../components/auth/LoginPage';
import CalendarPage from '../components/calendar/CalendarPage';


const AppRouter = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( startChecking() )
  }, [dispatch])

  return ( 
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/" component={CalendarPage}/>

            <Redirect to="/" />
          </Switch>
        </div>
    </Router>
    </>
  );
}
 
export default AppRouter;