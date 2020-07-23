import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import MainLayout from 'layouts/MainLayout'
import HomePage from 'pages/home/HomePage'
import AboutPage from 'pages/about/AboutPage'

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          
          {/* <Route component={NotFound} /> */}
        </Switch>
      </MainLayout>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
