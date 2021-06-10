import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import MainPage from "./views/MainPage/MainPage.js"
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import InformationPage from './views/InformationPage/Information.js';
import ContactPage from './views/ContactPage/ContactPage.js';
import SubjectApplyPage from "./views/DiscussionPage/SubjectApplyPage";
import SubjectApplyPage2 from "./views/DiscussionPage/SubjectApplyPage2";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import InformationPage from './views/InformationPage/Information';
import DeveloperPage from './views/InformationPage/Developer';


//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(MainPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/Information" component={Auth(InformationPage, false)} />
          <Route exact path="/Developer" component={Auth(DeveloperPage, false)} />

          <Route exact path="/information" component={Auth(InformationPage, false)} />
          <Route exact path="/discussion/apply" component={Auth(SubjectApplyPage, false)} />
          <Route exact path="/contact" component={Auth(ContactPage, false)} />
          <Route exact path="/discussion/apply2" component={Auth(SubjectApplyPage2, false)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
