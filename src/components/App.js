import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../css/App.scss";
import Header from "./Header";
import Search from "./Search";
import Subject from "./Subject";
import NotFound from "./NotFound";
import ImageView from "./ImageView";
import {subjects} from "../SubjectsTrack";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: {...subjects}
    };
  }
  render() {
    return (
      <BrowserRouter basename="/exambaba">
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route
            path="/subject/:subjectId"
            render={props => (
              <Subject subjects={this.state.subjects} {...props} />
            )}
          />
          <Route exact path="/images/:url" component={ImageView} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
