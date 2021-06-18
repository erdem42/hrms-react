import React from "react";

import { Link, Route, Switch } from "react-router-dom";
import Candidate from "../pages/users/Candidate";
import Employer from "../pages/users/Employer";
import Navi from "./Navi";
import { Grid, Menu, Label, Input } from "semantic-ui-react";
import JobPositionList from "../pages/JopPositionList";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import ResumeList from "../pages/ResumeList";
import { useState } from "react";
import AddJobAdvertisement from "../pages/adds/AddJobAdvertisement";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Menu vertical style={{ margin: "5em" }}>
              <Menu.Item
                name="inbox"
                // active={activeItem === 'inbox'}
                // onClick={this.handleItemClick}
              >
                <Label color="teal">1</Label>
                <Link to={`/jobads`}>Job ads</Link>
              </Menu.Item>

              <Menu.Item
                name="spam"
                // active={activeItem === 'spam'}
                // onClick={this.handleItemClick}
              >
                <Label>51</Label>
                <Link to={`/employers`}>Employers</Link>
              </Menu.Item>

              <Menu.Item
                name="updates"
                // active={activeItem === 'updates'}
                // onClick={this.handleItemClick}
              >
                <Label>1</Label>
                <Link to={`/candidates`}>Candidates</Link>
              </Menu.Item>
              <Menu.Item
                name="inbox"
                // active={activeItem === 'inbox'}
                // onClick={this.handleItemClick}
              >
                <Label color="teal">1</Label>
                <Link to={`/jobpositions`}>Job Positions</Link>
              </Menu.Item>
              <Menu.Item
                name="inbox"
                // active={activeItem === 'inbox'}
                // onClick={this.handleItemClick}
              >
                <Label color="teal">1</Label>
                <Link to={`/resumes`}>Resumes</Link>
              </Menu.Item>
              <Menu.Item>
                <Input icon="search" placeholder="Search mail..." />
              </Menu.Item>
            </Menu>
          </Grid.Column>

          <Grid.Column width={12}>
            <Route path="/candidates" component={Candidate} />
            <Route path="/employers" component={Employer} />
            <Route path="/jobads" component={JobAdvertisementList} />
            <Route path="/resumes" component={ResumeList} />
            <Route path="/jobpositions" component={JobPositionList} />
            <Route path="/addjobadvertisement" component={AddJobAdvertisement} />

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
