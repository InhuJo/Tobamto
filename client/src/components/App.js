import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import MainPage from "./views/MainPage/MainPage.js"
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import InformationPage from './views/InformationPage/Information.js';
import ContactPage from './views/ContactPage/ContactPage.js';
import DiscussionMorePage from "./views/DiscussionPage/DiscussionMorePage";
import DiscussionApplyPage from "./views/DiscussionPage/DiscussionApplyPage";
import OngoingDiscussionPage from "./views/DiscussionPage/OngoingDiscussionPage";
import CompleteDiscussionPage from "./views/DiscussionPage/CompleteDiscussionPage";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import DeveloperPage from './views/InformationPage/Developer';
import DiscussionDetailPage from './views/DiscussionPage/DiscussionDetail';
import MyOpinionPage from './views/MyPage/MyOpinionPage';
import MyTitleListPage from './views/MyPage/MyTitleListPage';
import EditInfoPage from './views/MyPage/EditInfoPage';
import CompleteDiscussionDetailPage from './views/DiscussionPage/CompleteDiscussionDetail';
import DiscussionMoreDetailPage from './views/DiscussionPage/DiscussionMoreDetailPage';


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
          <Route exact path="/Developer" component={Auth(DeveloperPage, null)} />
          <Route exact path="/discussion/complete" component={Auth(CompleteDiscussionPage, null)} />
          <Route exact path="/information" component={Auth(InformationPage, null)} />
          <Route exact path="/discussion/more/:_id" component={Auth(DiscussionMoreDetailPage, null)} />
          <Route exact path="/discussion/more" component={Auth(DiscussionMorePage, null)} />
          <Route exact path="/contact" component={Auth(ContactPage, null)} />
          <Route exact path="/discussion/apply" component={Auth(DiscussionApplyPage, null)} />
          <Route exact path="/discussion/ongoing" component={Auth(OngoingDiscussionPage, null)} />
          <Route exact path="/discussion/detail" component={Auth(DiscussionDetailPage, null)} />
          <Route exact path="/discussion/completedetail" component={Auth(CompleteDiscussionDetailPage, null)} />
          <Route exact path="/mypage/opinion" component={Auth(MyOpinionPage, true)} />
          <Route exact path="/mypage/title" component={Auth(MyTitleListPage, true)} />
          <Route exact path="/mypage/edit" component={Auth(EditInfoPage, true)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
