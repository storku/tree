//Rendering layer control (React Router)
import React from 'react';
//BrowserRouter tells React Router how to behave
//Route is a React Component that sets up a rule and displays the right component
import { BrowserRouter, Route } from 'react-router-dom';

//import all the components in
import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

//exact is equivalent to exact={true}, makes the path match exactly
//because <Header /> is above all the routes, it will always be visible
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
