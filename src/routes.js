import React from "react";
import {Route ,IndexRoute} from "react-router";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import App from "./components/App";
import CoursePage from "./components/course/CoursePage";

export default (
    <Route path="/" component={App}> 
    <IndexRoute component={HomePage}> </IndexRoute>
    <Route path="about" component={AboutPage}> </Route>
    <Route path="course" component={CoursePage}> </Route>
    </Route>
)