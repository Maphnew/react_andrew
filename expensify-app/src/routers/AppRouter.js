import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboard'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'
import HelpPage from '../components/Help'
import EditExpensePage from '../components/EditExpensePage'
import AddExpensePage from '../components/AddExpensePage'


// Create 6 new files for the 6 components
// setup imports, component, default export
// import into AppRouter so they can be used

const AppRouter = () => (
    <BrowserRouter>
        <dev>
            <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage} />
        </Switch>
        </dev>
    </BrowserRouter>
);

export default AppRouter;